import React, { Component } from 'react'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {},
            loading: false //contoh lain
        }
    }

    handleInputChange= (e) => {
      let name = e.target.name 
      let value = e.target.value

      // this.setState({loading:true}) //cara lain tanpa prevState
      this.setState(prevState => ({
        form: {
          ...prevState.form,
          [name] : value
        },
        loading: true
      }), () => {
        console.log(this.state.form)
      })

      console.log(this.state.form)
    }

    handleOnSubmit = (e) => {
      e.preventDefault()
      console.log("tes berhasil")
    }
    
    render(){
        return(
            <header className="App-header">
              <form onSubmit={this.handleOnSubmit} >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            name="email"
            onChange={this.handleInputChange}   //untuk class handleInputChange
            aria-describedby="emailHelp"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input 
            type="password" 
            className="form-control" 
            name="password"
            onChange={this.handleInputChange}   //untuk class handleInputChange
            id="exampleInputPassword1"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
              </header>
          )
    }
}

export default Login