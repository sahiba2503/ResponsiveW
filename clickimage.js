const slider2=document.querySelector('.slider2');
    const slides2=document.querySelectorAll('.slide2');
    const prevbtn2=document.querySelector('.prevbtn2');
    const nextbtn2=document.querySelector('.nextbtn2');
    let slideIndex2=0;
    slides2[slideIndex2].classList.add('active2');


    prevbtn2.addEventListener('click',prevslide2);
    nextbtn2.addEventListener('click',nextslide2);

    function nextslide2(){
        slides2[slideIndex2].classList.remove('active2');
         slideIndex2 = (slideIndex2 === slides2.length -1) ? 0 : slideIndex2 + 1;
        slides2[slideIndex2].classList.add('active2');
        slider2.style.transform = `translateX(-${slideIndex2 * 100}%)`;
    }

       function prevslide2(){
        slides2[slideIndex2].classList.remove('active2');
       slideIndex2 = (slideIndex2 === 0) ? slides2.length -1 : slideIndex2 - 1;
        slides2[slideIndex2].classList.add('active2');
        slider2.style.transform = `translateX(-${slideIndex2 * 100}%)`;
    }
