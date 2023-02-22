$(document).ready(function(){
    $(".burger-btn").click(function(){
        $(".menu-wrap").toggle();
    });

    $(".review-slider").owlCarousel({
        loop: true,
        nav:true,
        items:1,
        
    });
});




let headerButton = document.querySelectorAll('.header-button span');
let sqwdCollOne = document.querySelector('.sqwd-coll-1');
let sqwdCollThree = document.querySelector('.sqwd-coll-3');
let sqwdText = document.querySelectorAll('.sqwd-text');

let all = document.querySelector('#all');
let portfolioCard = document.querySelectorAll('.portfolio-card');

let menuLine = document.querySelectorAll('.line');
let menuLink = document.querySelectorAll('.menu-link');

let header = document.querySelector('.header');

let workNavItem = document.querySelectorAll('.work-nav-item');
/* header */
function activeButton(arr, className) {
    for (const item of arr) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            for (let i = 0; i < arr.length; i++) {
                arr[i].classList.remove(className);
            }
            item.classList.add(className);
        })
    }
}
activeButton(workNavItem, 'active-nav');
activeButton(headerButton, 'active');
for (const el of headerButton) {
    el.addEventListener('click', function () {
        const id = el.id
        switch (id) {
            case 'one':
                header.style.backgroundImage = 'url(./image/bg.png)';
                break;
            case 'two':
                header.style.backgroundImage = 'url(./image/bg2.jpg)';
                break;
            case 'three':
                header.style.backgroundImage = 'url(./image/bg3.jpg)';
                break;
        
            default:
                header.style.backgroundImage = 'url(./image/bg.png)';
        }
        
    });
}

menuLink.forEach(function (el) {
    el.onclick = function () {
        menuLine.forEach(function (elem) {
            if (el.nextElementSibling === elem) {
                elem.style.width = '100%';
            } else{
                elem.style.width = '18px';
            }
        })
    }
})
/* portfolio*/
for (const item of workNavItem) {
    item.addEventListener('click', function () {
        for (let el of portfolioCard) {

            all.addEventListener('click', function (e) {
                e.preventDefault();
                el.classList.remove('hide-portfolio-item');
                if (el.dataset.webDesign == 'web-design' || el.dataset.illustration == 'illustration') {
                    el.classList.add('translateY');
                }
            })
            if (item.id !== Object.values(el.dataset)[0]) {
                el.classList.add('hide-portfolio-item');
                if (el.dataset.webDesign == 'web-design' || el.dataset.illustration == 'illustration') {
                    el.classList.add('translateY');
                }
            }
            else{
                el.classList.remove('hide-portfolio-item');
                if (el.dataset.webDesign == 'web-design' || el.dataset.illustration == 'illustration') {
                    el.classList.remove('translateY');
                }
            }
        }
    })
}
/* swqd */

window.addEventListener('scroll', function () {
    if (scrollY > 400) {
        sqwdCollOne.style.transform = 'translate(85px, -50px)';
        sqwdCollThree.style.transform = 'translate(-104px, 72px)';
        for (let el of sqwdText) {
            setTimeout(function () {
                el.style.opacity = "1"
            }, 500) 
        }
    }else{
        sqwdCollOne.style.transform = 'translate(309px, 13px)';
        sqwdCollThree.style.transform = 'translate(-309px, 15px)';
        for (let el of sqwdText) {
            el.style.opacity = "0"
        }
    }
    if (window.screen.width <= 767) {
        if (scrollY > 400) {
            sqwdCollOne.style.transform = 'translate(309px, -117px)';
            sqwdCollThree.style.transform = 'translate(-308px, 182px)';
            for (let el of sqwdText) {
                setTimeout(function () {
                    el.style.opacity = "1"
                }, 500) 
            }
        }else{
            sqwdCollOne.style.transform = 'translate(309px, 13px)';
            sqwdCollThree.style.transform = 'translate(-309px, 15px)';
            for (let el of sqwdText) {
                el.style.opacity = "0"
            }
        }
    }
});
