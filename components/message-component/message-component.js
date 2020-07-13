// import notificationsStyles from './notification.css';
import MessageComponentRow from "./message-table-row/message-component-row";

const MessageComponent = ({ rowsData }) => {
  let rowsArray = [];
  if (rowsData == null) {
    rowsArray = null;
  } else {
    if (rowsData) {
      rowsData.map(row => {
        rowsArray.push(
          <MessageComponentRow
            key={row.id}
            singleRowData={row}
          ></MessageComponentRow>
        );
      });
    }
  }

  return (
    <div>
      <div>הודעות</div>
      {rowsArray}
    </div>
  );
};

export default MessageComponent;
