
function hideEggs() {
  const eggs = document.querySelectorAll('.egg');

  Array.from(eggs).forEach((egg, index) => {
    let top = Math.ceil(Math.random() * 100) + '%';
    let left = Math.ceil(Math.random() * 100) + '%';
    let rotate = Math.ceil(Math.random() * 100) + 'deg';
    egg.style.top = top;
    egg.style.left = left;
    egg.style.transform = 'rotate(' + rotate + ')';
  });

  return false;
}

function putInBasket(egg) {
  let basket = document.getElementById('inBasket');
  basket.appendChild(egg);
  egg.classList.add('found');
  countEggs();
  return false;
}

function look(tile) {
  tile.style.visibility = 'hidden';
  return false;
}

function countEggs() {
  let count = document.getElementById('count');
  let basket = document.getElementById('inBasket');
  let eggsCount = basket.children.length;
  if (eggsCount === 1) {
    alert("Congrats! You've found your first egg.");
  }
  if (eggsCount === 6) {
    alert("Halfway there!");
  }
  if (eggsCount === 12) {
    alert("Great Job! Want to try again?");
    document.getElementById('hide').style.display = 'block';
  }

  count.innerHTML = eggsCount;
}

// Hide the eggs!
hideEggs();