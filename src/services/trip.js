import { BASE_URL } from '../constants/urls';
import axios from 'axios';

const student = 'rodrigo-xavier-dumont'

export const applicationTrip = (body, params, resetForm) => {
    axios.post(`${BASE_URL}/${student}/trips/${params.id}/apply`, body)
    .then((res) => {
        alert(res.data.message)
        resetForm()
    })
}