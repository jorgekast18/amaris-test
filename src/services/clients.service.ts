import axios from 'axios';
import { loadAbort } from '../utilities';
import { CLIENT_MODEL } from '@models';
export const getClients = (): CLIENT_MODEL[] => {
    return [
        {
            'id': 112233,
            'name': 'Juan',
            'lastName': 'Muñoz',
            'city': 'Manizales',
        },
        {
            'id': 112234,
            'name': 'Jorge',
            'lastName': 'Castaño',
            'city': 'Cali',
        },
        {
            'id': 112235,
            'name': 'Maria',
            'lastName': 'Montreal',
            'city': 'Bogota',
        },
        {
            'id': 112236,
            'name': 'Marco',
            'lastName': 'Tellez',
            'city': 'Cali',
        },
    ]
}

export const testPoke = () => {
    const controller = loadAbort();
    return {
        call: axios.get('https://pokeapi.co/api/v2/pokemon/ditto', { signal: controller.signal }),
        controller,
    }
}