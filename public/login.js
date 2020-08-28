
// Your web app's Firebase configuration
var check = 1;

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
const database = firebase.database();
//Get Element

database.ref('user').on('value',(snap)=>{
 // console.log(snap.val());
});
const Email_l = document.getElementById('recipient-name');
const userName = document.getElementById('recipient-rname');
const Password_l = document.getElementById('password');
const Email_s = document.getElementById('recipient-email');
const Password_s = document.getElementById('password1');
const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogout');

const btnSignup = document.getElementById('btnSignup');



btnLogin.addEventListener('click', e => {
  alert('login');
  check = 1;
  const email = Email_l.value;
  const pass = Password_l.value;
  const auth = firebase.auth();
  ///////
  const result = auth.signInWithEmailAndPassword(email, pass);
  
  result.catch(e => console.log(e.message));
  console.log(check);
});

btnSignup.addEventListener('click', e => {
  alert('signup');
  check = 0;
  const email = Email_s.value;
  const pass = Password_s.value;
  const auth = firebase.auth();
  const name = userName.value;
  ///////
  const result = auth.createUserWithEmailAndPassword(email, pass);
  result.catch(e => console.log(e.message));
  firebase.auth().signOut();
  
});


firebase.auth().onAuthStateChanged(firebaseUser => {

  if(check == 0){
    const email = Email_s.value;
    const name = userName.value;
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('user/' + userId).set({
    name: name,
    email: email,
    dona: 0
    });
    firebase.auth().signOut();
    console.log("No user");
    check = 1;
    window.location.replace('index.html');
    alert("Sign Up Succesfully!!")
  }
   else if(firebaseUser && check == 1){
     console.log(firebaseUser);
     window.location.replace('mainPage.html');
     
   }
   else{
     console.log("No user");
     
   }
   
});



