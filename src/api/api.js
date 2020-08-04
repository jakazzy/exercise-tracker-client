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
