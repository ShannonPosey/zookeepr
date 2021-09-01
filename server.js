const express = require("express");
const { animals } = require("./data/animals");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
app.use(express.static("public"));


// this should always be last
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});










/*
=================================================================================
                
                      Notes to refer back to later

===============================================================================

 get() method requires two argument:
  1st) is a string that describes the route the client will have to fetch from i.e "/api/animals"
    2nd) callback function that will execute every time that route is accessed with a GET request i.e req, res 

app.get("/api/animals", (req, res) => {
 order of req(request) and res(response) matter or you will get an error}
*/                  