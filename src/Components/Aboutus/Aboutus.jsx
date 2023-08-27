import React from 'react';
import img from '../../assets/image/myaboutme.jpeg';

const AboutUs = () => {
  return (
    <div className="about-container bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={img} alt="About Me" className="img-fluid about-image" />
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <h2 className="about-heading mb-4">About Me</h2>
              <p className="about-description">
              Hey there, I'm Ashry, a 21-year-old Flutter developer based in Alexandria, Egypt. I'm currently pursuing my studies at Alexandria University, Faculty of Science. My passion for coding and technology led me to specialize in Flutter, a versatile framework for building cross-platform applications. With my proficiency in Dart programming and UI/UX design, I create intuitive and captivating mobile apps that cater to users' needs.              </p>
              <a href="#" className="btn btn-primary about-button">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
