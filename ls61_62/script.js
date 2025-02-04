console.log(' Виконайте завдання №1 із задачника в рівні 9.1 https://code.mu/ru/javascript/tasker/stager/9/10/')
console.log('Дана таблица. Юзер кликает по очереди на две ячейки, выделяя их. Сделайте так, чтобы красным цветом выделились все ячейки, расположенные по порядку между теми, на которые кликнул юзер.')


function generateTable(rows, cols, tableDOM) {
    for (let tr = 1; tr <= rows; tr++) {
        const newTr = document.createElement('tr');

        for (let td = 1; td <= cols; td++) {
            const newTd = document.createElement('td');
            newTd.innerHTML = `<div>${tr}.${td}</div>`;
            newTd.dataset.row = tr;
            newTd.dataset.col = td;
            newTd.onclick = trackClick;
            newTr.appendChild(newTd);
        }

        tableDOM.appendChild(newTr);
    }
}

let arrPoints = [];

function trackClick(event) {
    const { row, col } = event.currentTarget.dataset;
    const point = [row, col];

    if (arrPoints.length === 1 && (arrPoints[0][0] !== point[0] && arrPoints[0][1] !== point[1])) {
       
        reset();
        arrPoints = [point];
    } else if (arrPoints.length < 2) {
        arrPoints.push(point);
        if (arrPoints.length === 2) redColorLine();
    } else {
        reset();
        arrPoints = [point];
    }
}

function redColorLine() {
    if (arrPoints.length < 2) return;

    let [[r1, c1], [r2, c2]] = arrPoints;

    if (r1 === r2) { 
        let [minC, maxC] = [Math.min(c1, c2), Math.max(c1, c2)];
        document.querySelectorAll(`td[data-row="${r1}"]`).forEach(td => {
            let c = td.dataset.col;
            if (c >= minC && c <= maxC) td.classList.add('redline');
        });
    } else if (c1 === c2) { 
        let [minR, maxR] = [Math.min(r1, r2), Math.max(r1, r2)];
        document.querySelectorAll(`td[data-col="${c1}"]`).forEach(td => {
            let r = td.dataset.row;
            if (r >= minR && r <= maxR) td.classList.add('redline');
        });
    } else {
        reset(); 
    }
}

function reset() {
    document.querySelectorAll('.redline').forEach(td => td.classList.remove('redline'));
}

const tableDOM = document.getElementById('tb');
generateTable(5, 5, tableDOM);
