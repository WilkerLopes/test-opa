import axios from "axios"

class ListService {
  async interlace(intervalos) {
    let config = {
      method: "post",
      url: "http://127.0.0.1:8080/interlace",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(intervalos),
    }

    return await axios(config)
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        return error.response.data
      })
  }

  async ordenaLista(listas) {
    let config = {
      method: "post",
      url: "http://127.0.0.1:8080/ordenaLista",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(listas),
    }

    return await axios(config)
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        return error.response.data
      })
  }
}
export default new ListService()
