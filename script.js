// const pc = {
//    noun: 'Ryzen 5',
//    videoCard: 'rx570',
//    ram: '16gb'
// }


// const phone = prompt('Введите марку телефона');
// const model = prompt('Введите модель');
// const adjective = {
//    youHave: phone,
//    models: model
// }


// const phone = prompt('Введите марку телефона');
// const model = prompt('Введите модель');
// const adjective = {
//    youHave: phone,
//    models: model
// }
// const memory = prompt('Введите количествко памяти телефона');
// const adjective1 = {
//    youHave: phone,
//    models: model,
//    retention: memory
// }


// const body = {
//    tagName: "body",
//    children: [
//       {
//          tagName: "div",
//          children: [
//             {
//                tagName: "span",
//                children: ["Enter a data please:"],
//                tagName: "br",
//                tagName: "input",
//                attrs: {
//                   id: "name"
//                },
//                tagName: "input",
//                attrs: {
//                   id: "surname"
//                },
//             }
//          ],
//          tagName: "div",
//          children: [
//             {
//                tagName: "button",
//                attrs: {
//                   id: "ok"
//                },
//                children: ["OK"],
//                tagName: "button",
//                attrs: {
//                   id: "cancel"
//                },
//                children: ["Cancel"]
//             }
//          ]
//       }
//    ]
// };


// const body = {
//    tagName: 'body',
//    children: [
//       {
//          tagName: 'div',
//          parent: null,
//          children: [
//             {
//                tagName: 'span',
//                parent: null,
//                children: ['Enter a data please:']
//             },
//             {
//                tagName: 'br',
//                parent: null,
//                children: []
//             },
//             {
//                tagName: 'input',
//                parent: null,
//                attrs: {
//                   type: 'text',
//                   id: 'name'
//                },
//                children: []
//             },
//             {
//                tagName: 'input',
//                parent: null,
//                attrs: {
//                   type: 'text',
//                   id: 'surname'
//                },
//                children: []
//             }
//          ]
//       },
//       {
//          tagName: 'div',
//          parent: null,
//          children: [
//             {
//                tagName: 'button',
//                parent: null,
//                attrs: {
//                   id: 'ok'
//                },
//                children: ['OK']
//             },
//             {
//                tagName: 'button',
//                parent: null,
//                attrs: {
//                   id: 'cancel'
//                },
//                children: ['Cancel']
//             }
//          ]
//       }
//    ]
// };
// // Присвоєння властивості parent кожному тегу
// htmlTree.children.forEach(function (child) {
//    child.parent = htmlTree;
//    if (child.children) {
//       child.children.forEach(function (grandchild) {
//          grandchild.parent = child;
//       });
//    }
// });
// // Перевірка, чи коректно встановлено властивість parent для тегу з id='surname'
// console.log(htmlTree.children[0].children[3].parent.tagName); // 'div'


// // Получаем значения атрибута от пользователя
// var attrValue = prompt('Enter a value for the attribute:');
// // Получаем ссылку на елемент за его div
// var okButton = document.getElementById('ok');
// // Меняем или добовляем атрибут
// okButton.setAttribute('new-attr', attrValue);


// const { children: [{ children: [span] }] } = body;
// console.log(span);
// const { children: [{ children: [, , , { children: [text] }] }] } = body;
// console.log(text);
// const { children: [{ children: [, , , { attrs: { id: surnameId } }] }] } = body;
// console.log(surnameId);


// let arr = [1, 2, 3, 4, 5, "a", "b", "c"];
// let [odd1, even1, odd2, even2, odd3, ...letters] = arr.filter(item => typeof item !== "undefined" && typeof item !== "string"); //Ця перевірка здійснюється, оскільки масив arr містить числа та рядки, і нам потрібно відфільтрувати всі елементи, які не є числами.
// console.log(odd1, even1, odd2, even2, odd3); //1 3 5 2 4
// console.log(letters); //["a", "b", "c"]


// let arr = [1, "abc"];
// let [number, [s1, s2, s3]] = [arr[0], [...arr[1]]];


// let obj = {
//    name: 'Ivan',
//    surname: 'Petrov',
//    children: [{ name: 'Maria' }, { name: 'Nikolay' }]
// };
// let { name, surname } = obj;
// let { children: [{ name: childName }] } = obj;
// let { children } = obj;
// let childNames = children.map(child => child.name);


// let arr = [1, 2, 3, 4, 5, 6, 7, 10];
// let [a, b] = arr;
// let length = arr.length;
// console.log(a);
// console.log(b);
// console.log(length);


