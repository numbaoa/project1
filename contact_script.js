const question1 = () => {
    const yourName = document.getElementById('your-name');
    const yourEmail = document.getElementById('your-email');
    const addDirecButton = document.getElementById('add-directory');

    addDirecButton.addEventListener('click', (event) => {
    const theName = yourName.value;
    yourName.value = '';
    const theEmail = yourEmail.value;
    yourEmail.value = '';
    }
    );
};


document.addEventListener("DOMContentLoaded", (event) => {
    try {
        question1();
      } catch (e) {
        console.error(e);
      }});