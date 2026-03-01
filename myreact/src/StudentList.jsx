import { useState } from 'react';

// Write a React functional component that displays a list of students stored in state. 
// How will you add a new student to the list using an input field and button?

function StudentList() {
    const [students, setStudents] = useState(['Hafsa', 'Fatima', 'Ayesha']);
    const [newStudent, setNewStudent] = useState("");

    function addStudent() {
        setStudents([...students, newStudent]);
        setNewStudent("");
    }

    return (
        <>
            <div>
                <h1>Student List</h1>
                {students.map((students, index) => {
                    return <ul key={index}>{students}</ul>
                })}
                <input type="text" value={newStudent} onChange={(e) => setNewStudent(e.target.value)} />
                <button onClick={addStudent}>
                    Add Student
                </button>
            </div>
        </>
    )
}

export default StudentList;