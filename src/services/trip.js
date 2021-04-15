import { BASE_URL } from '../constants/urls';
import { user } from '../constants/user'
import axios from 'axios';

export const applicationTrip = (body, params, resetForm, history) => {
    axios.post(`${BASE_URL}/${user}/trips/${params.id}/apply`, body)
    .then((res) => {
        alert(res.data.message)
        resetForm()
        history.push('/')
    })
}

export const createTrip = (body, resetForm, history) => {
    axios.post(`${BASE_URL}/${user}/trips`, body, {
        headers: {auth: window.localStorage.getItem('token')}
    }).then((res) => {
        console.log(res)
        resetForm()
        history.push('/viagens')

    }).catch((err) => {
        console.log(err)
    })
}