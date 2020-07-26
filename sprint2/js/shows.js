/*
  The array of show objects
*/
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

/*
  Generate show cards based on the above array
  I could totally do all of this in CSS, but hardcoding a bunch of labels in HTML
  just to hide them in two of the three screen sizes didn't make sense to me.
  That's why I went ahead and used a loop and some conditions to generate the show
  content and labels dynamically.
*/
const generateShows = (mode = 'mobile') => {
  const showContainer = document.querySelector('.shows__list');
  showContainer.innerHTML = '';

  // Create labels for top of the list (tablet/desktop)
  let dateLabel = venueLabel = locationLabel = null;
  if (mode !== 'mobile') {
    const labels = createElement('div', 'labels');
    dateLabel = createElement('h3',
      'show-card__label', 'Dates');
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
    if (mode === 'mobile') { // Only create the inner labels when mobile
      dateLabel = createElement('h3',
        'show-card__label', 'Date');
      venueLabel = createElement('h3',
        'show-card__label show-card__label--venue', 'Venue');
      locationLabel = createElement('h3',
        'show-card__label show-card__label--location', 'Location');
    }

    // Create date, venue and location info regardless
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

// Queries media for screen size and generates shows accordingly
document.addEventListener('DOMContentLoaded', () => {
  if (tablet.matches) {
    generateShows('tablet');
  } else if (desktop.matches) {
    generateShows('desktop');
  } else {
    generateShows();
  }
});

// Add event listeners for the three screen sizes
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
});
