const select = document.querySelector('select');
select.options[0].selected = true;
const btnAttempts = document.querySelectorAll('.attempt');
const cellPoints = document.querySelector('.points');

btnAttempts.forEach(btn => {
    btn.addEventListener('click', e => {
        let data = '';

        if (!isNaN(Number(e.target.value[0]))) {
            data = Number(e.target.value[0]) - 1;
            cellPoints.textContent = 'Очков за попытку'
        } else {
            data = '';
            cellPoints.textContent = 'Сумма очков'
        }

        fetch(`./modules/ajax.php`, {
            method: 'POST',
            body: data
        }).then(res => res.json()).then(data => {

            const contentTable = document.querySelector('.content')
            contentTable.innerHTML = '';

            data.forEach((el, ind) => {
                contentTable.innerHTML += `
                    <tr>
                        <th>${ind + 1}</th>
                        <td>${el.name}</td>
                        <td>${el.city}</td>
                        <td>${el.car}</td>
                        <td>${el.attempts}</td>
                        <td>${el.points}</td>
                    </tr>
                `
            })
        })
    })
})
