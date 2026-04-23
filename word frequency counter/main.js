const userTextInputEle = document.getElementById('user-text');
const analyseBtn = document.getElementById('analyzeBtn');
const resetBtn = document.getElementById('resetBtn');


// clears the user text and clears the output list
resetBtn.addEventListener('click', ()=>{
    const outputContainerELe = document.getElementById('output-box');
    const wordListEle = outputContainerELe.querySelector('.word-list');
    userTextInputEle.value = '';
    wordListEle.innerHTML = '';
    outputContainerELe.style.display = 'none';
})


// performs word frequency operation
analyseBtn.addEventListener('click', ()=>{
    // fetch content of the user text
    const userText = userTextInputEle.value;
    const outputContainerELe = document.getElementById('output-box');
    const wordListEle = outputContainerELe.querySelector('.word-list');
    const wordHashMap = new Map();

    // returns list of words, whose length is greater than one
    const wordArr = userText.split(/\W/).filter((word) => {
        if(word.length > 0){
            return word;
        }
    });

    // creates a hash map with key as word and value as frequency of the word
    for(const word of wordArr){
        wordHashMap.set(word, (wordHashMap.get(word) || 0) + 1);
    }

    // sorts array based on the frequency of the words in descending order
    const sortedMap = new Map([...wordHashMap.entries()].sort((a, b)=>{
        return b[1] - a[1];
    }));

    for(const [word, frequency] of sortedMap){
        let listEle = document.createElement('li');
        let spanEle = document.createElement('span');
        spanEle.innerText = `${word} repeated ${frequency} times`

        listEle.appendChild(spanEle);
        wordListEle.appendChild(listEle);
    }

    outputContainerELe.style.display = "block";
})
