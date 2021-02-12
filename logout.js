
var firebaseConfig = {
    apiKey: ,
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
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
 
