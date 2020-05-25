import * as React from 'react'
import {useContext, useEffect} from 'react'
import HomeContext from '../../Context/HomeContext/homeContext'
const Header = () => {
    const context = useContext(HomeContext)
    const {setIdioma, idioma,  read} = context;

    const selectIdioma = (e) => {
        e.preventDefault()
        const idiomaValue = e.target.value;
        /* setIdioma(idiomaValue)
        console.log('Cambiando de idioma' + '-' + idioma) */
        read(idiomaValue);
    }

    const onIdioma = (data) => {
        const idiomaValue = data;
        setIdioma(idiomaValue)
        read();
    }
    return (
        <div className='card card-header'>
            <div className='row'>
                <div className='col-sm-8'>
                <h5 className='h4 mt-2'>Sistema de estacionamiento</h5>
                </div>
                <div className='col-sm-4'>
                    <div className='form-group float-right'>
                        <label><small>Lenguaje</small></label>
                        <select className='form-control form-control-sm' value={idioma} onChange={selectIdioma}>
                            <option value='ES'>Español</option>
                            <option value='EN'>Ingles</option>
                            <option value='PT'>Portugues</option>
                        </select>
                        <button className='btn btn-danger mt-1' onClick={()=> {onIdioma('EN')}}>
                        Ingles
                        </button>
                        <button className='btn btn-danger mt-1' onClick={()=>onIdioma('ES')}>
                        Español
                        </button>
                        <button className='btn btn-danger mt-1' onClick={()=>onIdioma('PT')}>
                        Portugues
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;