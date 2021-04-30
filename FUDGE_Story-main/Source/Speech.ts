namespace FudgeStory {
  import ƒ = FudgeCore;

  /**
   * Displays the phrases told by the characters or the narrator
   */
  export class Speech {
    public static signalForwardTicker = Progress.defineSignal([EVENT.KEYUP, EVENT.POINTERDOWN]);
    public static signalNext = Progress.defineSignal([EVENT.KEYUP, EVENT.POINTERDOWN]);

    private static element: HTMLDivElement;
    private static time = new ƒ.Time();
    private static delayLetter: number = 50;
    private static delayParagraph: number = 1000;


    private static get div(): HTMLDivElement {
      Speech.element = Speech.element || document.querySelector("speech");
      return Speech.element;
    }

    /**
     * Displays the [[Character]]s name and the given text at once
     */
    public static set(_character: Object, _text: string): void {
      Speech.show();
      let name: string = _character ? Reflect.get(_character, "name") : "";
      let nameTag: HTMLSpanElement = Speech.div.querySelector("name");
      let textTag: HTMLElement = Speech.div.querySelector("content");
      nameTag.innerHTML = "";

      Speech.div.className = name;

      if (name) {
        nameTag.innerHTML = name;
      }

      textTag.innerHTML = _text;
    }

    /**
     * Displays the [[Character]]s name and slowly writes the text letter by letter
     */
    public static async tell(_character: Object, _text: string, _waitForSignalNext: boolean = true): Promise<void> {
      Speech.show();
      let done: boolean = false;
      Speech.set(_character, "");
      let buffer: HTMLDivElement = document.createElement("div");
      let textTag: HTMLElement = Speech.div.querySelector("content");
      buffer.innerHTML = _text;

      let prmTick: Promise<void> = this.copyByLetter(buffer, textTag);
      let prmInput: Promise<Event> = new Promise(async (_resolve) => {
        await Speech.signalForwardTicker();
        if (done)
          return;
        console.log("Ticker interrupted");
        Speech.time.clearAllTimers();
        Speech.set(_character, _text);
        _resolve(null);
      });

      await Promise.race([prmTick, prmInput]);
      done = true;

      if (!_waitForSignalNext)
        return;

      await Speech.signalNext();
    }

    /**
     * Defines the pauses used by ticker between letters and before a paragraph in milliseconds
     */
    public static setTickerDelays(_letter: number, _paragraph: number = 1000): void {
      Speech.delayLetter = _letter;
      Speech.delayParagraph = _paragraph;
    }

    /**
     * Clears the speech
     */
    public static clear(): void {
      let nameTag: HTMLSpanElement = Speech.div.querySelector("name");
      let textTag: HTMLElement = Speech.div.querySelector("content");
      nameTag.innerHTML = "";
      Speech.div.className = "";
      textTag.innerHTML = "";
    }

    /**
     * Hides the speech
     */
    public static hide(): void {
      Speech.div.style.visibility = "hidden";
    }
    /**
     * Shows the speech
     */
    public static show(): void {
      Speech.div.style.visibility = "visible";
    }

    /**
     * Displays an input field to be filled by the user and returns the input
     */
    public static async getInput(): Promise<string> {
      return new Promise((_resolve) => {
        let textTag: HTMLElement = Speech.div.querySelector("content");
        let input: HTMLInputElement = document.createElement("input");
        textTag.appendChild(input);

        let hndEvent = (_event: Event): void => {
          input.removeEventListener("change", hndEvent);
          input.disabled = true;
          _resolve(input.value);
        };

        input.addEventListener("change", hndEvent);
        input.focus();
      });
    }

    /**
     * Returns a serialization-object holding the current state of the speech
     */
    public static serialize(): ƒ.Serialization {
      let serialization: ƒ.Serialization = {
        delayLetter: Speech.delayLetter,
        delayParagraph: Speech.delayParagraph,
        visibility: Speech.div.style.visibility,
        name: Speech.div.querySelector("name").innerHTML.replaceAll("<", "&lt;").replaceAll(">", "&gt;"),
        text: Speech.div.querySelector("content").innerHTML.replaceAll("<", "&lt;").replaceAll(">", "&gt;")
      };
      return serialization;
    }

    /**
     * Restores the state of the speech given with the serialization-object
     */
    public static deserialize(_serialization: ƒ.Serialization): void {
      Speech.setTickerDelays(_serialization.delayLetter, _serialization.delayParagraph);
      _serialization.visibility ? Speech.show() : Speech.hide();
      Speech.div.querySelector("name").innerHTML = _serialization.name.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
      Speech.div.querySelector("content").innerHTML = _serialization.text.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
    }

    private static async copyByLetter(_from: HTMLElement, _to: HTMLElement): Promise<void> {
      for (let child of _from.childNodes as NodeListOf<HTMLElement>) {
        // console.log(child.nodeType, child instanceof HTMLParagraphElement, child.hasChildNodes(), child);
        if (child.nodeType == Node.TEXT_NODE) {
          let text: string = child.textContent!;
          for (let i: number = 0; i < text.length; i++) {
            _to.innerHTML += text[i];
            await Speech.time.delay(Speech.delayLetter);
          }
        }
        else {
          let clone: HTMLElement = <HTMLElement>child.cloneNode(false);
          _to.appendChild(clone);
          if (child instanceof HTMLParagraphElement)
            await Speech.time.delay(Speech.delayParagraph);
          if (child.hasChildNodes())
            await Speech.copyByLetter(child, clone);
        }
      }
    }
  }
}