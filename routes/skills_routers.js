var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('../views/dashboard/protofile.ejs');
});

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
