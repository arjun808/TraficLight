import React, { Component, HTMLInputTypeAttribute } from 'react'
import "./Form.css"


interface DataObj{
    name:string,
    email:string,
    password:string,
    confirmPassword:string
}

interface stateType{
    data:DataObj

}
export default class Form extends Component<{},stateType> {
    constructor(props:{}){
        super(props)
        this.state={
            data:{
                name:"",
                email:"",
                password:"",
                confirmPassword:"",
            }
        }

    }
    handleSubmit=(e:any)=>{
        e.preventDefault()
        console.log("your form got submited with the data ->",this.state.data)

    }
    handleChange = (e: any) => {
        const { name, value } = e.target;
        this.setState((previousState) => ({
            data: {
                ...previousState.data,
                [name]: value
            }
        }));
    };
    
  render() {
    const {name,email}=this.state.data
    return (
      <div className='parent'>
        <div className='above_form'>

        <form className='form' onSubmit={this.handleSubmit}>
            <div className='form_item'>
            <label>
        <span className=''>FULLNAME:</span>
         <input name='name' value={name} onChange={this.handleChange} placeholder='Your Full Name'></input>
     </label>
            </div>
            <div>
            <label>
        <span className=''>FULLNAME:</span>
         <input name='email' value={email} onChange={this.handleChange} placeholder='Your Full Name'></input>   
     </label>
            </div>
           
            <button type='submit'>Submit</button>
        </form>
        </div>
      </div>
    )
  }
}
