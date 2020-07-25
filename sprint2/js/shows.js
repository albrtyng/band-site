const showsArray = [
  {
    date: 'Mon Dec 17 2018',
    venue: 'Ronald Lane',
    location: 'San Francisco, CA',
  },
  {
    date: 'Tue Jul 18 2019',
    venue: 'Pier 3 East',
    location: 'San Francisco, CA',
  },
  {
    date: 'Fri Jul 22 2019',
    venue: 'View Lounge',
    location: 'San Francisco, CA',
  },
  {
    date: 'Sat Aug 12 2019',
    venue: 'Hyatt Agency',
    location: 'San Francisco, CA',
  },
  {
    date: 'Fri Sep 05 2019',
    venue: 'Moscow Center',
    location: 'San Francisco, CA',
  },
  {
    date: 'Wed Aug 11 2020',
    venue: 'Pres Club',
    location: 'San Francisco, CA',
  },
]

const createElement = (elementType, className, content = '', src = '') => {
  let element = document.createElement(elementType);
  let classList = className.split(' ');
  classList.forEach(className => {
    element.classList.add(className);
  });

  if (elementType === 'img' && src) {
    element.setAttribute('src', src);
  } else {
    element.innerText = content;
  }

  return element;
}

const generateShows = () => {
  const showContainer = document.querySelector('.shows__list');
  showContainer.innerHTML = '';
  showsArray.forEach(show => {
    const dateLabel = createElement('h3',
      'show-card__label', 'Date');
    const date = createElement('h3',
      'show-card__date', show.date);
    const venueLabel = createElement('h3',
      'show-card__label', 'Venue');
    const venue = createElement('p',
      'show-card__text', show.venue);
    const locationLabel = createElement('h3',
      'show-card__label', 'Location');
    const location = createElement('p',
      'show-card__text', show.location);
    const button = createElement('button',
      'btn btn--ticket', 'Buy Tickets');
  
    const showCard = createElement('div', 'show-card');
    
    showCard.appendChild(dateLabel);
    showCard.appendChild(date);
    showCard.appendChild(venueLabel);
    showCard.appendChild(venue);
    showCard.appendChild(locationLabel);
    showCard.appendChild(location);
    showCard.appendChild(button);

    showContainer.appendChild(showCard);
  });
}

document.addEventListener('DOMContentLoaded', generateShows);
