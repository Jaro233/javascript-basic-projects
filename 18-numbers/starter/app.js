const allNumbers = [...document.querySelectorAll('.number')]
console.log(allNumbers);

const updateCount = (el) => {
  const value = parseInt(el.dataset.value)
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;
  const increaseCount = setInterval(() => {
    initialValue += increment

    if(initialValue > value) {
      el.textContent = `${value}+`
      clearInterval(increaseCount)
      return;
    }

    el.textContent = `${initialValue}+`
  }, 1)
}

allNumbers.forEach((item) => {
  updateCount(item)
});