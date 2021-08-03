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

  user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
Like=message_data['like'];
name_with_tag="<h4>"+ name + "<img class='user_tick' src='tick.png'> </h4>";
message_with_tag="<h4 class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id="+ firebase_message_id+"vlaue="+like+" onclick='updateLike(this.id)'>" ;
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+ like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
 } });  }); }
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter.html";

}

function send() {
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        Like:0

    });
    document.getElementById("msg").value="";
}

function updateLike(message_id) {
  console.log("clicked on like button -" + message_id);
  button_id=message_id;
  Like=document.getElementById(button_id).value;
  update_likes=Number(likes)+1;
  console.log(update_likes);
  firebase.database().ref(room_name).child(message_id).update({
    like=update_likes
  });
}