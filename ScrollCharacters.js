const intro = document.querySelector(".intro");
const firstvid = document.querySelector(".first-vid");
const secondvid = document.querySelector(".second-vid");
const thirdvid = document.querySelector(".third-vid");
const fourthvid = document.querySelector(".fourth-vid");
const fifthvid = document.querySelector(".fifth-vid");
const sixthvid = document.querySelector(".sixth-vid");
const seventhvid = document.querySelector(".seventh-vid");

const con1st = document.querySelector(".Con1st");
const con2nd = document.querySelector(".Con2nd");
const con3rd = document.querySelector(".Con3rd");
const con4th = document.querySelector(".Con4th");
const con5th = document.querySelector(".Con5th");
const con6th = document.querySelector(".Con6th");
const con7th = document.querySelector(".Con7th");

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const isMobile = window.innerWidth < 900;
    
    const con1stBottom = con1st.offsetTop + con1st.offsetHeight - 800;
    
    const con2ndTop = con2nd.offsetTop - 800;
    const con2ndBottom = con2nd.offsetTop + con2nd.offsetHeight - 800;
    
    const con3rdTop = con3rd.offsetTop - 800;
    const con3rdBottom = con3rd.offsetTop + con3rd.offsetHeight - 800;
    
    const con4thTop = con4th.offsetTop - 800;
    const con4thBottom = con4th.offsetTop + con4th.offsetHeight - 800;
    
    const con5thTop = con5th.offsetTop - 800;
    const con5thBottom = con5th.offsetTop + con5th.offsetHeight - 800;
    
    const con6thTop = con6th.offsetTop - 800;
    const con6thBottom = con6th.offsetTop + con6th.offsetHeight - 800;
    
    const con7thTop = con7th.offsetTop - 800;


    intro.style.opacity = Math.max(0, 1 - scroll / 600);
    
    //First VID
    const fadeIn = Math.max(
        0,
        Math.min(1, (scroll - 400) / 1000)
    );

    const fadeOut = Math.max(
        0,
        Math.min(1, (scroll - 1600) / 1000)
    );

    firstvid.style.opacity = fadeIn * (1 - fadeOut);
    
    
    //Second VID
    const fadeIn2 = Math.max(
        0,
        Math.min(1, (scroll - con1stBottom) / 1000)
    );

    const fadeOut2 = Math.max(
        0,
        Math.min(1, (scroll - con2ndTop) / 1000)
    );

    secondvid.style.opacity = fadeIn2 * (1 - fadeOut2);
       
       
    //Third VID
    const fadeIn3 = Math.max(
        0,
        Math.min(1, (scroll - con2ndBottom) / 1000)
    );

    const fadeOut3 = Math.max(
        0,
        Math.min(1, (scroll - con3rdTop) / 1000)
    );

    thirdvid.style.opacity = fadeIn3 * (1 - fadeOut3);
    
    
    
    //Fourth VID
    const fadeIn4 = Math.max(
        0,
        Math.min(1, (scroll - con3rdBottom) / 1000)
    );

    const fadeOut4 = Math.max(
        0,
        Math.min(1, (scroll - con4thTop) / 1000)
    );

    fourthvid.style.opacity = fadeIn4 * (1 - fadeOut4);
    
    
    
    //Fifth VID
    const fadeIn5 = Math.max(
        0,
        Math.min(1, (scroll - con4thBottom) / 1000)
    );

    const fadeOut5 = Math.max(
        0,
        Math.min(1, (scroll - con5thTop) / 1000)
    );

    fifthvid.style.opacity = fadeIn5 * (1 - fadeOut5);
    
    //Sixth VID
    const fadeIn6 = Math.max(
        0,
        Math.min(1, (scroll - con5thBottom) / 1000)
    );

    const fadeOut6 = Math.max(
        0,
        Math.min(1, (scroll - con6thTop) / 1000)
    );

    sixthvid.style.opacity = fadeIn6 * (1 - fadeOut6);
    
    //Seventh VID YISSS ANTAGAL TAPSUSIN TAPUS NaAaAaA
    const fadeIn7 = Math.max(
        0,
        Math.min(1, (scroll - con6thBottom) / 1000)
    );

    const fadeOut7 = Math.max(
        0,
        Math.min(1, (scroll - con7thTop) / 1000)
    );

    seventhvid.style.opacity = fadeIn7 * (1 - fadeOut7);
    
});

window.dispatchEvent(new Event("scroll"));
