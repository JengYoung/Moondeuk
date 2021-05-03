import React from 'react'
import ReplyCommentWrapper from '../../components/replyComment/ReplyCommentWrapper'
import ReplyCommentListItemContainer from './ReplyCommentListItemContainer'

function ReplyCommentWrapperContainer({ comment_id, replyComments }) {
    return (
        <ReplyCommentWrapper>
            {
                replyComments.map(replyComment => {
                    const { _id, replierInfo, content } = replyComment;
                    console.log(comment_id);
                    return(
                        <ReplyCommentListItemContainer _id={comment_id} comment_id={_id} replierInfo={replierInfo} content={content}></ReplyCommentListItemContainer>
                    )
                })
            }
        </ReplyCommentWrapper>
    )
}

export default ReplyCommentWrapperContainer
