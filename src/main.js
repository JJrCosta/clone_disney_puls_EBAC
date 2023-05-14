document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(btn) {
            const abaAlvo = btn.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeAbas();
            aba.classList.add('shows__list--is--active');
            removeBtnAtivo()
            btn.target.classList.add('shows__tabs__btn--is--active')
            
        })
        
    }
})

function removeBtnAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__btn--is--active');
    }
}

function escondeAbas() {
    const tabContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabContainer.length; i++) {
        tabContainer[i].classList.remove('shows__list--is--active');
    }
}