let name = document.getElementById("name");
let mobile = document.getElementById("mobile");
let email = document.getElementById("email");
let address = document.getElementById("address");
let SOUPS_AMOUNT = document.getElementById("soups");
let STARTERS_AMOUNT = document.getElementById("starters");
let MAINCOURSE_AMOUNT = document.getElementById("mainCourse");
let DESERTS_AMOUNT = document.getElementById("deserts");
let GST_AMOUNT = document.getElementById("gst");

let btn = document.getElementById("btn");

let resultName= document.getElementById("result_name")
let resultMobile= document.getElementById("result_mobile")
let resultEmail= document.getElementById("result_email")
let resultAddress= document.getElementById("result_address")
let totalAmount= document.getElementById("total_amount")
let gstAmount= document.getElementById("gst_amount")
let withTip= document.getElementById("with_tip")
let note= document.getElementById("note")

btn.addEventListener("click", ()=>{
    let total_amount = parseInt(SOUPS_AMOUNT.value) +parseInt( STARTERS_AMOUNT.value)+parseInt( MAINCOURSE_AMOUNT.value) +parseInt( DESERTS_AMOUNT.value);
    let gst_rate = (parseInt(GST_AMOUNT.value)/100)*total_amount + total_amount;
   
    resultName.innerHTML = "Name : " + name.value;
    resultMobile.innerHTML = "Mobile : " + mobile.value;
    resultEmail.innerHTML = "Email : " + email.value; 
    resultAddress.innerHTML = "Address : " + address.value;
    totalAmount.innerHTML = "Total Amount : " + total_amount;

    gstAmount.innerHTML = `Total bill amount with ${GST_AMOUNT.value}% GST is ${gst_rate}`


    if(total_amount>=18000){
        withTip.innerHTML = `With tip 500 Rupees : ${gst_rate + 500}`
    }
    else{
        withTip.innerHTML = `With tip 1000 Rupees : ${gst_rate + 1000}`
    }
})





