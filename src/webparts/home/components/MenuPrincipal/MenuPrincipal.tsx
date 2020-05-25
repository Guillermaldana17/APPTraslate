import * as React from 'react'
import {useContext, useEffect} from 'react'
import HomeContext from '../Context/HomeContext/homeContext'
const MenuPrincipal = () => {
    const context = useContext(HomeContext)
    const {read, listadoMenu} = context;
    useEffect(() => {
        read();
     
    }, [])

    return ( 
        <div className='card'>
            <div className='card-header'>
            <p><small>Menu principal</small></p>
            </div>
            <div className='card-body'>
            <div className='row'>

            </div>
                {listadoMenu.map((item) =>(
                    <div className='col-sm-12 mt-2'>
                     <button className='btn btn-secondary btn-block'>
                     {item.Title}
                   </button>
                    </div>
                  
                ))}
            </div>
        </div>
     );
}
 
export default MenuPrincipal;