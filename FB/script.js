
var database = [
	{
		username: 'andrei',
		password: 'fart'
	},

	{
		username: 'andrew',
		password: 'feet'
	},

	{
		username: 'andy',
		password: 'hipasfuck'
	},

	{
		username: 'drew',
		password: 'poo'
	}
];

var newsfeed = [
	{
		username: 'bobby',
		timeline: 'So tired from all the ass ramming!'
	},
	{
		username: 'sally',
		timeline: 'So sore from all the pushing!'
	},

	{
		username: 'tedward',
		timeline: 'I think I just saw aliens pick up a dog'
	},

	{
		username: 'sam',
		timeline: 'Found a lost puppy'
	},

	{
		username: 'cho',
		timeline: 'Lost our daily special, need help locating for dinner'
	},
]

var userNamePrompt = prompt('Give me dat username: ');
var passwordPrompt = prompt('Give me dat password too: ');

function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if (database[i].username === userNamePrompt &&
			 database[i].password === passwordPrompt) {
			return true;
		} 
	}
	return false;
}

function signIn(user, pass) {
	// console.log(isUserValid(userNamePrompt, passwordPrompt));
	if (isUserValid(userNamePrompt, passwordPrompt)) {
		alert("Successful sign in completed");
		console.log(newsfeed);
	} else {
		alert("Incorrect creds");
	}
	
}

signIn(userNamePrompt, passwordPrompt);

