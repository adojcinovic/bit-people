import './Search.css'

const Search = ({ val }) => {
    return (
        <input placeholder='Search users' className="search" onChange={(e) => { val(e.target.value) }}></input>
    )
}

export { Search }