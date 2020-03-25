import React from 'react';
import './App.css';
import Hello from './Component/demo';
import Demo from "./Component/Conent";
import Example from "./Component/example";
import Listrender from "./Component/Examplelistrender";
import Main from "./Layout/main";

class App extends React.Component {
    render() {
        return (

            <div className="App">
                <Main/>
            </div>
        )
            ;
    }


}


export default App;
