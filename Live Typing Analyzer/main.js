const userTextAreaELe = document.getElementById("user-text");
const statsContainerEle = document.getElementById("stats-container");

const topWordSpan = document.getElementById("top-word");

const wordCountSpan = statsContainerEle.querySelector("#word-count-span");
const charCountWithSpaceSpan = statsContainerEle.querySelector(
    "#char-count-ws-span",
);
const charCountWithoutSpaceSpan = statsContainerEle.querySelector(
    "#char-count-wos-span",
);
const readingTimeSpan = statsContainerEle.querySelector("#read-time-span");

// calculate word count
// calculate character count (with & without spaces)
// most frequent word
// reading time = ()

function calculateReadingTime(wordsCount) {
    const readingTime = Math.floor(wordsCount / 200);
    return readingTime;
}

function calculateTopWord(wordsList) {
    if (wordsList.length === 0) {
        return ["", 0];
    }

    const wordMap = new Map();

    //initializing Map with data
    for (const word of wordsList) {
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }

    // sort based on entries
    const sortedArr = Array.from(wordMap).sort((a, b) => {
        return b[1] - a[1];
    });

    // only returing the word arr with most frequency 
    return sortedArr[0];
}

userTextAreaELe.addEventListener("input", () => {
    // extract text from user textarea
    let userText = userTextAreaELe.value;

    // holds char count with spce
    let rawCharLength = userText.length;

    let totalSpace = (userText.match(/\s/g) || []).length || 0;

    // holds char count without space
    let charCountWithOutSpace = rawCharLength - totalSpace;

    const wordList = userText.split(/\W/g).filter((word) => word.length > 0);

    // holds world count
    let totalWordCount = wordList.length;

    let readingTimeInMinutes = calculateReadingTime(totalWordCount);

    // displaying the word count
    wordCountSpan.textContent = totalWordCount;

    // displaying char count with space
    charCountWithSpaceSpan.textContent = rawCharLength;

    // displaying char count without space
    charCountWithoutSpaceSpan.textContent = charCountWithOutSpace;

    // displaying reading time in minutes
    readingTimeSpan.textContent =
        (readingTimeInMinutes > 0 ? readingTimeInMinutes : " < 1 ") + "min";

    // displays most occuring word
    const topWordArr = calculateTopWord(wordList);

    // using Destructuring to extract values
    const [topWord ,topWordCount] = topWordArr;

    if (topWord === "" && topWordCount === 0) {
        topWordSpan.textContent = ``;
    } else {
        topWordSpan.textContent = `${topWordArr[0]} (${topWordArr[1]}x)`;
    }
});
