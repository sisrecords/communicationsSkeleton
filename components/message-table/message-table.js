// import notificationsStyles from './notification.css';
import MessageTableRow from './message-table-row/message-table-row';

const MessageTable = ({rowsData}) =>{

  debugger;
  let rowsArray =[];
  if (rowsData == null) {
    rowsArray = null;
  }
  else{
    if (rowsData.notificationsTableData) {
      rowsData.notificationsTableData.map(row =>{
        rowsArray.push(<MessageTableRow key={row.id} singleRowData ={row}></MessageTableRow>);
      })
    }
  }

  return (
    <div>
      <div>הודעות</div>
      {rowsArray}
    </div>
    );
  // if (!rowsData) {
  //   return null;
  // }
  // debugger;
  // rowsData.map((val, index) => {
  //   return (  
  //     <div key={index}>
  //       <MessageTableRow rowData={rowsData[index]}></MessageTableRow>
  //       { val }
  //     </div>
  //    );
  // })
}

export default MessageTable;