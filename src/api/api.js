import axios from 'axios'

export const createNewUser = async data => {
  try {
    const result = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}/signup`,
      data
    })
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

export const loginUser = async data => {
  try {
    const result = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}/login`,
      data
    })
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

export const oauth = async media => {
  try {
    const result = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_BASE_URL}/auth/${media}`
    })
    console.log(result, 'i see you')
    return result
  } catch (error) {
    console.log(error)
  }
}
