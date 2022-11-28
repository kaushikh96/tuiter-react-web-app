import React from "react";
//import PostListItem from "./post-list-item";
import tuits from "./tuits.json"
import TuitItem from "./TuitItem";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";
const TuitStats = ({tu}) => {
const dispatch = useDispatch();
const ifLiked = () =>{
    dispatch(updateTuitThunk({
            ...tu,
            likes: tu.likes + 1, liked: true
    }))      
}
const ifDisliked = () =>{
    if(!tu.disliked){
        dispatch(updateTuitThunk({
            ...tu,
            dislikes: tu.dislikes + 1,
            disliked: true
    }))
    }else{
        dispatch(updateTuitThunk({
            ...tu,
            dislikes: tu.dislikes - 1,
            disliked: false
    }))
    }
        
}
 return(<>
            <div className="col-3">
                <i className='bi bi-chat wd-gray-color'>&nbsp;{tu.replies}</i>
            </div>
            <div className="col-3">
            <i className="bi bi-arrow-repeat wd-gray-color">&nbsp;{tu.retuits}</i>
            </div>
            <div className="col-3">
                <i onClick={ifLiked} className={tu.liked?'bi bi-heart-fill wd-red-color':'bi bi-heart'}>&nbsp;{tu.likes}</i>
            </div>
            <div className="col-3">
                <i onClick={ifDisliked} className={!tu.disliked?'bi bi-hand-thumbs-down' : 'bi bi-hand-thumbs-down-fill'}>&nbsp;{tu.dislikes}</i>
            </div>
            {/* <div className="col-2">
            <i className="bi bi-share wd-gray-color"></i>
            </div> */}
            </>
 );
};
export default TuitStats;