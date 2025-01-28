import { fetchContent, saveContent } from "./database";
import { header } from "./header";

export default class TextEditor {
  constructor() {
    const localStorageData = localStorage.getItem("editorContent");

    // Ensure CodeMirror is loaded
    if (typeof CodeMirror === "undefined") {
      throw new Error("CodeMirror library is not loaded");
    }

    // Initialize CodeMirror editor
    this.editor = CodeMirror(document.querySelector("#main"), {
      value: "",
      mode: "javascript",
      theme: "monokai",
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    // Load content into the editor
    fetchContent().then((dbContent) => {
      console.info("Loaded content from IndexedDB into the editor.");
      this.editor.setValue(dbContent || localStorageData || header);
    });

    // Save content to localStorage on editor changes
    this.editor.on("change", () => {
      localStorage.setItem("editorContent", this.editor.getValue());
    });

    // Save content to IndexedDB when the editor loses focus
    this.editor.on("blur", () => {
      console.log("Editor lost focus, saving content to IndexedDB.");
      saveContent(localStorage.getItem("editorContent"));
    });
  }
}
