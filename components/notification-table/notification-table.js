// import notificationsStyles from './notification.css';
import NotificationTableRow from './notification-row/notification-row';

const NotificationTable = ({rowsData}) =>{

  let rowsArray =[];
  if (!rowsData) {
    rowsArray = null;
  }
  else{
    rowsData.map(row =>{
      rowsArray.push(<NotificationTableRow key={row.id} singleRowData ={row}></NotificationTableRow>);
    })
  }

  return (
    <div>
      <div>התראות</div>
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
  //       <NotificationTableRow rowData={rowsData[index]}></NotificationTableRow>
  //       { val }
  //     </div>
  //    );
  // })
}

export default NotificationTable;