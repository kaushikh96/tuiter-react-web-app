import WhoToFollowListItem from "./WhoToFollowListItem.js";

import who from "./who.js";

const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
            <li class="list-group-item wd-follow-label" style="border-radius:15px 15px 0px 0px; font-size:20px"><b>Who to follow</b></li>
            ${
                who.map(w=>{
                    return WhoToFollowListItem(w);
                }).join('')
            }
            <li class="list-group-item wd-follow-label" style="border-radius:0px 0px 15px 15px">
            <div class="row wd-row">
                <a href="#">Show More</a>
            </div>
        </li>
        
        </ul>
        <div class="wd-disclaimer">
            Terms of Service &nbsp;&nbsp;  Privacy Policy &nbsp;&nbsp;  Cookie Policy<br>
            Accessibility&nbsp;&nbsp;   Ads Info &nbsp;&nbsp;  More...<br>
            © 2022 Twitter Inc.
          </div>
    `);}

    export default WhoToFollowList;