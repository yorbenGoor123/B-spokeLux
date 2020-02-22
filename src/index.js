import './style.css';

{
  const loader = () => {
    window.addEventListener('load', handleLoad);
  };

  const burgerMenu = () => {
    const $burger = document.querySelector(`.menu__togleImg`);
    const $menuItems = document.querySelector(`.menu__items`);
    const $navLinks = document.querySelectorAll(`.menu__items`);

    console.log($navLinks);

    $burger.addEventListener('click', () => {
      $menuItems.classList.toggle('nav__active');

    });

    console.log($menuItems);

    $menuItems.addEventListener('click', () => {
      $menuItems.classList.remove('nav__active');

    });

    const $main = document.querySelector(`.main`);
    $main.addEventListener('click', () => {
      $menuItems.classList.remove('nav__active');
    });


  };

  const changingImages = () => {
    const $imageAbout1 = document.querySelector(`.about__photo__1`);
    const $imageAbout2 = document.querySelector(`.about__photo__2`);
    const $imageAbout3 = document.querySelector(`.about__photo__3`);
    const $imageAbout4 = document.querySelector(`.about__photo__4`);
    imageAbout1Att = $imageAbout1.getAttribute('src');
    imageAbout2Att = $imageAbout2.getAttribute('src');
    imageAbout3Att = $imageAbout3.getAttribute('src');
    imageAbout4Att = $imageAbout4.getAttribute('src');


    setTimeout(() => {
      $imageAbout4.src = `${imageAbout1Att}`;
      $imageAbout1.src = `${imageAbout4Att}`;
      $imageAbout1.className += ' animation__photos';
      $imageAbout4.className += ' animation__photos';
    }, 2000);
    setTimeout(() => {
      $imageAbout1.classList.remove('animation__photos');
      $imageAbout4.classList.remove('animation__photos');
    }, 3000);

    setTimeout(() => {
      $imageAbout2.src = `${imageAbout3Att}`;
      $imageAbout3.src = `${imageAbout2Att}`;
      $imageAbout2.className += ' animation__photos';
      $imageAbout3.className += ' animation__photos';
    }, 4000);
    setTimeout(() => {
      $imageAbout2.classList.remove('animation__photos');
      $imageAbout3.classList.remove('animation__photos');
    }, 5000);

    setTimeout(() => {
      $imageAbout4.src = `${imageAbout4Att}`;
      $imageAbout1.src = `${imageAbout1Att}`;
      $imageAbout1.className += ' animation__photos';
      $imageAbout4.className += ' animation__photos';
    }, 6000);
    setTimeout(() => {
      $imageAbout1.classList.remove('animation__photos');
      $imageAbout4.classList.remove('animation__photos');
    }, 7000);

    setTimeout(() => {
      $imageAbout3.src = `${imageAbout3Att}`;
      $imageAbout2.src = `${imageAbout2Att}`;
      $imageAbout2.className += ' animation__photos';
      $imageAbout3.className += ' animation__photos';
    }, 8000);
    setTimeout(() => {

      $imageAbout2.classList.remove('animation__photos');
      $imageAbout3.classList.remove('animation__photos');

    }, 9000);

  };
  const clickMaps = () => {
    window.location.href = 'https://www.google.com/maps/place/W22,+22+Rue+de+l\'Industrie,+8399+Windhof,+Luxemburg/@49.6491065,5.9610498,17z/data=!3m1!4b1!4m5!3m4!1s0x47eab33ca0870c4b:0xf7879ad529d9243b!8m2!3d49.6491065!4d5.9632385';
  };

  const handleLoad = () => {
    const $loader = document.querySelector(`.loader`);
    const $loaderImage = document.querySelector(`.loader__image`);
    const $loaderAnimation = document.querySelector(`.loading`);
    const $hiddenWrapper = document.querySelector(`.hidden__wrapper`);
    $loader.style.height = '100%';

    console.log($loader);
    setTimeout(() => {
      $loader.className += ' hidden';
      $loader.style.height = '94rem';
    }, 800);
    setTimeout(() => {
      $loaderImage.className += ' hidden__logo';
    }, 700);
    setTimeout(() => {
      $loaderAnimation.className += ' hidden__animation';
    }, 600);
    setTimeout(() => {
      $hiddenWrapper.style.display = 'block';
      $hiddenWrapper.style.animation = 'fadeIn 0.5s';
      $hiddenWrapper.style.animationFillMode = 'forwards';
    }, 1800);
  };

  const init = () => {

    loader();
    setInterval(() => {
      changingImages();
    }, 9000);
    burgerMenu();
    const $googleMaps = document.querySelector(`.google__maps__map`);
    if ($googleMaps) {
      $googleMaps.addEventListener('click', clickMaps);
    }


  };
  init();
}
