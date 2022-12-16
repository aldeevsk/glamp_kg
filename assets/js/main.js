(function () {
    function mobileNav() {
        const showButton = document.querySelector('.mobile-nav__button')
        const closeButton = document.querySelector('.close-button')
        const nav =document.querySelector('.mobile-nav')
        showButton.addEventListener('click', () => {
            nav.classList.add('active')
        })
        closeButton.addEventListener('click', () => {
            nav.classList.remove('active')
        })
    }
    mobileNav()

    tns({
      container: '.promo__slider',
      items: 1,
      slideBy: 1,
      autoplay: true,
      nav: false,
      controls: true,
      prevButton: '.prev',
      nextButton: '.next',
      autoplayButtonOutput: false,
      speed: 1500,
      mouseDrag: true,
    })
    tns({
      container: '#domes .slider',
      items: 1,
      slideBy: 1,
      autoplay: false,
      nav: false,
      controls: true,
      prevButton: '.domes-prev',
      nextButton: '.domes-next',
      autoplayButtonOutput: false,
      speed: 800,
      mouseDrag: true,
    })

    function zoom() {
        const images = document.querySelectorAll('[data-type="zoomable"]')
        console.log(images)
        images.forEach(image => {
            image.addEventListener('click', () => {
                const src = image.src
                const modal = document.createElement('div')
                modal.classList.add('modal')
                modal.innerHTML = `
                <div class="modal__content">
                    <button class="modal__close-button">
                        <img src="./assets/icons/cross.svg" alt="close-button">
                    </button>
                    <img src="${src}"/>
                </div>
                `
                document.body.append(modal)
                setTimeout(() => {
                    modal.classList.add('active')
                }, 0);
                const closeButton = modal.querySelector('.modal__close-button')
                closeButton.addEventListener('click', () => {
                    modal.classList.remove('active')
                    setTimeout(() => {
                        modal.remove()
                    }, 300);
                })
            })
        })
    }
    zoom()




})()
