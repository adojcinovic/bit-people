import './Users.css'
import { getData } from '../api'
import { useEffect, useState } from 'react'
import { User } from './User'

const Users = ({ refresh, value, toGrid }) => {

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



    if (filtered.length) {
        return (
            <>
                <p>Male: {male} Female: {female}</p>
                <div className={`wrapper ${toGrid ? 'wrapper-grid' : ''}`}>
                    {filtered.map((e) => <User grid={toGrid} data={e} />
                    )}
                </div>
            </>
        )
    } else {
        return (
            <h1>No matches found</h1>
        )
    }

}

export { Users }