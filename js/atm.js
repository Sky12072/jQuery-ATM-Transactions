let savingsBalance;
let checkingBalance;

// let savingsDepositInput;
let savingsWithdrawalInput

// let checkingDepositInput;
let checkingWithdrawalInput;

let array = [];


// Red background if balance is $0

$(document).ready(function(){
  let redOrNot = Number($("#savings-balance").val())
  
  if (redOrNot === 0) {
    $("#savings-balance").css("background-color", "red")
    console.log("It's red saving account")
  }
})




// Get savings deposit input
$(document).ready(function(){
  $("#savings-deposit").click(function(){
    let savingsDepositInputString = $("#savings-amount").val();

    // code to handle hyphens in input
    if (savingsDepositInputString.includes("-")) {
      savingsDepositInputString= savingsDepositInputString.replace(/-/g, "");
      console.log (savingsDepositInputString)
    }
    let savingsDepositInput = Number(savingsDepositInputString)

    console.log (typeof savingsDepositInput)
    console.log (savingsDepositInput)
    array.push(savingsDepositInput)
    console.log("array is (deposit input): ", array)
    
  });
});



    

// Get savings withdrawal input
$(document).ready(function(){
  $("#savings-withdraw").click(function(){
    let savingsWithdrawalInputString = $("#savings-amount").val();

    // code to handle hyphens in input
    if (savingsWithdrawalInputString.includes("-")) {
      savingsWithdrawalInputString= savingsWithdrawalInputString.replace(/-/g, "");
      console.log (savingsWithdrawalInputString)
    }
    savingsWithdrawalInput = Number(savingsWithdrawalInputString)

    array.pop();
    console.log (typeof savingsWithdrawalInput);
    console.log (savingsWithdrawalInput)
    console.log("array is(withdrawal input): ", array)
  });
});



// Adding

$(document).ready(function(){
  
  $("#savings-deposit").click(function(){
    
    savingsBalance = array.reduce((a,b) => a+b)
    console.log("TOTAL is: ", savingsBalance)
    
    
    $("#savings-balance").text(`$ ${savingsBalance}`); // code for display value to webpage
    if (savingsBalance !== 0) {
      $("#savings-balance").css("background-color", "grey")
    }
    
    
  });
});

// Substracting


$(document).ready(function(){
  $("#savings-withdraw").click(function(){
    console.log ("overdraft protection Checking balance is: ", checkingBalance)

    if (savingsBalance !== 0) {
      
      savingsBalance = savingsBalance - savingsWithdrawalInput;
      console.log("SavingsBalance is: ", savingsBalance)    
      console.log("SavingsBalance is: ", typeof savingsBalance)    
      console.log("SsavingsWithdrawalInput is: ", savingsWithdrawalInput)    
      console.log("savingsWithdrawalInput is: ", typeof savingsWithdrawalInput)    
      
      $("#savings-balance").text(`$ ${savingsBalance}`);
      if (savingsBalance === 0) {
        $("#savings-balance").css("background-color", "red")
      }
      
    }
    
    
    else if (savingsBalance === 0 && checkingBalance === 0)  {
      array = [];
      console.log("array is (substracting): ", array)
      console.log("SavingsBalance: ", savingsBalance)
      
    }

    // // overdraft protection
    else if (savingsBalance === 0 && checkingBalance > 0) {
      
      checkingArray.pop()
      checkingBalance = checkingBalance - savingsWithdrawalInput;
      console.log("CheckingBalance is: ", checkingBalance)    
      
      $("#checking-balance").text(`$ ${checkingBalance}`);
      if (checkingBalance === 0) {
        $("#checking-balance").css("background-color", "red")
      }

    }


  });
});












// ======================================

// Checking account




$(document).ready(function(){
  let redOrNot = Number($("#checking-balance").val())
  if (redOrNot === 0) {
    $("#checking-balance").css("background-color", "red")
    console.log("It's red checking account")
  }
})


let checkingArray = []
// Get checking deposit input
$(document).ready(function(){
  $("#checking-deposit").click(function(){
    let checkingDepositInputString = $("#checking-amount").val();

    // code to handle hyphens in input
    if (checkingDepositInputString.includes("-")) {
      checkingDepositInputString = checkingDepositInputString.replace(/-/g, "");
      console.log (checkingDepositInputString)
    }
    let checkingDepositInput = Number(checkingDepositInputString)


    console.log (typeof checkingDepositInput)
    console.log (checkingDepositInput)
    checkingArray.push(checkingDepositInput)
    console.log("checkingArray is: ", checkingArray)
    
  });
});



    

// Get checking withdrawal input
$(document).ready(function(){
  $("#checking-withdraw").click(function(){
    let checkingWithdrawalInputString = $("#checking-amount").val();

    // code to handle hyphens in input
    if (checkingWithdrawalInputString.includes("-")) {
      checkingWithdrawalInputString = checkingWithdrawalInputString.replace(/-/g, "");
      console.log (checkingWithdrawalInputString)
    }
    checkingWithdrawalInput = Number(checkingWithdrawalInputString)
    
    checkingArray.pop();
    console.log (typeof checkingWithdrawalInput);
    console.log (checkingWithdrawalInput);
    console.log("checkingArray is: ", checkingArray);
  });
});







// Adding

$(document).ready(function(){
  $("#checking-deposit").click(function(){
    
    checkingBalance = checkingArray.reduce((a,b) => a+b)
    console.log("TOTAL is: ", checkingBalance)
    
    
    $("#checking-balance").text(`$ ${checkingBalance}`);
    if (checkingBalance !== 0) {
      $("#checking-balance").css("background-color", "grey")
    }
    
    
  });
});

// Substracting


$(document).ready(function(){
  $("#checking-withdraw").click(function(){
    
    console.log ("overdraft protection savings balance is: ", savingsBalance)

    if (checkingBalance !== 0) {
      
      checkingBalance = checkingBalance - checkingWithdrawalInput;
      console.log("checkingBalance is: ", checkingBalance)    
      
      $("#checking-balance").text(`$ ${checkingBalance}`);
      if (checkingBalance === 0) {
        $("#checking-balance").css("background-color", "red")
      }
      
    }
    
    
    else if (checkingBalance === 0  && savingsBalance === 0)  {
      checkingArray = [];
      array = [];
      console.log("checkingArray is: ", checkingArray)
      console.log("checkingBalance: ", checkingBalance)
      
    }

    // // overdraft protection
    else if (checkingBalance === 0 && savingsBalance > 0) {
      
      array.pop()
      savingsBalance = savingsBalance - checkingWithdrawalInput;
      console.log("SavingsBalance is: ", savingsBalance)    
      
      $("#savings-balance").text(`$ ${savingsBalance}`);
      if (savingsBalance === 0) {
        $("#savings-balance").css("background-color", "red")
      }
          
    }       

  })
  
});










