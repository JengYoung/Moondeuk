import LinkBtn from 'components/common/LinkBtn'
import LoginMessage from 'components/common/LoginMessage'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SideMenuBtn from '../components/common/SideMenuBtn'
import SideWrap from '../components/common/SideWrap'
import UserImageBox from '../components/common/UserImageBox'
import UserName from '../components/common/UserNameBox'
import { check } from '../modules/user'

const SideBarContainer = ({ isSideBar, onSideBar }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer.user);
    const user_id = user ? user.userId : null;
    const nickname = user ? user.nickname : null;
    const user_image = user ? user.userImage : null;
    const checkUser = useCallback(() => {
        dispatch(check())
    }, [dispatch])
    return (
        <SideWrap isMain isSideBar={isSideBar}>
            <SideMenuBtn isSideBar={isSideBar} onSideBar={onSideBar}></SideMenuBtn>
            {
                user_id ? <UserImageBox 
                            user_id={user_id} 
                            user_image={user_image} 
                            checkUser={checkUser}
                        /> : <>
                            <LoginMessage></LoginMessage>
                        </>
                }
            <UserName user_id={user_id} nickname={nickname}></UserName>
        </SideWrap>
    )
}

export default SideBarContainer
