import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import LikeBtn from '../../components/like/LikeBtn';
import LikeCounter from '../../components/like/LikeCounter';
import LikeWrapper from '../../components/like/LikeWrapper'
import { alertUser } from '../../modules/alert';
import { checkLike, dislikeDiary, initializeLike, likeDiary, likeList } from '../../modules/like';

function LikeWrapperContainer({ typeName, typeId }) {
    const [ modal, setModal ] = useState(false);
    const dispatch = useDispatch();
    const { like, likes, user, diary } = useSelector(({ likeReducer, userReducer, diaryReducer }) => ({ 
        likes: likeReducer.likes,
        user: userReducer.user,
        diary: diaryReducer.diary,
        like: likeReducer.like,
    }));
    const likeListNames = {
        Diary: 'diaryList',
        Comment: 'commentList',
        ReplyComment: 'replyCommentList'
    };
    const likeUsersList = likes[likeListNames[typeName]]

    const diaryId = diary ? diary._id : null;
    const userId = user ? user._id : null;
    const author_id = diary ? diary.author._id : null;
    useEffect(() => {
        dispatch(initializeLike());
        if(!userId || !diaryId) return;
        dispatch(checkLike({ userId, diaryId }))
    }, [dispatch, diaryId, userId]);

    useEffect(() => {
        dispatch(likeList(diaryId));
    },[diaryId, dispatch, like])

    const onLike = () => {
        dispatch(likeDiary({ userId, diaryId, typeName, typeId }))
        dispatch(alertUser({ sender_id: userId, receiver_id: author_id, type: "Like", type_detail: {diary_id: diaryId} }))
    };
    const onDislike = () => dispatch(dislikeDiary({ userId, diaryId, typeName, typeId }));
    const onLikeList = () => setModal(!modal);

    return (
        <LikeWrapper>
            <LikeBtn 
                like={like}
                onLike={onLike}
                onDislike={onDislike}
            />
            <LikeCounter
                modal={modal}
                likeUsersList={likeUsersList}
                onLikeList={onLikeList}
            />
        </LikeWrapper>
    )
}

export default LikeWrapperContainer
