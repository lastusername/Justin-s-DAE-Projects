import react, { useEffect } from 'react'

function Join () {
    useEffect(
        () => {
            const timer = setTimeout(
            () => {
                alert("Join FBLA!")
            },9000
            )
            return () => clearTimeout(timer)  
        }
    )
    
    return(
<div>...</div>
    )
}

export default Join;