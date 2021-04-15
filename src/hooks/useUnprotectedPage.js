import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'

const useUnprotectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token){
        history.push('/viagens')
    }
  }, [history])
}

export default useUnprotectedPage