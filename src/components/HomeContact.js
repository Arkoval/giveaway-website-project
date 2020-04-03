import React, {Component} from "react";

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            email:'',
            text:'',
            validName: false,
            validMail: false,
            validText: false,
            validAll: false,
        }
    }
    handleFormChange = (e) => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})

    };
    handleSubmit = (e) => {
        e.preventDefault()
        const validName = this.state.name.replace(/ /g, "");
        const validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email);
        const validText = this.state.text.length >= 120;

        validName ? this.setState({validName: true}) : console.log('Złe imie');
        validMail ? this.setState({validMail: true}) : console.log('Zły mail');
        validText ? this.setState({validText: true}) : console.log('Zły text');

        let data = {
            name: this.state.name.replace(/ /g, ""),
            email: this.state.email,
            message: this.state.text
        };

            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                if(data.status === 'success'){
                    this.setState({validAll: true})
                    console.log(this.state.validAll)
                }else return
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    }

    render() {
        return (
            <>
                <div name={'Contact'} className={'contactSection'}>
                    <div className="contactBox">
                        <h1>Skontaktuj się z nami</h1>
                        <img src={require("../assets/Decoration.svg")} alt=""/>
                        {this.state.validAll && <h2 className={'good'}>Wiadomość została wysłana wkrótce się skontaktujemy</h2>}
                        <form action="" className={'contactForm'} onChange={this.handleFormChange}>
                            <div className="contactFormUpper">
                                <div className={'contactFormName'}>
                                    <label htmlFor="name">Wpisz swoje imię</label>
                                    <input type="text" placeholder={'Krzysztof'}  value={this.state.name} name={'name'}/>
                                </div>
                                <div className="contactFormEmail">
                                    <label htmlFor="email">Wpisz swój email</label>
                                    <input type="email" placeholder={'Abc@xyz.pl'} value={this.state.email} name={'email'}/>
                                </div>
                            </div>
                            <div className="contactFormText">
                                <label  htmlFor="textarea">Wpisz swoją wiadomość</label>
                                <textarea
                                    rows={'5'}
                                    cols={'60'}
                                    value={this.state.text}
                                    name={'text'}
                                    placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                                />
                            </div>
                            <button onClick={this.handleSubmit}>Wyślij</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
