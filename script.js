  const countDisplay = document.getElementById('count');
  const incrementButton = document.getElementById('increment');
  const decrementButton = document.getElementById('decrement');
  const clearButton = document.getElementById('clear');
  const errorDisplay = document.getElementById('error');

  let count = 1;

  function updateCount() {
    countDisplay.innerHTML = count;
    if (count === 0) {
      decrementButton.disabled = true;
      errorDisplay.style.display = 'block';
    } else {
      decrementButton.disabled = false;
      errorDisplay.style.display = 'none';
    }
    if (count > 0) {
      clearButton.style.display = 'block';
    } else {
      clearButton.style.display = 'none';
    }
  }

  incrementButton.addEventListener('click', function() {
    count++;
    updateCount();
  });

  decrementButton.addEventListener('click', function() {
    if (count > 0) {
      count--;
      updateCount();
    }
  });

  clearButton.addEventListener('click', function() {
    count = 0;
    updateCount();
  });

  updateCount();