const cookieStorage = {
    getItem: (item) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value}), {})
        return cookies[item]
    },
    setItem: (item, value) => {
        document.cookie = `${item}=${value}`
    }
}

const storageType = cookieStorage;
const consentPropertyName = 'traylz_consent';
const shouldShowPopup = () => !storageType.getItem(consentPropertyName)
const saveToStorage = () => storageType.setItem(consentPropertyName, true)

window.onload = () => {
    const acceptFn = event => {
    saveToStorage(storageType)
    consentPopup.classList.add('hidden')
    }

    const consentPopup = document.getElementById('consent-popup')
    const consent = document.getElementById('consent')
    consent.addEventListener('click', acceptFn)
    
    if (shouldShowPopup(storageType)) {
        setTimeout(() => {
            consentPopup.classList.remove('hidden')
        }, 2000)
        
    }
}


const menuToggle = document.querySelector('.toggle')
        const showcase = document.querySelector('.showcase')

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active')
            showcase.classList.toggle('active')
        })



