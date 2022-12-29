const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-Parser')
const htmlToImage = require('html-to-image');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Connect to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'intern'
});

connection.connect((error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Connected to the database');
  }
});

app.post('/process-form', (req, res) => {

  // Get the form data from the request body
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const phone_no = req.body.phone_no;
  const business_name = req.body.business_name;
  const business_address = req.body.business_address;
  const website_url = req.body.website_url;
  const location_coordinates = req.body.location_coordinates;


  // Insert the data into the database
  const query = 'INSERT INTO storedata (name, username,email,phone_no,business_name, business_address,website_url,location_coordinates) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  connection.query(query, [name,username,email,phone_no,business_name,business_address,website_url,location_coordinates], (error, results) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
    } else {
      res.redirect('/display');
    }
  });
});

// Set up the display route
app.get('/display', (req, res) => {
  // Retrieve the last form data from the database
  const query = 'SELECT * FROM storedata ORDER BY id DESC LIMIT 1';
  connection.query(query, (error, results) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
    } else {
      let output = '<h1>Form Data</h1>';
      output += '<div class="form-data">';
      output += `<p>Name: ${results[0].name}</p>`;
      output += `<p>Username: ${results[0].username}</p>`;
      output += `<p>Email: ${results[0].email}</p>`;
      output += `<p>Phone no: ${results[0].phone_no}</p>`;
      output += `<p>Business name: ${results[0].business_name}</p>`;
      output += `<p>Business address: ${results[0].business_address}</p>`;
      output += `<p>Website URL: ${results[0].website_url}</p>`;
      output += `<p>Location Coordinates: ${results[0].location_coordinates}</p>`;
      output += '</div>';
      output += '<div class="share-buttons">';
      output += '<p>Share on:</p>';
      output += `<a href="https://twitter.com/share?text=${encodeURIComponent(`Check out this form data! Name: ${results[0].name} Username:${results[0].username} Email: ${results[0].email} Phone no: ${results[0].phone_no} Business name: ${results[0].business_name} Business address: ${results[0].business_address} Website URL: ${results[0].website_url}`)}" target="_blank">Twitter</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;

      output += `<a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`Check out this form data! Name: ${results[0].name} Username:${results[0].username} Email: ${results[0].email} Phone no: ${results[0].phone_no} Business name: ${results[0].business_name} Business address: ${results[0].business_address} Website URL: ${results[0].website_url}`)} target="_blank">Facebook</a><br>`;

      output += `<a href="javascript:void(0);" onclick="window.location.href='https://wa.me/?text=${encodeURIComponent(`Check out this form data! Name: ${results[0].name} Username:${results[0].username} Email: ${results[0].email} Phone no: ${results[0].phone_no} Business name: ${results[0].business_name} Business address: ${results[0].business_address} Website URL: ${results[0].website_url}`)}'" target="_blank">WhatsApp</a>&nbsp;&nbsp;&nbsp;&nbsp;`;

      output += `<a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`Check out this form data! Name: ${results[0].name} Username:${results[0].username} Email: ${results[0].email} Phone no: ${results[0].phone_no} Business name: ${results[0].business_name} Business address: ${results[0].business_address} Website URL: ${results[0].website_url}`)}" target="_blank">LinkedIn</a><br>`;
      output += '</div>';
      res.send(output);
    }
  });
});


// Set up the form route
app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/form.html');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});


