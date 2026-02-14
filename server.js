const express = require('express');
const app = express();
const port = 3000;

const users = {
  alice: { name: 'Alice', bio: 'Software Developer', favouriteColor: '#ADD2EB' },
  bob: { name: 'Bob', bio: 'Engineer', favouriteColor: '#8EACCD' },
  charlie: { name: 'Charlie', bio: 'Software Engineer', favouriteColor: '#FFB6C1' },
  david: { name: 'David', bio: 'UI Designer', favouriteColor: '#FFD700' },
  emma: { name: 'Emma', bio: 'Data Analyst', favouriteColor: '#90EE90' },
  frank: { name: 'Frank', bio: 'Cyber Security Analyst', favouriteColor: '#FFA07A' },
  grace: { name: 'Grace', bio: 'AI Engineer', favouriteColor: '#9370DB' },
  henry: { name: 'Henry', bio: 'Cloud Engineer', favouriteColor: '#40E0D0' },
  isabella: { name: 'Isabella', bio: 'Full Stack Developer', favouriteColor: '#FF69B4' },
  jack: { name: 'Jack', bio: 'Network Engineer', favouriteColor: '#CD5C5C' },
  kevin: { name: 'Kevin', bio: 'Database Administrator', favouriteColor: '#20B2AA' },
  lucy: { name: 'Lucy', bio: 'Machine Learning Engineer', favouriteColor: '#87CEFA' }
};

app.use(express.static('public'));

app.get('/users/:username', (req, res) => {
  const username = req.params.username;
  const userData = users[username];

  if (userData) {
    const htmlResponse = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>User Data</title>
    </head>
    <body style="background:${userData.favouriteColor}">
        <h1>${userData.name}</h1>
        <h2>${userData.bio}</h2>
        <a href="/">Back</a>
    </body>
    </html>
    `;
    res.send(htmlResponse);
  } else {
    res.send('User Not Found');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
