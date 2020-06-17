// import notificationsStyles from './notification.css';
import MessageTableRow from './message-table-row/message-table-row';

const MessageTable = ({rowsData}) =>{

  let rowsArray =[];
  if (!rowsData) {
    rowsArray = null;
  }
  else{
    rowsData.map(row =>{
      rowsArray.push(<MessageTableRow singleRowData ={row}></MessageTableRow>);
    })
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