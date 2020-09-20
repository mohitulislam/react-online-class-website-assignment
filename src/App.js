import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/data.json';
import Course from './components/Course/Course';
import Cart from './components/Cart/Cart';
import Button from 'react-bootstrap/Button';


function App() {
  const [courses, setCourse]= useState([]);
  const [cart, setCart] =useState([]);

  useEffect(()=>{
    setCourse(data);
    const courseName = data.map(course=> course.name) 
    
  },[])
  
  const handleAddCourse = (course) => {
    const newCart = [...cart, course]
    setCart(newCart)
  }

  return (
    <div>
      <h1>Best Online Courses 2020 </h1>
      <h3>Total Enroll Courses: {cart.length} </h3>
      <Cart cart={cart} ></Cart>
      
      <ul>
        {
        courses.map(course=> <Course course={course} handleAddCourse={handleAddCourse} ></Course>)
        }
        
      </ul> 
    </div>
    
    
  );
}

export default App;
