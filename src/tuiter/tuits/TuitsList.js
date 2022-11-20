import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitItem from "./TuitItem";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitsList = () => {
  const {tuits, loading} = useSelector(state => state.tuitsData)
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(findTuitsThunk())
  }, [])
 return(
<div class="list-group wd-post-list-group">
  {
    loading &&
    <div className="list-group-item">
      Loading...
    </div>
  }
        {tuits.map(t=>{
             return <TuitItem tuit={t}/>;
    })
    }
    </div>
 );
};
export default TuitsList;