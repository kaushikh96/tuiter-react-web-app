const WhoToFollowListItem = (who) => {
    return(`            
            <li class="list-group-item wd-follow-label">
                <div class="row wd-row">
                    <div class="col-9">
                      <div class="d-flex flex-row align-items-center">
                        <img
                        class="wd-tweet-pages-pic"
                        src="${who.avatarIcon}"
                      />
                      <div>
                        <b>${who.userName}</b>&nbsp;<i class="fa fa-check-circle"></i><div class="wd-handler">@${who.handle}</div>
                      </div>
                    </div>
                      </div>
                    <div class="col-3">
                        <button
                    id="wd-follow-button"
                    type="submit"
                    class="btn btn-primary"
                  >
                    Follow
                  </button>
                    </div>
                </div>
            </li>
`); }

export default WhoToFollowListItem;