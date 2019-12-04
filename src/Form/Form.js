import React,{Component} from 'react';
import './Form.css';

class Form extends Component{

    state = {
        name: '',
        age:'',
        password: '',
        confirmPassword: '',
        selectedState: 'Punjab',
        otherState: '',
        showMessage: false,
        errorMessage:'',
        errorIndex:0,
    }

    constructor(props){
        super(props);
    }

    validateField = (value, fieldIndex, message, stateKey) => 
    {

        if(value === "")
        {
            this.setState({
                errorMessage: message,
                errorIndex: fieldIndex
            })
            
        }else
        {
            this.setState({
                [stateKey]:value,
                errorIndex:0,
                errorMessage:''
            })
        }
    }

    changeName = (event) => 
    {
        let value = event.target.value;
        this.validateField(value, 1, "Please fill your Name","name")
    }

    changeAge = (event) => 
    {
        let value = event.target.value;
        this.validateField(value, 2, "Please fill your Age","age")
    }

    changeState = (event) => 
    {
        this.setState({
            selectedState: event.target.value
        })
    }

    otherStateHandler = (event) => {
        let value = event.target.value;
        this.validateField(value, 3, " Please enter your State ","otherState")
    }

    validatePassword = (event) => 
    {
        let value = event.target.value;
        this.validateField(value, 4, " Password is Required ","password")
    }

    validateConfirmPassword = async (event) =>
    {
        let value = event.target.value;
        await this.validateField(value, 5, " Confirm Password is Required ","confirmPassword");

        if(this.state.password != '' && this.state.confirmPassword != '')
        {
            if(this.state.password != this.state.confirmPassword)
            {
                this.setState({
                    errorMessage: "Password and Confirm Password Should be same. ",
                    errorIndex: 5
                })
            }
        }
    }

    submitHandler = (event) => 
    {
        if(this.state.errorIndex === 0 )
        {
            if(this.state.name != "" &&  this.state.age != "" )
            {
                this.setState((prevState, props)=>{
                    return {
                        showMessage:true,
                    }
                })
            }else{
                alert("Please fill the details ");
            }

            
        }else{
            this.setState({
                showMessage : false
            })
        }
        event.preventDefault();
    }

    render(){

        let message, color;
        if(this.state.age > 18 )
        {
            message = `${this.state.name} is eligible to Vote. State : ${ this.state.selectedState === "Others" ? this.state.otherState : this.state.selectedState}`;
            color = "green";
        }else{
            message = `${this.state.name} is not eligible to Vote.`;
            color = "red";
        }

        return(
            <div className="container">
                <form onSubmit={ this.submitHandler }>
                    <label className="block">
                        Name:
                        <input type="text" onBlur={this.changeName}   />
                        { this.state.errorIndex === 1 ? <p className="inline-block">{ this.state.errorMessage }</p> : null }
                    </label>
                    <label className="block">
                        Age:
                        <input type="number" min="0" onBlur={this.changeAge} /> 
                        { this.state.errorIndex === 2 ? <p className="inline-block"> {this.state.errorMessage }</p> : null }
                    </label>
                    <label className="block">
                        Password :
                        <input type="password" placeholder="Enter Your Password" onBlur={this.validatePassword} />
                        { this.state.errorIndex === 4 ? <p className="inline-block"> {this.state.errorMessage }</p> : null }
                    </label>
                    <label className="block">
                        Confirm Password : 
                        <input type="password" placeholder="Confirm Password"    onBlur={this.validateConfirmPassword} />
                        { this.state.errorIndex === 5 ? <p className="inline-block"> {this.state.errorMessage }</p> : null }
                    </label>
                    <label className="block">Select your State:
                        <select value={this.state.selectedState}  onChange={this.changeState}>
                            <option value="Harayna">Harayna</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Others">Others</option>
                        </select>
                    </label>
                    { this.state.selectedState === "Others" ? <input type="text" onBlur={this.otherStateHandler} placeholder="Enter your State" /> : null }
                    { this.state.errorIndex === 3 ? <p className="inline-block"> {this.state.errorMessage }</p> : null }
                    < input className="block" type="submit" value="submit" />
                </form>
                <div>
                    <h1>Name : {this.state.name}</h1>
                    <h2>Age : {this.state.age}</h2>
                    { this.state.showMessage ? <h3 style={{color:color}} >{message}</h3> : null}
                </div>
            </div>  
        )
    }
}

export default Form;