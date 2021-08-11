import React from 'react';
import ReactDom from 'react-dom';

//For importing CSS
import './index.css'

//data to be displayed:
import { books } from './bookdata'

//import the book Component
import Book from './Books';

//capitalize the function to show that it is a special Function (COMPONENT)
//As of now it is a stateless functional component
//Always returns the JSX

//First way: Simplest way of creating a component
    //function Greeting() {
    //   //JSX
    //   return <h4>This is my first component</h4>
    // }

//Second way of creating a component
    // const Greeting = () => {
    //   return React.createElement('h1',{}, 'Hello!!')
    // }

//Nesting of Components
    // const Greeting = () => {
    //   return (
    //     <div>
    //       <Name />
    //       <Message/>
    //     </div>
    //   )
    // }
    // const Name = () => {
    //   return <h1>This is Divya</h1>
    // }
    // const Message = () => {
    //   return <h2>This is my first React App</h2>
    // }


// to connect the component Greeting with the root div in the public/index.html
    //ReactDom.render(<Greeting />, document.getElementById('root'));
//Alternative syntax: 
    //ReactDom.render(<Greeting></Greeting>, document.getElementById('root'));
// NOTE: In react, closing tag or self - closing Tag is must!




//Creating a Book list
const BookList = () => {
  return (
    <section className='bookList'>
      {
        books.map(book => {
          //  When spread operator isn't used
          //return <Book key={book.id} book={book}></Book>
          return <Book key={book.id} {...book}></Book>
        })
      }
    </section>
  )
}

//Following is an example of Book component with seperate components-title and author
// const Book = () => {
//   return (
//     <article className='book'>
//     <BookImage />
//       <Title />
//       <Author/> 
//     </article>
//   )
// }
// const BookImage=()=><img src="https://images-eu.ssl-images-amazon.com/images/I/81zHwTa288L._UX300__PJprime-reading,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg"></img>
// const Title = () =><h1 class="title">Immortals of Meluha (The Shiva Trilogy Book 1)</h1>
// const Author = () => <h4 class="author">Amish Tripathi</h4>


//Following is an example of the book as a single component after combining the Title and the author components
// setting up the variables
    // const title = "Immortals of Meluha (The Shiva Trilogy Book 1)";
    // const author = "Amish Tripathi";
    // const imageSrc = "https://images-eu.ssl-images-amazon.com/images/I/81zHwTa288L._UX300__PJprime-reading,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg";
    // const Book = () => {
    //   return (
    //     <article className="book">
    //       <img src={imageSrc}></img>
    //       {/* Create variables for the title and the author and used the below */}
    //       <h1 class="title">{title}</h1>
    //       <h4 class="author">{ author.toUpperCase()}</h4>
    //     </article>
    //   )
    // }


ReactDom.render(<BookList />, document.getElementById('root'));