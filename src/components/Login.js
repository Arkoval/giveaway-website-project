import React, {Component} from "react";
import {NavLink} from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            validMail: false,
            validPwd: false,
        }
    }

    handleFormChange = (e) => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})

    };
    handleSubmit = () => {
        const validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email);
        const validPwd = this.state.password.length >= 6;

        validPwd ? console.log('Dobre hasło') : this.setState({validPwd: true});
        validMail ? console.log('Dobry mail') : this.setState({validMail: true});
    }

    render() {
        return (
            <div className={'loginScreen'}>
                <h1>Zaloguj</h1>
                <img src={require("../assets/Decoration.svg")} alt=""/>
                <form action="" className={'loginForm'} onChange={this.handleFormChange}>
                    {this.state.validMail ?
                        <>
                            <label htmlFor="email">Email</label>
                            <input className={'wrong'} type="email" name={'email'} value={this.state.email}/>
                            <p className={'wrong'}>Podany email jest nieprawidłowy!</p>
                        </>
                        :
                        <>
                            <label htmlFor="email">Email</label>
                            <input type="email" name={'email'} value={this.state.email}/>
                        </>}
                    {this.state.validPwd ?
                        <>
                            <label htmlFor="password">Hasło</label>
                            <input type="password" name={'password'} className={'wrong'} value={this.state.password}/>
                            <p className={'wrong'}>Podane hasło jest za krótkie</p>
                        </>
                        :
                        <>
                            <label htmlFor="password">Hasło</label>
                            <input type="password" name={'password'} value={this.state.password}/>
                        </>}
                </form>
                <div className="loginButtons">
                    <NavLink to={'/rejestracja'}>Załóż Konto</NavLink>
                    <button onClick={this.handleSubmit} className={'loginButton'}>Zaloguj się</button>
                </div>
            </div>
        )
    }
}
