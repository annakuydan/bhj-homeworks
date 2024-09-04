function openMenu () {
    document.querySelector('.dropdown__list').classList.add('dropdown__list_active')
}
 
function closeMenu() {
    document.querySelector('.dropdown__list').classList.remove('dropdown__list_active')
}
 
const value = document.querySelector('.dropdown__value')
value.addEventListener('click', openMenu)
 
const navigationCode = Array.from(document.querySelectorAll('.dropdown__item'))
navigationCode.forEach((item, index) => {
    item.onclick = () => {
        closeMenu()
        value.textContent = navigationCode[index].textContent
        return false
    }
})