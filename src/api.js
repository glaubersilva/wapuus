export const API_URL = 'https://wapuus-api.local/json';

export function TOKEN_POST ( body ) {
    return {
        url: API_URL + '/jwt-auth/v1/token',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( body ),
        }
    }
}


export function USER_GET ( token ) {
    return {
        url: API_URL + '/gs-wapuus-api/v1/user',
        options: {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            },            
        }
    }
}