let requestURL = 'https://github.com/ecan5149/My-Language-Site/blob/main/WordsA1.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL)
request.responseType = 'json';
request.send();

request.onload = function() {
    const wordsA1 = request.response;
    showWordsA1(wordsA1);
}

function showWordsA1(obj) {
  const wordsA1 = obj['word'];
      
  for (let i = 0; i < wordsA1.length; i++) {
      const myList = document.createElement('ul');
      const myListItem = document.createElement('li');
      const myListLink = document.createElement('a');
        
      myList.appendChild(myListItem);
      myListItem.appendChild(myListLink);
      
      myListLink.textContent = wordsA1[i].word;
    }
}

