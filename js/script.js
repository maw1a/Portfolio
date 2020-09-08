// Preloader
window.addEventListener("load",function(){
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
    },1000)
})

//Project item filter
const filterContainer=document.querySelector(".project-filter"),
filterBtns=filterContainer.children,
totalFilterBtn=filterBtns.length,
projectItems=document.querySelectorAll(".project-item");
totalProjectItem=projectItems.length;

for(let i=0;i<totalFilterBtn;i++)
{
    filterBtns[i].addEventListener("click",function(){
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue=this.getAttribute("data-filter");
        for(let k=0;k<totalProjectItem;k++)
        {
            if(filterValue===projectItems[k].getAttribute("data-category"))
            {
                projectItems[k].classList.remove('hide');
                projectItems[k].classList.add('show');
            }
            else
            {
                projectItems[k].classList.remove('show');
                projectItems[k].classList.add('hide');
            }
            if(filterValue==="all")
            {
                projectItems[k].classList.remove('hide');
                projectItems[k].classList.add('show');
            }
        }
    })
}

function navGit(name) {
    window.open(`https://github.com/Anirudh1905/${name}`)
}
function navmed(name) {
    window.open(`https://medium.com/@anirudhsridhar1905/${name}`)
}
function navtab(){
    window.open('https://public.tableau.com/profile/anirudh.sridhar#!/vizhome/USPerformanceDashboard/USPerformanceDashboard')
}
var previd = 'home';
function setActive(id) {
    document.getElementById(previd+"-link").classList.remove('active')
    document.getElementById(id+"-link").classList.add('active')
    previd = id;
}

//hamburger
document.querySelector('.nav-toggler').addEventListener('click', () => {
    document.querySelector('.aside').classList.remove('close')
    document.querySelector('.aside').classList.add('open')
})

document.querySelector('.nav-close').addEventListener('click', () => {
    document.querySelector('.aside').classList.remove('open')
    document.querySelector('.aside').classList.add('close')
})
