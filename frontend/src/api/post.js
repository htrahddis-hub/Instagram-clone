export const createPost =(formData)=>{
  const requestOptions ={
    method: "POST",
    body: formData
  }
  const data = fetch("/post/createPost",requestOptions)
  .then((res)=>res)
  .catch(err=>err);
  return data;
}