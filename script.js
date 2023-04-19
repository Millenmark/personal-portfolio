let main = document.querySelector('main');
let sections = document.querySelectorAll('section');
let clones = [];
let disableScroll = false;
let scrollheight = 0;
let scrollpos = 0;
let clonesHeight = 0;
let isScrolling = false;

function getScrollPos(){
  return main.scrollTop;
}

function setScrollPos(pos) {
  main.scrollTop = pos;
}

function getClonesHeight(){
  clonesHeight = 0;

  clones.forEach(clone => {
    const cloneStyles = window.getComputedStyle(clone);
    clonesHeight += clone.offsetHeight + parseInt(cloneStyles.marginTop) + parseInt(cloneStyles.marginBottom) + parseInt(cloneStyles.paddingTop) + parseInt(cloneStyles.paddingBottom);
  });

  return clonesHeight;
}


function reCalc(){
  scrollpos = getScrollPos();
  scrollheight = main.scrollHeight;
  clonesHeight = getClonesHeight();

  if(scrollpos <= 0){
    setScrollPos(1);
  }
}

function scrollUpdate(){
  if (isScrolling) {
    return; // If scrolling is already in progress, do nothing
  }

  isScrolling = true; // Set the flag to indicate that scrolling is in progress

  if(!disableScroll){
    scrollpos = getScrollPos();
    if(clonesHeight + scrollpos >= scrollheight){
      setScrollPos(1);
      disableScroll = true;
    } else if (scrollpos <= 0){
      setScrollPos(scrollheight - clonesHeight);
      disableScroll = true;
    } else if (scrollpos === 1) {
      setScrollPos(scrollheight - clonesHeight);
      disableScroll = true;
    }
  }

  if(disableScroll){
    window.setTimeout(() => {
      disableScroll = false;
      isScrolling = false; // Reset the flag to indicate that scrolling has completed
    }, 40);
  } else {
    isScrolling = false; // Reset the flag to indicate that scrolling has completed
  }
}



// let interval = setInterval(scrollUpdate, 10);


function onLoad(){
  sections.forEach(section => {
    const clone = section.cloneNode(true);
    main.appendChild(clone);
    clone.classList.add('js-clone');
  });

  clones = main.querySelectorAll('.js-clone');

  reCalc();

  main.addEventListener('scroll', () => {
    window.requestAnimationFrame(scrollUpdate);
  }, false)

  window.addEventListener('resize', () => {
    window.requestAnimationFrame(reCalc);
  }, false)
}

window.onload = onLoad();