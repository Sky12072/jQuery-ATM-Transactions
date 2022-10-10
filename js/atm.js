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
    $("#savings-balance").css("background-color", "rgb(255, 62, 62)")
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
      console.log ("savingsDepositInputString :", savingsDepositInputString)
    }
    let savingsDepositInput = Number(savingsDepositInputString)

    console.log ("savingsDepositInput" ,typeof savingsDepositInput)
    console.log ("savingsDepositInput is: ",savingsDepositInput)
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
      console.log ("savingsWithdrawalInputString: ",savingsWithdrawalInputString)
    }
    savingsWithdrawalInput = Number(savingsWithdrawalInputString)


    
    console.log("array is (savingsWithdrawalInput): ", array)
    console.log ("savingsWithdrawalInput: " ,typeof savingsWithdrawalInput);
    console.log ("savingsWithdrawalInput: ",savingsWithdrawalInput)
    
  });
});



// Adding

$(document).ready(function(){
  
  $("#savings-deposit").click(function(){
    const operation = (prevEntry, currentEntry) => {
      return (prevEntry + currentEntry)
    }
    // savingsBalance = array.reduce((a,b) => a+b)
    savingsBalance = array.reduce((a,b) => a+b)
    console.log("TOTAL savingsBalance is: ", savingsBalance)
    array.length = 0;
    array.push(savingsBalance)
    
    $("#savings-balance").html(`$ ${savingsBalance}`); // code for display value to webpage
    if (savingsBalance !== 0) {
      $("#savings-balance").css("background-color", "rgb(175, 174, 174")
    }
    let valueBack = $("savings-balance").attr('savings-balance');
    console.log(valueBack);
    
  });
});

// Substracting


$(document).ready(function(){
  $("#savings-withdraw").click(function(){
    console.log("====================")
    console.log ("overdraft protection Checking balance is: ", checkingBalance)

    if (savingsBalance > 0 && savingsBalance >= savingsWithdrawalInput) {
      
      console.log("array is (substracting)): ", array)
      savingsBalance = savingsBalance - savingsWithdrawalInput;
      // array.pop();
      console.log("SavingsBalance is: ", savingsBalance)    
      console.log("SavingsBalance is: ", typeof savingsBalance)    
      console.log("SsavingsWithdrawalInput is: ", savingsWithdrawalInput)    
      console.log("savingsWithdrawalInput is: ", typeof savingsWithdrawalInput)    
      
      $("#savings-balance").text(`$ ${savingsBalance}`);
      if (savingsBalance === 0) {
        $("#savings-balance").css("background-color", "rgb(255, 62, 62)")
      }
      array.length = 0;
      array.push(savingsBalance)
    }
    
    
    else if (savingsBalance === 0 && checkingBalance === 0)  {
      array = [];
      checkingArray = [];
      console.log("array is (substracting) but invalid One: ", array)
      console.log("SavingsBalance: ", savingsBalance)
      
    }

    // overdraft protection 1 - stop withdrawal, withdrawal amount is > savings balance
    else if (savingsWithdrawalInput > savingsBalance && savingsWithdrawalInput > (savingsBalance + checkingBalance) ) {
      console.log("array is (substracting) but invalid Two: ", array)
      
      return
      

    }

    // overdraft protection 2 -taking from checking account if sufficient
    else if (savingsWithdrawalInput <= (savingsBalance + checkingBalance)  ) {
      array.pop();
      console.log("array is (substracting)): ", array)

      // code for handling negative balance 
      let savingsNegativeBalance = savingsBalance - savingsWithdrawalInput;
      console.log("savingsNegativeBalance One is: ",savingsNegativeBalance)
      savingsNegativeBalance = String(savingsNegativeBalance).replace(/-/g, "")
      savingsNegativeBalance = Number(savingsNegativeBalance);
      console.log("savingsNegativeBalance Two is: ",savingsNegativeBalance)

      savingsBalance = 0; // reset savingsBalance
      $("#savings-balance").text(`$ ${savingsBalance}`);
      if (checkingBalance >= savingsNegativeBalance) {
        array.pop();
        checkingBalance = checkingBalance - savingsNegativeBalance
        $("#checking-balance").text(`$ ${checkingBalance}`);
      }
      if (checkingBalance === 0) {
        $("#checking-balance").css("background-color", "rgb(255, 62, 62)")
      }
      if (savingsBalance === 0) {
        $("#savings-balance").css("background-color", "rgb(255, 62, 62)")
      }
      

    }


  });
});












