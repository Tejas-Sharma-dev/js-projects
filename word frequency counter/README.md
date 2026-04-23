# Word Frequency Counter ([link](https://wordsfrequencycount.netlify.app/))

A clean, responsive web application designed to analyze text and identify the most frequently occurring words. This project was built to practice efficient DOM manipulation, JavaScript data structures, and modern CSS layout principles.

## 🚀 Features
* **Text Analysis:** Instantly calculates the frequency of words from any provided text input.
* **Automated Sorting:** Displays results in descending order, highlighting the most frequent words at the top.
* **Responsive Design:** A mobile-friendly interface that adapts to various screen sizes using fluid layouts and Media Queries.
* **State Management:** Includes a reset functionality to clear inputs and results for a fresh start.

## 🛠️ Technical Stack
* **HTML5:** Semantic structure for better accessibility and SEO.
* **CSS3:** Custom styling utilizing Flexbox and responsive units (`rem`, `max-width`) to ensure a consistent experience across devices.
* **JavaScript (ES6+):** Uses a `Map` object for efficient data storage and regular expressions for robust text parsing.

## 🧠 Key Learnings
* **Efficient Data Handling:** Implementing a `Map` (Hash Map) to track word counts with optimized performance.
* **Responsive Architecture:** Moving away from fixed pixel widths to fluid percentages and `max-width` constraints to support both desktop and mobile users.
* **UX/UI Flow:** Managing application state (like the `analyzeBtnFlag`) to prevent UI clutter and guide the user through the "Analyze -> Reset" workflow.
