const sortButton = document.getElementById('sortButton');
const sortInput = document.getElementById('sortInput')
const sortAlgorithm = document.getElementById('sortOptions')

sortButton.addEventListener('click', () => {
    console.log(sortInput.value);
    console.log(sortAlgorithm.value);
});