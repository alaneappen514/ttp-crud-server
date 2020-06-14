var express = require("express");
var router = express.Router();
const { Campus, Student } = require("../database/models");


//Route to get All Students//
router.get("/", async (req,res, next) => {
    try{
      const students = await Student.findAll({ include: Campus});
      console.log(students);
      res.status(200).json(students);
    }catch(err){
      next(err);
    }
  });

router.get("/:id", async (req, res,next) =>{
  //Takes the Id
  const{ id } = req.params;
  //Query the database
  try{
    const student = await Student.findByPk(id, {include: Campus});
    //send back the student as a repsonse
    res.status(200).json(student);
  } catch(err){
     // if error:
    // handle error
    next(err);
  }
});

  module.exports = router;