import React from 'react';
import image from '../../../images/people-office.jpg';



const Blogs = () => {
    return (
        <div className="row bg-info p-5">
            <h1 className="text-white text-center p-3">THIS IS OUR BLOGS PART</h1>
            <div className="col-md-6">
                <h2 className="text-white">Know About World Famous IT Company </h2>
                <p className="text-white"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid odit, incidunt, explicabo sequi recusandae cum nesciunt eius dolorum voluptate voluptates enim laudantium corrupti cupiditate architecto adipisci tempora beatae ut? Explicabo nostrum suscipit iusto placeat sed harum vitae, ipsa maiores? Eius nulla, deleniti ratione eaque maxime quam quod accusamus dolorem laborum odit saepe error tempore animi vel aspernatur at cupiditate. Dolorum reprehenderit architecto esse necessitatibus vitae asperiores enim dolor nemo nihil facilis possimus numquam, expedita voluptates repellat? Fugiat vero architecto debitis accusantium magni delectus ratione quia non officia voluptatum explicabo error repudiandae ullam, soluta odio est vel distinctio necessitatibus consequuntur fuga?</p>
            </div>
            <div className="col-md-6">
                <img style={{ width: '600px'}} src={image} alt=""/>
            </div>
        </div>
    );
};

export default Blogs;