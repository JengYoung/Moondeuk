import React from 'react'
import styled from 'styled-components';
import FooterBtn from '../common/FooterBtn';
import { FaHeart, FaRegHeart } from "react-icons/fa";
/*
    좋아요 버튼
*/

const StyledLikeBtn = styled(FooterBtn)`
    color: #e76060;
`;


const LikeBtn = ({ onLike, onDislike, likeExist }) => {
    return (
        likeExist ? 
            <StyledLikeBtn onClick={onDislike}><FaHeart/></StyledLikeBtn>
        : 
            <StyledLikeBtn onClick={onLike}><FaRegHeart/></StyledLikeBtn>
    );
};

export default LikeBtn;