import React from 'react';

class LifecycleA extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
            </div>
        );
    }
}

export default LifecycleA;
