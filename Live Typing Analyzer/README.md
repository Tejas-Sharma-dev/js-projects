# Live Typing Analyzer ✍️

A sleek, real-time text analysis tool that provides instant feedback on your typing. This project focuses on high-performance DOM manipulation and fluid, responsive design.

## 🚀 Features
* **Live Statistics:** Instantly tracks word count, character counts (with and without spaces), and estimated reading time as you type.
* **Top Word Tracking:** Uses a frequency algorithm to identify and display your most used word in real-time.
* **Responsive UI:** A mobile-first design that adapts from large monitors to small smartphone screens using Flexbox and Media Queries.
* **Smart Formatting:** Includes logic to handle whitespace and non-word characters for accurate counting.

## 🛠️ Technical Stack
* **HTML5:** Semantic structure for a clean document outline.
* **CSS3:** Features CSS Variables (`:root`) for easy theme management and Flexbox for a dynamic, grid-based layout.
* **JavaScript (ES6+):** * `Map` objects for $O(1)$ average time complexity frequency tracking.
    * Regular Expressions (Regex) for robust text parsing.
    * Real-time event listeners for a "live" user experience.

## 🧠 Key Learnings
* **State Management:** Learned how to handle empty states and reset UI elements when the input is cleared.
* **Responsive Architecture:** Implemented `flex-wrap` and `calc()` to create a layout that shifts from a 4-column desktop view to a 2x2 or 1x1 mobile grid.
* **Performance:** Optimized frequency calculations to ensure the UI remains snappy even with large amounts of text.

## 🏁 Getting Started
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Tejas-Sharma-dev/js-projects/live-typing-analyzer.git](https://github.com/Tejas-Sharma-dev/js-projects/live-typing-analyzer.git)
    ```
2.  **Open the project:**
    Simply open `index.html` in your browser to start typing!

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).
