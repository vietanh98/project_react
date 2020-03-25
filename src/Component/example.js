import React from 'react';

class Example extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true,
        }
    }

    render() {


        //***Cách viết thứ 3
        return this.state.isLoggedIn ? (
            <div> Hello world</div>
        ) : (<div>
            Hello Việt anh
        </div>)

        //***** Cách viết thứ nhất
        // let message
        // if(this.state.isLoggedIn){
        //   message = <div>Hello world</div>
        // }
        // else {
        //     message = <div>Hello Việt Anh</div>
        // }
        // return (
        //     <div>{message}</div>
        // )

        //****Cách viết thứ 2
        // if(this.state.isLoggedIn){
        //    return(
        //        <div>
        //            <h1>Hello world</h1>
        //        </div>
        //    );
        // }
        // else {
        //     return (
        //         <div>
        //             <h1>Hello Việt anh</h1>
        //         </div>
        //     )
        // }

    }
}

export default Example;
