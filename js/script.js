const copyPopup = document.getElementById('copyPopup');
document.querySelector('#email').addEventListener('click', copy)

function copy() {
    console.log('hi')
    const text = "ecmendez25@gmail.com"
    navigator.clipboard.writeText(text).then(_ => {
        copyPopup.style.display = 'block';
        setTimeout(() => {
            copyPopup.style.display = 'none';
        }, 1000)
    })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}