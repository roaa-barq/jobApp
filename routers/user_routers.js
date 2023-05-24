const router = require("express").Router();
const UserController = require("../controllers/user_controller");
const multer = require("multer");

const storage = multer.memoryStorage(); //for pdf resume
const upload = multer({ storage });





//CRUD OPS on jobs
router.post("/jobs", UserController.addJob); //~~~~~~~create
/**
 * { "jobTitle": "security engineer", "description":"desc", "requirements":["req1","req2"], "location":"new york", "salary":200000 }
 */
router.get('/jobs/:id', UserController.getJobById); //~~~~~~~~retrieve 
router.put('/jobs/:id',UserController.updateJobOfId );//~~~~~update 
router.delete('/jobs/:id',UserController.deleteJob); // ~~~~delete  



router.get('/jobs',UserController.getJobs);   //get jobs./ search and  ex: jobs?jobTitle=engineer&location=new+york&minSalary=50000&maxSalary=100000' 
router.get('/getSavedJobs',UserController.getSavedJobs);  //

router.post("/apply", upload.single("resume"), UserController.addApplication); ///aply for a job (post) --create
router.get("/applications/:id", UserController.getApplicationById); //~~~~~~~~retrieve
router.put("/applications/:id", UserController.updateApplicationOfId); //~~~~~update
router.delete("/applications/:id", UserController.deleteApplication); // ~~~~delete


router.get("/applications", UserController.getAllApplications); ///get applications
router.get(
  "/applications/:id/resume",
  UserController.getResumeOfSpecificApplication
); // get the resume and download for a specific application

router.get("/applications/:email", UserController.getMyApplicationsByEmail);

module.exports = router;
