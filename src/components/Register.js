import React, {Component} from "react";
import {NavLink} from "react-router-dom";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            password2: '',
            validMail: false,
            validPwd: false,
            validPwd2: false,
        }
    }

    handleFormChange = (e) => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})

    };
    handleSubmit = () => {
        const validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email);
        const validPwd = this.state.password.length >= 6;
        const validPwd2 = this.state.password === this.state.password2;

        validPwd ? console.log('Dobre hasło') : this.setState({validPwd: true});
        validMail ? console.log('Dobry mail') : this.setState({validMail: true});
        validPwd2 ? console.log('Dobre hasło 2') : this.setState({validPwd2: true});
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
                    {this.state.validPwd2 ?
                        <>
                            <label htmlFor="password2">Hasło</label>
                            <input type="password" name={'password2'} className={'wrong'} value={this.state.password2}/>
                            <p className={'wrong'}>Podane hasła różnią się</p>
                        </>
                        :
                        <>
                            <label htmlFor="password2">Hasło</label>
                            <input type="password" name={'password2'} value={this.state.password2}/>
                        </>}
                </form>
                <div className="loginButtons">
                    <NavLink to={'/logowanie'}>Zaloguj się</NavLink>
                    <button onClick={this.handleSubmit} className={'loginButton'}>Załóż konto</button>
                </div>
            </div>
        )
    }
}