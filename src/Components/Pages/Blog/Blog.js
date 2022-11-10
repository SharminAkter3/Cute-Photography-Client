import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='m-10 p-10'>
            <h2 className='font-bold m-2'>1. Write down the difference between SQL and NoSQL?</h2>
            <p className='m-4'>SQL or the Structured Query Language is the most common and popular programming language for the relational database management system. It is a language designed to extract, store, insert, delete, update and manage data for structured data and strategic analysis. SQL is widely used by top tech companies like Facebook, Whatsapp, etc for data processing solutions. It is used for different types of RDBMS including Oracle, MySQL, SQLServer, etc.
                <br />
                NoSQL database provides a mechanism for storage and retrieval of data that is modelled other than tabular form. It was introduced by Carl Stroz in the year 1998 called a Non-relational database. Now, it stands for Not only SQL. It is not limited to storing data in tables, instead, enables the big data to be stored in the structured, unstructured, semi-structured or polymorphic form.</p>

            <h2 className='font-bold m-2'>2. What is JWT, and how does it work?</h2>
            <p className='m-4'>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required. You also should not store sensitive session data in browser storage due to lack of security.</p>

            <h2 className='font-bold m-2'>3. What is the difference between javascript and NodeJS?</h2>
            <p className='m-4'> JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google's v8 engine.<br /> JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.<br /> JavaScript can manipulate DOM or add HTML within whereas Node.js doesn't have the capability to add HTML.<br /> JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development. <br /> JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.</p>

            <h2 className='font-bold m-2'>4. How does NodeJS handle multiple requests at the same time?</h2>
            <p className='m-4'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module</p>
        </div>
    );
};

export default Blog;