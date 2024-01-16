import React from "react";
import Comment from "./Comment"

const comments = [ //데이터를 별도의 객체와 분리 
    {   
        name: "이인제",
        comment: "안녕하세요",
    },
    {   
        name: "유재석",
        comment: "리액트 재밌어요",
    },
    {   
        name: "강민경",
        comment: "저도요!",
    },
];

function CommentList(props) {
    return (
        <div>
                {comments.map((comment) => {
                    return (
                        <Comment name={comment.name} comment={comment.comment}/>
                    );
                })}        
        </div>
    );
}


// function CommentList(props) {
//     return (
//         <div>
//                 <Comment name={"이인제"} comment={"안녕하세요, 소품입니다."}/>
//         </div>
//     );
// }

export default CommentList;