import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Discussion from './Discussion';
import Rules from './Rules';
import Workflow from './Workfolw';
import Contact from './Contact';

class PageContent extends Component {
    render() {
        return (
            <section>
                <Switch>
                    <div>
                        <Route exact path="/" component={Discussion} />
                        <Route exact path="/rules" component={Rules} />
                        <Route exact path="/workflow" component={Workflow} />
                        <Route path="/contact" component={Contact} />
                   </div>
                </Switch>
            </section>
        )
    }
}

export default PageContent;