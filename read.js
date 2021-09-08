// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyBxiSiA--wTbnIPUGhYxPDiLLI0ElaDlGo",
	authDomain: "phoenix-3eb52.firebaseapp.com",
	databaseURL: "https://phoenix-3eb52-default-rtdb.firebaseio.com",
	projectId: "phoenix-3eb52",
	storageBucket: "phoenix-3eb52.appspot.com",
	messagingSenderId: "865678881817",
	appId: "1:865678881817:web:41fac5a0e21be6e660e688"
};

firebase.initializeApp(firebaseConfig);


const dbRef = firebase.database().ref();

const usersRef = dbRef.child('users');
const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {

	let user = snap.val();

	let $li = document.createElement("li");
	$li.innerHTML = user.name;
	$li.setAttribute("child-key", snap.key);
	$li.addEventListener("click", userClicked)
	userListUI.append($li);

});


function userClicked(e) {

	var userID = e.target.getAttribute("child-key");

	const userRef = dbRef.child('users/' + userID);
	const userDetailUI = document.getElementById("userDetail");

	userDetailUI.innerHTML = ""

	userRef.on("child_added", snap => {


		var $p = document.createElement("p");
		$p.innerHTML = snap.key + " - " + snap.val()
		userDetailUI.append($p);


	});

}