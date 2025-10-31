import React from 'react';
import '../profile.css';

export function Profile({ data }) {
  return (
    <div className="parent">
      <h2 style={{ backgroundColor: 'lightgreen', color: 'white' }}>Profile Page</h2>

      <div className="card-container">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((student, index) => (
            <div key={index} className="student-card">
              <h3>Name: {student.myname}</h3>
              <h3>Branch: {student.branch}</h3>
              <h3>Section: {student.section}</h3>
              <h3>College: {student.college}</h3>
            </div>
          ))
        ) : (
          <p>No data found.</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
