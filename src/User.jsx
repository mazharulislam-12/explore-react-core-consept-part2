import { useEffect, useState } from "react"

export default function User (){
    const [users, setUsers] = useState()
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))

    }, [])
    return (
        <div>
            <h3>user: {users?.length} </h3>
        </div> 
    )
}


/***
 * 1. declare a state a hold data
 * 2. use effect with call back function and dependency array
 * 3. use fetch to load data
 * 4. 
 */