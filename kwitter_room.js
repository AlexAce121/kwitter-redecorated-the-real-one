var firebaseConfig = {
  apiKey: "AIzaSyA8v2QBwydkndfn6_gNQVLiAaM2zoo6Mf0",
  authDomain: "lol-kwitter.firebaseapp.com",
  projectId: "lol-kwitter",
  storageBucket: "lol-kwitter.appspot.com",
  messagingSenderId: "586674944227",
  appId: "1:586674944227:web:40273dae2c6c80b0b86dd6"
};

firebase.initializeApp(firebaseConfig);
var usernameee = localStorage.getItem("username");
console.log(usernameee);
document.getElementById("welcome").innerHTML="Welcome " +usernameee +"!";

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {
  document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) {
        childKey  = childSnapshot.key;
   Room_names = childKey;
  
  console.log("room names--"+ Room_names);
  row = "<div class ='room_name' id= " + Room_names +" onclick='redirectToRoom(this.id)' >#" + Room_names + "</div> <hr>";
  document.getElementById("output").innerHTML += row;
  });
});
}
getData();

function AddNewRoom(){
  var Room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(Room_name).update({
        purpose:"addingRoom"

  });
  localStorage.setItem("room_name" , Room_name)
  window.location="chat.html";
  
}

function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("username");
  window.location="kwitter.html"
}

function redirectToRoom(name){
  localStorage.setItem("room_name" , name);
  window.location="chat.html";
}

