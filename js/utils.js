window.addEventListener("DOMContentLoaded", () => {
    const bodyTheme = document.querySelector('body');
    const colorScheme = ls.getItem('theme') || (window.getComputedStyle(bodyTheme).colorScheme) ;
    body.style.colorScheme = theme;
    const lightImg = doc.querySelector('.header__cont-menu_btn-light');
    const darkImg = doc.querySelector('.header__cont-menu_btn-dark');
    if (colorScheme == 'light') {
        darkImg.classList.add('hidden');
        lightImg.classList.remove('hidden');
    }
    else if (colorScheme == 'dark') {
        darkImg.classList.remove('hidden');
        lightImg.classList.add('hidden');
    }
    ls.setItem('theme', colorScheme);
});

async function processData() {
  try {
    const response = await fetch('./js/main.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка:", error);
  }
}; 

function productCard(info, id) {
    const card = doc.createElement('div');
    card.className = 'card';
    card.setAttribute('onclick', `openProduct(${id})`);
    card.innerHTML = `
        <div class="card__image">
            <img src="${info.image_url}" alt="Laptop Image">
        </div>
        <div class="card__info">
            <div class="card__info-name">
                <p class="card__info-name_brand">${info.brand}</p>
                <h3 class="card__info-name_model">${info.name}</h3>
            </div>
            <div class="card__info-rating">
                <div class="card__info-rating_stars">
                    <img src="./assets/Star.svg" alt="Star">
                    <img src="./assets/Star.svg" alt="Star">
                    <img src="./assets/Star.svg" alt="Star">
                    <img src="./assets/Star.svg" alt="Star">
                    <img src="./assets/Star.svg" alt="Star">
                </div>
                <span class="card__info-rating_reviews">${info.rating} (${info.review_count})</span>
            </div>
            <div class="card__info-specs">
                <span class="card__info-specs_item">${info.specs.ram}</span>
                <span class="card__info-specs_item">${info.specs.storage}</span>
            </div>
            <div class="card__info-price">
                <span class="card__info-price_new">${info.price} ₽</span>
                <span class="card__info-price_old">${info.original_price} ${(info.original_price != '') ? "₽" : ""}</span>
            </div>
        </div>`
    return card;
};

function product(info, category) {
    const product = doc.createElement('div');
    product.className = 'product';
    product.innerHTML = `
        <div class="product__cont">
            <button class="product__cont-back">Назад в каталог</button>
            <div class="product__cont-main">
                <div class="product__cont-main_first">
                    <img class="product__cont-main_first-image" src="${info.image_url}" alt="Photo">
                    <button class="product__cont-main_first-btn">В корзину</button>
                </div>
                <div class="product__cont-main_info">
                    <div class="product__cont-main_info-bc">
                        <span class="product__cont-main_info-bc_brand">${info.brand}</span>
                        <span class="product__cont-main_info-bc_splinter">·</span>
                        <span class="product__cont-main_info-bc_category">${category}</span>
                    </div>
                    <div class="product__cont-main_info-name">${info.name}</div>
                    <div class="product__cont-main_info-rating">
                        <div class="product__cont-main_info-rating_stars">
                            <img src="./assets/Star.svg" alt="Star">
                            <img src="./assets/Star.svg" alt="Star">
                            <img src="./assets/Star.svg" alt="Star">
                            <img src="./assets/Star.svg" alt="Star">
                            <img src="./assets/Star.svg" alt="Star">
                        </div>
                        <span class="product__cont-main_info-rating_count">${info.rating}</span>
                        <span class="product__cont-main_info-rating_reviews">(${info.review_count} reviews)</span>
                    </div>
                    <div class="product__cont-main_info-price">
                        <span class="product__cont-main_info-price_new">${info.price} ₽</span>
                        <span class="product__cont-main_info-price_original">${info.original_price} ${(info.original_price != '') ? "₽" : ""}</span>
                    </div>
                    <p class="product__cont-main_info-description">${info.description}</p>
                    <div class="product__cont-main_info-specs">
                        <div class="product__cont-main_info-specs_head">
                            <h3 class="product__cont-main_info-specs_head-title">Характеристики</h3>
                        </div>
                        <div class="product__cont-main_info-specs_list">
                            <div class="product__cont-main_info-specs_list-item">
                                <div class="product__cont-main_info-specs_list-item_icon">
                                    <img src="./assets/CPU.svg" alt="CPU">
                                </div>
                                <div class="product__cont-main_info-specs_list-item_text">
                                    <span class="product__cont-main_info-specs_list-item_text-spec">Процессор</span>
                                    <span class="product__cont-main_info-specs_list-item_text-info">${info.specs.cpu}</span>
                                </div>
                            </div>
                            <div class="product__cont-main_info-specs_list-item">
                                <div class="product__cont-main_info-specs_list-item_icon">
                                    <img src="./assets/memory.svg" alt="CPU">
                                </div>
                                <div class="product__cont-main_info-specs_list-item_text">
                                    <span class="product__cont-main_info-specs_list-item_text-spec">Память</span>
                                    <span class="product__cont-main_info-specs_list-item_text-info">${info.specs.ram}</span>
                                </div>
                            </div>
                            <div class="product__cont-main_info-specs_list-item">
                                <div class="product__cont-main_info-specs_list-item_icon">
                                    <img src="./assets/ssd.svg" alt="CPU">
                                </div>
                                <div class="product__cont-main_info-specs_list-item_text">
                                    <span class="product__cont-main_info-specs_list-item_text-spec">Хранилище</span>
                                    <span class="product__cont-main_info-specs_list-item_text-info">${info.specs.storage}</span>
                                </div>
                            </div>
                            <div class="product__cont-main_info-specs_list-item">
                                <div class="product__cont-main_info-specs_list-item_icon">
                                    <img src="./assets/monitor.svg" alt="CPU">
                                </div>
                                <div class="product__cont-main_info-specs_list-item_text">
                                    <span class="product__cont-main_info-specs_list-item_text-spec">Экран</span>
                                    <span class="product__cont-main_info-specs_list-item_text-info">${info.specs.display}</span>
                                </div>
                            </div>
                            <div class="product__cont-main_info-specs_list-item">
                                <div class="product__cont-main_info-specs_list-item_icon">
                                    <img src="./assets/battery.svg" alt="CPU">
                                </div>
                                <div class="product__cont-main_info-specs_list-item_text">
                                    <span class="product__cont-main_info-specs_list-item_text-spec">Батарея</span>
                                    <span class="product__cont-main_info-specs_list-item_text-info">${info.specs.battery}</span>
                                </div>
                            </div>
                            <div class="product__cont-main_info-specs_list-item">
                                <div class="product__cont-main_info-specs_list-item_icon">
                                    <img src="./assets/weight.svg" alt="CPU">
                                </div>
                                <div class="product__cont-main_info-specs_list-item_text">
                                    <span class="product__cont-main_info-specs_list-item_text-spec">Вес</span>
                                    <span class="product__cont-main_info-specs_list-item_text-info">${info.specs.weight}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    const backBtn = product.querySelector('.product__cont-back');
    backBtn.addEventListener('click', ()=>{
        product.style.opacity = '0';
        product.style.transform = 'scale(0.9)';
        setTimeout(()=>{
            product.remove();
        }, 300);
        body.style.overflow = 'auto';
    });
    return product;
};

function openProduct(id) {
    processData().then(array => {
        const laptop = array.products.find(element => element.id == id);
        const category = array.categories.find(cat => cat.id == laptop.category_id);
        const produck = product(laptop, category.name);
        produck.style.opacity = '0';
        produck.style.transform = 'scale(0.9)';
        body.appendChild(produck)
        setTimeout(()=>{
            produck.style.opacity = '1';
            produck.style.transform = 'scale(1)';
        }, 100);
    });
    body.style.overflow = 'hidden';
};


processData().then(array => {
    if (doc.querySelector('title').textContent == "Аркейн") {
        array.products.forEach(element => {
            if (element.is_new == true) {
                const card = productCard(element, element.id);
                contNew.appendChild(card);
            }
        });
        array.products.forEach(element => {
            if (element.is_featured == 1) {
                const card = productCard(element, element.id);
                contFeat.appendChild(card);
            }
        });
    } else if (doc.querySelector('title').textContent == "Аркейн Каталог") {
        array.products.forEach(element => {
            const card = productCard(element, element.id);
            catalog.appendChild(card);
        });
    } else { return }
});

function themeChange() {
    let scheme = ls.getItem('theme') || 'light';
    const el = doc.querySelector('body');
    const lightImg = doc.querySelector('.header__cont-menu_btn-light');
    const darkImg = doc.querySelector('.header__cont-menu_btn-dark')
    let changedTheme;
    if (scheme == 'light') {
        changedTheme = 'dark'
        darkImg.classList.remove('hidden');
        lightImg.classList.add('hidden')
    }
    else {
        changedTheme = 'light'
        darkImg.classList.add('hidden');
        lightImg.classList.remove('hidden')
    }
    ls.setItem('theme', changedTheme);
    el.style.colorScheme = changedTheme; 
    console.log(changedTheme)
};


// const curtain = document.querySelector('.curtain');
// const links = document.querySelectorAll('a');

// links.forEach(link => {
//     link.addEventListener('click', function(e) {
//         e.preventDefault();

//         const targetUrl = this.href;

//         curtain.classList.add('fadeout');

//         setTimeout(()=>{
//             window.location.href = targetUrl;
//         }, 1000);
//     });
// });

function productCardForCart(id, info) {
    const card = doc.createElement('div');
    card.className = 'cartCard';
    card.setAttribute('onclick', `openProduct(${id})`);
    card.innerHTML = ``;
};

function addToCart(id) {
    
}