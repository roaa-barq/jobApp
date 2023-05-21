��#   j o b A p p 
 
 
#Job-App.
Nodejs & MongoDB.

Roaa Barq , Masa Abu Odeh and Masa Masri.

* npm packages used:.<br />
  1-"body-parser".<br />
  2-"express".<br />
  3-"mongoose".<br />
  3-"multer".<br />
  ____________________<br />
* Models:.<br />
  Application Model.<br />
  Job Model.<br />
  Saved Jobs Model<br />
  ____________________<br />
 *  How our code execute? <br />

* index.js -> app.js -> router -> controller -> services.<br />
In controllers, We have function that handle request & response.<br />
In services, all the database operation happens like fetching, Insertion, Deletion.<br />
  
___________________________________________________________________________________________________________________________________<br />
1- CRUD Operations: The API must implement basic CRUD operations on the database to enable the creation, retrieval, update, and deletion of job listings, and job applications.<br />

* CRUD on jobs:<br />
router.post("/addJob",UserController.addJob);  ///create.<br />
![image](https://github.com/masamasri01/Job-App/assets/93089580/33bfad57-e3d1-4282-8470-fd6dab77b5b3)<br />
![image](https://github.com/masamasri01/Job-App/assets/93089580/103834e1-6372-427a-996d-118236ae8f5b)<br />



router.get('/jobs/:id', UserController.getJobById); //retrieve.
![image](https://github.com/masamasri01/Job-App/assets/93089580/1069e66a-c8c8-4821-bc62-d7858f99ed69)<br />



router.put('/jobs/:id',UserController.updateJobOfId );//update.
![image](https://github.com/masamasri01/Job-App/assets/93089580/bb38ccf0-a26d-40f0-b633-c193ded53127)<br />
![image](https://github.com/masamasri01/Job-App/assets/93089580/8ac75d24-f133-4faa-860a-fb274fc04693)<br />

router.delete('/jobs/:id',UserController.deleteJob); //delete.
![image](https://github.com/masamasri01/Job-App/assets/93089580/ddc74217-f138-4884-a17e-9f6a68128fb7)<br />
______________________________________________________________________________________________________
______________________________________________________________________________________________________
