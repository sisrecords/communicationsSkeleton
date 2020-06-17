// import Head from 'next/head'
// import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { connect } from 'react-redux';
import * as actions from '../store/actionCreators';
import Button from '@material-ui/core/Button';
import FilesTimePieChart from '../components/pie-chart/files-time-pie-chart';
import LineChart from '../components/line-chart/line-chart'
import NotificationTable from '../components/notification-table/notification-table';
import MessageTable from '../components/message-table/message-table';
import SmallPieChart from '../components/small-pie-chart/small-pie-chart';
const Home = (props) => {  
  return (
      <div className={utilStyles.gridContainer}>
        <div className={utilStyles.notificationTable}>
          <NotificationTable  rowsData = {notificationsData}></NotificationTable>
        </div>
        <div className={utilStyles.lineChart}>
          <LineChart data={lineData}></LineChart>
        </div>
        <div className={utilStyles.pieChart}>
          <FilesTimePieChart data={pieData}></FilesTimePieChart>
        </div>  
        <div className={utilStyles.messagesTable}>
        <MessageTable rowsData = {messagesData}></MessageTable>
        </div>
        <div className={utilStyles.mainTable}>
        טבלה - need to implement
        </div>
        <div className={utilStyles.smallPieCharts}>
        <SmallPieChart data={smallPieChartData}></SmallPieChart>
         <div className={utilStyles.smallPieChartNum}>
         {smallPieChartData[0].value}%
         </div> 
        </div>
        <div className={utilStyles.tagsContainer}>
        תגיות
        <div>no need to implement for now</div>
        </div>
      {
        //store section
        /* <section className={utilStyles.headingMd}>
        <p>software developer at Kiloma!</p>
        <Button onClick={props.onPostAdded} variant="contained" color="primary">
        ADD
        </Button>
        <div>number of posts: {props.numOfPosts}</div>
        <Button onClick={props.onPostRemoved} variant="contained" color="secondary">
        REMOVE
        </Button>
        <div></div>
        <Button onClick={props.onInitPosts} variant="contained" color="default">
        INITIALIZE POSTS
        </Button>
        <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section> */}
      </div>
  )
}


const mapStateToProps = state => {
  return {
    numOfPosts: state.numOfPosts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPostAdded: () => dispatch(actions.add()),
    onPostRemoved: () => dispatch(actions.remove()),
    onInitPosts: () => dispatch(actions.initPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const notificationsData = [
  {
    "id":"1",
    "action":2,//1-approved,2-transfered to clearification,...
    "name":"צבי משה",
    "subject":"ניסוי מכם",
    "subjectNum":"36875",
    "actionDesctiption":"הועבר לבירור לשמעון שמעוני, ק״פט",
    "timeStamp":"לפני 7 דקות"
  },
  {
    "id":"2",
    "action":1,//1-approved,2-transfered to clearification,...
    "name":"אבי הכהן",
    "subject":"יצירת ניסויים",
    "subjectNum":"12345",
    "actionDesctiption":"אישור תחנה, הועבר לשי חן, כלכלן",
    "timeStamp":"לפני 38 דקות"
  },
]

const messagesData = [
  {
    "id":"1",
    "action":2,//1-approved,2-transfered to clearification,...
    "name":"אייל בנימין",
    "subject":"יצירת מטוסי לחימה",
    "subjectNum":"36875",
    "actionDesctiption":"האם אתה בטוח שאלה",
    "timeStamp":"לפני 7 דקות"
  },
  {
    "id":"2",
    "action":1,//1-approved,2-transfered to clearification,...
    "name":"ישראל ישראלי",
    "subject":"יצירת מכם 2 ",
    "subjectNum":"12345",
    "actionDesctiption":"אני לא חושב שזה אמור",
    "timeStamp":"לפני 38 דקות"
  },
]
const smallPieChartData = [
  {
    "id": "82",
    "value": 82,
    "color":"mainColor"
  },
  {
    "id": "28",
    "value": 28,
    "color":"remainingColor"
  }
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
    "color":"red",
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
    "color":"orange",
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
    "color":"green",
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