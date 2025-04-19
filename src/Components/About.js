// import React, {useState} from 'react'

export default function About(props) {
    let myStyle = {
        color : props.mode === 'dark' ? 'white' : 'black',
        backgroundColor : props.mode === 'dark' ? '#3c3c3c' : 'white',
        border : '1px solid',
        borderColor : props.mode === 'dark' ? 'white' : 'black',
        borderRadius : '5px',
    }
    

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btnText, setBtnText] = useState("Enable Dark Mode")
    // const toggleStyle = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: '#3c3c3c',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     } else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }
    return (
        <>
            <div className='container'>
                <h1 className='my-3'>About Us</h1>
                <div className="d-flex flex-column">
                    {/* First Collapse */}
                    <button style={myStyle} className="btn a" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                        First Collapse
                    </button>
                    <div className="collapse" id="collapseExample1">
                        <div className="card card-body" style={myStyle}>
                            This is the content for the first collapse section.
                        </div>
                    </div>

                    {/* Second Collapse */}
                    <button style={myStyle} className="btn a" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                        Second Collapse
                    </button>
                    <div className="collapse" id="collapseExample2">
                        <div className="card card-body" style={myStyle}>
                            This is the content for the second collapse section.
                        </div>
                    </div>

                    {/* Third Collapse */}
                    <button style={myStyle} className="btn a" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                        Third Collapse
                    </button>
                    <div className="collapse" id="collapseExample3">
                        <div className="card card-body" style={myStyle}>
                            This is the content for the third collapse section.
                        </div>
                    </div>
                </div>

            </div>

            {/* <div className='container'>
                <button onClick={toggleStyle} className='btn btn-primary my-3'>{btnText}</button>
            </div> */}

        </>
    )
}
