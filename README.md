# Title: ATM App

ATM app is an imitation of bank accounts prototypes that consist of two accounts: savings account and cheque account.
Customer can deposit and withdraw on both accounts. 

When customer only has enough balance in one account, customer is allowed to withdraw money from that specific account only. 

However, when the customer overdraft the saving account while the cheque account has enough balance, it will withdraw the remaining amount from the cheque account and vice versa. 

### App link:

https://jquery-atm.netlify.app/

### Type:
- Lab

### Objectives:
- jQuery DOM selection, appending, removal, updating

### Summary
- Practice JavaScript functions and manipulating the DOM with jQuery.
- Selecting elements, manipulating HTML, and manipulating style along
with building out the logic using JavaScript.

### Specification:

* Keep track of the checking and savings balances somewhere
* Add functionality so that a user can deposit money into one of the bank accounts.
* Make sure you are updating the display and manipulating the HTML of the page
so a user can see the change.
* Add functionality so that a user can withdraw money from one of the bank accounts.
* Make sure you are updating the display and manipulating the HTML of the page
so a user can see the change.
* Make sure the balance in an account can't go negative. If a user tries to
withdraw more money than exists in the account, ignore the transaction.
* When the balance of the bank account is $0 the background of that bank account
should be red. It should be gray when there is money in the account.
* What happens when the user wants to withdraw more money from the checking
account than is in the account? These accounts have overdraft protection, so if
a withdrawal can be covered by the balances in both accounts, take the checking
balance down to $0 and take the rest of the withdrawal from the savings account.
If the withdrawal amount is more than the combined account balance, ignore it.
* Make sure there is overdraft protection going both ways.

