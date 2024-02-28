import React from "react"
class UserClass extends React.Component {
    // eslint-disable-next-line
    constructor(props) {

        super(props);


    }

    render() {

        return (

            <div className="font-semibold">
                <h3 className="transition-colors">THIS IS ABOUT SECTION</h3>
                <h5>Created BY : - {this.props.name}</h5>


            </div>
        );
    }

};

export default UserClass