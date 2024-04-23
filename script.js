function move()
{
    window.open("meal.html");
}

function passwordCheck(){
    var password = document.getElementById("password").value;

    if(password === "egg"){
        alert("Password input is correct! Press Ok to redirect to the Admin Page");
    }
    else
    {
        alert("Password incorrect. Try again.")
    }

    window.open("adminpage.html");
}

function redirectAdmin(){
    window.open("adminlogin.html");
}

function redirectAdmin1(){
    window.location.href = 'adminpage2.html';
}

function redirectAdmin2(){
    window.location.href = 'adminpage3.html';
}

function redirectAdmin3(){
    window.location.href = 'adminpage.html'
}

/*js of orderpage*/
var total = 0;

function redirectMeal(){
  var fulltotal = document.getElementById("total").innerHTML;
  var ordertotal = document.getElementById("orderList").innerHTML;
  localStorage.setItem("fullorderList", ordertotal);
  window.location.href = "meal.html"; 
  localStorage.setItem("fulltotalests", fulltotal);
}

function redirectSnack(){
  var fulltotal = document.getElementById("total").innerHTML;
  var ordertotal = document.getElementById("orderList").innerHTML;
  localStorage.setItem("fullorderList", ordertotal);
  localStorage.setItem("fulltotalests", fulltotal);
  window.location.replace("snacks.html");
}

function redirectDrink(){
  var fulltotal = document.getElementById("total").innerHTML;
  var ordertotal = document.getElementById("orderList").innerHTML;
  localStorage.setItem("fullorderList", ordertotal);
  localStorage.setItem("fulltotalests", fulltotal);
  window.location.href = 'drinks.html';
}

total = 0;
let items = [];

function orderItem(item, price) {
  total += price;
  items.push({ item: item, price: price });
  document.getElementById('orderList').innerHTML += `<li>${item} - ₱${price}</li>`;
  document.getElementById('total').textContent = total;
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ item, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  
}


function redirectToCheckout() {
  // Store total and items in sessionStorage
  sessionStorage.setItem('total', total);
  sessionStorage.setItem('items', JSON.stringify(items));

  // Redirect to checkout.html
  window.location.href = 'checkout.html';
}

// Add this function at the beginning of your script to clear the order list when the page loads
window.onload = function() {
    clearOrderList();
};

// Function to clear the order list
function clearOrderList() {
    localStorage.removeItem('fullorderList'); // Remove the stored order list data
    localStorage.removeItem('fulltotalests'); // Remove the stored total data
    document.getElementById("orderList").innerHTML = ""; // Clear the order list displayed on the page
    document.getElementById("total").innerHTML = "0"; // Reset the total to 0
}

/*enable buttons*/
function enable1(){
    document.getElementById("btn1").disabled = false;
}

function enable2(){
    document.getElementById("btn2").disabled = false;
}

function enable3(){
    document.getElementById("btn3").disabled = false;
}

function enable4(){
    document.getElementById("btn4").disabled = false;
}

function enable5(){
    document.getElementById("btn5").disabled = false;
}

function enable6(){
    document.getElementById("btn6").disabled = false;
}

function enable7(){
    document.getElementById("btn7").disabled = false;
}

function enable8(){
    document.getElementById("btn8").disabled = false;
}

function enable9(){
    document.getElementById("btn9").disabled = false;
}

function enable10(){
    document.getElementById("btn10").disabled = false;
}

function enable11(){
    document.getElementById("btn11").disabled = false;
}

function enable12(){
    document.getElementById("btn12").disabled = false;
}

function enable13(){
    document.getElementById("btn13").disabled = false;
}

function enable14(){
    document.getElementById("btn14").disabled = false;
}

function enable15(){
    document.getElementById("btn15").disabled = false;
}

function enable16(){
    document.getElementById("btn16").disabled = false;
}

function enable17(){
    document.getElementById("btn17").disabled = false;
}

function enable18(){
    document.getElementById("btn18").disabled = false;
}

function enable19(){
    document.getElementById("btn19").disabled = false;
}

function enable20(){
    document.getElementById("btn20").disabled = false;
}

function enable21(){
    document.getElementById("btn21").disabled = false;
}

function enable22(){
    document.getElementById("btn22").disabled = false;
}

function enable23(){
    document.getElementById("btn23").disabled = false;
}

function enable24(){
    document.getElementById("btn24").disabled = false;
}

function enable25(){
    document.getElementById("btn25").disabled = false;
}

function enable26(){
    document.getElementById("btn26").disabled = false;
}

function enable27(){
    document.getElementById("btn27").disabled = false;
}

function enable28(){
    document.getElementById("btn28").disabled = false;
}

function enable29(){
    document.getElementById("btn29").disabled = false;
}

function enable30(){
    document.getElementById("btn30").disabled = false;
}

/*disablebuttons*/
function disable1(){
    document.getElementById("btn1").disabled = "true";
}

function disable2(){
    document.getElementById("btn2").disabled = "true";
}

function disable3(){
    document.getElementById("btn3").disabled = "true";
}

function disable4(){
    document.getElementById("btn4").disabled = "true";
}

function disable5(){
    document.getElementById("btn5").disabled = "true";
}

function disable6(){
    document.getElementById("btn6").disabled = "true";
}

function disable7(){
    document.getElementById("btn7").disabled = "true";
}

function disable8(){
    document.getElementById("btn8").disabled = "true";
}

function disable9(){
    document.getElementById("btn9").disabled = "true";
}

function disable10(){
    document.getElementById("btn10").disabled = "true";
}

function disable11(){
    document.getElementById("btn11").disabled = "true";
}

function disable12(){
    document.getElementById("btn12").disabled = "true";
}

function disable13(){
    document.getElementById("btn13").disabled = "true";
}

function disable14(){
    document.getElementById("btn14").disabled = "true";
}

function disable15(){
    document.getElementById("btn15").disabled = "true";
}

function disable16(){
    document.getElementById("btn16").disabled = "true";
}

function disable17(){
    document.getElementById("btn17").disabled = "true";
}

function disable18(){
    document.getElementById("btn18").disabled = "true";
}

function disable19(){
    document.getElementById("btn19").disabled = "true";
}

function disable20(){
    document.getElementById("btn20").disabled = "true";
}

function disable21(){
    document.getElementById("btn21").disabled = "true";
}

function disable22(){
    document.getElementById("btn22").disabled = "true";
}

function disable23(){
    document.getElementById("btn23").disabled = "true";
}

function disable24(){
    document.getElementById("btn24").disabled = "true";
}

function disable25(){
    document.getElementById("btn25").disabled = "true";
}

function disable26(){
    document.getElementById("btn26").disabled = "true";
}

function disable27(){
    document.getElementById("btn27").disabled = "true";
}

function disable28(){
    document.getElementById("btn28").disabled = "true";
}

function disable29(){
    document.getElementById("btn29").disabled = "true";
}

function disable30(){
    document.getElementById("btn30").disabled = "true";
}



//pay

function pcard(){
    window.location.href = 'pcard.html';
}

function gcash(){
    window.location.href = 'gcash.html';

}

function previous(){
    window.location.href = 'checkout.html'
}

