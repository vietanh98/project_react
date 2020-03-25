import React from 'react';
import {Button} from 'react-bootstrap';

class CreateUser extends React.Component {
    render() {
        return (
            <div className='form' method="Post" className='col-md-8'>
                <h1> Demo Form Đăng ký</h1>
                <form>
                    <div>
                        <label>User Name</label>
                        <input type='text' name='user_name' className='style-input' placeholder='User Name'/>
                    </div>
                    <div>
                        <label>Display Name</label>
                        <input type='text' name='display_name' className='style-input' placeholder='Display Name'/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type='text' name='email' className='style-input' placeholder='Email'/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type='password' name='password' className='style-input' placeholder='Password'/>
                    </div>
                    <button type='submit' className='btn-sigup'>Đăng ký</button>
                </form>


            </div>

        );
    }

}

export default CreateUser;