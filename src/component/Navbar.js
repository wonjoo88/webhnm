import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    const menuList = ["여성","남성","Divided","신생아/유아","아동","H&M Home","Sale","지속가능성"]
    const gotoLogin = () => {
        navigate('/login')
    }
    const search = (e) =>{
        if(e.key === "Enter"){
            let keyWord = e.target.value;
            navigate(`/?q=${keyWord}`)
        }
    }

    return (
        <div>
            <div>
                <div className='login-button' onClick={gotoLogin}>   
                    <FontAwesomeIcon icon={faUser} />
                    <div>로그인</div>
                </div>
            </div>
            <div className='logo'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png'/>
            </div>
            <div className='top-menu'>
                <ul className='menu-list'>
                    {menuList.map((menu, index)=>{
                        return <li key={index}>{menu}</li>
                    })}
                </ul>
                <div className='search'>
                    <FontAwesomeIcon icon={faSearch} className='search-con'/>
                    <input type='text' onKeyUp={(e)=>search(e)} placeholder='드레스'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
