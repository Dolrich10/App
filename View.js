import React, { Component } from 'react';

class View extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            books:this.props.books
         }
         this.get=this.get.bind(this);
    }
    componentDidMount(){
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET','http://localhost:5000/books');
        xmlhttp.send();
        xmlhttp.onload = function(){
            let serverData =JSON.parse( xmlhttp.responseText); 
            console.log(serverData);
            this.setState({ books:serverData  });
            this.props.handelViewChange(serverData);
        }.bind(this);
    

    };

    render() { 
        let books=this.state.books;
        return ( 
            <div className="container">
                <div className="row">
                    <table className="table">
                        <thead>
                            <th>Book ID</th>
                            <th>Name</th>
                            <th>ISBN</th>
                            <th>Author</th>
                        </thead>
                        <tbody>
                            {
                                books.map(function(book,index){
                                    return(
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{book.name}</td>
                                            <td>{book.ISBN}</td>
                                            <td>{book.Author}</td>
                                        </tr>
                                    );
                                })
                            }

                        </tbody>
                    </table>

                </div>
               
            </div>
         );
    }
}
 
export default View;