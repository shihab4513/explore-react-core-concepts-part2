/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react"

export default function Users() {
    // if you want to find something in array you have to use empty array like below 'useState([])'
    const [users, setUsers] = useState([]);
    // first parameter is a call back function and second param is dependency. At first dependency must be empty array if not it cause problem
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            // if we setUsers(data) we can access data in return()
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    )
}
