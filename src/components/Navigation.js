import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import actions from '../actions'
import firebase from "firebase";
import { useState } from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";


function Navigation(props) {
    const isLogged = useSelector(state => state.loggedData.isLogged)
    const userId = useSelector(state => state.loggedData.userId)
    const logout = useDispatch();
    let [size, setSize] = useState();
    let burger = useRef(null);
    let nav = useRef(null);

    const signOutHandle = () => {
        firebase.auth().signOut().then(function() {
            logout(actions.signOut())
        }).catch(function(error) {
            console.log(error)
        });
    }

    const handleBurger = () => {
        burger.classList.toggle('burgerBtn-active');
        nav.classList.toggle('activeNav');
        if(nav){
            document.querySelectorAll('.nav li').forEach(link => link.addEventListener('click',function(){
                if(nav.classList.contains('activeNav')){
                    nav.classList.remove('activeNav');
                    burger.classList.remove('burgerBtn-active');
                }else return
            }))
        }else return
       
    
    }

    function updateSize(){
        setSize(window.innerWidth);
      }

    useLayoutEffect(() => {
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
      }, []);
    

    return (
        <div className={`navBar`}>
        <button onClick={handleBurger} className={`burgerBtn ${size < 600 ? 'active': 'hidden'}`} ref={e => {burger = e}}>
        <span className='burgerBtn-box'>
            <span className='burgerBtn-inner'></span>
        </span>
        </button>
            <ul className={'loginNav'}>
                {isLogged ?
                    <>
                        <li>Witaj {userId}!</li>
                        <li><Link to={'#'}>Oddaj rzeczy</Link></li>
                        <li onClick={signOutHandle}><NavLink to={'/wylogowano'}>Wyloguj</NavLink></li>
                    </>
                    :
                    <>
                        <li><NavLink to={'/logowanie'}>Zaloguj</NavLink></li>
                        <li><NavLink to={'/rejestracja'}>Załóż konto</NavLink></li>
                    </>
                }

            </ul>
            <div className='navigation' ref={e => {nav = e}}>
            <ul className={`nav ${size < 600 ? 'hidden' : ''}`} >
                <li><NavLink className={'homeButton'} to={'/'}>Start</NavLink></li>
                <li><Link to={'SimpleSteps'}>O co chodzi?</Link></li>
                <li><Link to={'About'}>O nas</Link></li>
                <li><Link to={'Who'}>Fundacja i organizacje</Link></li>
                <li><Link to={'Contact'}>Kontakt</Link></li>
            </ul>
            </div>
        </div>
    )
}

export default Navigation