import React,{Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: "",
            email: ""
        }
        this.baseState = this.state;
    }

    handlechange = (event) => {
        this.setState ({[event.target.name]:event.target.value});
    }

    handlesubmit = (event) => {
        let data = this.state;
        console.log(data);
        event.preventDefault();
        this.setState(this.baseState);
    }

    render() {
        return (
            <form onSubmit={this.handlesubmit}>
                <label>Fullname</label>
                <input type="text" name="fullname" value={this.state.fullname} onChange={this.handlechange} />
                <label>Email</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handlechange} />
                <button type="submit">Send</button>
            </form>
        )
    }
}

export default Form;