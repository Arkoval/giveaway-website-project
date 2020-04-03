import React, {Component} from "react";

export default class WhoWeHelp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switch:'Found',
            currentPage: 1,
            foundations: [
                {
                    id: 1,
                    title: 'Fundacja “Dbam o Zdrowie”',
                    mission: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
                    how: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
                },
                {
                    id: 2,
                    title: 'Fundacja “Dla dzieci”',
                    mission: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
                    how: 'ubrania, meble, zabawki'
                },
                {
                    id: 3,
                    title: 'Fundacja “Bez domu””',
                    mission: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania',
                    how: 'ubrania, jedzenie, ciepłe koce'
                },
                {
                    id: 4,
                    title: 'Fundacja "Lorem Ipsum"',
                    mission: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                    how: 'Egestas, sed, tempus'
                },
                {
                    id: 5,
                    title: 'Fundacja "Lorem Ipsum"',
                    mission: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                    how: 'Egestas, sed, tempus'
                },
                {
                    id: 6,
                    title: 'Fundacja "Lorem Ipsum"',
                    mission: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                    how: 'Egestas, sed, tempus'
                },
                {
                    id: 7,
                    title: 'Fundacja "Lorem Ipsum"',
                    mission: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                    how: 'Egestas, sed, tempus'
                }

            ],
            organizations: [
                {
                    id: 1,
                    title: 'Organizacja "Lorem Ipsum"',
                    mission: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                    how: 'Egestas, sed, tempus'
                },
                {
                    id: 2,
                    title: 'Organizacja "Lorem Ipsum"',
                    mission: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                    how: 'Egestas, sed, tempus'
                },
                {
                    id: 3,
                    title: 'Organizacja "Lorem Ipsum"',
                    mission: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                    how: 'Egestas, sed, tempus'
                },
                {
                    id: 4,
                    title: 'Organizacja "Lorem Ipsum"',
                    mission: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                    how: 'Egestas, sed, tempus'
                },
                {
                    id: 5,
                    title: 'Organizacja "Lorem Ipsum"',
                    mission: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                    how: 'Egestas, sed, tempus'
                }
            ],
            locals: [
                {
                    id: 1,
                    title: 'Zbiórka "Lorem Ipsum"',
                    mission: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                    how: 'Egestas, sed, tempus'
                },
                {
                    id: 2,
                    title: 'Zbiórka "Lorem Ipsum"',
                    mission: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                    how: 'Egestas, sed, tempus'
                },
                {
                    id: 3,
                    title: 'Zbiórka "Lorem Ipsum"',
                    mission: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                    how: 'Egestas, sed, tempus'
                }
            ]
        }
    }
    switcher = e =>{
        e.preventDefault()
        this.setState({switch: e.target.name})
    }

    render() {
        return (
            <div className={'whoSection'}>
                <h1>Komu pomagamy?</h1>
                <img src={require("../assets/Decoration.svg")} alt=""/>

                <div className="whoNav">
                    <button  onClick={this.switcher} name={'Found'}>Fundacjom</button>
                    <button onClick={this.switcher} name={'Org'}>Organizacjom pozarządowym</button>
                    <button onClick={this.switcher} name={'Loc'}>Lokalnym zbiórkom</button>
                </div>

                {this.state.switch == 'Found' ? <div className={'whoComponents'}>
                    <p className={'whoDescription'}>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                    {this.state.foundations.map(fund =>
                        <div className={'whoComponentsElement'} key={fund.id}>
                            <div>
                                <h1>{fund.title}</h1>
                                <p>{fund.mission}</p>
                            </div>
                            <p>{fund.how}</p>
                        </div>
                    )}

                </div>
                :
                null
                }
                {this.state.switch === 'Org' ?  <div className={'whoComponents'}>
                        <p className={'whoDescription'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        {this.state.organizations.map(org =>
                        <div className={'whoComponentsElement'} key={org.id}>
                            <div>
                                <h1>{org.title}</h1>
                                <p>{org.mission}</p>
                            </div>
                            <p>{org.how}</p>
                        </div>
                    )}
                    </div>
                :
                null}
                {this.state.switch === 'Loc' ? <div className={'whoComponents'}>
                    <p className={'whoDescription'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    {this.state.locals.map(local =>
                        <div className={'whoComponentsElement'} key={local.id}>
                            <div>
                                <h1>{local.title}</h1>
                                <p>{local.mission}</p>
                            </div>
                            <p>{local.how}</p>
                        </div>
                    )}
                </div>
                    :
                    null
                }


            </div>
        )
    }
}
