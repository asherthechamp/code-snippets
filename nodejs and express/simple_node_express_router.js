const express = require('express');
const router = express.Router();


let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{
  // Copy the code here
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email",(req,res)=>{
  // Copy the code here
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// POST request: Create a new user
router.post("/",(req,res)=>{
  // Copy the code here
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  // Copy the code here
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  // Copy the code here
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

module.exports=router;




// Implemented POST method

router.post("/",function (req,res){
  if (req.body.email){
      friends[req.body.email] = {
          "firstName":req.body.firstName,
          //Add similarly for lastName
          //Add similarly for DOB
          }
  }
res.send("The user" + (' ')+ (req.body.firstName) + " Has been added!");
});

// Implemented PUT method

router.put("/:email", function (req, res) {
  const email = req.params.email;
  let friend = friends[email]
  if (friend) { //Check is friend exists
      let DOB = req.body.DOB;
      //Add similarly for firstName
      //Add similarly for lastName

      //if DOB the DOB has been changed, update the DOB 
      if(DOB) {
          friend["DOB"] = DOB
      }
      //Add similarly for firstName
      //Add similarly for lastName
      friends[email]=friend;
      res.send(`Friend with the email  ${email} updated.`);
  }
  else{
      res.send("Unable to find friend!");
  }
});
