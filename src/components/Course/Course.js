import React from 'react';
import Button from 'react-bootstrap/Button';
import '../Assets/css/bootstrap.min.css'
const Course = (props) => {
    const{name, price, id} = props.course
    const courseStyle = {border: '1px solid black', padding:'10px', margin: '10px', width:'70%'}
    const handleAddCourse = props.handleAddCourse;
    
    // console.log(props)
    return (
        
        <div style={courseStyle} >
            <h5> {id}. Course Name: {name}  </h5>
            <p>Price: ${price}.00 </p>
            <Button variant="primary" onClick={ () => handleAddCourse (props.course) } >Enroll Now</Button>
        </div>
    );
};

export default Course;                                         