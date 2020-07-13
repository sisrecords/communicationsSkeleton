// import Head from 'next/head'
// import Layout, { siteTitle } from '../components/layout'
import utilStyles from "../styles/utils.module.css";
import { connect } from "react-redux";
import * as actions from "../store/actionCreators";
// import Button from '@material-ui/core/Button';
import BigPieChart from "../components/pie-chart/files-time-pie-chart";
import LineChart from "../components/line-chart/line-chart";
import NotificationComponent from "../components/notification-component/notification-component";
import MessageComponent from "../components/message-component/message-component";
import SmallPieChart from "../components/small-pie-chart/small-pie-chart";
import MaterialTable from "../components/main-table/main-table";
import TagsInput from "../components/tag-search/tag-search-2";

const Home = props => {
  return (
    <div className={utilStyles.gridContainer}>
      <div className={utilStyles.notificationComponent}>
        <NotificationComponent
          key="2"
          rowsData={props.notificationsDataProp}
        ></NotificationComponent>
        <button onClick={props.onInitNotificationsComponent}>get</button>
      </div>
      <div className={utilStyles.lineChart}>
        <div className={utilStyles.rightHeadline}>
          מצב טיפול בתיקים בחודש החולף
        </div>
        <LineChart data={props.lineChartDataProp}></LineChart>
      </div>
      <div className={utilStyles.pieChart}>
        <div className={utilStyles.rightHeadline}>זמני תיקים בסבב</div>
        <BigPieChart data={props.pieChartDataProp}></BigPieChart>
      </div>
      <div className={utilStyles.messagesTable}>
        <MessageComponent
          key="1"
          rowsData={props.messagesDataProp}
        ></MessageComponent>
        <button onClick={props.onInitMessagesComponent}>get</button>
      </div>
      <div className={utilStyles.mainTableContainer}>
        <div className={utilStyles.tagSearchContainer}>
          <TagsInput
            tags={props.tagsDataProp}
            suggestions={props.suggestionsDataProp}
            filterTable={props.onInitMainTable}
          ></TagsInput>
        </div>
        <MaterialTable data={props.mainTableDataProp}></MaterialTable>
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
          <div className={utilStyles.smallPieChartHeadline}>זוח</div>
        </div>
        <div className={utilStyles.pieDataContainer}>
          <div className={utilStyles.singlePieChartContainer}>
            <div className={utilStyles.smallPieChartNum}>
              {props.smallPieDataProp[1][0].value}%
            </div>
            <SmallPieChart data={props.smallPieDataProp[1]}></SmallPieChart>
          </div>
          <div className={utilStyles.smallPieChartHeadline}>fix</div>
        </div>
        <div className={utilStyles.pieDataContainer}>
          <div className={utilStyles.singlePieChartContainer}>
            <div className={utilStyles.smallPieChartNum}>
              {props.smallPieDataProp[2][0].value}%
            </div>
            <SmallPieChart data={props.smallPieDataProp[2]}></SmallPieChart>
          </div>
          <div className={utilStyles.smallPieChartHeadline}>אחר</div>
        </div>
      </div>
      <div className={utilStyles.tagsContainer}>
        תגיות
        <div>no need to implement for now</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    notificationsDataProp: state.notificationsReducer.notificationsTableData,
    messagesDataProp: state.messagesReducer.messagesTableData,
    smallPieDataProp: state.smallPieChartsReducer.smallPieChartsData,
    pieChartDataProp: state.pieChartReducer.pieChartData,
    lineChartDataProp: state.lineChartReducer.lineChartData,
    mainTableDataProp: state.mainTableReducer.mainTableData,
    tagsDataProp: state.tagsReducer.tags,
    suggestionsDataProp: state.tagsReducer.suggestions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitNotificationsComponent: () =>
      dispatch(actions.initNotificationComponent()),
    onInitMessagesComponent: () => dispatch(actions.initMessagesComponent()),
    onInitMainTable: tags => dispatch(actions.initMainTable(tags))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
