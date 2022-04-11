"use strict";

const select = document.querySelector('select');
select.options[0].selected = true;
var btnAttempts = document.querySelectorAll('.attempt');
var cellPoints = document.querySelector('.points');
btnAttempts.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    var data = '';

    if (!isNaN(Number(e.target.value[0]))) {
      data = Number(e.target.value[0]) - 1;
      cellPoints.textContent = 'Очков за попытку';
    } else {
      data = '';
      cellPoints.textContent = 'Сумма очков';
    }

    fetch("./modules/ajax.php", {
      method: 'POST',
      body: data
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      var contentTable = document.querySelector('.content');
      contentTable.innerHTML = '';
      data.forEach(function (el, ind) {
        contentTable.innerHTML += "\n<tr>\n<th>".concat(ind + 1, "</th>\n<td>").concat(el.name, "</td>\n<td>").concat(el.city, "</td>\n<td>").concat(el.car, "</td>\n<td>").concat(el.attempts, "</td>\n<td>").concat(el.points, "</td>\n</tr>\n");
      });
    });
  });
});