//your JS code here. If required.
let div=document.CreateElement('div');
div.id='browser-info';
document.body.appendChild(div);
div.innerText="You are using "+Navigator.appName+" version "+Navigator.appVersion;