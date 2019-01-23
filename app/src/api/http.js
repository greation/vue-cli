import Axios from './config'

export function httpRequest (type, url, params, isOutsideLink, config) {
    if(type === 'get') {
        return new Promise((resolve,reject) => {
            url = isOutsideLink || Axios.defaults.baseURL +url
            Axios.get(url, { params }, config || {}).then(response => {
                resolve(response.data)
            },err => {
                reject(err)
            }).catch((error) => {
                reject(error)
            })
        })
    }
    if(type === 'post') {
        return new Promise((resolve,reject) => {
            url = isOutsideLink || Axios.defaults.baseURL + url
            Axios.post(url, { params }, config || {}).then(response => {
                resolve(response)
            },err => {
                reject(err)
            }).catch((error) => {
                reject(error)
            })
        })
    }
}

export default httpRequest






