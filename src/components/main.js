import React from 'react';
import axios from 'axios';

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName : "",
            age: 0
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    getAge = async () => {
       const age =  await axios.get(`https://api.agify.io?name=${this.state.userName}`)
       if(age){
        this.setState({age: age.data.age }, () => {
            console.log(this.state.age, age);
        })
       }
    }
    render() {
        return (
            <div>
                <h2>WELCOME!!</h2>
                <br /> <br />
                <h4> Let's guess your AGE </h4>
                <input placeholder='Type your name' 
                name="userName" value={this.state.userName} onChange = {(e) => this.handleChange(e)}/>
                <button onClick={() => this.getAge()}>
                    Get Age
                </button>
                <br />
                <h5>Your age is {this.state.age}</h5>
            </div>
        );

    }

}