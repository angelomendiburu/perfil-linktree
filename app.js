const tourDates = [
    { date: '15 Nov 2024', city: 'Madrid, España', venue: 'Teatro Real' },
    { date: '18 Nov 2024', city: 'Barcelona, España', venue: 'Palau de la Música' },
    { date: '22 Nov 2024', city: 'Valencia, España', venue: 'Palau de les Arts' },
    { date: '25 Nov 2024', city: 'Sevilla, España', venue: 'Teatro de la Maestranza' }
];

const modal = document.getElementById('tourModal');
const btn = document.getElementById('tourDatesBtn');
const closeBtn = document.getElementById('closeModal');
const tourDatesContainer = document.getElementById('tourDates');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    tourDatesContainer.innerHTML = '';
    
    tourDates.forEach(tour => {
        const tourElement = document.createElement('div');
        tourElement.className = 'tour-date';
        tourElement.innerHTML = `
            <h3>${tour.city}</h3>
            <p>${tour.date}</p>
            <p>${tour.venue}</p>
        `;
        tourDatesContainer.appendChild(tourElement);
    });
    
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});