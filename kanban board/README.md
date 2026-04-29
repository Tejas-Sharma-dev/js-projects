# Simple Kanban Board 📋

A functional, desktop-optimized Kanban board built with Pure Vanilla JavaScript. This project demonstrates efficient DOM manipulation, state management, and the implementation of the Native HTML5 Drag and Drop API.

## 🚀 Features
* **Dynamic Task Management:** Easily add new tasks via a dedicated input panel.
* **Native Drag & Drop:** Seamlessly move tasks between 'To Do', 'In Progress', and 'Done' columns.
* **Real-time Task Counters:** Automatic updates for the number of tasks in each stage of the workflow.
* **State-Specific Styling:** Task cards dynamically change color based on their current status (To Do, In Progress, or Done).
* **Intuitive UX:** Support for keyboard shortcuts, allowing tasks to be added by pressing the 'Enter' key.

## 🛠️ Technical Stack
* **HTML5:** Semantic structure including a dedicated sidebar for user inputs.
* **CSS3:** Custom properties (CSS Variables) for theme management and a robust Flexbox layout.
* **JavaScript (ES6+):** * **Drag and Drop API:** Utilizing `dragstart`, `dragover`, and `drop` events.
    * **DOM Manipulation:** Dynamic creation of task nodes and real-time attribute updates.
    * **Event Handling:** Centralized logic for managing task transitions and UI updates.

## 🧠 Key Learnings
* **Workflow Logic:** Implementing a switch-case state machine to handle task transitions between different panels.
* **Node Management:** Managing global references to dragged elements to ensure efficient DOM re-parenting during a drop event.
* **Desktop Layout Design:** Creating a fixed-height workspace with independent scrolling containers for a professional desktop application feel.

## 🏁 Getting Started
1.  **Clone the repository**
    
2.  **Run the Project:**
    Open `index.html` in any modern desktop browser to start managing your tasks.

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).
