function Login(){
    username = document.getElementById("uname").value;
    localStorage.setItem("username" , username);
    window.location= "kwitter_room.html";
}

