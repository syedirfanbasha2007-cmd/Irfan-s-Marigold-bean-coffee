const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');
if(toggle){toggle.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('.nav a').forEach(link=>link.addEventListener('click',()=>nav&&nav.classList.remove('open')));
const filters=document.querySelectorAll('.filter');const items=document.querySelectorAll('.menu-item');
filters.forEach(button=>button.addEventListener('click',()=>{filters.forEach(b=>b.classList.remove('active'));button.classList.add('active');const category=button.dataset.filter;items.forEach(item=>{item.style.display=(category==='all'||item.dataset.category===category)?'grid':'none';});}));
const form=document.getElementById('contactForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name').value.trim();const email=document.getElementById('email').value.trim();const msg=document.getElementById('message').value.trim();const output=document.getElementById('formMessage');if(!name||!email||!msg){output.textContent='Please fill in all fields.';return;}output.textContent='Thank you! Your message has been received.';form.reset();});}