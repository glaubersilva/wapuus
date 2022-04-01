export const API_LOCALHOST = (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") ? true : false;
export const API_URL = API_LOCALHOST ? 'https://wapuus-api.local/json' : 'https://api.wapuus.org/json';

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

export function TOKEN_VALIDATE_POST ( token ) {
    return {
        url: API_URL + '/jwt-auth/v1/token/validate',
        options: {
            method: 'POST',
            headers: {              
                Authorization: 'Bearer ' + token,
            },            
        }
    }
}

export function USER_GET ( token ) {
    return {
        url: API_URL + '/wapuus-api/v1/users',
        options: {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            },            
        }
    }
}

export function USER_POST ( body ) {
    return {
        url: API_URL + '/wapuus-api/v1/users',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( body ),   
        }
    }
}

export function PHOTO_POST ( formData, token ) {
    return {
        url: API_URL + '/wapuus-api/v1/images',
        options: {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
            },
            body: formData            
        }
    }
}

export function PHOTOS_GET ( {page, total, user} ) {
    return {
        url: `${API_URL}/wapuus-api/v1/images/?_page=${page}&_total=${total}&_user=${user}`,
        options: {
            method: 'GET',                  
            cache: 'no-store'
        }
    }
}

export function PHOTO_GET ( id ) {
    return {
        url: `${API_URL}/wapuus-api/v1/images/${id}`,
        options: {
            method: 'GET',                  
            cache: 'no-store'
        }
    }
}

export function COMMENT_POST ( id, body ) {
    return {
        url: `${API_URL}/wapuus-api/v1/comments/${id}`,
        options: {
            method: 'POST',            
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            },
            body: JSON.stringify(body)
        },        
    }
}

export function COMMENT_DELETE ( id ) {
    return {
        url: `${API_URL}/wapuus-api/v1/comments/${id}`,
        options: {
            method: 'DELETE',            
            headers: {                
                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            },            
        },       
    }
}

export function PHOTO_DELETE ( id ) {
    return {
        url: `${API_URL}/wapuus-api/v1/images/${id}`,
        options: {
            method: 'DELETE',            
            headers: {                
                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            },            
        },        
    }
}

export function PASSWORD_LOST ( body ) {
    return {
        url: `${API_URL}/wapuus-api/v1/password/lost`,
        options: {
            method: 'POST',            
            headers: {
                'Content-Type': 'application/json',                
            },
            body: JSON.stringify(body),
        },        
    }
}

export function PASSWORD_RESET ( body ) {
    return {
        url: `${API_URL}/wapuus-api/v1/password/reset`,
        options: {
            method: 'POST',            
            headers: {
                'Content-Type': 'application/json',                
            },
            body: JSON.stringify(body),
        },        
    }
}

export function STATS_GET ( ) {
    return {
        url: `${API_URL}/wapuus-api/v2/stats`,
        options: {
            method: 'GET',                  
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            },
        }
    }
}