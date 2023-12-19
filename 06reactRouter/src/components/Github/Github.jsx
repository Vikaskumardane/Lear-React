import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData();

    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     //let url='https://api.github.com/users/Vikaskumardane';
    //     fetch('https://api.github.com/users/Vikaskumardane')
    //     .this(response => response.json())
    //     .this(data =>{
    //         console.log(data);
    //         setData(data)

    //     })
    // },[])
  return (
    <div className='text-center m-5 bg-gray-600 text-white p4 text-3xl'>
        Github Followers:{data.followers}
        <img src={data.avatar_url} alt="Github profile" width={300} />
        </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/Vikaskumardane')
    return response.json()
}