var d = 1;
var c = 0;
var cont = document.querySelector('.count');
cont.textContent = 'No. of Task:- ' + c;

function createRow(n, q, p) {
    let tbl = document.querySelector('table');

    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = d;
    d++;

    let td1 = document.createElement('td');
    td1.textContent = n;
    let td2 = document.createElement('td');
    td2.textContent = q;
    let td3 = document.createElement('td');
    td3.textContent = p;
    if (td3.textContent == 'high') {
        td3.style.color = 'red';
    } else if (td3.textContent == 'med') {
        td3.style.color = 'black';
    } else {
        td3.style.color = '#6200EA';
    }

    let td4 = document.createElement('td');
    td4.textContent = 'Mark';
    td4.setAttribute('id', 'status')
    td4.addEventListener('click', toggleTask);

    let td5 = document.createElement('td');
    td5.textContent = 'Delete';
    td5.addEventListener('click', removeFun);

    tr.append(td, td1, td2, td3, td4, td5);
    tbl.appendChild(tr);

    c++;

    cont.textContent = 'No. of Task:- ' + c;


};

function toggleTask(e) {
    let target = e.target.parentNode;
    let tg_val = e.target;

    let tgl = target.classList.toggle('tgle');
    if (tg_val.innerText == 'Mark') {
        tg_val.innerText = 'Completed';
    } else {
        tg_val.innerText = 'Mark';
    }


}

function removeFun(e) {
    c--;
    cont.textContent = 'No. of Task:- ' + c;
    e.target.parentNode.remove();
}
export { createRow }