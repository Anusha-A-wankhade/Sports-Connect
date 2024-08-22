document.addEventListener('DOMContentLoaded', function() {
    const navLinks = {
        cricket: document.getElementById('cricketFixturesLink'),
        football: document.getElementById('footballFixturesLink'),
        volleyball: document.getElementById('volleyballFixturesLink'),
        basketball: document.getElementById('basketballFixturesLink'),
        kabaddi: document.getElementById('kabaddiFixturesLink')
    };

    for (const [sport, link] of Object.entries(navLinks)) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            fetchFixtures(sport);
        });
    }
});

function fetchFixtures(sport) {
    const content = document.getElementById('content');
    content.innerHTML = '<p>Loading fixtures...</p>'; // Show loading text

    fetch(`/api/fixtures/${sport}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            createSportSection(sport, data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('content').innerHTML = '<p>Failed to load fixtures. Please try again later.</p>';
        });
}

function createSportSection(sport, fixtures) {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    const section = document.createElement('div');
    section.className = 'sport-section';

    const heading = document.createElement('h2');
    heading.textContent = sport.charAt(0).toUpperCase() + sport.slice(1) + ' Fixtures';
    section.appendChild(heading);

    if (fixtures.length === 0) {
        section.innerHTML += '<p>No fixtures available.</p>';
    } else {
        fixtures.forEach(fixture => {
            const fixtureDiv = document.createElement('div');
            fixtureDiv.className = 'fixture-details';

            let scoreDetails = '';
            if (sport === 'cricket') {
                scoreDetails = fixture.score 
                    ? `<p class="fixture-score"><strong>Score:</strong> ${fixture.score}</p>` 
                    : `<p class="fixture-score"><strong>Score:</strong> N/A</p>`;
            } else {
                scoreDetails = `<p class="fixture-score"><strong>Score:</strong> ${fixture.score || 'N/A'}</p>`;
            }

            fixtureDiv.innerHTML = `
                <div class="fixture-header">
                    <span class="fixture-date">${new Date(fixture.matchDate).toLocaleDateString()}</span>
                    <span class="fixture-type">${fixture.matchType}</span>
                </div>
                <div class="fixture-teams">
                    <span class="team team-1">${fixture.team1}</span>
                    <span class="team team-2">${fixture.team2}</span>
                </div>
                ${scoreDetails}
            `;

            section.appendChild(fixtureDiv);
        });
    }

    content.appendChild(section);
}
