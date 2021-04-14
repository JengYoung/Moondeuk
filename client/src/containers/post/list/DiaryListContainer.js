import React, { useEffect } from 'react';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import DiaryList from '../../../components/list/DiaryList';
import { diaryList } from '../../../modules/diaryList';
import { withRouter } from 'react-router';

function DiaryListContainer({ match, location }) {
    const dispatch = useDispatch();
    const { diaries, diariesError } = useSelector(({ diaryListReducer }) => ({
        diaries: diaryListReducer.diaries,
        diariesError: diaryListReducer.diariesError,
    }));
    
    useEffect(() => {
        const { userId } = match.params;
        const { tag } = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        dispatch(diaryList({userId, tag}))
    }, [dispatch, location, match])
    console.log(diaries)
    return (
        <div>
            <DiaryList diaries={diaries} diariesError={diariesError}/>
        </div>
    )
}

export default withRouter(DiaryListContainer)