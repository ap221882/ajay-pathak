import React from 'react';

const About = () => {
  return (
    <div className='grid grid-cols-2 pt-4'>
      <div></div>
      <div className="scroll-m-20 border-b pb-2 text-2xl tracking-tight first:mt-0 font-sans text-gray-800/75 leading-8 overflow-y-auto">
        <p>Welcome to the world of React.js!</p>
        <p>{`I write HTML, draw CSS, and talk JavaScript. I am currently a web developer in general and a front-end developer in particular. I LOVE BROWSERS. In the world of frameworks, I'm a ReactJS Developer and a NextJS developer. I am proficient in building production-grade web applications following Agile and Test-Driven Development.`}
        </p>
        <br />
        <p>Besides this, I am fond of Typescript and the challenges we face in our daily software engineering life.</p>
        <p>{`I'm knowledgeable in integrating RESTful, and GraphQL APIs into Frontend Applications.
        Additionally, I am a preacher of modern software architecture involving Webpack's module federation or mono-repo architecture. Also I am well-versed in Continuous Integration/Continuous Deployment (CI/CD) and Front-end Performance Optimization in Single-Page Applications.`}</p>
        <br />
        <p>I have worked on dozens of famous React libraries like Redux and am building some interesting and scalable projects and libraries.</p>
        <p>Connect with me on LinkedIn and make a pull request for any of my GitHub projects for your suggestions.</p>
      </div>
    </div>
  );
};

export default About;
