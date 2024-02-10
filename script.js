const res=document.querySelector(".result");
const text=document.getElementById("text-input");
const butn=document.getElementById("check-btn");
function valuee(){
    let word=text.value;
    ;
    if(word===word.split("").reverse().join("")){
         return res.innerHTML= word +" is a palindrome";
    }else{
        return res.innerHTML= word +" is not a palindrome";
    }

}
butn.addEventListener('click',valuee);


