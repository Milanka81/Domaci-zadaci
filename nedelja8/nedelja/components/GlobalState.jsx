import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';


export const pocetnoStanje = {
    transakcije: [
        {id: 1, opis: 'Plata', suma: +32125.34},
        {id: 2, opis: 'Skolarina', suma: -17060.35},
        {id: 3, opis: 'Nepredvidjeni troskovi', suma: -9571},
    ]
}
export const GlobalContext = createContext(pocetnoStanje)

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, pocetnoStanje)

    function obrisiTransakciju(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function dodajTransakciju(transakcija){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transakcija
        })
    }

    return (<GlobalContext.Provider value = {{
        transakcije : state.transakcije,
        obrisiTransakciju,
        dodajTransakciju
    }}>
        {children}
    </GlobalContext.Provider>
    )}