/*
  Comments are in reverse order so that new comments can be appended
  rather than wasting resources with unshift()
*/
const commentsArray = [
  {
    author: 'Theodore Duncan',
    timestamp: '11/15/2018',
    text: 'How can someone be so good!!! You can tell he\
    lives for this and loves to do it every day. Everytime\
    I see him I feel instantly happy! He’s definitely my\
    favorite ever!',
    img: ''
  },
  {
    author: 'Gary Wong',
    timestamp: '12/18/2018',
    text: 'Every time I see him shred I feel so motivated\
    to get off my couch and hop on my board. He’s so\
    talented! I wish I can ride like him one day so I\
    can really enjoy myself!',
    img: ''
  },
  {
    author: 'Micheal Lyons',
    timestamp: '12/18/2018',
    text: 'They BLEW the ROOF off at their last show, once\
    everyone started figuring out they were going.\
    This is still simply the greatest opening of a\
    concert I have EVER witnessed.',
    img: ''
  }
]

/*
  Creates HTML comment cards based off the above array
*/
const generateComments = () => {
  const commentContainer = document.querySelector('.comments__list');
  commentContainer.innerHTML = ''; // wipe all comments and regenerate

  for (let i = commentsArray.length - 1; i >= 0; i--) {
    const author = createElement('div',
      'comment__author', commentsArray[i].author);
    const timestamp = createElement('h3',
      'comment__timestamp', commentsArray[i].timestamp);
    const text = createElement('p',
      'comment__text', commentsArray[i].text);
    const img = createElement('img',
      'comment__pfp', '', commentsArray[i].img);
  
    const commentCard = createElement('div', 'comment');
  
    commentCard.appendChild(img);
    commentCard.appendChild(author);
    commentCard.appendChild(timestamp);
    commentCard.appendChild(text);
  
    commentContainer.appendChild(commentCard);
  }
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

    commentsArray.push({
      author: e.target.name.value,
      timestamp: getDateString(new Date()),
      text: e.target.comment.value,
      img: 'assets/Images/daniil.jpeg'
    });

    e.target.comment.value = ''; // Clear the comment after posting, but keep name
    generateComments();
  });
});
