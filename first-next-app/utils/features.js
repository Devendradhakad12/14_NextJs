export const  getAllUsers = async ()=>{
const res = await fetch("https://jsonplaceholder.typicode.com/users")
if(!res.ok){
return new Error("Something went Wrong")
}
return await res.json();
}

// get user details
export const  getUserDetails = async (id)=>{
const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
if(!res.ok){
return new Error("Something went Wrong")
}
return await res.json();
}

// get users post
export const getUserPosts = async(id)=>{
    const res  = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`,{
        next:{revalidate:60}
    })
    if(!res.ok){
        return new Error("Something went Wrong")
        }

        // send data after 2 second
    let data =  await res.json();
    return new Promise((resolve)=>{
setTimeout(()=>{
resolve(data)
},2000)
    })
}

// get users post
export const getAllPosts = async () => {
    const res  = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    if(!res.ok){
        return new Error("Something went Wrong")
        }
        return await res.json();
}