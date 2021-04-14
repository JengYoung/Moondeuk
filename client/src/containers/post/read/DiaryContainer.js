import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import Diary from '../../../components/read/Diary'
import deleteAPI from '../../../lib/routes/post/delete';
import { readDiary } from '../../../modules/diary';
import { settingUpdate } from '../../../modules/write';

const DiaryContainer = ({ match, history }) => {
    const dispatch = useDispatch();
    const { diary, diaryError, userId } = useSelector(({diaryReducer, userReducer}) => ({
        diary: diaryReducer.diary,
        diaryError: diaryReducer.diaryError,
        userId: userReducer.user.userId
    }));

    const { diaryId } = match.params;

    useEffect(() => {
        dispatch(readDiary(diaryId));
    }, [dispatch, diaryId]);

    const onPatch = () => {
        dispatch(settingUpdate(diary));
        history.push(`/write/@${userId}/${diaryId}`);
    };

    const onDelete = async () => {
        try {
            await deleteAPI(diaryId);
            alert("삭제되었습니다.");
            history.push('/');
        } catch(e) {
            alert("에러가 발생했습니다.");
            console.error(e);
        }
    }

    return (
        <Diary diary={diary} dairyError={diaryError} userId={userId} onPatch={onPatch} onDelete={onDelete}/>
    )
}

export default withRouter(DiaryContainer);