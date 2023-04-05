const divs = document.querySelectorAll('div[id^="exo"]');
let currentIndex = 0;

function showDiv(index) {
  divs.forEach((div, i) => {
    if (i === index) {
      div.style.display = 'block';
    } else {
      div.style.display = 'none';
    }
  });
  checkButtonsState();
}

function nextDiv() {
  if (currentIndex < divs.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  showDiv(currentIndex);
}

function prevDiv() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = divs.length - 1;
  }
  showDiv(currentIndex);
}

function checkButtonsState() {
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  if (currentIndex === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }
  if (currentIndex === divs.length - 1) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

document.getElementById('prev').addEventListener('click', prevDiv);
document.getElementById('next').addEventListener('click', nextDiv);

showDiv(currentIndex);
