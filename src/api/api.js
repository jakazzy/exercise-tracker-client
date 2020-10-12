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

// export const updateNewUser = async (data, id) => {
//   try {
//     const result = await axios({
//       method: 'put',
//       url: `${process.env.REACT_APP_BASE_URL}/user/${id}`,
//       data
//     })
//     return result
//   } catch (error) {
//     return error
//   }
// }
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

export const oauth = async (route, media) => {
  try {
    const result = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_BASE_URL}/${route}/${media}`
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

export const signout = async () => {
  try {
    const result = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_BASE_URL}/signout`
    })
    return result
  } catch (error) {
    console.log(error)
    return error
  }
}
export const checkStatus = async () => {
  try {
    const result = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_BASE_URL}/checkstatus`
    })
    return result
  } catch (error) {
    console.log(error.message, 'why 403')
    return error
  }
}

export const updateUser = async (data, token) => {
  try {
    const result = await axios({
      method: 'put',
      url: `${process.env.REACT_APP_BASE_URL}/users/${token}`,
      data
    })
    return result
  } catch (error) {
    return error
  }
}

export const settings = async data => {
  try {
    const result = await axios({
      method: 'put',
      url: `${process.env.REACT_APP_BASE_URL}/settings`,
      data
    })
    return result
  } catch (error) {
    return error
  }
}

export const inviteFriend = async data => {
  try {
    const result = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}/invitefriend`,
      data
    })
    return result
  } catch (error) {
    return error
  }
}

export const updateSchedule = async data => {
  try {
    const result = await axios({
      method: 'put',
      url: `${process.env.REACT_APP_BASE_URL}/updateschedule`,
      data
    })
    console.log(result)
    return result
  } catch (error) {
    console.log(error)
    return error
  }
}

export const updateGoal = async data => {
  try {
    const result = await axios({
      method: 'put',
      url: `${process.env.REACT_APP_BASE_URL}/updategoal`,
      data
    })
    console.log(result)
    return result
  } catch (error) {
    console.log(error)
    return error
  }
}

export const getScheduleAndGoal = async () => {
  try {
    const result = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_BASE_URL}/getscheduleandgoal`
    })
    return result
  } catch (error) {
    console.log(error)
    return error
  }
}

// EXERCISES
export const getUsersExercises = async () => {
  try {
    const result = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_BASE_URL}/users/user/exercises`
    })
    return result
  } catch (error) {
    console.log(error)
    return error
  }
}

export const createExercises = async () => {
  try {
    console.log('create new exercises')
    const result = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}/users/user/exercises`
    })
    return result
  } catch (error) {
    console.log(error)
    return error
  }
}
export const updateUsersExercises = async data => {
  try {
    const result = await axios({
      method: 'put',
      url: `${process.env.REACT_APP_BASE_URL}/users/user/exercises/weeklylog`,
      data
    })
    console.log('updateusersexercises', result)
    return result
  } catch (error) {
    console.log(error)
    return error
  }
}
