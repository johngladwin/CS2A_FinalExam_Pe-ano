fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    const table_api = document.getElementById('table_api');
    const searchInput = document.getElementById('searchInput');

    let posts = data;

    function renderTable() {
        table_api.innerHTML = '';

      posts.forEach(post => {
        const row = document.createElement('tr');
        const idCell = document.createElement('td');
        const titleCell = document.createElement('td');
        const bodyCell = document.createElement('td');

        idCell.textContent = post.id;
        titleCell.textContent = post.title;
        bodyCell.textContent = post.body;

        row.appendChild(idCell);
        row.appendChild(titleCell);
        row.appendChild(bodyCell);

        table_api.appendChild(row);
      });
    }

    renderTable();

    searchInput.addEventListener('input', () => {
      const keyword = searchInput.value.toLowerCase();

      posts = data.filter(post => {
        return post.title.toLowerCase().includes(keyword) ||
          post.body.toLowerCase().includes(keyword);
      });

      renderTable();
    });
  });
  
