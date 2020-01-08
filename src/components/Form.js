import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: "Jyoti",
            email: "geeksnotnerdsdotcom@gmail.com",
            mobile: "9867715458",
            message: "Hello!!!!"
        }
    }

    handlename = (event)=> {
        console.log(event);
    }

    render() {
        return (
        
                <form className="col-md-12">
                    <div className="control">
                        <label>Full Name: </label><br/>
                        <input type="text" value={this.state.fullname} onChange={this.handlename} /><br/>
                    </div>
                    <div className="control">
                        <label>Email: </label><br/>
                        <input type="email" value={this.state.email} /><br/>
                    </div>
                    
                    <div className="control">
                        <label>Mobile: </label><br/>
                        <input type="number" value={this.state.mobile} /><br/>
                    </div>
                    
                    <div className="control">
                        <label>Message: </label><br/>
                        <textarea value={this.state.message}></textarea><br/>
                    </div>

                    <div className="control">
                        <input type="submit" value="Submit" />
                    </div>
                    
                </form>
        )
    }
}

export default Form;