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

const generateShows = (mode = 'mobile') => {
  const showContainer = document.querySelector('.shows__list');
  showContainer.innerHTML = '';

  let dateLabel = venueLabel = locationLabel = null;
  if (mode === 'tablet' || mode === 'desktop') {
    const labels = createElement('div', 'labels');
    dateLabel = createElement('h3',
      'show-card__label show-card__label--date', 'Dates');
    venueLabel = createElement('h3',
      'show-card__label show-card__label--venue', 'Venue');
    locationLabel = createElement('h3',
      'show-card__label show-card__label--location', 'Location');

    labels.appendChild(dateLabel);
    labels.appendChild(venueLabel);
    labels.appendChild(locationLabel);

    showContainer.appendChild(labels);
  }

  showsArray.forEach(show => {
    if (mode === 'mobile') {
      dateLabel = createElement('h3',
        'show-card__label show-card__label--date', 'Date');
      venueLabel = createElement('h3',
        'show-card__label show-card__label--venue', 'Venue');
      locationLabel = createElement('h3',
        'show-card__label show-card__label--location', 'Location');
    }

    const date = createElement('h3',
      'show-card__date', show.date);
    const venue = createElement('p',
      'show-card__text', show.venue);
    const location = createElement('p',
      'show-card__text', show.location);
    const button = createElement('button',
      'btn btn--ticket', 'Buy Tickets');

    const showCard = createElement('div', 'show-card');

    if (dateLabel && mode === 'mobile') showCard.appendChild(dateLabel);
    showCard.appendChild(date);
    if (venueLabel && mode === 'mobile') showCard.appendChild(venueLabel);
    showCard.appendChild(venue);
    if (locationLabel && mode === 'mobile') showCard.appendChild(locationLabel);
    showCard.appendChild(location);
    showCard.appendChild(button);

    showContainer.appendChild(showCard);
  });
}

const mobile = window.matchMedia(
  ('(max-width: $tablet-break - 1)')
);

const tablet = window.matchMedia(
  '(min-width: 768px) and (max-width: 1199px)'
);

const desktop = window.matchMedia(
  '(min-width: 1200px) and (max-width: 1450px)'
)

mobile.addListener(screen => {
  if (screen.matches) {
    generateShows();
  }
});

tablet.addListener(screen => {
  if (screen.matches) {
    generateShows('tablet');
  }
});

desktop.addListener((screen) => {
  if (screen.matches) {
    generateShows('desktop');
  }
})

document.addEventListener('DOMContentLoaded', () => {
  if (tablet.matches) {
    generateShows('tablet');
  } else if (desktop.matches) {
    generateShows('desktop');
  } else {
    generateShows();
  }
});
