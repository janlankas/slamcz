let uvodniImg = document.querySelector('.main-img');
let header = document.querySelector(".detail-container h3");

//SIDEBAR PICK 
let item0 = document.querySelector('.item0');
let item1 = document.querySelector('.item1');
let item2 = document.querySelector('.item2');
let item3 = document.querySelector('.item3');
let item4 = document.querySelector('.item4');
let item5 = document.querySelector('.item5');
let item6 = document.querySelector('.item6');
let item7 = document.querySelector('.item7');
let item8 = document.querySelector('.item8');

//CHANGE OF Nahled sablony
let pick1 = document.querySelector('.pick1')
let pick2 = document.querySelector('.pick2')
let pick3 = document.querySelector('.pick3')


//NKH4
item0.addEventListener("click", () => {
    uvodniImg.src = "img/nkh2/nkh2-uvodni.png";
    pick1.src = "img/nkh2/nkh2-uvodni.png";
    pick2.src = "img/nkh2/nkh2-leden.png";
    pick3.style.display = "block"
    pick3.src = "img/nkh2/nkh2-cervenec.png";
    header.innerText = "NKH 2"

});
//NKH4
item1.addEventListener("click", () => {
    uvodniImg.src = "img/nkh4/nkh4-uvodni.png";
    pick1.src = "img/nkh4/nkh4-uvodni.png";
    pick2.src = "img/nkh4/nkh4-leden.png";
    pick3.style.display = "block"
    pick3.src = "img/nkh4/nkh4-cervenec.png";
    header.innerHTML = "NKH 4"



});

//NKH5
item2.addEventListener("click", () => {
    uvodniImg.src = "img/nkh5/nkh5-uvodni.png";
    pick1.src = "img/nkh5/nkh5-uvodni.png";
    pick2.src = "img/nkh5/nkh5-leden.png";
    pick3.style.display = "block"
    pick3.src = "img/nkh5/nkh5-cervenec.png";
    header.innerHTML = "NKH 5"


});


//NKH7
item3.addEventListener("click", () => {
    uvodniImg.src = "img/nkh7/nkh7-uvodni.png";
    pick1.src = "img/nkh7/nkh7-uvodni.png";
    pick2.src = "img/nkh7/nkh7-leden.png";
    pick3.style.display = "none"
    header.innerHTML = "NKH 7"
});

//NKV1
item4.addEventListener("click", () => {
    uvodniImg.src = "img/nkv1/nkv1-uvodni.png";
    pick1.src = "img/nkv1/nkv1-uvodni.png";
    pick2.src = "img/nkv1/nkv1-leden.png";
    pick3.style.display = "block"
    pick3.src = "img/nkv1/nkv1-cervenec.png";
    header.innerHTML = "NKV 1"

});


//NKV2
item5.addEventListener("click", () => {
    uvodniImg.src = "img/nkv2/nkv2-uvodni.png";
    pick1.src = "img/nkv2/nkv2-uvodni.png";
    pick2.src = "img/nkv2/nkv2-leden.png";
    pick3.style.display = "block"
    pick3.src = "img/nkv2/nkv2-cervenec.png";
    header.innerHTML = "NKV 2"


});

//NKV3
item6.addEventListener("click", () => {
    uvodniImg.src = "img/nkv3/nkv3-uvodni.png";
    pick1.src = "img/nkv3/nkv3-uvodni.png";
    pick2.src = "img/nkv3/nkv3-leden.png";
    pick3.style.display = "block"
    pick3.src = "img/nkv3/nkv3-prosinec.png";
    header.innerHTML = "NKV 3"

});

//NKV4
item7.addEventListener("click", () => {
    uvodniImg.src = "img/nkv4/nkv4-uvodni.png";
    pick1.src = "img/nkv4/nkv4-uvodni.png";
    pick2.src = "img/nkv4/nkv4-leden.png";
    pick3.style.display = "block"
    pick3.src = "img/nkv4/nkv4-cervenec.png";
    header.innerHTML = "NKV 4"


});

//NKV Adam
item8.addEventListener("click", () => {
    uvodniImg.src = "img/nkv-adam/nkv-adam-uvodni.png";
    pick1.src = "img/nkv-adam/nkv-adam-uvodni.png";
    pick2.src = "img/nkv-adam/nkv-adam-leden.png";
    pick3.style.display = "block"
    pick3.src = "img/nkv-adam/nkv-adam-cervenec.png";
    header.innerHTML = "NKV Adam"

});



