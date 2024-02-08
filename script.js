const res=document.querySelector(".result");
const text=document.getElementById("text-input");
const butn=document.getElementById("check-btn");
let word=text.value;
function valuee(){
    res.innerText=word;
}
butn.addEventListener('click',valuee);


const name = 'John Doe';
const age = 20;

// Using template literals for string interpolation
console.log(`My name is ${name} and I'm ${age} years old.`);

const HTMLString=`
<label>Entry #${Name}</label>
`;
