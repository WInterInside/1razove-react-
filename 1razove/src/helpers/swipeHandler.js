var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt, leftSwipe, rightSwipe) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
          leftSwipe();
        } else {
          rightSwipe();
        }                       
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
}


const addSwipes = (leftHandler, rightHandler) => {
  let moveFunc = (evt) => handleTouchMove(evt, leftHandler, rightHandler);

  document.addEventListener('touchstart', handleTouchStart, false);        
  document.addEventListener('touchmove', moveFunc, false);

  return moveFunc;
}

const stopSwipes = (moveFunc) => {
  document.removeEventListener('touchstart', handleTouchStart, true);  
  document.removeEventListener("touchmove", moveFunc, true);
}
let swipeHandler = {addSwipes, stopSwipes};
export default swipeHandler;