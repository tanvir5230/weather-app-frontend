import React from "react";
import myPhoto from "../../assets/my_photo.jpg";

export const DeveloperInfo = () => {
  return (
    <div
      className="w-100 h-100 py-3"
      style={{ overflowY: "auto", overflowX: "hidden" }}
    >
      <h3 className="mb-4" style={{ textAlign: "center" }}>
        About Me
      </h3>
      <div className="row">
        <div className="col-12 col-lg-4 d-flex justify-content-center">
          <MyImage />
        </div>
        <div className="col-12 col-lg-8">
          <AboutMe />
        </div>
      </div>
    </div>
  );
};

const MyImage = () => {
  return (
    <img
      style={{ borderRadius: "10px" }}
      className="my-2"
      width={200}
      height={200}
      src={myPhoto}
      alt="The developer"
    />
  );
};

const AboutMe = () => {
  return (
    <>
      <p style={{ textAlign: "justify" }}>
        I am an EEE graduate but I am passionate about software engineering and
        have been actively learning coding since my final year in university. I
        enjoy taking on challenges and have spent countless hours solving
        problems without ever getting bored. This dedication has fueled my
        desire to build a career in software engineering.
      </p>
      <h5>My Skillset:</h5>
      <p style={{ textAlign: "justify" }}>
        <ul>
          <li>Development of REST APIs using Node.js, MongoDB, and Express.</li>
          <li>
            Proficient in performing CRUD operations on the front end by
            consuming APIs.
          </li>
          <li>
            Conversion of PSD designs into websites or apps using React and
            React Native.
          </li>
          <li>Strong command of HTML, CSS, and DOM manipulation.</li>
          <li>
            Effective utilization of the context API for state management.
          </li>
          <li>Understanding of the concept of Redux.</li>
          <li>Appreciation for the significance of clean code in teamwork.</li>
          <li>
            Awareness of the importance of clean code for maintaining and
            scaling software.
          </li>
          <li>Solid understanding of the basics of Git and GitHub.</li>
        </ul>
        <p>
          With my passion for software engineering, diverse skill set, and
          commitment to clean code, I am confident in my ability to contribute
          positively to any software development team.
        </p>
      </p>
    </>
  );
};
