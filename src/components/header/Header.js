import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
import { useSelector } from 'react-redux'


import './_header.scss'
import { useNavigate } from 'react-router'


const Header = ({ handelToggleSideBar }) => {

    const { photo, name } = useSelector(state => state.auth.user)
    const navigate = useNavigate()

    const [input, setInput] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        navigate(`/search/${input}`)
    }

    return (
        <div className="border border-dark header">
            <FaBars
                className="header__menu"
                size={26}
                onClick={() => handelToggleSideBar()}
            />
            <div className="header__logo" onClick={() => navigate('/')}>
                <img src="/images/logo.svg" alt='logo' />
                <h4 className="header__logo__brand">YouTube</h4>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <button>
                    <AiOutlineSearch size={22} />
                </button>
            </form>
            <div className="header__icons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img src={photo ? photo : "./images/user.png"} alt={name} />
            </div>
        </div>
    )
}

export default Header
