
import {
    READ_MENU,
    SET_IDIOMA
} from '../Types/Types'

export default (state, action) => {
    switch(action.type){
        case READ_MENU:
            return {
                ...state,
                listadoMenu : action.payload
        }
        case SET_IDIOMA:
            return {
                ...state,
                idioma: action.payload
            }
        default:
            return state;
    }
}