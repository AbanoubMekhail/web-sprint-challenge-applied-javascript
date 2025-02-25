import axios from "axios";
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  
    
      
    const cardElem = document.createElement('div');
    const headLine = document.createElement('div');
    const Author = document.createElement('div');
    const imgContainer = document.createElement('div') ;
    const Img = document.createElement('img');
    const authorName = document.createElement('span');

    cardElem.classList.add('card');
    headLine.classList.add('headline');
    Author.classList.add('author');
    imgContainer.classList.add('img-container');
    
    headLine.textContent = article.headline;
    Img.src = article.authorPhoto;
    authorName.textContent = article.authorName;
    

    cardElem.appendChild(headLine);
    cardElem.appendChild(Author);
    Author.appendChild(imgContainer);
    imgContainer.appendChild(Img);
    Author.appendChild(authorName)

    cardElem.addEventListener('click',evt =>{
      console.log(headLine);
    

    
  });
  return cardElem;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get(`http://localhost:5001/api/articles`)
  .then(res => {
    const articlesObj = res.data.articles;
    console.log(articlesObj);
    // console.log(res);

    for (const property in articlesObj) {
      articlesObj[property].forEach(element => {
        console.log(element)
      const cardEl = Card(element);
      document.querySelector(selector).appendChild(cardEl);
      })
    }
    
  })
  .catch(err => {
    console.error(err);
  })

}

export { Card, cardAppender }
