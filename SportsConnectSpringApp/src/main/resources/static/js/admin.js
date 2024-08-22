document.getElementById('matchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const match = {
        sport: document.getElementById('sport').value,
        matchId: document.getElementById('matchId').value,
        team1: document.getElementById('team1').value,
        team2: document.getElementById('team2').value,
        matchDate: document.getElementById('matchDate').value,
        createTime: document.getElementById('createTime').value,
        updateTime: document.getElementById('updateTime').value,
        score: document.getElementById('score').value,
        matchType: document.getElementById('matchType').value
    };

    fetch('/api/matches/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(match)
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('message').innerText = data;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').innerText = 'Failed to save match';
    });
});
