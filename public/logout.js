
var firebaseConfig = {
    apiKey: "AIzaSyC25x51SkdHVfLCj4rXqmicUQQy75DC40w",
    authDomain: "ochm-4f833.firebaseapp.com",
    databaseURL: "https://ochm-4f833.firebaseio.com",
    projectId: "ochm-4f833",
    storageBucket: "ochm-4f833.appspot.com",
    messagingSenderId: "657768658051",
    appId: "1:657768658051:web:f1da24057e8aa58fc957b6",
    measurementId: "G-H932SF9LBH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  //Get Element
  
//   const Email_l = document.getElementById('recipient-name');
//   const Password_l = document.getElementById('password');
//   const Email_s = document.getElementsByName('uname_s');
//   const Password_s = document.getElementsByName('pwd_s');
//   const btnLogin = document.getElementById('btnLogin');
  const btnLogout = document.getElementById('btnLogout');
  
//   const btnSignup = document.getElementsByName('btnSignup');

btnLogout.addEventListener('click', e =>{
    alert("signOut");
    firebase.auth().signOut();
  });
  

  firebase.auth().onAuthStateChanged(firebaseUser => {

    if(firebaseUser){
      console.log(firebaseUser);
      const database = firebase.database();
      var userId = firebase.auth().currentUser.uid;
      database.ref('user/' + userId).on('value',(snap)=>{
      document.getElementById("intro").innerHTML = 'Hello, ' + snap.val().name + " ";
      console.log(snap.val().name);
    });
      

      
      
    }
    else{
      console.log("No user");
      window.location.replace('index.html');
    }
    
 });
 