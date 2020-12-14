/*1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, 
десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.*/

const maxNum = 999;
        let digit = {
          number: Math.round(Math.random() * maxNum), 
          units: 0,
          tens: 0,
          hundreds: 0,
        };
        if (digit.number <= 9){
          digit.units = digit.number;
        } else if (digit.number <= maxNum){
          digit.units = Math.floor(digit.number % 10);
          digit.tens = Math.floor(digit.number / 10 % 10);
          digit.hundreds = Math.floor(digit.number / 100 % 10);
        }else {
            digit.number = 0;
            console.log('Введите число в диапазоне от 0 - 999');
        }
        console.log(digit);
/*2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу. */
        const BasketPrice = {
          products: ['milk', 'bread', 'sugar'],
          price: [110, 50, 56],
          countBasketPrice: function() {
            const summa = (BasketPrice.price).reduce((total, a) => total + a, 0);
            console.log(`Сумма вашей корзины - ${summa}`) 

              }
          }

    console.log(BasketPrice.products)
    console.log(BasketPrice.price)
    console.log(BasketPrice.countBasketPrice())
    console.log('----Добавим продукты.----')
    BasketPrice.products.push('wine')
    BasketPrice.price.push(900)
    console.log(BasketPrice.products)
    console.log(BasketPrice.price)
    console.log(BasketPrice.countBasketPrice())