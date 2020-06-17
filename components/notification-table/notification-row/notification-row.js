
import notificationStyles from './notification-row.module.css';

const NotificationTableRow = ({ singleRowData }) => {
    let notificationSubjectImg;
    if (singleRowData.action ===1) {
        notificationSubjectImg = "/images/check-mark.jpg";
    }
    else if (singleRowData.action === 2) {
        notificationSubjectImg = "/images/question-mark.jpg";
    }
    return (
        <div className={notificationStyles.rowContainer}>
            <div><img className={notificationStyles.notificationImg} src={notificationSubjectImg}></img></div>
            <div className={notificationStyles.name}>{singleRowData.name}</div>
            <div>{singleRowData.subject}<span>{singleRowData.subjectNum}</span></div>
            <div className={notificationStyles.actionDesctiption}>{singleRowData.actionDesctiption}</div>
            <div className={notificationStyles.timeStamp}>{singleRowData.timeStamp}</div>
        </div>
    );
}


export default NotificationTableRow;
