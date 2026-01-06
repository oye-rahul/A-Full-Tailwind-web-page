function HandleMenu (){
    const hidemenu = document.getElementById("hidemenu");
    if (hidemenu) hidemenu.classList.toggle("hidden");
}

let initialTranslateLTR = 0;
let initialTranslateRTL = 0;

function setupIntersectionObserver(element, isLTR, speed) {
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        console.log(element, isIntersecting);
        if(isIntersecting) {
            document.addEventListener('scroll', scrollHandler);
        } else {
            document.removeEventListener('scroll', scrollHandler);
        }
    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback);

    intersectionObserver.observe(element);

    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if(isLTR) {
            totalTranslate = translateX + initialTranslateLTR;   // left → right
        } else {
            totalTranslate = -(translateX + initialTranslateRTL); // right → left
        }

        element.style.transform = `translateX(${totalTranslate}px)`;
    }
}

const line1 = document.getElementById('line-1');
const line2 = document.getElementById('line-2');
const line3 = document.getElementById('line-3');

// 👇 line1 & line3 ko right → left karne ke liye false set karo
setupIntersectionObserver(line1, false, 0.15);
setupIntersectionObserver(line2, true, 0.15);
setupIntersectionObserver(line3, false, 0.15);