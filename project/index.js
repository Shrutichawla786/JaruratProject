let number = 0;
const maxNumber = 150;
const minNumber = 0;
const numberDisplay = document.getElementById('num');
const progressBar = document.getElementById('progress-bar');
const undo = [];
const redo = [];

document.getElementById('sub').addEventListener('click', () => {
    if (number > minNumber) {
        undo.push(number);
        number--;
        updateUI();
    }
});

document.getElementById('add').addEventListener('click', () => {
    if (number < maxNumber) {
        undo.push(number);
        number++;
        updateUI();
    }
});

document.getElementById('undoBtn').addEventListener('click', () => {
    if (undo.length > 0) {
        redo.push(number);
        number = undo.pop();
        updateUI();
    }
});

document.getElementById('redoBtn').addEventListener('click', () => {
    if (redo.length > 0) {
        undo.push(number);
        number = redo.pop();
        updateUI();
    }
});

function updateUI() {
    numberDisplay.textContent = number;
    const progressPercentage = (number / maxNumber) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}
