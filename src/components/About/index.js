import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg'

const About = () => {
  return (
    // React.createElement('div',{},[
      // React.createElement('h1',{}, 'Stepan'),
      // React.createElement('p',{}, 'breed: Human')
    // ])
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
     
      <img src={coverImage} className="my-2" style={{width: "100%"}} alt="cover"/>
      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </section>

  );
}

export default About;
