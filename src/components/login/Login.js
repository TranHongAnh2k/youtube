import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { login } from '../../redux/actions/auth.action'
import './_login.scss'

const Login = () => {

    
    const dispatch = useDispatch()

    const accessToken = useSelector(state=>state.auth.accessToken)

    const handleLogin= ()=>{

        dispatch(login())
        
    }

    const navigate = useNavigate()

    useEffect(() => {
        if (accessToken){
            navigate("/")
        }
    }, [accessToken,navigate])

    return (
        <div className="login">
            <div className="login__container">
                <h2>Youtube Clone</h2>
                <img src="./images/logo.svg" alt="" />
                <button onClick={handleLogin}>Login With google</button>
            
                <p>This Project is made using YOUTUBE DATA API</p>
            </div>

            
        </div>
    )
}

export default Login
