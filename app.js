'use strict'

let form=document.getElementById('form');
let result=document.getElementById('result');
let clear=document.getElementById('clear');
result.appendChild(clear);


let places=[];

function Travle (name ,type ,Transport){
    this.name=name;
    this.type=type;
    this.Transport=Transport;

    this.render();
    places.push(this);
}


form.addEventListener('submit',submiter);
function submiter (event){
    event.preventDefault();
    let name=event.target.name.value;
    let type=event.target.type.value;
    let Transport=event.target.Transport.value;

    new Travle (name , type ,Transport);
    setItem ();

    form.reset();
}


Travle.prototype.render=function(){
    let DivResult =document.createElement('div');
    result.appendChild(DivResult);
    DivResult.setAttribute('id','DivResult');

    let img =document.createElement('img');
    DivResult.appendChild(img);
    img.setAttribute('src', 'img/' + this.type + '.png');

    let ul =document.createElement('ul');
    DivResult.appendChild(ul);

    let li =document.createElement('li');
    ul.appendChild(li);
    li.textContent=`Places name : ${this.name}`;

    let li1 =document.createElement('li');
    ul.appendChild(li1);
    li1.textContent=`Trip Place : ${this.type}`;

    let li2 =document.createElement('li');
    ul.appendChild(li2);
    li2.textContent=`Type Of Transport : ${this.Transport}`;

}

function setItem (){
    localStorage.setItem('travle', JSON.stringify(places));
}


function GetItem (){
    let stringArray =localStorage.getItem('travle');
    let objectArray= JSON.parse(stringArray);

    if(objectArray){
        for (let i = 0; i < objectArray.length; i++) {
            new Travle (objectArray[i].name ,  objectArray[i].type , objectArray[i].Transport)
            
        }
        
    }
}


clear.addEventListener('click',clicker);
function clicker (){
    localStorage.clear();
    location.reload();
}

GetItem ();