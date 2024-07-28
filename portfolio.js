
const menuList=document.querySelector('.navbar');
const brightness=document.querySelector('.light');
document.querySelectorAll('.nav__link').forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        const id = this.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    });
});
const handleHover=function(e,opacity){
    if(e.target.classList.contains('nav__link')){
        const link=e.target;
        const siblings=document.querySelectorAll('.nav__link');
        siblings.forEach(el=>{
            if(el!==link)
            el.style.opacity=opacity;
        }); 
    }     
};
menuList.addEventListener('mouseover',function(e){handleHover(e,0.5)});
menuList.addEventListener('mouseout',function(e){handleHover(e,1)});
var icon=document.getElementById("icon");
icon.onclick=function(){
    document.body.classList.toggle('dark_mode'); 
    if(document.body.classList.contains("dark_mode")){
        icon.src="bx-sun.svg";
    }
    else{
        icon.src="bxs-moon.svg";    }
};
