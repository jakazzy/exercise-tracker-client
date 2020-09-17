import axios from 'axios'

export const createNewUser = async data => {
  try {
    const result = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}/signup`,
      data
    })
    return result
  } catch (error) {
    return error
  }
}

export const loginUser = async data => {
  try {
    const result = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}/login`,
      data
    })
    return result
  } catch (error) {
    console.log(error, 'this is the error')
    return error
  }
}

export const oauth = async (media, accessToken) => {
  try {
    const result = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}/auth/${media}`,
      accessToken
    })
    console.log(result, 'i see you')
    return result
  } catch (error) {
    return error
  }
}

export const confirmation = async token => {
  try {
    const result = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}/confirmation`,
      token
    })
    return result
  } catch (error) {
    console.log(error)
    return error
  }
}

export const loginSuccess = async () => {
  try {
    const result = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_BASE_URL}/loginsuccess`
    })
    return result
  } catch (error) {
    console.log(error)
    return error
  }
}
