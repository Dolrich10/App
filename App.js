import React, { Component } from 'react';
import View from './View';
import Form from './Form';

class App extends Component {
   constructor(props){
       super(props);
       this.state = { 
        books:[],
        name:"",
        ISBN:"",        
        author:"",
      };
      this.handelFormChange=this.handelFormChange.bind(this);
      this.handelClick=this.handelClick.bind(this);
   }
  
   handelViewChange(data){
       console.log('ahandel view change');
   }

   handelFormChange(data){
       let book={
           name:data.name,
           ISBN:data.ISBN,
           author:data.author,
       }
       let books_array=[...this.state.books]
   }
    render() { 
        return ( 
            <div className="container">
                <Form 
                    ISBN={this.props.ISBN}
                    name={this.props.name}
                    author={this.props.author}
                />
                <br/>
                <br/>
                <View
                    books={this.state.books}
                    
                 />
                
            </div>
            

        );
    }
}
 
export default App;