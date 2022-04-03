import React from "react";
import BooksAvailable from "./components/BooksAvailable";


class App extends React.Component{
  state = { 
    name : 'sandeep',
    age : ' 30 ',
    gender : 'male',

  }
  render(){
    return(
      <div>
        <center>
          <h3> Hello Welcome to Sandeep Book store. 
          </h3>
          <BooksAvailable  name={this.state.name}
                            age={this.state.age}
                            gender= {this.state.gender} />
        </center>
      </div>
    )
  }
}

export default App;
