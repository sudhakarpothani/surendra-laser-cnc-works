
window.addEventListener("load",()=>loader.style.display="none");
const loader=document.getElementById("loader");

document.querySelectorAll(".reveal").forEach(el=>{
new IntersectionObserver(entries=>{
if(entries[0].isIntersecting) el.classList.add("show");
}).observe(el);
});

document.querySelectorAll("[data-count]").forEach(el=>{
let target=+el.dataset.count,c=0;
let timer=setInterval(()=>{
c+=Math.ceil(target/60);
if(c>=target){c=target;clearInterval(timer)}
el.textContent=c+(target==98?"%":"+");
},30);
});

let slides=document.querySelectorAll(".testimonial"),i=0;
setInterval(()=>{
slides[i].classList.remove("active");
i=(i+1)%slides.length;
slides[i].classList.add("active");
},3500);

const topBtn=document.getElementById("topBtn");
topBtn.onclick=()=>window.scrollTo({top:0,behavior:"smooth"});
window.addEventListener("load", function(){

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 500);

    }, 2000);

});