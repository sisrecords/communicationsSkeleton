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
import MaterialTableDemo from '../components/main-table/main-table';
import rootReducer from '../store/reducer'

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
      <button onClick={props.onInitNotificationsTable}>get notification data</button>
        <NotificationTable key="2" rowsData={props.notificationsDataProp}></NotificationTable>
      </div>
      <div className={utilStyles.lineChart}>
        <div className={utilStyles.rightHeadline}>מצב טיפול בתיקים בחודש החולף</div>
        <LineChart data={lineData}></LineChart>
      </div>
      <div className={utilStyles.pieChart}>
        <div className={utilStyles.rightHeadline}>זמני תיקים בסבב</div>
        <BigPieChart data={pieData}></BigPieChart>
      </div>
      <div className={utilStyles.messagesTable}>
      <button onClick={props.onInitMessagesTable}>get notification data</button>
        <MessageTable key="1" rowsData={props.messagesDataProp}></MessageTable>
      </div>
      <div className={utilStyles.mainTableContainer}>
        <MaterialTableDemo className={utilStyles.mainTable}></MaterialTableDemo>
        </div>
      <div className={utilStyles.smallPieChartsComponentContainer}>
        <div className={utilStyles.rightHeadline}>שיטת התקשרות</div>
        <div className={utilStyles.pieDataContainer}>
          <div className={utilStyles.singlePieChartContainer}>
            <div className={utilStyles.smallPieChartNum}>
              {smallPieChartData[0][0].value}%
            </div>
            <SmallPieChart data={smallPieChartData[0]}></SmallPieChart>
          </div>
          <div className={utilStyles.smallPieChartHeadline}>
            זוח
          </div>
        </div>
        <div className={utilStyles.pieDataContainer}>
          <div className={utilStyles.singlePieChartContainer}>
            <div className={utilStyles.smallPieChartNum}>
              {smallPieChartData[1][0].value}%
            </div>
            <SmallPieChart data={smallPieChartData[1]}></SmallPieChart>
          </div>
          <div className={utilStyles.smallPieChartHeadline}>
          fix
          </div>
        </div>
        <div className={utilStyles.pieDataContainer}>
          <div className={utilStyles.singlePieChartContainer}>
            <div className={utilStyles.smallPieChartNum}>
              {smallPieChartData[2][0].value}%
            </div>
            <SmallPieChart data={smallPieChartData[2]}></SmallPieChart>
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
    notificationsDataProp: state.notificationsTableData,
    messagesDataProp: state.messagesTableData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    //onPostAdded: () => dispatch(actions.add()),
    //onPostRemoved: () => dispatch(actions.remove()),
    onInitNotificationsTable: () => dispatch(actions.initNotificationTable()),
    onInitMessagesTable:()=> dispatch(actions.initMessagesTable())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const smallPieChartData = [
  [
    {
      "id": "82",
      "value": 82,
      "color": "mainColor"
    },
    {
      "id": "18",
      "value": 18,
      "color": "remainingColor"
    }
  ],
  [
    {
      "id": "75",
      "value": 75,
      "color": "mainColor"
    },
    {
      "id": "25",
      "value": 25,
      "color": "remainingColor"
    }
  ],
  [
    {
      "id": "64",
      "value": 64,
      "color": "mainColor"
    },
    {
      "id": "36",
      "value": 36,
      "color": "remainingColor"
    }
  ]
]

const pieData = [
  {
    "id": "15",
    "label": "תקין",
    "value": 15,
  },
  {
    "id": "8",
    "label": "קרוב לחריגה",
    "value": 8,
  },
  {
    "id": "2",
    "label": "חורג",
    "value": 2,
  },
]


const lineData = [
  {
    "id": "חורג",
    "color": "red",
    "data": [
      {
        "x": 0,
        "y": 1.5
      },
      {
        "x": 5,
        "y": 3
      },
      {
        "x": 10,
        "y": 2.5
      },
      {
        "x": 15,
        "y": 2
      },
      {
        "x": 20,
        "y": 1
      },
      {
        "x": 25,
        "y": 1
      },
      {
        "x": 30,
        "y": 0.5
      },
      {
        "x": 35,
        "y": 0
      }
    ]
  },
  {
    "id": "כמעט חורג",
    "color": "orange",
    "data": [
      {
        "x": 0,
        "y": 3
      },
      {
        "x": 5,
        "y": 2
      },
      {
        "x": 10,
        "y": 1
      },
      {
        "x": 15,
        "y": 0.5
      },
      {
        "x": 20,
        "y": 2
      },
      {
        "x": 25,
        "y": 3
      },
      {
        "x": 30,
        "y": 3
      },
      {
        "x": 35,
        "y": 3.5
      }
    ]
  },
  {
    "id": "תקין",
    "color": "green",
    "data": [
      {
        "x": 0,
        "y": 1
      },
      {
        "x": 5,
        "y": 0.5
      },
      {
        "x": 10,
        "y": 1
      },
      {
        "x": 15,
        "y": 2
      },
      {
        "x": 20,
        "y": 2
      },
      {
        "x": 25,
        "y": 3
      },
      {
        "x": 30,
        "y": 3.5
      },
      {
        "x": 35,
        "y": 4
      }
    ]
  }
]