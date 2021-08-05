var firebaseConfig = {
    apiKey: "AIzaSyA8v2QBwydkndfn6_gNQVLiAaM2zoo6Mf0",
    authDomain: "lol-kwitter.firebaseapp.com",
    projectId: "lol-kwitter",
    storageBucket: "lol-kwitter.appspot.com",
    messagingSenderId: "586674944227",
    appId: "1:586674944227:web:40273dae2c6c80b0b86dd6"
  };
  firebase.initializeApp(firebaseConfig);

var Room_name= localStorage.getItem("room_name");
var user = localStorage.getItem("username");
document.getElementById("room").innerHTML = "Welcome To #"+ Room_name
function getData() { firebase.database().ref("/"+Room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData; 
    console.log(firebase_message_id);
    console.log(message_data);
    var n = message_data['name'];
    var msg = message_data['message'];
    var like = message_data['likes'];
    nametag = "<h4>"+n+"<img class='user_tick' src='tick.png'> </h4>";
    msgtag = "<h4 class='message_h4'>"+msg+"</h4>";
    liketag = "<button class='btn btn-warning' id="+firebase_message_id+" value="+ like+" onclick = 'updateLikes(this.id)'>";
    spantag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span> </button><hr>";
    row = nametag+msgtag+liketag+spantag;
    document.getElementById("Chatbox").innerHTML += row;

} }); }); } getData();

function logout(){
    localStorage.removeItem("Room_name");
    localStorage.removeItem("username");
    window.location="kwitter.html"
}

function SENDMESSAGE(){
    m = document.getElementById("messages").value;
    firebase.database().ref(Room_name).push({
          name: user,
          message: m,
          likes:0
    });
    document.getElementById("messages").value="";  
}

function updateLikes(buttonid){
    console.log(buttonid);
   var like= document.getElementById(buttonid).value;
    var update_Likes =Number(like)+1;
    console.log(update_Likes);
    firebase.database().ref(room_name).child(buttonid).update({
     likes:update_Likes
    });
}
