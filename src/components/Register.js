import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import * as firebase from "firebase";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            password2: '',
            validMail: true,
            validPwd: true,
            validPwd2: true,
            validAll: false,
        }
    }

    handleFormChange = (e) => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})

    };
    handleSubmit = () => {
        const validMail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(this.state.email);
        const validPwd = this.state.password.length >= 6;
        const validPwd2 = this.state.password === this.state.password2;
        const validAll = validMail && validPwd && validPwd2

        validPwd ? this.setState({validPwd: true}) : this.setState({validPwd: false});
        validMail ? this.setState({validMail: true}) : this.setState({validMail: false});
        validPwd2 ? this.setState({validPwd2: true}) : this.setState({validPwd2: false});

        validAll && firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(

        ).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('Error code: ' + errorCode,' Error message: ' + errorMessage)
        });
    }

    render() {
        return (
            <div className={'loginScreen'}>
                <h1>Załóż konto</h1>
                <img src={require("../assets/Decoration.svg")} alt=""/>
                <form action="" className={'loginForm'} onChange={this.handleFormChange}>
                    {this.state.validMail ?
                        <>
                            <label htmlFor="email">Email</label>
                            <input type="email" name={'email'} value={this.state.email}/>
                        </>
                    :
                        <>
                            <label htmlFor="email">Email</label>
                            <input className={'wrong'} type="email" name={'email'} value={this.state.email}/>
                            <p className={'wrong'}>Podany email jest nieprawidłowy</p>
                        </>
                    }
                    {this.state.validPwd ?
                        <>
                            <label htmlFor="password">Hasło</label>
                            <input type="password" name={'password'} value={this.state.password}/>
                        </>
                    :
                        <>
                            <label htmlFor="password">Hasło</label>
                            <input type="password" name={'password'} className={'wrong'} value={this.state.password}/>
                            <p className={'wrong'}>Podane hasło jest za krótkie</p>
                        </>
                    }
                    {this.state.validPwd2 ?
                        <>
                            <label htmlFor="password2">Hasło</label>
                            <input type="password" name={'password2'} value={this.state.password2}/>
                        </>
                    :
                        <>
                            <label htmlFor="password2">Hasło</label>
                            <input type="password" name={'password2'} className={'wrong'} value={this.state.password2}/>
                            <p className={'wrong'}>Podane hasła różnią się</p>
                        </>
                    }
                </form>
                <div className="loginButtons">
                    <NavLink to={'/logowanie'}>Zaloguj się</NavLink>
                    <button onClick={this.handleSubmit} className={'loginButton'}>Załóż konto</button>
                </div>
            </div>
        )
    }
}