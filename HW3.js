//1.С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let a = 0;
        while (a <= 100) {
            let check = true;
            for (let i = 2; i < a; i++){
                if (nums%i === 0) {
                    check = false;
                    break;
                }
            }
            if (check) console.log(a);
            a++;
        }
/*3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
Выглядеть это должно так: for(…){// здесь пусто}*/

for (i = 1, i <= 9, consol.log(i++))


/*4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, 
только у вашей пирамиды должно быть 20 рядов, а не 5.*/
let row = 'x';
        for (let i = 0; i < 20; i++){
            console.log(row);
            row += 'x';
        }

/*2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины. */

const ProductsBasket = [
    {name: 'bread', price: 60}, {name: 'milk', price: 110}, {name: 'flour', price: 90}, {name: 'sugar', price: 56}
    ]
function countBasketPrice(ProductsBasket) {
    let BasketPrice = 0;
    for (let prod of ProductsBasket){
        BasketPrice += prod.price;
    }
    return BasketPrice;
}
console.log(ProductsBasket)
console.log("Стоимость корзины: " + countBasketPrice(ProductsBasket) + "руб."); // Стоимость корзины: 316руб.


/*ProductsBasket.push({name: 'apple', price: 80});
ProductsBasket.push({name: 'white vine', price: 500});
console.log(ProductsBasket)
console.log("Стоимость корзины: " + countBasketPrice(ProductsBasket) + "руб.");
{ name: 'bread', price: 60 },
  { name: 'milk', price: 110 },
  { name: 'flour', price: 90 },
  { name: 'sugar', price: 56 },
  { name: 'apple', price: 80 },
  { name: 'white vine', price: 500 }
]
Стоимость корзины: 896руб.*/