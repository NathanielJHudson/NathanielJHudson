function calculate(){
    // var amount is used to retrive values from the amount and % fields and store them inside variables
    // $ dollare sign is a reff to the j query library
    var amount = $('#amount').val();
    // % var does the same thing as amount and .val will calculate the value
    var percentage = $('#percentage').val();
    // amount is a string so it needs to be converted in the number function below.
    var tip = amount * (percentage / 100);
    var total = Number(amount) + tip;
    // toFixed action function is a a number property to ensure two digits after decimal

    $('#tip').val(tip.toFixed(2));
    $('#total').val(total.toFixed(2));
    // return used to prevent submission, browser wont return a new page because of any code below.
    return false;
}
$('#calculatortip').submit(calculate);
