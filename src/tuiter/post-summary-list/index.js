import React, {useEffect} from "react";
import PostSummaryItem from "./post-summary-item";
import {useSelector, useDispatch} from "react-redux";
import { findTuitsThunk } from "../../services/tuits-thunks";
const PostSummaryList = () => {
  const {tuits: postsArray, loading} = useSelector(state => state.tuitsData)
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(findTuitsThunk())
  }, [])
  //const postsArray = useSelector(state => state.tuits)
 return(
  <div class="list-group wd-post-list-group">
  {
    loading &&
    <div className="list-group-item">
      Loading...
    </div>
  }
        {postsArray.map(p=>{
          return <PostSummaryItem key={p._id} post={p} />
    })
    }
    </div>
 );
};
export default PostSummaryList;