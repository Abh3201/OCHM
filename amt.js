
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

  function call(){
  var userId = firebase.auth().currentUser.uid;
    var add = parseInt(document.getElementById('mo').value);
    var money;
	database.ref('user/' + userId).once('value',(snap)=>{
        money = snap.val().dona ;
        
        console.log('money: ' +money);
        console.log('add: ' + add);
        var ref = database.ref('user').child(userId);
        result = parseInt( add + money);
        console.log('result: ' + result);
        ref.update({dona : result}); 
        window.location.replace('mainPage.html');
      });
    
    console.log(money);
    /*
    var newPostKey = firebase.database().ref('user/').child(userId).push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/dona/' + newPostKey] = money + add;
  

  firebase.database().ref('user/').update(updates);
*/
  console.log(money);
  console.log(add);
  
}