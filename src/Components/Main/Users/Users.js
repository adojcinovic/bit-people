import './Users.css'
import { getData } from '../api'
import { useEffect, useState } from 'react'
import { User } from './User'

const Users = ({ refresh }) => {

    const [data, setData] = useState([])
    const [filtered, setFiltered] = useState([])
    useEffect(() => {
        getData().then(data => {
            setData(data)
            setFiltered(data)
        })
    }, [refresh])

    return (
        <div className='wrapper'>
            {filtered.map((e) => <User data={e} />
            )}
        </div>
    )
}

export { Users }