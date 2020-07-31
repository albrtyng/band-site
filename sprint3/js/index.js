/*
  Creates HTML comment cards based off the above array
*/
const generateComments = () => {
  const commentContainer = document.querySelector('.comments__list');
  while (commentContainer.hasChildNodes()) { // wipe all comments and regenerate
    commentContainer.removeChild(commentContainer.lastChild);
  }

  axios.get(`https://project-1-api.herokuapp.com/comments?api_key=${API_KEY}`)
  .then(response => {
    const commentsArray = response.data;
    for (let i = commentsArray.length - 1; i >= 0; i--) {
      const author = createElement('div',
        ['comment__author'], commentsArray[i].name);
      const timestamp = createElement('h3',
        ['comment__timestamp'], new Date(commentsArray[i].timestamp).toLocaleDateString('en-ca'));
      const text = createElement('p',
        ['comment__text'], commentsArray[i].comment);
      const img = createElement('img',
        ['comment__pfp'], '', commentsArray[i].img);
    
      const commentCard = createElement('div', ['comment']);
    
      commentCard.appendChild(img);
      commentCard.appendChild(author);
      commentCard.appendChild(timestamp);
      commentCard.appendChild(text);
    
      commentContainer.appendChild(commentCard);
    }
  })
}

/*
  Run generateComments and addEventListener once we're
  able to query for the comment container
*/
document.addEventListener('DOMContentLoaded', () => {
  generateComments();

  const commentForm = document.querySelector('.com-form');
  commentForm.addEventListener('submit', e => {
    e.preventDefault(); // prevent refresh

    axios.post(
      `https://project-1-api.herokuapp.com/comments?api_key=${API_KEY}`,
      {
        name: e.target.name.value,
        comment: e.target.comment.value
      }
    )
    .then(response => {
      generateComments();
    }).catch(err => {
      console.log(err);
    })

    e.target.reset(); // Clear the comment after posting, but keep name
  });
});
