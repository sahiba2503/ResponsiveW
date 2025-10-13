const slider2=document.querySelector('.slider2');
    const slide2=document.querySelectorAll('.slide2');// here we are taking about images.
    const prevbtn2=document.querySelector('.prevbtn2');
    const nextbtn2=document.querySelector('.nextbtn2');
    let ind=0;
    slide2[ind].classList.add('active2');

    prevbtn2.addEventListener('click',prevslide2);
    nextbtn2.addEventListener('click',nextslide2);
 //listen carefully here.
    function nextslide2()
    {
        //here my image should be come right to left.
        slide2[ind].classList.remove('active2');//here class is removed from first image

         ind = (ind === slide2.length -1) ? 0 : ind + 1;
         //if already at last image then go to first image otherwise go to next image.
         //if(ind === slide2.length -1)
            //{ ind=0;}
            //else{ ind++;}
         //this is same as above code.
        slide2[ind].classList.add('active2');
        slider2.style.transform = `translateX(-${ind * 100}%)`;
    }

       function prevslide2(){
        slide2[ind].classList.remove('active2');
       ind = (ind === 0) ? slide2.length -1 : ind - 1;
        //if already at first image then go to last image otherwise go to previous image.
        //if(ind === 0)
        // { ind = slide2.length -1;}
        // else{ ind--;}
        //this is same as above code.
        slide2[ind].classList.add('active2');
        slider2.style.transform = `translateX(-${ind * 100}%)`;
    }
