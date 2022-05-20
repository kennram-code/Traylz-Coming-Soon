const localStorage = {
    getItem: (item) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim]: value}), {})
        return cookies[item]
    },
    setItem: (item, value) => {
        document.cookie = `${item}=${value}`
    }
}

const storageType = localStorage;
const consentPropertyName = 'Traylz_consent';
const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {

    const acceptFn = event => {
        saveToStorage(storageType);
        cookieContainer.classList.add('hidden')
    }

    const cookieContainer =  document.getElementById('cookie-container')
    const cookieButton = document.getElementById('cookie-btn')

    

    cookieButton.addEventListener('click', acceptFn)

    if (shouldShowPopup(storageType)) {
        setTimeout(() => {
            cookieContainer.classList.remove('hidden')
        }, 2000)
        
        }
    }


const menuToggle = document.querySelector('.toggle')
        const showcase = document.querySelector('.showcase')

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active')
            showcase.classList.toggle('active')
        })



