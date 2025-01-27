import { openDB } from "idb";

// Initialize the database
const initializeDatabase = async () => {
  openDB("textEditorDB", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("editorContent")) {
        db.createObjectStore("editorContent", {
          keyPath: "id",
          autoIncrement: true,
        });
        console.log("Database and object store created.");
      } else {
        console.log("Database already exists.");
      }
    },
  });
};

// Save content to the database
export const saveContent = async (content) => {
  console.log("Saving content to the database...");
  try {
    const db = await openDB("textEditorDB", 1);
    const transaction = db.transaction("editorContent", "readwrite");
    const store = transaction.objectStore("editorContent");
    const request = store.put({ id: 1, data: content });
    const result = await request;
    console.log("Content saved:", result);
  } catch (error) {
    console.error("Error saving content:", error);
  }
};

// Retrieve content from the database
export const fetchContent = async () => {
  console.log("Fetching content from the database...");
  try {
    const db = await openDB("textEditorDB", 1);
    const transaction = db.transaction("editorContent", "readonly");
    const store = transaction.objectStore("editorContent");
    const request = store.get(1);
    const result = await request;
    console.log("Content retrieved:", result?.data || "No content found.");
    return result?.data;
  } catch (error) {
    console.error("Error fetching content:", error);
    return null;
  }
};

// Initialize the database on load
initializeDatabase();
