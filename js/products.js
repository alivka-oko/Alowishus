let products = [

    {
        img: "images/products/1.png",
        name: "Эспрессо",
        desc: "Классический эспрессо с ароматным вкусом и густой пенкой. Идеальное утреннее напиток.",
        price: 150
    },

    {
        img: "images/products/2.png",
        name: "Айс-кофе",
        desc: "Освежающий летний напиток со льдом, эспрессо и молоком. Идеально для жаркой погоды.",
        price: 200
    },

    {
        img: "images/products/3.png",
        name: "Латте",
        desc: "Нежное сочетание эспрессо, молока и воздушной пенки. Идеальное утешение в течение дня.",
        price: 180
    },

    {
        img: "images/products/4.png",
        name: "Капучино",
        desc: "Классическое сочетание эспрессо, молока и густой пенки. Идеально для утреннего ритуала.",
        price: 170
    },

    {
        img: "images/products/5.png",
        name: "Мокка",
        desc: "Вкусный и насыщенный напиток c добавлением шоколада или какао. Утонченный вкус и аромат.",
        price: 190
    },

    {
        img: "images/products/6.png",
        name: "Флэт Уайт",
        desc: "Нежное сочетание эспрессо и молочной пенки. Идеальное утреннее настроение.",
        price: 160
    },
    {
        img: "images/products/7.png",
        name: "Капучино Бьянко",
        desc: "Капуччино c добавлением белого шоколада, обволакивающий и нежный вкус. Роскошный выбор.",
        price: 220
    },

    {
        img: "images/products/8.png",
        name: "Фраппе",
        desc: "Освежающий напиток с эспрессо, молоком, льдом и сиропом. Идеально в жаркий день.",
        price: 210
    }

];


let swiper_products = document.getElementById('swiper-products');

for (let i = 0; i < products.length; i++) {
    let swiper_slide = document.createElement('div');
    swiper_slide.setAttribute('class', 'swiper-slide');

    let shop__card = document.createElement('div');
    shop__card.setAttribute('class', 'shop__card');
    let card__top = document.createElement('div');
    card__top.setAttribute('class', 'card__top');
    let product_image = document.createElement('img');
    product_image.setAttribute('src', products[i].img);
    product_image.setAttribute('class', 'card__img');

    let span_variant = document.createElement('span');
    span_variant.setAttribute('class', 'card__variant');
    span_variant.innerHTML = `#${i + 1} Вариант`;

    let title = document.createElement('h3');
    title.setAttribute('class', 'card__title');
    title.innerHTML = products[i].name;


    card__top.appendChild(product_image);
    card__top.appendChild(span_variant);
    card__top.appendChild(title);
    shop__card.appendChild(card__top);

    product__description = document.createElement('p');
    product__description.setAttribute('class', 'card__description');
    product__description.innerHTML = products[i].desc;

    shop__card.appendChild(product__description);

    let card__bottom = document.createElement('div');
    card__bottom.setAttribute('class', 'card__bottom');
    let product__price = document.createElement('p');
    product__price.setAttribute('class', 'card__price');
    product__price.innerHTML = `${products[i].price} ₽`;

    let btn = document.createElement('button');
    btn.setAttribute('class', 'dark-button card__button');
    btn.innerHTML = 'Заказать';

    card__bottom.appendChild(product__price);
    card__bottom.appendChild(btn);
    shop__card.appendChild(card__bottom);
    swiper_slide.appendChild(shop__card);
    swiper_products.appendChild(swiper_slide);
}


