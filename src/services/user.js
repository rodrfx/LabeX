import { BASE_URL } from '../constants/urls';
import axios from 'axios';

const student = 'rodrigo-xavier-dumont'

export const login = (body, resetForm, history, setButtonLogin, setIsLoading) => {
    setIsLoading(true)
    
    axios.post(`${BASE_URL}/${student}/login`, body)
    .then((res) => {
        window.localStorage.setItem('token',res.data.token)
        resetForm()
        setIsLoading(false)
        setButtonLogin('Logout')
        history.push('/viagens')
    })
    .catch((err) => {
        alert(err.message)
        setIsLoading(false)

    })
}