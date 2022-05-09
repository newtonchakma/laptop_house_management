import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container'>
            <Accordion defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Difference between javascript and nodejs?</Accordion.Header>
    <Accordion.Body>
        <h2>JavaScript</h2>
       <p>1. Javascript is a programming language that is used for writing scripts on the website.</p>
       <p>2. Javascript can only be run in the browsers</p>
       <p>3. It is basically used on the client-side.</p>
       <p>4. Javascript is capable enough to add HTML and play with the DOM. </p>
       <p>5. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.</p>
       <p>6. Javascript is used in frontend development.</p>
       <h2>Node Js</h2>
       <p>1. NodeJS is a Javascript runtime environment</p>
       <p>2. We can run Javascript outside the browser with the help of NodeJS.</p>
       <p>3. It is mostly used on the server-side.</p>
       <p>4. Nodejs does not have capability to add HTML tags.</p>
       <p>5. V8 is the Javascript engine inside of node.js that parses and runs Javascript. </p>
       <p>6. Nodejs is used in server-side development.</p>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header>Question-2:  Differences between sql and nosql databases.</Accordion.Header>
    <Accordion.Body>
        <h2>SQL</h2>
        <p>1. Relational Database management system (RDBMS)</p>
        <p>2. These databases have fixed or static or predefined schema.</p>
        <p>3. These databases are not suited for hierarchical data storage.</p>
        <p>4. These databases are best suited for complex queries</p>
        <p>5.Vertically Scalable</p>
         <p>6. Follows ACID property</p>

         <h2>NOSQL</h2>
         <p>1. Non-relational or distributed database system.</p>
         <p>2. They have dynamic schema.</p>
          <p>3. These databases are best suited for hierarchical data storage.</p>
          <p>4. These databases are not so good for complex queries.</p>
          <p>5. Horizontally scalable</p>
          <p>6. Follows CAP(consistency, availability, partition tolerance)</p>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
    <Accordion.Header>Question-3:  When should you use nodejs and when should you use mongodb.</Accordion.Header>
    <Accordion.Body>
        <h2>When should you use nodejs</h2>
        <p>
        Any project needs a programming environment and a runtime library that offers us basic programming tools/support and can compile and/or interpret our  code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc.
        So, if we want to write some kind of stand-alone program or server in Javascript, then we can use nodejs for it.
        </p>

         <h2>when should you use mongodb</h2>
         <p>MongoDB is a general-purpose database used in various ways to support applications in many different industries (e.g., telecommunications, gaming, finances, healthcare, and retail). MongoDB has found a home in many different businesses and functions because it solves long-standing problems in data management and software development. Typical use cases for MongoDB include:</p>
         <h6>Integrating large amounts of diverse data</h6>
         <p>If you are bringing together tens or hundreds of data sources, the flexibility and power of the document model can create a single unified view in ways that other databases cannot. MongoDB has succeeded in bringing such projects to life when approaches using other databases have failed.</p>
         <h6>Describing complex data structures that evolve</h6>
         <p>Document databases allow embedding of documents to describe nested structures and easily tolerate variations in data in generations of documents. Specialized data formats like geospatial are efficiently supported. This results in a resilient repository that doesn’t break or need to be redesigned every time something changes</p>
         <h6>Delivering data in high-performance applications</h6>
         <p>MongoDB’s scale-out architecture can support huge numbers of transactions on humongous databases. Unlike other databases that either cannot support such scale or can only do so with massive amounts of engineering and additional components, MongoDB has a clear path to scalability because of the way it was designed. MongoDB is scalable out of the bo</p>
         <h6>Supporting hybrid and multi-cloud applications</h6>
         <p>MongoDB can be deployed and run on a desktop, a massive cluster of computers in a data center, or in a public cloud, either as installed software or through MongoDB Atlas, a database-as-a-service product. If you have applications that need to run wherever they make sense, MongoDB supports any configuration now and in the future.</p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    );
};

export default Blogs;