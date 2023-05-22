import axios from 'axios'
import { baseUrl } from '../config.js'

export const getUserDetails = ({ id }) => {
  axios
    .get(`${baseUrl}/user/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((res) => {
      localStorage.getItem('user', JSON.stringify(res.data.data))

      return res.data.data
    })
    .catch((err) => {
      console.log(err)
    })
}
