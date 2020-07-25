const commentsArray = [
  {
    author: 'Micheal Lyons',
    timestamp: '12/18/2018',
    text: 'They BLEW the ROOF off at their last show, once\
    everyone started figuring out they were going.\
    This is still simply the greatest opening of a\
    concert I have EVER witnessed.',
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
    author: 'Theodore Duncan',
    timestamp: '11/15/2018',
    text: 'How can someone be so good!!! You can tell he\
    lives for this and loves to do it every day. Everytime\
    I see him I feel instantly happy! He’s definitely my\
    favorite ever!',
    img: ''
  }
]

const createElement = (elementType, className, content = '', src = '') => {
  let element = document.createElement(elementType);
  element.classList.add(className);

  if (elementType === 'img' && src) {
    element.setAttribute('src', src);
  } else {
    element.innerText = content;
  }

  return element;
}

const generateComments = () => {
  const commentContainer = document.querySelector('.comments__list');
  commentContainer.innerHTML = '';
  commentsArray.forEach(comment => {
    const author = createElement('div',
      'comment__author', comment.author);
    const timestamp = createElement('h3',
      'comment__timestamp', comment.timestamp);
    const text = createElement('p',
      'comment__text', comment.text);
    const img = createElement('img',
      'comment__pfp', src=comment.img);
  
    const commentCard = createElement('div', 'comment');
  
    commentCard.appendChild(img);
    commentCard.appendChild(author);
    commentCard.appendChild(timestamp);
    commentCard.appendChild(text);
  
    commentContainer.appendChild(commentCard);
  });
}

document.addEventListener('DOMContentLoaded', generateComments);

const commentForm = document.querySelector('.com-form');
commentForm.addEventListener('submit', e => {
  e.preventDefault();

  commentsArray.unshift({
    author: e.target.name.value,
    timestamp: '12/18/2018',
    text: e.target.comment.value,
    img: ''
  });

  generateComments();
})
