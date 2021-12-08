import React from 'react'
import {MdExitToApp, MdHistory, MdHome, MdLibraryBooks, MdSentimentDissatisfied, MdSubscriptions, MdThumbUp,} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import {logout} from '../../redux/actions/auth.action'
import './_sidebar.scss'


const Sidebar = ({sideBar}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = ()=>{
        dispatch(logout())
    }


    return (
        <nav className={sideBar?"sidebar active":"sidebar"}>
            <li onClick={()=>navigate('/')}>
                <MdHome size={23}/>
                <span>Home</span>
            </li>

            <li>
                <MdSubscriptions size={23}/>
                <span>Subcriptions</span>
            </li>

            <li>
                <MdThumbUp size={23}/>
                <span>Liked</span>
            </li>

            <li>
                <MdHistory size={23}/>
                <span>History</span>
            </li>

            <li>
                <MdLibraryBooks size={23}/>
                <span>Library</span>
            </li>

            <li>
                <MdSentimentDissatisfied size={23}/>
                <span>I don't Know</span>
            </li>

            <li onClick={handleLogout}>
                <MdExitToApp size={23}/>
                <span >Log Out</span>
            </li>
        </nav>
    )
}

export default Sidebar
