import React, { useState } from 'react';
import './CourseManagementCard.css';

const CourseManagementCard = () => {
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseDuration, setCourseDuration] = useState('');
  const [courses, setCourses] = useState([]);

  const handleCreateCourse = () => {
    if (courseName.trim() && courseDescription.trim() && courseDuration.trim()) {
      setCourses([...courses, { name: courseName, description: courseDescription, duration: courseDuration }]);
      setCourseName('');
      setCourseDescription('');
      setCourseDuration('');
    }
  };

  const handleDeleteCourse = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
  };

  return (
    <div className="page-container">
     
        <h1>Course Management</h1>
        <div className="input-group">
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            placeholder="Course Name"
          />
          <input
            type="text"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            placeholder="Course Description"
          />
          <input
            type="text"
            value={courseDuration}
            onChange={(e) => setCourseDuration(e.target.value)}
            placeholder="Duration"
          />
          <button className="create-button" onClick={handleCreateCourse}>
            Create Course
          </button>
        </div>

        <div className="course-list">
          {courses.length > 0 ? (
            courses.map((course, index) => (
              <div key={index} className="course-item">
                <div className="course-details">
                  <h4>{course.name}</h4>
                  <p>{course.description}</p>
                  <p><strong>Duration:</strong> {course.duration}</p>
                </div>
                <button className="delete-button" onClick={() => handleDeleteCourse(index)}>Delete Course</button>
              </div>
            ))
          ) : (
            <p>No courses available</p>
          )}
        </div>
      </div>
   
  );
};

export default CourseManagementCard;
