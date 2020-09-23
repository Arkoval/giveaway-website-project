import React, {Component} from "react";
// import HomeContact from "./HomeContact";
import HomeFooter from './HomeFooter';
import HomeGiveHeader from './HomeGiveHeader'

export default class HomeGive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            pageCount: 0,
            street: '',
            city: '',
            postCode: '',
            phone: '',
            date: '',
            time: '',
            note: '',
        }
    }

    nextFormPage = (e) => {
        this.setState({[e.target.name]: e.target.value, pageCount: this.state.pageCount + 1})
    };
    prevFormPage = e => {
        this.setState({[e.target.name]: e.target.value, pageCount: this.state.pageCount - 1})
    }

    render() {
        return (
            <>
                <HomeGiveHeader/>
                <div className="giveForm">
                    {/*<div className={'giveImportant'}>*/}
                    {/*    <h1>Ważne</h1>*/}
                    {/*    <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je*/}
                    {/*        przekazać.</p>*/}
                    {/*</div>*/}
                    {/*<div className={'giveFormStep'}>*/}
                    {/*    <p>Krok 1/4</p>*/}
                    {/*    <h1>Zaznacz co chcesz oddać:</h1>*/}
                    {/*    <form action="">*/}
                    {/*        <div className={'formElement'}>*/}
                    {/*            <input type="radio" value={'goodClothes'} name={'type'}/>*/}
                    {/*            <label htmlFor="goodClothes">ubrania, które nadają się do ponownego użycia</label>*/}
                    {/*        </div>*/}

                    {/*        <div className={'formElement'}>*/}
                    {/*            <input type="radio" value={'badClothes'} name={'type'}/>*/}
                    {/*            <label htmlFor="badClothes">ubrania, do wyrzucenia</label>*/}
                    {/*        </div>*/}

                    {/*        <div className={'formElement'}>*/}
                    {/*            <input type="radio" value={'toys'} name={'type'}/>*/}
                    {/*            <label htmlFor="toys">zabawki</label>*/}

                    {/*        </div>*/}

                    {/*        <div className={'formElement'}>*/}
                    {/*            <input type="radio" value={'books'} name={'type'}/>*/}
                    {/*            <label htmlFor="books">książki</label>*/}

                    {/*        </div>*/}

                    {/*        <div className={'formElement'}>*/}
                    {/*            <input type="radio" value={'other'} name={'type'}/>*/}
                    {/*            <label htmlFor="other">inne</label>*/}
                    {/*        </div>*/}
                    {/*    </form>*/}
                    {/*</div>*/}


                    {/*<div className={'giveImportant'}>*/}
                    {/*    <h1>Ważne</h1>*/}
                    {/*    <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>*/}
                    {/*</div>*/}
                    {/*<div className="giveFormStep">*/}
                    {/*    <p>Krok 2/4</p>*/}
                    {/*    <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>*/}
                    {/*    <div className="formElement">*/}
                    {/*        <label htmlFor="bags">Liczba 60l Worków</label>*/}
                    {/*        <div className="dropdown">*/}
                    {/*            <select  name="bags">*/}
                    {/*                <option disabled selected hidden>— wybierz —</option>*/}
                    {/*                <option value="1">1</option>*/}
                    {/*                <option value="2">2</option>*/}
                    {/*                <option value="3">3</option>*/}
                    {/*                <option value="4">4</option>*/}
                    {/*                <option value="5">5</option>*/}
                    {/*            </select>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    {/*<div className={'giveImportant'}>*/}
                    {/*    <h1>Ważne</h1>*/}
                    {/*    <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też*/}
                    {/*        filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>*/}
                    {/*</div>*/}

                    {/*<div className="giveFormStep">*/}
                    {/*    <p>Krok 3/4</p>*/}
                    {/*    <div className="formElement">*/}
                    {/*        <h1>Lokalizacja:</h1>*/}
                    {/*        <div className="dropdown">*/}
                    {/*            <select name="localization">*/}
                    {/*                <option value="poznań">Poznań</option>*/}
                    {/*                <option value="warszawa">Warszawa</option>*/}
                    {/*                <option value="kraków">Kraków</option>*/}
                    {/*                <option value="wrocław">Wrocław</option>*/}
                    {/*                <option value="katowice">Katowice</option>*/}
                    {/*            </select>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className="formElement">*/}
                    {/*        <h2>Komu chcesz pomóc?</h2>*/}

                    {/*        <div className="formFlexContainer">*/}
                    {/*            <label htmlFor="dzieciom">*/}
                    {/*                <input type="checkbox" value={'dzieciom'} name={'dzieciom'}/>*/}
                    {/*                Dzieciom*/}
                    {/*            </label>*/}
                    {/*            <label htmlFor="matkom">*/}
                    {/*                <input type="checkbox" value={'samotnym matkom'} name={'matkom'}/>Samotnym*/}
                    {/*                matkom*/}
                    {/*            </label>*/}
                    {/*            <label htmlFor="bezdomnym">*/}
                    {/*                <input type="checkbox" value={'bezdomnym'} name={'bezdomnym'}/>*/}
                    {/*                Bezdomnym*/}
                    {/*            </label>*/}
                    {/*            <label htmlFor="niepelnosprawnym">*/}
                    {/*                <input type="checkbox" value={'niepełnosprawnym'}*/}
                    {/*                                                     name={'niepelnosprawnym'}/>*/}
                    {/*                                                     Niepełnosprawnym*/}
                    {/*            </label>*/}
                    {/*            <label htmlFor="starszym">*/}
                    {/*                <input type="checkbox" value={'osobom starszym'}*/}
                    {/*                                             name={'starszym'}/>*/}
                    {/*                                             Osobom*/}
                    {/*                starszym*/}
                    {/*            </label>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="formElement">*/}
                    {/*        <h2>Wpisz nazwę konkretnej organizacji (opcjonalne)</h2>*/}
                    {/*        <input type="text" name={'localizationSpecific'} value={this.state.localizationSpecific}/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    <div className={'giveImportant'}>
                        <h1>Ważne</h1>
                        <p>Podaj adres oraz termin odbioru rzeczy.</p>
                    </div>
                    <div className="giveFormStep">
                        <p>Krok 4/4</p>
                        <h1>Podaj adres oraz termin odbioru rzeczy przez kuriera</h1>
                        <form action="">
                            <div className="formFlexContainer">
                                <div className={'formElement'}>
                                    <h2>Adres odbioru:</h2>
                                    <div>
                                        <label htmlFor="street">Ulica</label>
                                        <input type="text" name={'street'} value={this.state.street}/>
                                    </div>

                                    <div>
                                        <label htmlFor="city">Miasto</label>
                                        <input type="text" name={'city'} value={this.state.city}/>
                                    </div>

                                    <div>
                                        <label htmlFor="postCode">Kod pocztowy</label>
                                        <input type="text" name={'postCode'} value={this.state.postCode}/>
                                    </div>

                                    <div>
                                        <label htmlFor="phone">Telefon</label>
                                        <input type="text" name={'phone'} value={this.state.phone}/>
                                    </div>

                                </div>

                                <div className={'formElement'}>
                                    <h2>Termin odbioru:</h2>
                                    <div>
                                        <label htmlFor="date">Data</label>
                                        <input type="text" name="date" value={this.state.date}/>
                                    </div>

                                    <div>
                                        <label htmlFor="time">Godzina</label>
                                        <input type="text" name="time" value={this.state.time}/>
                                    </div>

                                    <div>
                                        <label htmlFor="note">Godzina</label>
                                        <textarea name="note" value={this.state.note}/>
                                    </div>

                                </div>
                            </div>

                        </form>
                    </div>

                    <button onClick={this.prevFormPage}>Wstecz</button>
                    <button onClick={this.nextFormPage}>Dalej</button>
                </div>
                {/* <HomeContact/> */}
                <HomeFooter/>
            </>
        )
    }
}