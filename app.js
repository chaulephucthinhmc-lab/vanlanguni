
document.querySelectorAll('.counter').forEach(c=>{
let target=+c.dataset.target,current=0;
let t=setInterval(()=>{
current++;
c.innerText=current+'%';
if(current>=target) clearInterval(t);
},25);
});

new Chart(document.getElementById('chart'),{
type:'bar',
data:{
labels:['Plastic Bottles','Plastic Cups','Plastic Bags'],
datasets:[{
label:'Usage Rate (%)',
data:[78,65,52]
}]
}
});

function calculateImpact(){
const s=Number(document.getElementById('students').value||0);
const bottles=s*365;
document.getElementById('result').innerText=
bottles.toLocaleString('en-US') + ' plastic bottles can be reduced every year.';
}

let current=32500000;
function donate(){
const amount=Number(document.getElementById('amount').value||0);
if(amount<=0){
alert('Please enter a valid amount.');
return;
}
current+=amount;
document.getElementById('money').innerText=current.toLocaleString('en-US');
document.getElementById('bar').style.width=Math.min((current/50000000)*100,100)+'%';
alert('Thank you for supporting our campaign!');
}
