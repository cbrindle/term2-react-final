import { Axios } from './Axios'
import jwt_decode from 'jwt-decode'
import setAuthJWT from './setAuthJWT'

export const apiPlayerSearch = (loginInfo) => {
    return new Promise((resolve, reject) => {
        Axios.post('/admin/findplayer', loginInfo, axiosConfig)
            .then(result => {
                resolve(result)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
    })
}

export const apiPlayerUpdate = (data) => {
    return new Promise((resolve, reject) => {
        Axios.post('/admin/updateplayer', data, axiosConfig)
            .then(result => {
                resolve(result)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const apiCreatePlayer = (data) => {
    return new Promise((resolve, reject) => {
        Axios.post('/admin/createplater', data, axiosConfig)
            .then(user => resolve(user))
            .catch(err => reject(err.response.data.message))
    })
}

export const apiGetAllItems = () => {
    return new Promise((resolve, reject) => {
        Axios.get('/admin/getallitems')
            .then(items => resolve(items.data))
            .catch(err => reject(err))
    })
}

export const apiCreateItem = (data) => {
    return new Promise((resolve, reject) => {
        Axios.post('/admin/createitem', data, axiosConfig)
            .then(item => resolve(item))
            .catch(err => reject(err))
    })
}

export const apiUpdateItem = (data) => {
    return new Promise((resolve, reject) => {
        Axios.post('/admin/updateitem', data, axiosConfig)
            .then(updateItem => resolve(updateItem))
            .catch(err => reject(err))
    })
}

export const apiCreateNewQuest = (data) => {
    return new Promise((resolve, reject) => {
        Axios.post('/admin/createquest', data, axiosConfig)
            .then(quest => resolve(quest.data))
            .catch(err => reject(err))
    })
}

export const apiGetRealmQuests = (data) => {
    return new Promise((resolve, reject) => {
        Axios.get(`/admin/getrealmquests?realm=${data}`, data, axiosConfig)
            .then(quests => resolve(quests.data))
            .catch(err => reject(err))
    })
}

export const apiUpdateQuest = (data) => {
    return new Promise((resolve, reject) => {
        Axios.post('/admin/updatequest', data, axiosConfig)
            .then(updateQuest => resolve(updateQuest.data))
            .catch(err => reject(err))
    })
}

export const apiDeleteQuest = (id) => {
    return new Promise((resolve, reject) => {
        Axios.post('/admin/deletequest', id, axiosConfig)
            .then(payload => resolve(payload.data))
            .catch(err => reject(err))
    })
}

export const apiDeleteItem = (data) => {
    return new Promise((resolve, reject) => {
        Axios.post('/admin/deleteitem', data, axiosConfig)
            .then(payload => resolve(payload))
            .catch(err => reject(err))
    })
}

export const apiLogin = (data) => {
    return new Promise((resolve, reject) => {
        Axios.post('/users/login', data, axiosConfig)
            .then(result => {
                const { token } = result.data
                localStorage.setItem('jwtToken', token)
                localStorage.setItem('playerName', result.data.name)
                localStorage.setItem('isAdmin', result.data.isAdmin)
                const decoded = jwt_decode(token)
                setAuthJWT(token)
                resolve(decoded)
            })
            .catch()
    })
}

export const apiCreateSkill = (data) => {
    return new Promise((resolve, reject) => {
        Axios.post('/admin/createskill', data, axiosConfig)
            .then(skill => resolve(skill))
            .catch(err => reject(err))
    })
}

export const apiGetAllSkills = () => {
    return new Promise((resolve, reject) => {
        Axios.get('/admin/getallskills')
            .then(skills => resolve(skills.data))
            .catch(err => reject(err))
    })
}

export const apiUpdateSkill = (data) => {
    return new Promise((resolve, reject) => {
        Axios.post('/admin/updateskill', data, axiosConfig)
            .then(updateSkill => resolve(updateSkill.data))
            .catch(err => reject(err))
    })
}



const axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    }
}