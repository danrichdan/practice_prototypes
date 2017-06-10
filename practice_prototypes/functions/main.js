
function myMessage() {
    console.log('Howdy');
}

function add(x,y) {
    var total = x + y;
    console.log(total);
}

function add2(x,y) {
    var total = x +y;
    return total;
}

var addresult2 = add2(add2(100, 10), add2(20,5));

function cardFlip(element) {
        $(element).hide();

}