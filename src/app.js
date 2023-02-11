/*
* File: app.js
* Author: Kurucz János
* Copyright: 2023, Kurucz János
* Group: Szoft 1/I/E
* Date: 2023-02-11
* Github: https://github.com/KuruczJanos/idomunka.git
* Licenc: GNU GPL
*/
const l_mElem = document.querySelector('#l_m');
const f_nElem = document.querySelector('#f_n');
const n_rpmElem = document.querySelector('#n_rpm');
const calcButton = document.querySelector('#calcButton');
const worktimeElem = document.querySelector('#worktime');

calcButton.addEventListener('click',() => {
    let l_m = Number (l_mElem.value);
    let f_n = Number (f_nElem.value);
    let n_rpm = Number (n_rpmElem.value);
    let worktime = calcworktime (l_m, f_n, n_rpm);
    console.log(worktime);
    worktimeElem.value = worktime + " perc";
});

function calcworktime(l_m, f_n, n_rpm){
    let worktime = (l_m)/(f_n*n_rpm)
    return worktime;
}