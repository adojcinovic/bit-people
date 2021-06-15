import './Users.css'
import { getData } from '../api'
import { useEffect, useState } from 'react'
import { User } from './User'

const Users = ({ refresh, value }) => {

    const [data, setData] = useState([])
    const [filtered, setFiltered] = useState([])
    useEffect(() => {
        getData().then(data => {
            setData(data)
            setFiltered(data)
        })
    }, [refresh])

    useEffect(() => {
        setFiltered(data.filter(e => (
            e.name.first.toLowerCase().includes(value.toLowerCase()) ||
            e.name.last.toLowerCase().includes(value.toLowerCase())
        )))
    }, [value])

    const male = filtered.filter((e) => e.gender === 'male').length
    const female = filtered.length - male



    return (
        <>
            <p>Male: {male} Female: {female}</p>
            <div className='wrapper'>
                {filtered.map((e) => <User data={e} />
                )}
            </div>
        </>
    )
}

export { Users }