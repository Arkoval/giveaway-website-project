import React, {Component} from "react";
// Część do dalszego rozwoju
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            text: '',
            validName: true,
            validMail: true,
            validText: true,
            response: false,
        }
    }

    handleFormChange = (e) => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})

    };
    handleSubmit = (e) => {
        e.preventDefault()
        const validName = this.state.name.replace(/ /g, "");
        const validMail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(this.state.email);
        const validText = this.state.text.length >= 120;

        validName ? this.setState({validName: true}) : this.setState({validName: false});
        validMail ? this.setState({validMail: true}) : this.setState({validMail: false});
        validText ? this.setState({validText: true}) : this.setState({validText: false});

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
                if (data.status === 'success') {
                    this.setState({response: true})
                    console.log(this.state.response)
                } else return
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    };

    render() {
        return (
            <>
                <div name={'Contact'} className={'contactSection'}>
                    <div className="contactBox">
                        <h1>Skontaktuj się z nami</h1>
                        <img src={require("../assets/Decoration.svg")} alt=""/>
                        {this.state.response &&
                        <h2 className={'good'}>Wiadomość została wysłana!<br/>Wkrótce się skontaktujemy</h2>}
                        <form action="" className={'contactForm'} >
                            <div className="contactFormUpper">
                                <div className={'contactFormName'}>
                                    {this.state.validName ?
                                        <>
                                            <label htmlFor="name">Wpisz swoje imię</label>
                                            <input type="text" placeholder={'Krzysztof'} value={this.state.name}
                                                   name={'name'} onChange={this.handleFormChange}/>
                                        </>
                                        :
                                        <>
                                            <label htmlFor="name">Wpisz swoje imię</label>
                                            <input className={'wrong'} type="text" placeholder={'Krzysztof'}
                                                   value={this.state.name}
                                                   name={'name'} onChange={this.handleFormChange}/>
                                            <p className={'wrong'}>Uzupełnij pole</p>
                                        </>
                                    }
                                </div>
                                <div className="contactFormEmail">
                                    {this.state.validMail ?
                                        <>
                                            <label htmlFor="email">Wpisz swój email</label>
                                            <input type="email" placeholder={'Abc@xyz.pl'} value={this.state.email}
                                                   name={'email'} onChange={this.handleFormChange}/>
                                        </>
                                        :
                                        <>
                                            <label htmlFor="email">Wpisz swój email</label>
                                            <input className={'wrong'} type="email" placeholder={'Abc@xyz.pl'} value={this.state.email}
                                                   name={'email'} onChange={this.handleFormChange}/>
                                                   <p className={'wrong'}>Podany email jest nieprawidłowy</p>
                                        </>

                                    }
                                </div>
                            </div>
                            <div className="contactFormText">
                                {this.state.validText ?
                                <>
                                <label htmlFor="textarea">Wpisz swoją wiadomość</label>
                                <textarea
                                    rows={'5'}
                                    cols={'60'}
                                    value={this.state.text}
                                    name={'text'}
                                    placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                               onChange={this.handleFormChange}
                                />
                                </>
                                    :
                                    <>
                                    <label htmlFor="textarea">Wpisz swoją wiadomość</label>
                                    <textarea
                                    rows={'5'}
                                    cols={'60'}
                                    value={this.state.text}
                                    name={'text'}
                                    className={'wrong'}
                                    placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                                   onChange={this.handleFormChange}
                                    />
                                    <p className="wrong">Wiadomość musi mieć conajmniej 120 znaków</p>
                                    </>
                                }
                            </div>
                            <button onClick={this.handleSubmit}>Wyślij</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
