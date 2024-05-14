function toggleCollapse(elementId) 
{
    var content = document.getElementById(elementId);
    if (content.style.display === "none") 
    {
        content.style.display = "flex"; 
    } 
    else 
    {
        content.style.display = "none"; 
    }
}

//Выкидной блок

function disableSelection() 
{
    if (typeof target.onselectstart !== "undefined")
        target.onselectstart = function () 
        {
            return false;
        };
    else if (typeof target.style.MozUserSelect !== "undefined")
        target.style.MozUserSelect = "none";
    else
        target.onmousedown = function () 
        {
            return false;
        };
    target.style.cursor = "default";
}



document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider .slider-line');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider .slider-line').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}
})


window.onload = function()
{
    toggleCollapse();
    disableSelection();
}

     // Инициализация суммы ставок
     var totalBet = 0;
    
     function betera() {
         // Функция для обновления ставок
         function updateBet() {
             // Получение значения ставки из формы
             var bet = document.getElementById("formula").value;
     
             // Проверка, является ли ставка числом
             if (!isNaN(bet) && bet.trim() != "") {
                 // Добавление ставки к общей сумме
                 totalBet += Number(bet);
     
                 // Вывод общей суммы ставок в блок "info"
                 document.getElementById("info").innerHTML = "Общая сумма ставок: " + totalBet;
     
                 // Вывод текущей ставки в блок "infos"
                 document.getElementById("infos").innerHTML = "Текущая ставка: " + bet;
             } else {
                 // Вывод сообщения об ошибке, если введено не число
                 document.getElementById("info").innerHTML = "Пожалуйста, введите число.";
                 document.getElementById("infos").innerHTML = "Пожалуйста, введите число.";
             }
     
             // Очистка формы
             document.getElementById("formula").value = "";
         }
     
         // Добавление обработчика событий для формы
         document.getElementById("formula").addEventListener("change", updateBet);
     }
 
     function timer() {
         var nowDate = new Date();
         var achiveDate = new Date(2024,4,16,0,0,0); // Задаем новую дату и время для обратного отсчета
         var result = (achiveDate - nowDate)+1000;
         if (result < 0) {
             var elmnt = document.getElementById('timer');
             elmnt.innerHTML = ' - : - - : - - : - - ';
             return undefined;
         }
         var seconds = Math.floor((result/1000)%60);
         var minutes = Math.floor((result/1000/60)%60);
         var hours = Math.floor((result/1000/60/60)%24);
         var days = Math.floor(result/1000/60/60/24);
         if (seconds < 10) seconds = '0' + seconds;
         if (minutes < 10) minutes = '0' + minutes;
         if (hours < 10) hours = '0' + hours;
         var elmnt = document.getElementById('timer');
         elmnt.innerHTML = days + ':' + hours + ':' + minutes + ':' + seconds;
         setTimeout(timer, 1000);
     }
     window.onload = function() {
         timer();
         betera();
     }

     document.addEventListener('DOMContentLoaded', function()
     {
         let cart = {
             items: [],
             addItem: function(item) {
                 // Проверяем, есть ли товар уже в корзине
                 if (!this.items.some(i => JSON.stringify(i) === JSON.stringify(item))) 
                    {
                     this.items.push(item);
                     localStorage.setItem('cart', JSON.stringify(this.items));
                 }
             },
             removeItem: function(item) {
                 // Удаляем товар из корзины
                 this.items = this.items.filter(i => JSON.stringify(i) !== JSON.stringify(item));
                 localStorage.setItem('cart', JSON.stringify(this.items));
             },
             getItems: function() {
                 return JSON.parse(localStorage.getItem('cart')) || [];
             }
         };
 
         // Создаем ассоциативный массив с данными о товарах
         let itemsData = {
             'add1': {'название товара': 'Товар 1', 'цена': '100', 'номер лота': '1', 'продавец': 'Иван'},
             'add2': {'название товара': 'Товар 2', 'цена': '200', 'номер лота': '2', 'продавец': 'Алексей'},
             'add3': {'название товара': 'Товар 3', 'цена': '300', 'номер лота': '3', 'продавец': 'Мария'},
             'add4': {'название товара': 'Товар 4', 'цена': '400', 'номер лота': '4', 'продавец': 'Сергей'},
             'add5': {'название товара': 'Товар 5', 'цена': '500', 'номер лота': '5', 'продавец': 'Анна'},
             'add6': {'название товара': 'Товар 6', 'цена': '600', 'номер лота': '6', 'продавец': 'Владимир'},
             'add7': {'название товара': 'Товар 7', 'цена': '700', 'номер лота': '7', 'продавец': 'Ольга'},
             'add8': {'название товара': 'Товар 8', 'цена': '800', 'номер лота': '8', 'продавец': 'Петр'}
         };
 
         // Добавляем события click на кнопки для добавления элементов
         for(let id in itemsData) {
             document.getElementById(id).addEventListener('click', function() {
                 cart.addItem(itemsData[id]);
             });
         }
 
         // Добавляем события click на кнопки для удаления элементов
         for(let i = 1; i <= 8; i++) {
             document.getElementById('del' + i).addEventListener('click', function() {
                 cart.removeItem(itemsData['add' + i]);
             });
         }
     })

document.addEventListener('DOMContentLoaded', function()
{
    let cart = {
        getItems: function() {
            return JSON.parse(localStorage.getItem('cart')) || [];
        }
    };

    // Добавляем событие click на кнопку для отображения корзины
    document.getElementById('button').addEventListener('click', function() {
        // Получаем данные из Local Storage
        let items = cart.getItems();

        // Выводим данные на страницу
        let output = '';
        for(let i = 0; i < items.length; i++) {
            output += `<p>Название товара: ${items[i]['название товара']}, Цена: ${items[i]['цена']}, Номер лота: ${items[i]['номер лота']}, Продавец: ${items[i]['продавец']}</p>`;
        }

        // Вставляем данные на страницу
        document.getElementById('cart').innerHTML = output;
    });
})
