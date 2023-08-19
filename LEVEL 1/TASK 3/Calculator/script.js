/* ----- Calculator ----- */

function insert(num) {

    var a = document.form.textview;

    a.value += num;
}
function opt(amd) {
    var view = document.form.textview;
    if (view.value != "") {
        view.value += amd;
    }
}
function zero() {
    var view = document.form.textview;
    if (view.value != "") {
        view.value += '0';
    }
}
function equal() {
    var button = document.getElementsByClassName('none');
    var a = document.form.textview;
    var exp = a.value;

    if (exp) {
        try {a.value = eval(exp);}
        catch (e) {
            alert ("Syntax Error!");
            document.form.textview.value = 'Syntax Error!';
            none();
        }
    }
    if (a.value == 0) {
        a.value = "";
    }
    if(a.value == 'Infinity'){
        document.form.textview.value = "Can't divide by Zero!";
       // button.onclick ='none()';
       alert('Can\'t divide by Zero!')
       none();
    }
}
function none() {
    alert('Press the Clear button!');
} 
function clean() {
    document.form.textview.value = '';
}

function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
}