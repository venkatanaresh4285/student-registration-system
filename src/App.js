import React, { useState } from "react";
import "./App.css";

function App() {
  const [courseTypes, setCourseTypes] = useState([]);
  const [courses, setCourses] = useState([]);
  const [courseOfferings, setCourseOfferings] = useState([]);
  const [students, setStudents] = useState([]);

  const [newCourseType, setNewCourseType] = useState("");
  const [newCourse, setNewCourse] = useState("");
  const [selectedCourseTypeForOffering, setSelectedCourseTypeForOffering] =
    useState("");
  const [selectedCourseForOffering, setSelectedCourseForOffering] =
    useState("");

  const [newStudentName, setNewStudentName] = useState("");
  const [
    selectedCourseOfferingForRegistration,
    setSelectedCourseOfferingForRegistration,
  ] = useState("");

  // Handlers
  const addCourseType = () => {
    if (newCourseType.trim() !== "") {
      setCourseTypes([...courseTypes, newCourseType]);
      setNewCourseType("");
    } else {
      alert("Please enter a course type.");
    }
  };

  const addCourse = () => {
    if (newCourse.trim() !== "") {
      setCourses([...courses, newCourse]);
      setNewCourse("");
    } else {
      alert("Please enter a course.");
    }
  };

  const addCourseOffering = () => {
    if (selectedCourseTypeForOffering && selectedCourseForOffering) {
      const offering = `${selectedCourseTypeForOffering} - ${selectedCourseForOffering}`;
      setCourseOfferings([...courseOfferings, offering]);
      setSelectedCourseTypeForOffering("");
      setSelectedCourseForOffering("");
    } else {
      alert("Please select both course type and course.");
    }
  };

  const registerStudent = () => {
    if (
      newStudentName.trim() !== "" &&
      selectedCourseOfferingForRegistration !== ""
    ) {
      setStudents([
        ...students,
        {
          name: newStudentName,
          courseOffering: selectedCourseOfferingForRegistration,
        },
      ]);
      setNewStudentName("");
      setSelectedCourseOfferingForRegistration("");
    } else {
      alert("Please enter student name and select a course offering.");
    }
  };

  return (
    <div className="container">
      <h1>🎓 Student Registration System</h1>

      <div className="grid">
        {/* Left side - Adding Forms */}
        <div className="left-panel">
          <div className="card">
            <h2>Add Course Type</h2>
            <input
              type="text"
              value={newCourseType}
              onChange={(e) => setNewCourseType(e.target.value)}
              placeholder="Enter Course Type"
            />
            <button onClick={addCourseType}>Add Course Type</button>
          </div>

          <div className="card">
            <h2>Add Course</h2>
            <input
              type="text"
              value={newCourse}
              onChange={(e) => setNewCourse(e.target.value)}
              placeholder="Enter Course"
            />
            <button onClick={addCourse}>Add Course</button>
          </div>

          <div className="card">
            <h2>Create Course Offering</h2>
            <select
              value={selectedCourseTypeForOffering}
              onChange={(e) => setSelectedCourseTypeForOffering(e.target.value)}
            >
              <option value="">Select Course Type</option>
              {courseTypes.map((type, idx) => (
                <option key={idx} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <select
              value={selectedCourseForOffering}
              onChange={(e) => setSelectedCourseForOffering(e.target.value)}
            >
              <option value="">Select Course</option>
              {courses.map((course, idx) => (
                <option key={idx} value={course}>
                  {course}
                </option>
              ))}
            </select>
            <button onClick={addCourseOffering}>Add Course Offering</button>
          </div>

          <div className="card">
            <h2>Register Student</h2>
            <input
              type="text"
              value={newStudentName}
              onChange={(e) => setNewStudentName(e.target.value)}
              placeholder="Student Name"
            />
            <select
              value={selectedCourseOfferingForRegistration}
              onChange={(e) =>
                setSelectedCourseOfferingForRegistration(e.target.value)
              }
            >
              <option value="">Select Course Offering</option>
              {courseOfferings.map((offering, idx) => (
                <option key={idx} value={offering}>
                  {offering}
                </option>
              ))}
            </select>
            <button onClick={registerStudent}>Register Student</button>
          </div>
        </div>

        {/* Right side - Listing */}
        <div className="right-panel">
          <div className="card list-card">
            <h2>📚 Course Types</h2>
            {courseTypes.length === 0 ? (
              <p>No Course Types Added</p>
            ) : (
              <ul>
                {courseTypes.map((type, idx) => (
                  <li key={idx}>{type}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="card list-card">
            <h2>📘 Courses</h2>
            {courses.length === 0 ? (
              <p>No Courses Added</p>
            ) : (
              <ul>
                {courses.map((course, idx) => (
                  <li key={idx}>{course}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="card list-card">
            <h2>🗂️ Course Offerings</h2>
            {courseOfferings.length === 0 ? (
              <p>No Offerings Created</p>
            ) : (
              <ul>
                {courseOfferings.map((offering, idx) => (
                  <li key={idx}>{offering}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="card list-card">
            <h2>👩‍🎓 Registered Students</h2>
            {students.length === 0 ? (
              <p>No Students Registered</p>
            ) : (
              <ul>
                {students.map((student, idx) => (
                  <li key={idx}>
                    {student.name} - {student.courseOffering}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