// const pc = {
//    noun: 'Ryzen 5',
//    videoCard: 'rx570',
//    ram: '16gb'
// }
// const pcCopi = { ...pc };
// console.log(pcCopi);


// const url = 'https://open.er-api.com/v6/latest/USD';
// fetch(url)
//    .then(res => res.json())
//    .then(data => {
//       const rates = data.rates;
//       const inputCurrency = prompt('Введіть вхідну валюту (наприклад, USD):').toUpperCase();
//       const outputCurrency = prompt('Введіть валюту, в яку відбувається конвертація (наприклад, EUR):').toUpperCase();
//       const amount = parseFloat(prompt('Введіть суму у вхідній валюті:'));

//       if (isNaN(amount)) {
//          console.log('Неправильний формат введеної суми');
//       } else if (!rates[inputCurrency]) {
//          console.log('Вхідна валюта не підтримується');
//       } else if (!rates[outputCurrency]) {
//          console.log('Валюта для конвертації не підтримується');
//       } else {
//          const result = (amount / rates[inputCurrency]) * rates[outputCurrency];
//          alert(`${amount} ${inputCurrency} = ${result.toFixed(2)} ${outputCurrency}`);
//       }
//    })
//    .catch(error => console.log(error));


// const url = 'https://open.er-api.com/v6/latest/USD';
// fetch(url)
//    .then(res => res.json())
//    .then(data => {
//       const rates = data.rates;
//       const currencySelect = document.createElement('select');

//       for (const currency in rates) {
//          const option = document.createElement('option');
//          option.text = currency;
//          currencySelect.add(option);
//       }

//       document.body.appendChild(currencySelect);
//    })
//    .catch(error => console.log(error));


// const car = {
//    "Name": "chevrolet chevelle malibu",
//    "Cylinders": 8,
//    "Displacement": 307,
//    "Horsepower": 130,
//    "Weight_in_lbs": 3504,
//    "Origin": "USA",
//    "in_production": false
// };
// const form = document.createElement("form");
// for (const key in car) {
//    const label = document.createElement("label");
//    label.textContent = key;
//    const input = document.createElement("input");
//    input.type = typeof car[key] === "boolean" ? "checkbox" : "text";
//    input.value = car[key];
//    input.name = key;
//    form.appendChild(label);
//    form.appendChild(input);
//    form.appendChild(document.createElement("br"));
// }
// document.body.appendChild(form);


// const columns = [];
// persons.forEach(person => {
//    Object.keys(person).forEach(key => {
//       if (!columns.includes(key)) {
//          columns.push(key);
//       }
//    });
// });
// // Створити заголовок таблиці
// const table = document.createElement('table');
// const headerRow = document.createElement('tr');
// columns.forEach(column => {
//    const headerCell = document.createElement('th');
//    headerCell.textContent = column;
//    headerRow.appendChild(headerCell);
// });
// table.appendChild(headerRow);
// // Відобразити дані у таблиці
// persons.forEach(person => {
//    const dataRow = document.createElement('tr');
//    columns.forEach(column => {
//       const dataCell = document.createElement('td');
//       dataCell.textContent = person[column] || '-';
//       dataRow.appendChild(dataCell);
//    });
//    table.appendChild(dataRow);
// });
// // Додати таблицю на сторінку
// document.body.appendChild(table);


const currencies = ["USD", "EUR", "UAH", "PLN"];
const rates = [
   [1, 1.03, 36.82, 4.94],
   [0.97, 1, 35.80, 4.81],
   [0.027, 0.028, 1, 0.13],
   [0.2, 0.21, 7.45, 1]
];
const table = document.createElement("table");
const thead = document.createElement("thead");
const trHead = document.createElement("tr");
trHead.appendChild(document.createElement("th"));
currencies.forEach((currency) => {
   const th = document.createElement("th");
   th.textContent = currency;
   trHead.appendChild(th);
});
thead.appendChild(trHead);
table.appendChild(thead);
const tbody = document.createElement("tbody");
currencies.forEach((currency, index) => {
   const trBody = document.createElement("tr");
   const th = document.createElement("th");
   th.textContent = currency;
   trBody.appendChild(th);
   rates[index].forEach((rate) => {
      const td = document.createElement("td");
      td.textContent = rate.toFixed(2);
      trBody.appendChild(td);
   });
   tbody.appendChild(trBody);
});
table.appendChild(tbody);
document.body.appendChild(table);
