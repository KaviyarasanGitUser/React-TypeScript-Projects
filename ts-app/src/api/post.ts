import axios from "axios";

export const getAllPost = async() => {
  return await axios
  .get('http://localhost:4000/posts',)
  .then(res => res.data)
}

export const getFirstPost = async (id: number) => {
  return await axios
  .get(`http://localhost:4000/posts/${id}`)
  .then(res => res.data)
}

export const createPost = async ({title, body}: any) => {
  const newPost = {
    id: Math.random().toString(16).slice(2),
    title,
    body
  }
  return axios
  .post('http://localhost:4000/posts',newPost)
  .then(res => res.data)
}

export const getPaginatedPost = async(page: number | undefined) => {
  return axios
    .get("http://localhost:4000/posts", {
      params: { _page: page, _limit: 2 },
    })
    .then((res) => {
      if(page){
        const hasNext = page * 2 < parseInt(res.headers["x-total-count"])
        const post = {
          nextPage: hasNext ? page + 1 : undefined,
          previousPage: page > 1 ? page - 1 : undefined,
          post: res.data,
        }
        console.log(res);
        
        return post
      }
    });
}