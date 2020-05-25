import * as React from 'react'
import Header from './Header'
import detectBrowserLanguage from 'detect-browser-language'
const Contenido = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-12'>
                    <Header />
                </div>
                <div className='col-sm-12'>
                <h1>{detectBrowserLanguage()}</h1>
                </div>
            </div>
        </div>
    );
}

export default Contenido;