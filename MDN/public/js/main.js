// var myHeading = document.querySelector('h1');  //querySelector()関数で見出しを取得し/myHeading変数に格納する
// myHeading.textContent = 'Hello world!';  //myHeading変数のtextContentプロパティの値を'Hello world!'に設定する

var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'img/firefox-icon.png') {
    myImage.setAttribute('src','img/firefox2.png');
  } else {
    myImage.setAttribute('src','img/firefox-icon.png');
  }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('あなたの名前を入力してください。');
  localStorage.setItem('name',myName);
  myHeading.textContent = 'Mozilla はすばらしいよ、' + myName;
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla はすばらしいよ、' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
