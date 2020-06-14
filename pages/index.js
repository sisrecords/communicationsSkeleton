import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import {connect} from 'react-redux';
import * as actions from '../store/actionCreators';
import Button from '@material-ui/core/Button';
import * as actionTypes from '../store/actions';

const Home = (props) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
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
      </section>
    </Layout>
  ) 
}


const mapStateToProps = state => {
  return{
    numOfPosts: state.numOfPosts
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    onPostAdded: ()=> dispatch(actions.add()),
    onPostRemoved: ()=> dispatch(actions.remove()),
    onInitPosts: ()=> dispatch(actions.initPosts())
  }
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

export default connect(mapStateToProps,mapDispatchToProps)(Home);



    // <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    //   {/* <h2 className={utilStyles.headingLg}>Blog</h2> */}
    //   {/* <ul className={utilStyles.list}> */}
    //     {allPostsData.map(({ id, date, title }) => (
    //       <li className={utilStyles.listItem} key={id}>
    //         <Link href="/posts/[id]" as={`/posts/${id}`}>
    //           <a>{title}</a>
    //         </Link>
    //         <br />
    //         <small className={utilStyles.lightText}>
    //           <Date dateString={date} />
    //         </small>
    //       </li>
    //     ))}
    //   {/* </ul> */}
    // </section>