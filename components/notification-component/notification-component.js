// import notificationsStyles from './notification.css';
import NotificationComponentRow from "./notification-row/notification-row";

const NotificationComponent = ({ rowsData }) => {
  let rowsArray = [];
  if (rowsData == null) {
    rowsArray = null;
  } else {
    if (rowsData) {
      rowsData.map(row => {
        rowsArray.push(
          <NotificationComponentRow
            key={row.id}
            singleRowData={row}
          ></NotificationComponentRow>
        );
      });
    }
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
  //       <NotificationComponentRow rowData={rowsData[index]}></NotificationComponentRow>
  //       { val }
  //     </div>
  //    );
  // })
};

export default NotificationComponent;
