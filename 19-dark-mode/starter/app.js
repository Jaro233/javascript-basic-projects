const toggleButton = document.querySelector('.btn'); 
const articlesContainer = document.querySelector('.articles')

toggleButton.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme')
})
console.log(moment);
const ariclesData = articles.map(({title, date, length, snippet}) => {
  // format date
  const formatDate = moment(date).format('MMMM Do, YYYY')
  return `
  <!-- single post -->
        <article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} min read</span>
          </div>
          <p>${snippet}</p>
        </article>
        <!-- end of single post -->
  `
}).join('')

articlesContainer.innerHTML = ariclesData

