import React from 'react';

class BooksAvailable extends React.Component{
    render(){
        return(
            <div>
                <center>
                    <h4>My  Name : {this.props.name} and my age is : {this.props.age} 
                and i am {this.props.gender}</h4> 
                </center>
            </div>
        )
    }
}
export default BooksAvailable;
