const firebaseConfig = {
    apiKey: "AIzaSyC_amWY3RJA5PlxFNQok9eZK7302xW8Mco",
    authDomain: "belle-full-6d028.firebaseapp.com",
    databaseURL: "https://belle-full-6d028-default-rtdb.firebaseio.com",
    projectId: "belle-full-6d028",
    storageBucket: "belle-full-6d028.appspot.com",
    messagingSenderId: "435721518009",
    appId: "1:435721518009:web:4bb60b46d40fb3b04ad468",
    measurementId: "G-YHNKF7ST0F"
  };
  
//   for initialise fire base
  firebase.initializeApp(firebaseConfig);


//   refrence your database
var belleFullDB = firebase.database().ref('belle-full');

document.getElementById('signUp').addEventListener('submit', submitForm)

function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var number = getElementVal('number');
    var adress = getElementVal('adress');
    var password = getElementVal('password');

    saveMessages(name,number,adress,password)
// check if the above is working
    // console.log(name,number,adress,password);

    // enable alert message only for signup
    // document.querySelector(".alert").stlye.display = "block";
     
    // remove the alert
    // setTimeout(() => {
    //     document.querySelector(".alert").stlye.display = "none";
    // }, 3000);
    


    // reset the form
    document.getElementById('signUp').reset();
}

const saveMessages = (name,number,adress,password) => {
  var newsignUp =belleFullDB.push();

  newsignUp.set({
    name : name,
    number : number,
    adress : adress,
    password : password,

  })
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
} 