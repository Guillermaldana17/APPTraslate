import * as React from 'react';
import { useReducer,useEffect } from 'react';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

import homeReducer from './homeReducer'

import { 
    READ_MENU,
    SET_IDIOMA 
} from '../Types/Types'
import HomeContext from './homeContext';

const HomeState = (props: any) => {

    const initialState = {
        label: '',
        listadoMenu: [],
        idioma:navigator.language,
    }
    
    const [state, dispatch] = useReducer(homeReducer, initialState);
    
    const read = (idiomaRecibido) => {
        const idiomaR = idiomaRecibido;
        if(state.idioma !== idiomaR){
            state.idioma = idiomaR
        }
        sp.web.lists.getByTitle("Categoria").items.get()
            .then((item: any) => {

                var listadoObj = []
                if(state.idioma == 'ES' || state.idioma == 'es-ES'){
                    for(let i = 0; i < item.length; i++){
                        var elem = item[i];
                        var itemM:any = {}
                        itemM.Title = elem.TituloES;
                        itemM.ID = elem.ID;
                        listadoObj.push(itemM)
                    }
                }else
                if(state.idioma =='EN' || state.idioma =='en' ){
                    for(let i = 0; i < item.length; i++){
                        var elem = item[i];
                        var itemM:any = {}
                        itemM.Title = elem.TituloEN;
                        itemM.ID = elem.ID;
                        listadoObj.push(itemM)
                    }
                }else
                if(state.idioma =='PT' || state.idioma =='pt'){
                    for(let i = 0; i < item.length; i++){
                        var elem = item[i];
                        var itemM:any = {}
                        itemM.Title = elem.TituloPT;
                        itemM.ID = elem.ID;
                        listadoObj.push(itemM)
                    }
                }else{
                    for(let i = 0; i < item.length; i++){
                        var elem = item[i];
                        var itemM:any = {}
                        itemM.Title = elem.TituloES;
                        itemM.ID = elem.ID;
                        listadoObj.push(itemM)
                    }
                }

                dispatch({
                    type: READ_MENU,
                    payload: listadoObj
                })
            })
    }
    
    const setIdioma = (item) =>{
        
        dispatch({
            type:SET_IDIOMA,
            payload: item
        })
      
    }
    return (
       <HomeContext.Provider value={{
            label: state.label,
            listadoMenu: state.listadoMenu,
            idioma: state.idioma,
            read,
            setIdioma
        }}>
        {props.children}
        
       </HomeContext.Provider>
    );
}

export default HomeState;