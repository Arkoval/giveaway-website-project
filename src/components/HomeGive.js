import React, {Component} from "react";

export default class HomeGive extends Component {
    constructor(props) {
        super(props);
        this.state={
            type:'',
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
    prevFormPage = e =>{
        this.setState({[e.target.name]: e.target.value, pageCount: this.state.pageCount - 1})
    }

    render() {
        return (
            <>
                {/*<div>*/}
                {/*    <h1>Ważne</h1>*/}
                {/*    <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>*/}
                {/*</div>*/}
                {/*<p>Krok 1/4</p>*/}
                {/*<h1>Zaznacz co chcesz oddać:</h1>*/}
                {/*<form action="">*/}
                {/*    <input type="radio" value={'goodClothes'} name={'type'}/>*/}
                {/*    <label htmlFor="goodClothes">ubrania, które nadają się do ponownego użycia</label>*/}

                {/*    <input type="radio" value={'badClothes'} name={'type'}/>*/}
                {/*    <label htmlFor="badClothes">ubrania, do wyrzucenia</label>*/}

                {/*    <input type="radio" value={'toys'} name={'type'}/>*/}
                {/*    <label htmlFor="toys">zabawki</label>*/}

                {/*    <input type="radio" value={'books'} name={'type'}/>*/}
                {/*    <label htmlFor="books">książki</label>*/}

                {/*    <input type="radio" value={'other'} name={'type'}/>*/}
                {/*    <label htmlFor="other">inne</label>*/}
                {/*</form>*/}


                {/*<div>*/}
                {/*    <h1>Ważne</h1>*/}
                {/*    <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>*/}
                {/*</div>*/}
                {/*<p>Krok 2/4</p>*/}

                {/*<label htmlFor="bags">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</label>*/}
                {/*<select id="cars" name="bags">*/}
                {/*    <option value="1">1</option>*/}
                {/*    <option value="2">2</option>*/}
                {/*    <option value="3">3</option>*/}
                {/*    <option value="4">4</option>*/}
                {/*    <option value="5">5</option>*/}
                {/*</select>*/}


                {/*<div>*/}
                {/*    <h1>Ważne</h1>*/}
                {/*    <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>*/}
                {/*</div>*/}
                {/*<p>Krok 3/4</p>*/}
                
                {/*<label htmlFor="localization">Lokalizacja:</label>*/}
                {/*<select name="localization">*/}
                {/*    <option value="poznań">Poznań</option>*/}
                {/*    <option value="warszawa">Warszawa</option>*/}
                {/*    <option value="kraków">Kraków</option>*/}
                {/*    <option value="wrocław">Wrocław</option>*/}
                {/*    <option value="katowice">Katowice</option>*/}
                {/*</select>*/}

                {/*<label htmlFor="">Komu chcesz pomóc?</label>*/}
                {/*<label htmlFor="dzieciom"><input type="checkbox" value={'dzieciom'} name={'dzieciom'}/>Dzieciom</label>*/}
                {/*<label htmlFor="matkom"><input type="checkbox" value={'samotnym matkom'} name={'matkom'}/>Samotnym matkom</label>*/}
                {/*<label htmlFor="bezdomnym"><input type="checkbox" value={'bezdomnym'} name={'bezdomnym'}/>Bezdomnym</label>*/}
                {/*<label htmlFor="niepelnosprawnym"><input type="checkbox" value={'niepełnosprawnym'} name={'niepelnosprawnym'}/>Niepełnosprawnym</label>*/}
                {/*<label htmlFor="starszym"><input type="checkbox" value={'osobom starszym'} name={'starszym'}/>Osobom starszym</label>*/}

                {/*<label htmlFor="localizationSpecific">Wpisz nazwę konkretnej organizacji (opcjonalne)</label>*/}
                {/*<input type="text" name={'localizationSpecific'} value={this.state.localizationSpecific}/>*/}

                <div>
                    <h1>Ważne</h1>
                    <p>Podaj adres oraz termin odbioru rzeczy.</p>
                </div>
                <p>Krok 4/4</p>

                <h1>Podaj adres oraz termin odbioru rzeczy przez kuriera</h1>
                <form action="">
                    <div>
                        <h2>Adres odbioru:</h2>

                        <label htmlFor="street">Ulica</label>
                        <input type="text" name={'street'} value={this.state.street}/>

                        <label htmlFor="city">Miasto</label>
                        <input type="text" name={'city'} value={this.state.city}/>

                        <label htmlFor="postCode">Kod pocztowy</label>
                        <input type="text" name={'postCode'} value={this.state.postCode}/>

                        <label htmlFor="phone">Telefon</label>
                        <input type="text" name={'phone'} value={this.state.phone}/>
                    </div>

                    <div>
                        <h2>Termin odbioru:</h2>

                        <label htmlFor="date">Data</label>
                        <input type="text" name="date" value={this.state.date}/>

                        <label htmlFor="time">Godzina</label>
                        <input type="text" name="time" value={this.state.time}/>

                        <label htmlFor="note">Godzina</label>
                        <textarea  name="note" value={this.state.note}/>
                    </div>
                </form>



                <button onClick={this.prevFormPage}>Wstecz</button>
                <button onClick={this.nextFormPage}>Dalej</button>
            </>
        )
    }
}