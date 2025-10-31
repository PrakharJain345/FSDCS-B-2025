import React from 'react';
import Profile from './Profile';

export function Gallery() {
  const students = [
    {
      myname: "Prakhar",
      branch: "CSE",
      section: "B",
      college: "ABES Engineering College"
    },
    {
      myname: "Aarav",
      branch: "CSE",
      section: "B",
      college: "ABES Engineering College"
    },
    {
      myname: "Aman",
      branch: "CSE",
      section: "B",
      college: "ABES Engineering College"
    }
  ];

  return (
    <div>
      <Profile data={students} />
    </div>
  );
}

export default Gallery;
