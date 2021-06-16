



const User = ({ data, grid }) => {
    const date = new Date(data.dob.date);
    const gridClass = grid ? 'card-grid' : 'card';
    const genderClass = data.gender === 'female' ? 'female' : 'male';


    const getMail = () => {
        const bla = data.email.split("");
        bla.splice(3, 5, "...");
        return bla.join('')
    }
    return (<div className={`${gridClass} ${genderClass}`} >
        <img alt='' src={data.picture.large}></img>
        <div className="style">
            <p>{data.name.first} {data.name.last}</p>
            <p>{getMail()}</p>
            <p>{date.getDay() + 1}.{date.getMonth() + 1}.{date.getFullYear()}</p>
        </div>
    </div>)
}

export { User }