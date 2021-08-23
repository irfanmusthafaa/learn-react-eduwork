import React, { Component } from 'react'

class TaskValidation extends Component {
    constructor(props){
        super(props)
        this.state = {
            fullname: "",
            username: "",
            email:"",
            password:"",
            confirmationPassword: ""
        }
    }

    render() {
        const { fullname, username, email, password, confirmationPassword } = this.state

        return(
            <header className="App-header">
                <h1 className="mb-3">Form Register User</h1>
                 <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                    <label htmlFor="fullname">Fullname</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter your fullname"
                    name="fullname"
                    value={fullname}
                    onChange={this.handleChange}   //untuk class handleInputChange
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter your username"
                    name="username"
                    value={username}
                    onChange={this.handleChange}   //untuk class handleInputChange
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter your email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}   //untuk class handleInputChange
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Enter your password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}   //untuk class handleInputChange
                    id="exampleInputPassword1"/>
                    </div>

                    <div className="form-group">
                    <label htmlFor="password">Confirmation Password</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Enter your confirmation password"
                    name="confirmationPassword"
                    value={confirmationPassword}
                    onChange={this.handleChange}   //untuk class handleInputChange
                    id="exampleInputPassword2"/>
                    </div>

                    <button type="submit" className="btn btn-primary">Register</button>
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

        let values = this.state
        //console.log(values)

        let errors = {
            fullname: "",
            username: "",
            email: "",
            password: "",
            confirmationPassword: "",
        }

        if(values.fullname === ""){
            errors.fullname = "Nama tidak boleh kosong"
          }

        const usernameRegex =  /^[a-zA-Z\-]+$/;
        if(values.username === ""){
            errors.username = "Username tidak boleh kosong"
          }else if(usernameRegex.test(String(values.username)) === false){
            errors.username = "Username hanya dapat input karakter A-Z, a-z dan '-'"
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

        if(values.password === ""){
            errors.password = "Password tidak boleh kosong"
          }else if(values.confirmationPassword != values.password){
            errors.confirmationPassword = "Tidak sama dengan password"
        }

        if(errors.fullname != ""){
            alert(errors.fullname)
          }else if(errors.username != ""){
            alert(errors.username)
          }else if(errors.email != ""){
            alert(errors.email)
          }else if(errors.password != ""){
            alert(errors.password)
          }else if(errors.confirmationPassword != ""){
            alert(errors.confirmationPassword)
          }  else if(errors.fullname == "" && errors.username == ""  && errors.email == ""  && errors.password == ""  && errors.confirmationPassword == ""){
            alert("Berhasil")
          }

    }
    
}

export default TaskValidation