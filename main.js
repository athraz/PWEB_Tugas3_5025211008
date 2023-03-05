const bgimg = ['img/program1.png', 'img/program2.png', 'img/program3.png',
               'img/program4.png', 'img/program5.png', 'img/program6.png',
               'img/program7.png', 'img/program8.png', 'img/program9.png']
const boxes = document.querySelectorAll('.box');
for (let i = 0; i < boxes.length; i++){
    boxes[i].style.backgroundImage = `linear-gradient(to left, transparent, rgba(255, 255, 255, 1)), url(${bgimg[i]})`
}

boxes.forEach((box, i)=> {
    box.addEventListener('mouseover', () => {
        box.style.backgroundImage = `linear-gradient(to left, transparent, rgba(195,195,229,255)), url(${bgimg[i]})`
    });
    box.addEventListener('mouseout', () => {
        box.style.backgroundImage = `linear-gradient(to left, transparent, rgba(255, 255, 255, 1)), url(${bgimg[i]})`
    });
});


const observerTop = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('slide-top-show');
        else entry.target.classList.remove('slide-top-show');
    })
});
const hiddenElementsTop = document.querySelectorAll('.slide-top');
hiddenElementsTop.forEach((el) => observerTop.observe(el));



const observerRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('slide-right-show');
        else entry.target.classList.remove('slide-right-show');
    })
});
const hiddenElementsRight = document.querySelectorAll('.slide-right');
hiddenElementsRight.forEach((el) => observerRight.observe(el));



const counter = document.querySelectorAll('.count');
counter.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('target');
        const c = +counter.innerText;
        const increment = target/1000;

        if (c < target){
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        }
        else {
            counter.innerText = target;
        }
    };
    updateCounter();
});
