import React, {Component} from 'react';
import {connect } from 'react-redux';
import Formfield from '../utils/Form/formfield';
import MyButton from '../utils/button';
import  {update, generateData, isFormValid} from '../utils/Form/formActions'


class Login extends Component {

    state = {
        formError: false,
        formSuccess: '',
        formdata: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter Your email'
                },
            Validation:{
                required: true,
                email: true

            },
            valid: false,
            touched: false,
            validationMessage: ''
            },  


            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter Your password'
                },
            Validation:{
                required: true,
            },
            valid: false,
            touched: false,
            validationMessage: ''
            },  

        }

        }
        updateForm = (element) => {
            const newFormdata = update(element, this.state.formdata, 'login');
            this.setState({
                formError: false,
                formdata: newFormdata
            })
    }

    submitForm =(event) => {
        event.preventDefault();
        let dataToSubmit = generateData(this.state.formdata, 'login');
        let formIsValid = isFormValid(this.state.formdata, 'login')

        if(formIsValid){
            console.log(dataToSubmit);
        }
        else{
             this.setState({
                 formError: true
             })
        }
       
    }


    render(){
        return (
           
                <div className="signin_wrapper">
                 <form onSubmit={(event)=> this.submitForm(event)}>
                    <Formfield 
                        id={'email'}
                        formdata={this.state.formdata.email}
                        change={()=> this.updateForm(this)}
                    />   
                    <Formfield
                        id={'password'}
                        formdata={this.state.formdata.password}
                        change={(element)=> this.updateForm(element)}
                    />

                        {this.state.formError ?
                        <div className="error_label">
                            Please check you email and Password
                        </div>
                        :null}


                        <MyButton onClick={(event) => this.submitForm(event)}
                         type="default"
                         title= "Log In"
                         linkTo="/dashboard"
                         addStyles={{
                             margin: '10px, 0 0 0'
                         }}
                        />
                        
                   
                 </form>
            
           </div>
        )
    }
}

export default connect()(Login);





