const firebaseConfig = {
  apiKey: "AIzaSyC51ga5FtCA1F29fZrvqIMrQb7aPecoaW8",
  authDomain: "kwittr-project.firebaseapp.com",
  databaseURL: "https://kwittr-project-default-rtdb.firebaseio.com",
  projectId: "kwittr-project",
  storageBucket: "kwittr-project.appspot.com",
  messagingSenderId: "881762652667",
  appId: "1:881762652667:web:a2c0619194d3f96b5cbb5e",
  measurementId: "G-MYZLK7SRL5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room Name -" + Room_names);
    row="<div class='room_name' id= " + Room_names + "onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div> <hr>";
document.getElementById("output").innerHTML=row;
    });});}
getData();
function addRoom() {
  Room_names=document.getElementById("room_name").value;

  firebase.database().ref("/").child(Room_names).update({
purpose:"adding room name"
  });

  localStorage.setItem("room_name",Room_names);
  window.location="kwitter_page.html";
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

