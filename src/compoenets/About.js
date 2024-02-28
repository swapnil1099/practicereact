import React from 'react'
import UserClass from './UserClass'

class About extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  };
  componentDidMount() {

  }
  render() {
    return (
      <div className='m-4 p-4  border-solid border-2 border-black-600 border-red-100'>
        <div className='m-4 p-4  border-double  border-2 border-black-600 bg-gray-50  text-center'>
          <h1 className='font-bold'>ABOUT PAGE</h1>
          <UserClass name={"swapnil"} />
        </div>
      </div>
    )
  }
};



export default About
