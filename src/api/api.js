import axios from 'axios'

export const createNewUser = data => {
  axios({
    method: 'post',
    url: process.env.REACT_APP_BASE_URL,
    data: data
  })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

export const loginUser = () => {}
