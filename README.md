# backend_project
<b>STEPS involved this the project--<b><br>
1. Create a HTML page form.html with the fields <i>name</i>, <i>username</i> , <i>email</i> , <i>phone no</i>, <i>password</i>, <i>confirm password</i>, <i>business name</i> , <i>business address</i> ,<i> website url</i> and <i>location cordinates</i>.<br>
2. Add an action in the form where form is going to submit.<br> 
3. Add a javascript function to validate password, also add few CSS to look the registration page more beautiful.<br>
4. Create a database and a table in it.
In my case database name is "intern" and table name is "storedata".<br>
5. Create a javascript file (in my case app.js) , connect databse , set up the form root .<br>
6. Get data from  the request body and insert the data in the table . <br>
7. Now set up <b>display</b> root and retrive the data from the table , I am more interested in recent added data, that's why I have selected the users's information by sorting on the basis of column id (which is primary key of the table and it is auto-incrementing) .<br>
8. Make display page a little bit more clear, every information below one another.<br>
9. Now add some share button like whatsapp, facebook , linkedin, twitter and send the form data in text formate.<br>
10. Start the server nodemon app.js
11. now acces the form page using localhost:3000/form.
