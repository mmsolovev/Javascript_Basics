
/*
Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1 Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
2 Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 или в
дополнительных видео в материалах урока.
*/

'use strict';

const prods = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
        "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let photo_prods = prods.filter(product => 'photos' in product && product.photos.length > 0);
console.log(photo_prods);

let price_prods = prods.sort(function(product1, product2) {
    return product1.price - product2.price;
})
console.log(price_prods)
