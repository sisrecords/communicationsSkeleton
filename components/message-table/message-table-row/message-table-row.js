
import messageStyles from './message-table-row.module.css';

const MessageTableRow = ({ singleRowData }) => {
    let messageSubjectImg = "/images/no-avatar.png";
    return (
        <div className={messageStyles.rowContainer}>
            <div><img className={messageStyles.messageImg} src={messageSubjectImg}></img></div>
            <div className={messageStyles.name}>{singleRowData.name}</div>
            <div>{singleRowData.subject}<span>{singleRowData.subjectNum}</span></div>
            <div className={messageStyles.actionDesctiption}>{singleRowData.actionDesctiption}</div>
            <div className={messageStyles.timeStamp}>{singleRowData.timeStamp}</div>
        </div>
    );
}


export default MessageTableRow;
