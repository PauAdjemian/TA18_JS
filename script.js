const names = ['Alice','Almeja' ,'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Hank', 'Ivy', 'Jack'];

const nameList = document.getElementById('nameList');
const searchInput = document.getElementById('searchInput');


function renderList(items) {
    nameList.innerHTML = '';
    items.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        nameList.appendChild(li);
    });
}


renderList(names);


searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    const filteredNames = names.filter(name => name.toLowerCase().includes(filter));
    renderList(filteredNames);
});
