import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
        
                <form className="col-md-12">
                    <div className="control">
                        <label>Full Name: </label><br/>
                        <input type="text" /><br/>
                    </div>
                    <div className="control">
                        <label>Email: </label><br/>
                        <input type="email" /><br/>
                    </div>
                    
                    <div className="control">
                        <label>Mobile: </label><br/>
                        <input type="number" /><br/>
                    </div>
                    
                    <div className="control">
                        <label>Message: </label><br/>
                        <textarea></textarea><br/>
                    </div>

                    <div className="control">
                        <input type="submit" value="Submit" />
                    </div>
                    
                </form>
        )
    }
}

export default Form;