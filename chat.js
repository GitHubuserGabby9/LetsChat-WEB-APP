// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDqnNyoCz2-O_d8CzpKJwQse7TPUnEBwQ",
    authDomain: "lets-chat-webb-app-project.firebaseapp.com",
    databaseURL: "https://lets-chat-webb-app-project-default-rtdb.firebaseio.com",
    projectId: "lets-chat-webb-app-project",
    storageBucket: "lets-chat-webb-app-project.appspot.com",
    messagingSenderId: "54601715022",
    appId: "1:54601715022:web:fbc3ede0a8c5827bc6a21f"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
   
}



