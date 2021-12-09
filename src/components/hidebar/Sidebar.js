import React from 'react'
import {
    MdExitToApp,
    MdHistory,
    MdHome,
    MdLibraryBooks,
    MdSentimentDissatisfied,
    MdSubscriptions,
    MdThumbUp,
} from 'react-icons/md'
import {HiOutlineLogin} from 'react-icons/hi'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { logout } from '../../redux/actions/auth.action'
import './_sidebar.scss'


const Sidebar = ({ sideBar }) => {
    // console.log(sideBar);

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { accessToken } = useSelector(state => state.auth)

    const handleLogin = () => {
        navigate('/login')
    }

    const handleLogout = () => {
        dispatch(logout())
    }


    return (
        <nav className={sideBar ? "sidebar active" : "sidebar"}>
            <li onClick={() => navigate('/')}>
                <MdHome size={23} />
                <span>Home</span>
            </li>

            <li>
                <MdSubscriptions size={23} />
                <span>Subcriptions</span>
            </li>

            <li>
                <MdThumbUp size={23} />
                <span>Liked</span>
            </li>

            <li>
                <MdHistory size={23} />
                <span>History</span>
            </li>

            <li>
                <MdLibraryBooks size={23} />
                <span>Library</span>
            </li>

            <li>
                <MdSentimentDissatisfied size={23} />
                <span>I don't Know</span>
            </li>
            {
                !accessToken ?
                    <li onClick={handleLogin}>
                        <HiOutlineLogin size={23} />
                        <span >Login</span>
                    </li> :
                    <li onClick={handleLogout}>
                        <MdExitToApp size={23} />
                        <span >Logout</span>
                    </li>
            }
        </nav>
    )
}

export default Sidebar
