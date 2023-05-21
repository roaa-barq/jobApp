const router = require("express").Router();
const UserController = require('../controllers/user_controller');
const multer = require('multer');

const storage = multer.memoryStorage(); //for pdf resume
const upload = multer({ storage });


//CRUD OPS on jobs
router.post("/addJob",UserController.addJob);  //~~~~~~~create






router.post('/apply', upload.single('resume'), UserController.addApplication); ///aply for a job (post) --create



router.get('/applications',UserController.getAllApplications);                 ///get applications 
router.get('/applications/:id/resume',UserController.getResumeOfSpecificApplication );  // get the resume and download for a specific application


module.exports = router;