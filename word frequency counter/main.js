const userTextInputEle = document.getElementById("user-text");
const analyseBtn = document.getElementById("analyzeBtn");
const resetBtn = document.getElementById("resetBtn");
const outputContainerELe = document.getElementById("output-box");
const wordListEle = outputContainerELe.querySelector(".word-list");
let analyzeBtnFlag = false;

// clears the user text and clears the output list
resetBtn.addEventListener("click", () => {
    // clear user text input
    userTextInputEle.value = "";
    // clear output list
    wordListEle.innerHTML = "";
    outputContainerELe.style.display = "none";
    // reseting analyse flag
    analyzeBtnFlag = false;
});

// performs word frequency operation
analyseBtn.addEventListener("click", () => {

    if(analyzeBtnFlag){
        alert("Warning:: click 'Reset' button to continue.");
        return;
    }

    // fetch content of the user text and converts to lower case.
    const userText = userTextInputEle.value.toLowerCase();
    const wordHashMap = new Map();

    if(userText.length === 0){
        alert("Warning:: Please Input Text...");
        return;
    }

    // returns list of words, whose length is greater than one
    const wordArr = userText.split(/\W/).filter((word) => { return word.length > 0 });

    // creates a hash map with key as word and value as frequency of the word
    for (const word of wordArr) {
        wordHashMap.set(word, (wordHashMap.get(word) || 0) + 1);
    }

    // sorts array based on the frequency of the words in descending order
    const sortedMap = new Map(
        [...wordHashMap.entries()].sort((a, b) => {
            return b[1] - a[1];
        }),
    );

    for (const [word, frequency] of sortedMap) {
        let listEle = document.createElement("li");
        let spanEle = document.createElement("span");
        spanEle.innerText = `${word} repeated ${frequency} times`;

        listEle.appendChild(spanEle);
        wordListEle.appendChild(listEle);
    }

    // display the output container
    outputContainerELe.style.display = "block";
    // to avoid mupltple clicks on analyze button without resetting the input and output
    analyzeBtnFlag = true;
});
