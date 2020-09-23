import React, {Component} from "react";
import {NavLink, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import actions from '../actions/index'
import * as firebase from "firebase";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            validMail: true,
            validPwd: true,
            isLogged: false,
        }
    }

    handleFormChange = (e) => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})

    };
    handleSubmit = () => {
        const validMail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(this.state.email);
        const validPwd = this.state.password.length >= 6;

        validPwd ? this.setState({validPwd:true}) : this.setState({validPwd: false});
        validMail ? this.setState({validMail:true}) : this.setState({validMail: false});

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(
            user =>{
                if(user) {
                    this.setState({isLogged: !this.state.isLogged})
                    console.log(user.user.email);
                    this.props.signer(user.user.email)
                }else console.log('not logged in')
            }
        )
            .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });

    }

    render() {
        if (this.state.isLogged) {
            return <Redirect to={`/user/${this.state.email}`}/>;
        }else return (
            <div className={'loginScreen'}>
                <h1>Zaloguj</h1>
                <img src={require("../assets/Decoration.svg")} alt=""/>
                <form action="" className={'loginForm'} >
                    {this.state.validMail ?
                        <>
                            <label htmlFor="email">Email</label>
                            <input type="email" name={'email'} value={this.state.email} onChange={this.handleFormChange}/>
                        </>
                    :
                        <>
                            <label htmlFor="email">Email</label>
                            <input className={'wrong'} type="email" name={'email'} value={this.state.email} onChange={this.handleFormChange}/>
                            <p className={'wrong'}>Podany email jest nieprawidłowy!</p>
                        </>
                    }
                    {this.state.validPwd ?
                        <>
                            <label htmlFor="password">Hasło</label>
                            <input type="password" name={'password'} value={this.state.password} onChange={this.handleFormChange}/>
                        </>
                    :
                        <>
                            <label htmlFor="password">Hasło</label>
                            <input type="password" name={'password'} className={'wrong'} value={this.state.password} onChange={this.handleFormChange}/>
                            <p className={'wrong'}>Podane hasło jest za krótkie</p>
                        </>
                    }
                </form>
                <div className="loginButtons">
                    <NavLink to={'/rejestracja'}>Załóż Konto</NavLink>
                    <button onClick={this.handleSubmit} className={'loginButton'}>Zaloguj się</button>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    signer: item => dispatch(actions.signIn(item))
});

export default connect(
    null,
    mapDispatchToProps
)(Login)