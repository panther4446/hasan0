const firebaseConfig = {
    apiKey: "AIzaSyB6LTZHN47j8GiNluiYfroGKQbrMzSnjw0",
    authDomain: "concise-torus-400518.firebaseapp.com",
    projectId: "concise-torus-400518",
    storageBucket: "concise-torus-400518.appspot.com",
    messagingSenderId: "335151582767",
    appId: "1:335151582767:web:54037280716b3841fd40da"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);








function get(){

    document.getElementById("email") 
    document.getElementById("password") 

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
       console.log (errorMessage);
    });

}

function login(){

document.getElementById("email");
document.getElementById("password");


firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log (user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });

}

function loginwithgoogle(){


    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);

    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error.message);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}   


function loginwithgithub(){
 
    var provider = new firebase.auth.GithubAuthProvider();
    firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = credential.accessToken;
  
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // IdP data available in result.additionalUserInfo.profile.
        // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.message);
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}