const { save } = require('debug/src/node');
var express = require('express');
var router = express.Router();
// const skillView = require("../views/dashboard/skills.ejs");
const skillModel = require("../models/skill_models");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('../views/dashboard/skills.ejs');
});

router.post('/insert',(req,res,next)=>{
  const skillSS = new skillModel({
    //kkkkkk
    skills_name: req.body.skillName,
    // progress_percent: { type: Number, required: true },
    skill_descrip:req.body.decripText,
    is_active:req.body.Active ,
    // addedAt: 

//,,,,,,,
  })
  skillModel.save((resualt,error)=>{
    if(error){
        // console.log(error);
        console.log("try agian");
        return;}
        console.log(resualt);
    }
  
  );
  // console.log(req.body.username);
}
)

module.exports = router;




// ----------------

// const { Router } = require('express');
// const skillsController = require('../controller/cl_skills');
// const router = Router();

// router.get('/', skillsController.skillsInfo);

// // for now I will only use post for all these.
// router.post('/add', skillsController.addSkill);
// router.post('/update', skillsController.updateSkill);
// router.post('/delete', skillsController.deleteSkill);

// module.exports = {
//   skillsRouters: router,
// };
