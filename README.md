# backend_project
STEPS involved this the project--
Create a HTML page form.html with the fields name, username , email , phone no, password, confirm password, business name , business address , website url and location cordinates.
add an action in the form where form is going to submit, add a javascript function to validate password, also add few CSS to look the registration page more beautiful.
create a database and a table in it. In my case database name is "intern" and table name is "storedata".
create a javascript file (in my case app.js) , connect databse , set up the form root .
Get data from  the request body and insert the data in the table . 
Now set up display root and retrive the data from the table , I am more interested in recent added data, that's why I have selected the users's information by sorting on the basis of column id (which is primary key of the table and it is auto-incrementing) .
Make display page a little bit more clear, every information below one another.
Now add some share button like whatsapp, facebook , linkedin, twitter and send the form data in text formate.
Start the server nodemon app.js
now acces the form page using localhost:3000/form