// ======================================

// Checking account




$(document).ready(function(){
  let redOrNot = Number($("#checking-balance").val())
  if (redOrNot === 0) {
    $("#checking-balance").css("background-color", "rgb(255, 62, 62)")
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
      console.log ("checkingDepositInputString: ",checkingDepositInputString)
    }
    let checkingDepositInput = Number(checkingDepositInputString)


    console.log ("checkingDepositInput is: ", typeof checkingDepositInput)
    console.log ("checkingDepositInput: ",checkingDepositInput)
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
    
    

    console.log ("checkingWithdrawalInput: ",typeof checkingWithdrawalInput);
    console.log ("checkingWithdrawalInput: ",checkingWithdrawalInput);
    console.log("checkingArray is: ", checkingArray);
  });
});







// Adding

$(document).ready(function(){
  $("#checking-deposit").click(function(){
    
    checkingBalance = checkingArray.reduce((a,b) => a+b)
    console.log("TOTAL checkingBalance is: ", checkingBalance)
    checkingArray.length = 0;
    checkingArray.push(checkingBalance)
    $("#checking-balance").text(`$ ${checkingBalance}`);
    if (checkingBalance !== 0) {
      $("#checking-balance").css("background-color", "rgb(175, 174, 174")
    }
    
    
  });
});

// // Substracting


$(document).ready(function(){
  $("#checking-withdraw").click(function(){
    
    console.log ("overdraft protection savings balance is: ", savingsBalance)

    if (checkingBalance > 0 && checkingBalance >= checkingWithdrawalInput) {
      
      
      console.log("checkingArray is: ", checkingArray);
      checkingBalance = checkingBalance - checkingWithdrawalInput;
      console.log("checkingBalance is: ", checkingBalance)    
      
      $("#checking-balance").text(`$ ${checkingBalance}`);
      if (checkingBalance === 0) {
        $("#checking-balance").css("background-color", "rgb(255, 62, 62)")
      }
      checkingArray.length = 0;
      checkingArray.push(checkingBalance)
    }
    
    
    else if (checkingBalance === 0  && savingsBalance === 0)  {
      checkingArray = [];
      array = [];
      console.log("checkingArray is: ", checkingArray)
      console.log("checkingBalance: ", checkingBalance)
      
    }
    // overdraft protection 1 - stop withdrawal, withdrawal amount is > savings balance
    else if (checkingWithdrawalInput > checkingBalance && checkingWithdrawalInput > (savingsBalance + checkingBalance) ) {
      console.log("checkingArray is (substracting) but invalid Two: ", array)
      
      return
      

    }

    // overdraft protection 2 -taking from checking account if sufficient
    else if (checkingWithdrawalInput <= (savingsBalance + checkingBalance)  ) {
      checkingArray.pop();
      console.log("checkingArray is (substracting)): ", checkingArray)

      // code for handling negative balance 
      let checkingNegativeBalance = checkingBalance - checkingWithdrawalInput;
      console.log("checkingNegativeBalance One is: ",checkingNegativeBalance)
      checkingNegativeBalance = String(checkingNegativeBalance).replace(/-/g, "")
      checkingNegativeBalance = Number(checkingNegativeBalance);
      console.log("checkingNegativeBalance Two is: ",checkingNegativeBalance)

      checkingBalance = 0; // reset checkingBalance
      $("#checking-balance").text(`$ ${checkingBalance}`);
      if (savingsBalance >= checkingNegativeBalance) {
        array.pop();
        savingsBalance = savingsBalance - checkingNegativeBalance
        $("#savings-balance").text(`$ ${savingsBalance}`);
      }
      if (savingsBalance === 0) {
        $("#savings-balance").css("background-color", "rgb(255, 62, 62)")
      }
      if (checkingBalance === 0) {
        $("#checking-balance").css("background-color", "rgb(255, 62, 62)")
      }
      

    }

  })
  
});










