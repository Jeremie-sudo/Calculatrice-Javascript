const allume = document.getElementById('all');
const  screen = document.querySelector('h2');
const btns =document.querySelectorAll('.btn');
const res =document.getElementById('eqal');
const off =document.getElementById('ete');
const eff =document.getElementById('cln');
const squart =document.getElementById('car');

    allume.addEventListener('click',()=>{
    screen.style.background='darkcyan';
    btns.forEach((bt)=>{
    bt.addEventListener('click',(e)=>{
      screen.textContent += e.target.id;
   })

 })
})

res.addEventListener('click',()=>{
   screen.textContent=eval(screen.textContent);

})
off.addEventListener('click',()=>{
   screen.textContent ='';
  screen.style.background='white';

})
eff.addEventListener('click',()=>{
   screen.textContent ='';
  
})
squart.addEventListener('click',()=>{
   screen.textContent=screen.textContent*screen.textContent;
  
})
