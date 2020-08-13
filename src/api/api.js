import axios from 'axios'

export const createNewUser = async data => {
  try {
    const result = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}/signup`,
      data: data
    })
    console.log(data, 'are you there')
    return result
  } catch (error) {
    console.log(error, 'whats happeneing')
  }
}

export const loginUser = async data => {
  try {
    const result = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}/login`,
      data
    })
    console.log('result looks good')
    return result
  } catch (error) {
    console.log(error)
  }
}

export const oauth = async (media, accessToken) => {
  try {
    console.log('i see upi')
    // const result = await axios({
    //   method: 'post',
    //   url: `${process.env.REACT_APP_BASE_URL}/auth/${media}`,
    //   "access_token": accessToken
    // })
    // console.log(result, 'i see you')
    // return result
  } catch (error) {
    console.log(error)
  }
}
