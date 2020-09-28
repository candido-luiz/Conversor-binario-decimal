function convert_to_decimal(){

    let binary_input = document.getElementById("binary_input");
    let decimal_output = document.getElementById("decimal_output");
    let converted_value = parseInt(binary_input.value, 2);
    decimal_output.value = converted_value;

}

function convert_to_binary(){

    let decimal_input = document.getElementById("decimal_input");
    let binary_output=  document.getElementById("binary_output");
    let converted_value = parseInt(decimal_input.value).toString(2);
    binary_output.value = converted_value;
}

function checkNumber(input){
    let number_length = input.value.length;
   
    if((input.value[number_length - 1] != 0) && (input.value[number_length - 1] !=1)){

        alert("Inserir apenas número 0 ou 1 !");
        input.value = input.value.substring(0,(number_length-1));
    }
}