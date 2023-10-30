let percentage;
let grade;
function per(){
    document.getElementById('n3').value=(document.getElementById('n1').value/document.getElementById('n2').value)*100;
    percentage=document.getElementById('n3').value;
}
function gra()
{
switch(Math.floor(percentage/10)){
    case 10:grade='excellent';
            break;
    case 9:grade='super';
          break;
    case 8:grade='outstanding';
            break;
    case 7: grade='great';
            break;
    case 6:grade='good';
            break;
    case 5:grade='average';
            break;
    default:grade='poor';
            break;
}
document.getElementById('n4').value=grade;
document.getElementById('result').innerHTML=`you scored <span id="span">${Math.round(percentage)}</span>% and your grade is "${grade}"`;
document.getElementById('span').style.color="red";

setTimeout(()=>{
    document.getElementById('n1').value='';
    document.getElementById('n2').value='';
    document.getElementById('n3').value='';
    document.getElementById('n4').value='';
    document.getElementById('result').innerHTML='';
},5000);

} 
