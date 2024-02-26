import React from 'react'
import UserClass from './UserClass'

class About extends React.Component{
  // eslint-disable-next-line
  constructor(props){
      super(props);
  };
  componentDidMount(){
   
  }
  render(){
    return (
      <div>
      <h1>ABOUT PAGE</h1>
      <UserClass name={"swapnil"}/>
      </div>
    )
  }
};

 

export default About
