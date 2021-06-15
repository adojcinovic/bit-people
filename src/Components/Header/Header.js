import './Header.css'


const Header = ({ refresh }) => {
    return (
        <>
            <div className="header">
                <h1>Bit People</h1>
                <div className='buttons'>
                    <button onClick={refresh}>Refresh</button>
                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Refresh_icon.png"></img> */}
                    <button>Change view</button>
                </div>
            </div>

        </>
    )
}

export { Header }