import React, { Component } from 'react';


class Form extends Component {
    constructor(props){
        super(props);
        this.state = { 
                ISBN:this.props.ISBN,
                name:this.props.name,
                author:this.props.author,
            }
         

         this.handleChange = this.handleChange.bind(this);
         this.handleClick = this.handleClick.bind(this);

    }
   

    handleChange(e){
    
    
    this.setState({[e.target.name] :e.target.value})

    }
    handleClick(){
       let xmlhttp = new XMLHttpRequest();
       xmlhttp.open('POST','http://localhost:5000');
       xmlhttp.setRequestHeader('Content-Type','application/json');
       xmlhttp.send(JSON.stringify(this.state));
    

       console.log(this.state);
       console.log("works");

    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <h1>Library</h1>
                    </div>
                    <div className="row">
                        <p>Name</p>
                        <input type="text" name="name" onChange={this.handleChange} value={this.state.name} className="form-control"></input>
                    </div>
                    <div className="row">
                        <p>ISBN</p>
                        <input type="text" name="ISBN" onChange={this.handleChange} value={this.state.ISBN} className="form-control"></input>
                    </div>
                
                    <div className="row">
                        <p>Author</p>
                        <input type="text" name="author" onChange={this.handleChange} value={this.state.author} className="form-control"></input>
                    </div>
                    <div className="row">
                        <button onClick={this.handleClick} className="btn btn-sucess"> submit</button>
                    </div>

                </div>
            </React.Fragment>
         );
    }
}
 
export default Form ;