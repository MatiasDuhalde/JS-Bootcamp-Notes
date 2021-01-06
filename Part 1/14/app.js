const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

function generateTable(data, myTeamName) {
  const ulParent = document.createElement('ul')
  for (let game of data) {
    // Initialize li
    const {homeTeam, awayTeam} = game;
    const newElement = document.createElement('li');
    // Add team names
    newElement.innerHTML = `${awayTeam.team} @ ${homeTeam.team} `;
    // Add scores
    let awayWins = `<b>${awayTeam.points}</b>-${homeTeam.points}`;
    let homeWins = `${awayTeam.points}-<b>${homeTeam.points}</b>`;
    newElement.innerHTML += awayTeam.isWinner ? awayWins : homeWins;
    // Add background color
    if ([awayTeam.team, homeTeam.team].includes(myTeamName)) {
      const myTeam = homeTeam.team === myTeamName ? homeTeam : awayTeam;
      newElement.classList.add(myTeam.isWinner ? "win" : "loss");
    }
    ulParent.appendChild(newElement);
  }
  return ulParent;
}

const gSection = document.querySelector("#gs");
const hSection = document.querySelector("#hr");
const chart1 = generateTable(warriorsGames, "Golden State");
const chart2 = generateTable(warriorsGames, "Houston");
gSection.appendChild(chart1);
hSection.appendChild(chart2);

