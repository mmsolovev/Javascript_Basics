/*
Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/

'use strict';

for (let x = 'x'; x.length <= 20; x += 'x') {
    console.log(x);
};
