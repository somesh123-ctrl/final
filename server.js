const express=require("express");
const cors=require('cors');

const app=express()
const path = require('path');

app.use(cors());

const houseListingRoute=require('./Routes/HouseListing/HouseListing')
const houseFetchRoute =require('./Routes/HouseFetchRoutes/HouseFetch');
const ContactFormRoute = require("./Routes/EmailRoute/Email");

app.use(houseListingRoute);
app.use(houseFetchRoute);
app.use(ContactFormRoute);

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server started on PORT "+PORT);
});


