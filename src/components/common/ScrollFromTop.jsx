import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { MyContext } from '../usecontext/UseContext'

const ScrollFromTop = () => {
    const { profile } = useContext(MyContext)
    const location = useLocation()
    useEffect(() => {
        window.scroll(0, 0)
    },[location.pathname,profile.servicePage])

    return (
        <div>

        </div>
    )
}

export default ScrollFromTop
