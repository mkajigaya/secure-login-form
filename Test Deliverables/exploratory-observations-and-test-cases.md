# **Part 2: Manual Testing**


## **Exploratory Testing Notes**

### Login Page

- When zoomed to 200%, the page text overlaps with the “Fork me on GitHub” banner, making it difficult to read (in Firefox and Chrome browsers).

- When zoomed to 110% or higher, a part of the error message overlaps with the “Fork me on GitHub” banner. Because of the overlap, I am taken to the GitHub page when I click on the x button of the message (in Firefox and Chrome browswers). This issue can make the login process more difficult for the users who needs to enlarge the text.

- The color and text of the Login button is not visible in Chrome browser. When the cursor is hovered over the button, the color and text becomes visible. This issue can cause confusion during the login process.


### Secure Area Page

- When zoomed to 110% or higher, a part of the login success message overlaps with the “Fork me on GitHub” banner. Because of the overlap, I am taken to the GitHub page when I click on the x button of the message (in Firefox and Chrome browswers). This issue can make website naveigation more difficult for the users who needs to enlarge the text.


## **Manual Test Cases**

### **Test Case ID:** #1

**Scenario:** The user successfully logs into the secure area.

**Test Steps:**
1. The user navigates to the Login Page.
2. The user enters ‘tomsmith’ in the Username field.
3. The user enters ‘SuperSecretPassword!’ in the Password field.
4. The user clicks the Login button.

**Environment:**

<ins>Browser</ins> - Chrome, Firefox.

<ins>Device</ins> - Windows desktop (Home 11).

**Test Data:** tomsmith (Username), SuperSecretPassword! (Password)

**Expected Results:** Once valid username and password are entered, the web page redirects to the Secure Area page, displaying the green successful login message at the top.

**Actual Results:** As Expected.

**Test Status:** Pass (Chrome), Pass (Firefox).



### **Test Case ID:** #2

**Test Scenario:** The user enters an invalid username.

**Test Steps:**
1. The user navigates to the Login Page.
2. The user enters ‘TOMSMITH’ in the Username field.
3. The user enters ‘SuperSecretPassword!’ in the Password field.
4. The user clicks the Login button.

**Environment:**

<ins>Browser</ins> - Chrome, Firefox.

<ins>Device</ins> - Windows desktop (Home 11).

**Test Data:** TOMSMITH (Username), SuperSecretPassword! (Password)

**Expected Results:** When the user enters an invalid username and clicks the Login button, the screen remains in the Login page, displaying a red login error message at the top (“Your username is invalid!”).

**Actual Results:** As Expected.

**Test Status:** Pass (Chrome), Pass (Firefox).



### **Test Case ID:** #3

**Test Scenario:** The user enters an invalid password.

**Test Steps:**
1. The user navigates to the Login Page.
2. The user enters ‘tomsmith’ in the Username field.
3. The user enters ‘12345’ in the Password field.
4. The user clicks the Login button.

**Environment:** 

<ins>Browser</ins> - Chrome, Firefox.

<ins>Device</ins> - Windows desktop (Home 11).

**Test Data:** tomsmith (Username), 12345 (Password)

**Expected Results:** When the user enters an invalid password and clicks the Login button, the screen remains in the Login page, displaying a red login error message at the top (“Your password is invalid!”).

**Actual Results:** As Expected.

**Test Status:** Pass (Chrome), Pass (Firefox).



### **Test Case ID:** #4

**Test Scenario:** The user successfully logs out of the secured area.

**Precondition:** The user has successfully logged into the secured area.

**Test Steps:**
1. The user clicks the Logout button.

**Environment:** 

<ins>Browser</ins> - Chrome, Firefox.

<ins>Device</ins> - Windows desktop (Home 11).

**Test Data:** N/A

**Expected Results:** When the user clicks the Logout button in the Secured Area page, the web page redirects to the Login page, displaying the green successful logout message at the top (“You logged out of the secure area!”).

**Actual Results:** As Expected.

**Test Status:** Pass (Chrome), Pass (Firefox).



### **Test Case ID:** #5

**Test Scenario:** When the user enlarges the text on the Login page, all the text remains readable.

**Test Steps:**
1. The user navigates to the Login page.
2. The user zooms to 200%.

**Environment:**

<ins>Browser</ins> - Chrome, Firefox.

<ins>Device</ins> - Windows desktop (Home 11).

**Test Data:** N/A

**Expected Results:** When the user zooms to 200%, all the visible elements adjust itself, and the text remains readable.

**Actual Results:** When the user zooms to 200%, the Fork me on the GitHub banner and the web page text overlaps, making it difficult for the user to read the text in the overlapped section.

**Test Status:**  Fail (Chrome), Fail (Firefox).
