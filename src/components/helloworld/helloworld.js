import './style.css';
import RiotImg from './riot240x.png';

function component() {
  var element = document.createElement('div');
  element.innerHTML = '<h1>Hello World!</h1><br>'
  element.classList.add('font-red');

  let myIcon = new Image();
  myIcon.src = RiotImg;
  element.appendChild(myIcon);
  return element;

}

async function foo() {
  setTimeout(() => {
    console.log('async working!')
  }, 2000)
}

async function bar() {
  await foo()
  console.log('after foo')
}

bar()

document.body.appendChild(component());


var script   = document.createElement("script");
script.type  = "text/javascript";
script.src   = "http://localhost:35729/livereload.js";    // use this for linked script
document.body.appendChild(script);
