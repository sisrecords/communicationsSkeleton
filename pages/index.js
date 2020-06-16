// import Head from 'next/head'
// import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { connect } from 'react-redux';
import * as actions from '../store/actionCreators';
import Button from '@material-ui/core/Button';
import FilesTimePieChart from '../components/pie-chart/files-time-pie-chart';
import LineChart from '../components/line-chart/line-chart'
const Home = (props) => {
  return (
      <div className={utilStyles.gridContainer}>
        <div className={utilStyles.item1}>
          התראות
        </div>
        <div className={utilStyles.item2}>
          <LineChart data={lineData}></LineChart>
        </div>
        <div className={utilStyles.item3}>
          <FilesTimePieChart data={pieData}></FilesTimePieChart>
        </div>  
        <div className={utilStyles.item4}>
          הודsadasdעות
        </div>
        <div className={utilStyles.item5}>
        טבלה
        </div>
        <div className={utilStyles.item6}>
        שיטת התקשרות
        </div>
        <div className={utilStyles.item7}>
        תגיות
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

const pieData = [
  {
    "id": "15",
    "label": "תקין",
    "value": 15,
    "color": "rgb(255, 0, 0))"
  },
  {
    "id": "8",
    "label": "קרוב לחריגה",
    "value": 8,
    "color": "rgb(0, 204, 0)"
  },
  {
    "id": "2",
    "label": "חורג",
    "value": 2,
    "color": "rgb(255, 0, 0)"
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