# Progressive Web Application: Text Editor

## Description

This project is a Progressive Web Application (PWA) designed as a browser-based text editor. The application works both online and offline, enabling users to write, save, and retrieve notes or code snippets seamlessly. It incorporates IndexedDB for data persistence and meets all PWA criteria for installability and offline functionality.

---

## Features

- **Offline Support**: Works without an internet connection.
- **Data Persistence**: Uses IndexedDB to store and retrieve data.
- **Service Worker**: Pre-caches static assets and pages for quick loading.
- **Installable**: Can be installed as a desktop or mobile app.
- **Modern Design**: Styled with a clean and user-friendly interface.
- **CodeMirror Integration**: Syntax-highlighted text editing.

---

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:rennancruz/text-editor.git
   ```

2. Navigate to the project directory:

   ```bash
   cd text-editor
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm run start
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## Usage

- **Editing Content**: Use the text editor to write notes or code snippets.
- **Saving Content**: Content is saved automatically to IndexedDB when the editor loses focus.
- **Offline Mode**: The application remains functional even without an internet connection.
- **Install the App**: Click the `Install` button in the navigation bar to add the app to your desktop or home screen.

---

## Technologies Used

- **Frontend**: JavaScript, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: IndexedDB (via `idb` library)
- **Build Tools**: Webpack, Babel
- **Service Worker**: Workbox
- **Code Editor**: CodeMirror

---

## Deployment

The application is deployed on [Render](https://render.com). Visit the live app here:
[Live Application](https://text-editor-g6s9.onrender.com/)

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add YourFeatureName"
   ```
4. Push the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Open a pull request.

---

## Questions

For any questions or issues, please open an issue on the [GitHub repository](https://github.com/rennancruz/text-editor).
