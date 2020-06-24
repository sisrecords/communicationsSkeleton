// import Head from 'next/head'
// import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { connect } from 'react-redux';
import * as actions from '../store/actionCreators';
// import Button from '@material-ui/core/Button';
import BigPieChart from '../components/pie-chart/files-time-pie-chart';
import LineChart from '../components/line-chart/line-chart'
import NotificationTable from '../components/notification-table/notification-table';
import MessageTable from '../components/message-table/message-table';
import SmallPieChart from '../components/small-pie-chart/small-pie-chart';
import MaterialTable from '../components/main-table/main-table';

const Home = (props) => {

  // const state ={
  //   notificationsTableData:null
  // }

  // const initNotificationTable = () =>{
  //   onInitNotificationsTable();
  // }

  return (
    <div className={utilStyles.gridContainer}>
      <div className={utilStyles.notificationTable}>
        <NotificationTable key="2" rowsData={props.notificationsDataProp}></NotificationTable>
      <button onClick={props.onInitNotificationsTable}>get</button>
      </div>
      <div className={utilStyles.lineChart}>
        <div className={utilStyles.rightHeadline}>מצב טיפול בתיקים בחודש החולף</div>
        <LineChart data={props.lineChartDataProp}></LineChart>
      </div>
      <div className={utilStyles.pieChart}>
        <div className={utilStyles.rightHeadline}>זמני תיקים בסבב</div>
        <BigPieChart data={props.pieChartDataProp}></BigPieChart>
      </div>
      <div className={utilStyles.messagesTable}>
        <MessageTable key="1" rowsData={props.messagesDataProp}></MessageTable>
      <button onClick={props.onInitMessagesTable}>get</button>
      </div>
      <div className={utilStyles.mainTableContainer}>
        <MaterialTable data={props.mainTableDataProp} ></MaterialTable>
        </div>
      <div className={utilStyles.smallPieChartsComponentContainer}>
        <div className={utilStyles.rightHeadline}>שיטת התקשרות</div>
        <div className={utilStyles.pieDataContainer}>
          <div className={utilStyles.singlePieChartContainer}>
            <div className={utilStyles.smallPieChartNum}>
              {props.smallPieDataProp[0][0].value}%
            </div>
            <SmallPieChart data={props.smallPieDataProp[0]}></SmallPieChart>
          </div>
          <div className={utilStyles.smallPieChartHeadline}>
            זוח
          </div>
        </div>
        <div className={utilStyles.pieDataContainer}>
          <div className={utilStyles.singlePieChartContainer}>
            <div className={utilStyles.smallPieChartNum}>
              {props.smallPieDataProp[1][0].value}%
            </div>
            <SmallPieChart data={props.smallPieDataProp[1]}></SmallPieChart>
          </div>
          <div className={utilStyles.smallPieChartHeadline}>
          fix
          </div>
        </div>
        <div className={utilStyles.pieDataContainer}>
          <div className={utilStyles.singlePieChartContainer}>
            <div className={utilStyles.smallPieChartNum}>
              {props.smallPieDataProp[2][0].value}%
            </div>
            <SmallPieChart data={props.smallPieDataProp[2]}></SmallPieChart>
          </div>
          <div className={utilStyles.smallPieChartHeadline}>
            אחר
          </div>
        </div>
      </div>
      <div className={utilStyles.tagsContainer}>
        תגיות
        <div>no need to implement for now</div>
      </div>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    notificationsDataProp: state.notificationsReducer.notificationsTableData,
    messagesDataProp: state.messagesReducer.messagesTableData,
    smallPieDataProp: state.smallPieChartsReducer.smallPieChartsData,
    pieChartDataProp: state.pieChartReducer.pieChartData,
    lineChartDataProp: state.lineChartReducer.lineChartData,
    mainTableDataProp: state.mainTableReducer.mainTableData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitNotificationsTable: () => dispatch(actions.initNotificationTable()),
    onInitMessagesTable:()=> dispatch(actions.initMessagesTable())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);


// const data = [
//     { name: 'adam', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//     { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//     { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//     { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//     { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//     { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//     { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//     { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//     { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//   ]

