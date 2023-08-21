import express from 'express';  
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const authentication= (req,res,next) =>{
  const { username, password } = req.headers;

  const admin = ADMINS.find(a => a.username == username && a.password == password);
  if (admin) {
    next();
  } else {
    res.status(403).json({ message: 'Admin authentication failed' });
  }
}

// Admin routes
app.post('/admin/signup', (req, res) => {
  const admins = req.body;
  const existingUser = ADMINS.find((a)=>a.username == admins.username);
  if(existingUser){
    res.status(403).json({message:"User already exists"})

  }else{
    ADMINS.push(admins)
    res.status(201).send("Admin created succesfully")
  }

});

app.post('/admin/login', authentication,(req, res) => {
  res.json({ message: 'Logged in successfully' });
});
var id = 1;
app.post('/admin/courses',authentication, (req, res) => {
    const courses = req.body
    courses.id = id++;
    COURSES.push(courses)
    res.json({message: 'Course created successfully', courseId: courses.id})

});

app.put('/admin/courses/:courseId', (req, res) => {
  const courseId = parseInt(req.params.courseId);
  const editCourses = COURSES.findIndex((a)=>a.id===courseId);
  COURSES[editCourses] = req.body;
  res.json(COURSES[editCourses]);
});

app.get('/admin/courses',authentication, (req, res) => {
  res.json(COURSES);
});

// User routes
app.post('/users/signup', (req, res) => {
  const userDetails = {...req.body, purchasedCourses: []};
  USERS.push(userDetails)
  res.json({message: "Account Created Successfuully"});
});



app.post('/users/login', (req, res) => {
  
});

app.get('/users/courses', (req, res) => {
  // logic to list all courses
});

app.post('/users/courses/:courseId', (req, res) => {
  // logic to purchase a course
});

app.get('/users/purchasedCourses', (req, res) => {
  // logic to view purchased courses
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
