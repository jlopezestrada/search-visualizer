const sortButton = document.getElementById('sortButton');
const sortInput = document.getElementById('sortInput')
const sortAlgorithm = document.getElementById('sortOptions')

sortButton.addEventListener('click', () => {
    sortAlgorithm = sortAlgorithm.value;
    const inputValues = sortInput.value.split(',').map(Number);

    if (selectedAlgorithm === "Bubble Sort") {
        console.log('Perform Bubble Sort on', inputValues);
    }

    else if (selectedAlgorithm === "Selection Sort") {
        console.log('Perform Selection Sort on', inputValues);
    }

    else if (selectedAlgorithm === "Insertion Sort") {
        console.log('Perform Insertion Sort on', inputValues);
    }

    else if (selectedAlgorithm === "Merge Sort") {
        console.log('Perform Merge Sort on', inputValues);
    }

    else if (selectedAlgorithm === "Quick Sort") {
        console.log('Perform Quick Sort on', inputValues);
    }
});