import $ from 'jquery';
import "./app1.css";

const $button1 = $('#add1');
const $button2 = $('#minus1');
const $button3 = $('#mul2');
const $button4 = $('#divide2');
const $number = $('#number');
let n = localStorage.getItem("n")
$number.text(n || 100);

$button1.on('click', () => {
    console.log("111")
    let n = parseInt($number.text());
    console.log(n)
    n += 1;
    localStorage.setItem("n", n)
    $number.text(n)
    console.log(n)
});
$button2.on('click', () => {
    let n = parseInt($number.text());
    n -= 1;
    localStorage.setItem("n", n)
    $number.text(n)
});
$button3.on('click', () => {
    let n = parseInt($number.text());
    n *= 2;
    localStorage.setItem("n", n)
    $number.text(n)
});
$button4.on('click', () => {
    let n = parseInt($number.text());
    n /= 2;
    localStorage.setItem("n", n)
    $number.text(n)
})