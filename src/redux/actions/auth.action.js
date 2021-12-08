import { signInWithPopup } from "@firebase/auth";
// import { useNavigate } from "react-router";
import auth, { provider } from "../../firebase"
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS,LOG_OUT } from "../reducers/actionType";


export const login =()=>async dispatch =>{
    // const navigate = useNavigate()s
    try{
        dispatch({
            type: LOGIN_REQUEST,
        })


        const res = await signInWithPopup(auth, provider)
        provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')

        const accessToken = res.user.accessToken
        
        const profile = {
            name: res.user.displayName,
            photo: res.user.photoURL,
        }

        localStorage.setItem('ytc-access-token', accessToken)
        localStorage.setItem('ytc-user', JSON.stringify(profile))
        
        dispatch({
            type:LOGIN_SUCCESS,
            payload:accessToken
        })

        dispatch({
            type:LOAD_PROFILE,
            payload:profile
        })

    }catch(error){
        console.log(error.message);

        dispatch({
            type:LOGIN_FAIL,
            payload:error.message
        })
    }
}

export const logout = ()=>async dispatch=>{

    await auth.signOut()
    localStorage.removeItem('ytc-access-token')
    localStorage.removeItem('ytc-user')
    dispatch({
        type:LOG_OUT
    })   
}