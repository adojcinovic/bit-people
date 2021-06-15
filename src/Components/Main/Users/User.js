



const User = ({ data }) => {
    const date = new Date(data.dob.date)
    console.log(date.getFullYear());
    return (<div className={data.gender === 'female' ? 'card female' : 'card male'}>
        <img alt='' src={data.picture.thumbnail}></img>
        <div className="style">
            <p>{data.name.first} {data.name.last}</p>
            <p>{data.email}</p>
            <p>{date.getDay()}.{date.getMonth()}.{date.getFullYear()}</p>
        </div>
    </div>)
}

export { User }