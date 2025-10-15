let state = {
    isEditing: false,
    firstName: 'Jane',
    lastName: 'Jacobs',
};

function updateDOM() {
    if (state.isEditing) {
        editButton.textContent = 'Save Profile';
        hide(firstNameText);
        hide(lastNameText);
        show(firstNameInput);
        show(lastNameInput);
    } else {
        editButton.textContent = 'Edit Profile';
        hide(firstNameInput);
        hide(lastNameInput);
        show(firstNameText);
        show(lastNameText);
    }
    firstNameInput.value = state.firstName;
    lastNameInput.value = state.lastName;
    firstNameText.textContent = state.firstName;
    lastNameText.textContent = state.lastName;
    helloText.textContent = 'Hello, ' + state.firstName + ' ' + state.lastName + '!';
}

function handleFormSubmit(e) {
    e.preventDefault();
    setState({
        isEditing: !state.isEditing,
    });
}

function handleFirstNameChange() {
    setState({
        firstName: firstNameInput.value,
    });
}

function handleLastNameChange() {
    setState({
        lastName: lastNameInput.value,
    });
}

function hide(el) {
    el.style.display = 'none';
}

function show(el) {
    el.style.display = '';
}

function setState(newState) {
    state = { ...state, ...newState };
    updateDOM();
}

let form = document.getElementById('form');
let editButton = document.getElementById('editButton');
let firstNameInput = document.getElementById('firstNameInput');
let firstNameText = document.getElementById('firstNameText');
let lastNameInput = document.getElementById('lastNameInput');
let lastNameText = document.getElementById('lastNameText');
let helloText = document.getElementById('helloText');

form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;

updateDOM();