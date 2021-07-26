const app = () => {
  const burger = document.querySelector('.header__burger');
  const popup = document.querySelector('.popup');
  const popupClose = document.querySelector('.popup__close');
  const main = document.querySelector('.main');
  const nav = document.querySelector('.nav');
  const navItems = Array.from(nav.querySelectorAll('.nav__item'));

  popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
    main.style.display = 'block';
  });
  burger.addEventListener('click', () => {
    popup.style.display = 'block';
  });
  navItems.forEach((navItem) => {
    navItem.addEventListener('click', (e) => {
      e.preventDefault();
      const current = e.currentTarget;
      navItems.map((item) => {
        item.classList.remove('nav__item_active');
      })
      current.classList.add('nav__item_active')
    })
  });

    

  
};

app();