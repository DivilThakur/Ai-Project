import React from 'react'
import { RevolvingDot } from 'react-loader-spinner'

function Spinner() {
    return (
        <div className='h-screen flex justify-center items-center'>
            (<RevolvingDot
                visible={true}
                height="200"
                width="200"
                color="#4fa94d"
                ariaLabel="revolving-dot-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />)
        </div>
    )
}

export default Spinner