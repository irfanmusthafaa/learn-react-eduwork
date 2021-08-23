import React from 'react'

export class Validation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }


  render() {
    const { email, password } = this.state;

    return(
      <header className="App-header">
        <form onSubmit={this.handleSubmit} >
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
          type="text" 
          className="form-control" 
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={this.handleChange}   //untuk class handleInputChange
          aria-describedby="emailHelp"/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
          type="password" 
          className="form-control" 
          name="password"
          value={password}
          onChange={this.handleChange}   //untuk class handleInputChange
          id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      </header>
    )
  }
  

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let values = this.state;
    console.log(values)

    let errors = {
      email: "",
      password: ""
    }

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(values.email === ""){
      errors.email = "Email tidak boleh kosong"
    }else if(emailRegex.test(String(values.email).toLowerCase()) === false) {
      errors.email = "Email invalid"
    }

    const passwordRegex = /(?=.*[0-9])/;
    if(values.password === ""){
      errors.password = "Password tidak boleh kosong"
    }else if(values.password.length < 8){
      errors.password = "Password minimal memiliki 8 karakter"
    }else if(passwordRegex.test(String(values.password)) === false){
      errors.password = "Password setidaknya memiliki 1 number"
    }

    if(errors.email != ""){
      alert(errors.email)
    }else if(errors.password != ""){
      alert(errors.password)
    }else if(errors.email == "" && errors.password == ""){
      alert("Berhasil")
    }
    }
}