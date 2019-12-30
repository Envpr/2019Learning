function load() {
    // console.log('welcome');

    // 实现全选box的功能
    var a = $(".btn_nor");
        // $(".btn_nor");
        // document.getElementsByClassName('btn_nor');
    for (var i = 0; i < a.length; i++) {
        // console.log()
        a[i].onchange = fbtn;
    }
    // console.log(a);
    // a.onclick=fbtn;
    // console.log(a.onchange);
    var btn_ca = $("[name='btn_chooseall']");
        // document.getElementsByName('btn_chooseall');
    btn_ca[0].onchange = fbtn1;
    btn_ca[1].onchange = fbtn1;

    // 实现加减号的功能
    var minus = $(".btn_minus");
        // document.getElementsByClassName("btn_minus");
    for (var j = 0; j < minus.length; j++) {
        // console.log('j'+j);
        minus[j].onclick = fminus;
    }
    var plus = $(".btn_plus");
        // document.getElementsByClassName("btn_plus");
    for (var k = 0; k < plus.length; k++) {
        // console.log('k'+k);
        plus[k].onclick = fplus;
    }

    // 实现删除功能
    var delete1 = $(".shopbox6");
        // document.getElementsByClassName("shopbox6");
    for (var m = 0; m < delete1.length-1; m++) {
        // console.log('k'+k);
        delete1[m].children[0].onclick = del;
    }

    // 实现对勾删除功能
    var foot2 = $("#foot02");
    console.log(foot2);
        // document.getElementById("foot02");
    foot2[0].children[0].onclick = totdel;

    // 结算按钮功能
    var bal = $("#balance");
        // document.getElementById("balance");
    bal.onclick=function () {
        // 以后写
    }
}


function gettot() {

    var btn_nor = $(".btn_nor");
        // document.getElementsByClassName('btn_nor');

    var b1 = $("#totalnum");
        // $("#totalnum");
        // document.getElementById("totalnum");
    var b2 = $("#totalprice");
        // $("#totalprice");
        // document.getElementById("totalprice");

    var num= $(".shopbox4");
        // $(".shopbox4");
        // document.getElementsByClassName("shopbox4");
    var numsum=0;
    for (var r = 0; r < num.length; r++) {
        if (btn_nor[r].checked===true){
            numsum+=parseInt(num[r].children[1].value);
        }
    }
    var price = $(".shopbox5");
        // $(".shopbox4");
        // document.getElementsByClassName("shopbox5");
    var pricesum = 0;
    for (var t = 0; t < price.length; t++) {
        if (btn_nor[t].checked===true){
        pricesum += parseFloat(price[t].innerHTML);
    }}

    b1[0].innerHTML =numsum;
    b2[0].innerHTML =pricesum.toFixed(2);

}


function fbtn() {
    var btn_ca = $("[name='btn_chooseall']");
        // document.getElementsByName('btn_chooseall');
    var btn_nor = $(".btn_nor");
        // document.getElementsByClassName('btn_nor');
    var a = 0;
    for (var i = 0; i < btn_nor.length; i++) {
        if (btn_nor[i].checked === true) {
            // console.log(i + '<br>');
            // console.log(btn_nor[i].checked);
            a++;
        }
    }
    if (a === btn_nor.length) {
        btn_ca[0].checked = true;
        btn_ca[1].checked = true;
    } else {
        btn_ca[0].checked = false;
        btn_ca[1].checked = false;
    }
    // if (a===btn_nor.length){
    //         btn_ca[0].checked=true;
    //         btn_ca[1].checked=true;
    //     }


    gettot();
    // // var aa = $(".btn_nor");   //btn_nor
    //     // $(".btn_nor");
    //     // document.getElementsByClassName('btn_nor');
    //
    // var b1 = $("#totalnum");
    //     // $("#totalnum");
    //     // document.getElementById("totalnum");
    // var b2 = $("#totalprice");
    //     // $("#totalprice");
    //     // document.getElementById("totalprice");
    //
    // var num= $(".shopbox4");
    //     // $(".shopbox4");
    //     // document.getElementsByClassName("shopbox4");
    // var numsum=0;
    // for (var r = 0; r < num.length; r++) {
    //     if (btn_nor[r].checked===true){
    //         numsum+=parseInt(num[r].children[1].value);
    //     }
    // }
    // var price = $(".shopbox5");
    //     // $(".shopbox4");
    //     // document.getElementsByClassName("shopbox5");
    // var pricesum = 0;
    // for (var t = 0; t < price.length; t++) {
    //     if (btn_nor[t].checked===true){
    //     pricesum += parseFloat(price[t].innerHTML);
    // }}
    //
    // b1.innerHTML =numsum;
    // b2.innerHTML =pricesum.toFixed(2);

}

