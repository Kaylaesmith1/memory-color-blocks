let clickedCard = null;
let preventClick = false;
let combosFound = 0;




function onClick(e) {
  //can also leave it as: e.currentTarget
  const target = e.currentTarget;

  if (
    preventClick ||
    target === clickedCard ||
    target.className.includes("done")
  ) {
    return;
  }

  target.className = target.className.replace("color-hidden", "");
  target.className += "done";

  if (!clickedCard) {
    //if haven't clicked card, keep track of card and display its color
    clickedCard = target;
  } else if (clickedCard) {
    //if have clicked card, see if colors match
    if (
      clickedCard.getAttribute("data-color") !==
      target.getAttribute("data-color")
    ) {
      console.log("cards not equal");
      preventClick = true;
      setTimeout(() => {
        console.log("we are here!");
        clickedCard.className =
          clickedCard.className.replace("done", "") + "color-hidden";
        target.className =
          target.className.replace("done", "") + "color-hidden";
        clickedCard = null;
        preventClick = false;
      }, 500);
    } else {
      combosFound++;
      clickedCard = null;
      
    }
  }
}

