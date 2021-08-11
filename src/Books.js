import React from 'react';

const Book = (props) => {
  // const { image, title, author } = props.book;
  const { image, title, author } = props; //when spread operator is used
  // console.log("hii",props);
      return (
        <article className="book">
          {/* Seperate function for handling the events */}
          <img src={image} onClick={()=>eventHandler}></img>
          {/* Create variables for the title and the author and used the below */}
          <h1 className="title" onClick={()=>complexHandler(title)}>{title}</h1>
          {/* Inline event Handler */}
          <h4 className="author" onClick={()=>alert(author  )}>{ author.toUpperCase()}</h4>
        </article>
      )
}

const eventHandler = () => {
  alert("Hello")
}

const complexHandler = (e) => {
  alert(e)
  console.log(e)
}

export default Book