# **Part 6: Creative Problem-Solving Assessment**

<ins>Question</ins>: You are tasked with testing a vending machine that dispenses drinks. Imagine you cannot open the machine, interact with its internal components, or access any software logs.

How would you approach testing its functionality and quality, relying only on user-facing interactions and observable outcomes? Provide detailed explanations.


### **Money slot**
- The user can insert money to the machine.
- The machine dispenses invalid coins.

### **Money tracking**
- The machine correctly tracks the amount of the money inserted.
- The machine correctly tracks the remaining balance after a purchase is made.
- The machine remains active when the remaining balance is equal to or above the price of a cheapest product.
- The machine dispenses the correct amount of the money when the refund button is pressed.

### **Credit card payment**
- The machine correctly reads the card information.
- The machine resets to the default state after a purchase.

### **Product selection buttons**
- The buttons are activated only after the balance becomes equal to or above the price of the cheapest product.
- When the funds are lower than the price of a product, its corresponding button is deactivated.
- When a product is unavailable, its corresponding button is deactivated.
- The machine dispenses the correct drink when a button is pressed.
