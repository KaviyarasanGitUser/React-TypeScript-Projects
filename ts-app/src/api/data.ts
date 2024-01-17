import axios from "axios"

export const getAllPerson = async() => {
  return await axios
  .get('http://localhost:4000/person')
  .then(res => res.data)
}

export const createPerson =async ({email,firstName,lastName,dob}:any) => {
  const newData = {
    id: Math.random().toString(16).slice(2),
    email,
    firstName,
    lastName,
    dob
  }
  return await axios
  .post('http://localhost:4000/person',newData)
  .then(res => res.data)
}

export const deletePerson =async (id:string) => {
  return await axios
  .delete(`http://localhost:4000/person/${id}`)
  .then(res => res.data)
}

export const updatePerson =async (updatedData:any) => {  
  return await axios
  .put(`http://localhost:4000/person/${updatedData.id}`,updatedData)
  .then(res => res.data)
}

export const getPaginatedPerson = async(page: any) => {
  return axios
    .get("http://localhost:4000/person", {
      params: { _page: page, _limit: 5 },
    })
    .then((res) => {
      if(page){
        const hasNext = page * 5 < parseInt(res.headers["x-total-count"])
        const post = {
          nextPage: hasNext ? page + 1 : undefined,
          previousPage: page > 1 ? page - 1 : undefined,
          post: res.data,
        }
        return post
      }
    });
}