function fbtn1() {
    // console.log('dian');
    var btn_ca = $("[name='btn_chooseall']");
        // document.getElementsByName('btn_chooseall');
    var btn_nor = $(".btn_nor");
        // document.getElementsByClassName('btn_nor');
    if (this.checked === true) {
        for (var i = 0; i < btn_nor.length; i++) {
            btn_nor[i].checked = true;
        }
        btn_ca[0].checked = true;
        btn_ca[1].checked = true;
    } else if (this.checked === false) {
        for (var j = 0; j < btn_nor.length; j++) {
            btn_nor[j].checked = false;
        }
        btn_ca[0].checked = false;
        btn_ca[1].checked = false;

    }

        gettot();
        // // var aa = $(".btn_nor");
        // // document.getElementsByClassName('btn_nor');
        //
        // var b1 = $("#totalnum");
        // // document.getElementById("totalnum");
        // var b2 = $("#totalprice");
        // // document.getElementById("totalprice");
        // var num=$(".shopbox4");
        // // document.getElementsByClassName("shopbox4");
        // var numsum=0;
        // for (var r = 0; r < num.length; r++) {
        //     if (btn_nor[r].checked===true){
        //         numsum+=parseInt(num[r].children[1].value);
        //     }
        // }
        // var price = $(".shopbox5");
        // // document.getElementsByClassName("shopbox5");
        // var pricesum = 0;
        // for (var t = 0; t < price.length; t++) {
        //     if (btn_nor[t].checked===true){
        //     pricesum += parseFloat(price[t].innerHTML);
        // }
        // }
        //
        // b1.innerHTML =numsum;
        // b2.innerHTML =pricesum.toFixed(2);


}

function fminus() {
    if (this.nextElementSibling.value === '1') {
        this.disabled = true;
    } else {
        this.disabled = false;
        var a = parseFloat(this.nextElementSibling.value); //get框内数字
        a--;
        this.nextElementSibling.value = a;
        this.parentElement.nextElementSibling.innerHTML =
            (parseFloat(this.parentElement.previousElementSibling.innerHTML) * parseFloat(this.nextElementSibling.value)).toFixed(2);



        gettot();
        // var aa = $(".btn_nor");
        // // document.getElementsByClassName('btn_nor');
        //
        // var b1 = $("#totalnum");
        // // document.getElementById("totalnum");
        // var b2 = $("#totalprice");
        // // document.getElementById("totalprice");
        // var num=$(".shopbox4");
        // // document.getElementsByClassName("shopbox4");
        // var numsum=0;
        // for (var i = 0; i < num.length; i++) {
        //     if (aa[i].checked===true){
        //         numsum+=parseInt(num[i].children[1].value);
        //     }
        // }
        // var price = $(".shopbox5");
        // // document.getElementsByClassName("shopbox5");
        // var pricesum = 0;
        // for (var j = 0; j < price.length; j++) {
        //     if (aa[j].checked===true){
        //     pricesum += parseFloat(price[j].innerHTML);
        // }}
        //
        // b1.innerHTML =numsum;
        // b2.innerHTML =pricesum.toFixed(2);

    }

}

function fplus() {
    var a = parseFloat(this.previousElementSibling.value);
    a++;
    this.previousElementSibling.value = a;
    this.previousElementSibling.previousElementSibling.disabled = false;
    this.parentElement.nextElementSibling.innerHTML =
        (parseFloat(this.parentElement.previousElementSibling.innerHTML) * parseFloat(this.previousElementSibling.value)).toFixed(2);


    gettot();
    // var aa = $(".btn_nor");
    //     // document.getElementsByClassName('btn_nor');
    //
    // var b1 = $("#totalnum");
    //     // document.getElementById("totalnum");
    // var b2 = $("#totalprice");
    //     // document.getElementById("totalprice");
    // var num=$(".shopbox4");
    //     // document.getElementsByClassName("shopbox4");
    // var numsum=0;
    // for (var i = 0; i < num.length; i++) {
    //     if (aa[i].checked===true){
    //         numsum+=parseInt(num[i].children[1].value);
    //     }
    // }
    // var price = $(".shopbox5");
    //     // document.getElementsByClassName("shopbox5");
    // var pricesum = 0;
    // for (var j = 0; j < price.length; j++) {
    //     if (aa[j].checked===true){
    //     pricesum += parseFloat(price[j].innerHTML);
    // }}
    //
    // b1.innerHTML =numsum;
    // b2.innerHTML =pricesum.toFixed(2);
}

function del() {
    this.parentElement.parentElement.remove();

    gettot();
    // var a = $(".btn_nor");
    //     // document.getElementsByClassName('btn_nor');
    //
    // var b1 = $("#totalnum");
    //     // document.getElementById("totalnum");
    // var b2 = $("#totalprice");
    //     // document.getElementById("totalprice");
    // var num=$(".shopbox4");
    //     // document.getElementsByClassName("shopbox4");
    // var numsum=0;
    // for (var i = 0; i < num.length; i++) {
    //     if (a[i].checked===true){
    //         numsum+=parseInt(num[i].children[1].value);
    //     }
    // }
    // var price = $(".shopbox5");
    //     // document.getElementsByClassName("shopbox5");
    // var pricesum = 0;
    // for (var j = 0; j < price.length; j++) {
    //     if (a[j].checked===true){
    //     pricesum += parseFloat(price[j].innerHTML);
    // }}
    //
    // b1.html() =numsum;
    // b2.innerHTML =pricesum.toFixed(2);
}

function totdel() {
    var btn_nor = $(".btn_nor");
        // document.getElementsByClassName('btn_nor');
    console.log(btn_nor.length);
    for (var i = btn_nor.length-1; i >=0; i--) {
        if (btn_nor[i].checked === true) {
            btn_nor[i].parentElement.parentElement.remove();
        }
    }
}