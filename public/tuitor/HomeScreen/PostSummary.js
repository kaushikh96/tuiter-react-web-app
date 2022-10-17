const PostSummary = (posts) =>{

    return(`
        <div class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img src="${posts.image}" class="wd-rounded-images" width="50px" height="50px">
                </div>
                <div class="col-10">
                    <span class="wd-font-color">${posts.username}</span>
                    <i class="fa fa-circle-check fa-inverse"></i><br>
                    <span class="wd-gray-color">${posts.handle}&nbsp;.&nbsp;${posts.timeframe}</span><br>
                    <span class="wd-font-color">${posts.content}</span>
                    <div class="card wd-card-bg ${posts.cardTitle?'wd-card-border':''}" id="c1">
                      <img src="${posts.cardImage}" class="card-img-top m-0" alt="..." style="border-radius: 0px">
                      ${posts.cardTitle?`
                      <div class="card-body ${posts.cardTitle?'wd-card-title-border':''}" id="c2">
                          <h5 class="card-title wd-font-color ">${posts.cardTitle}</h5>
                          <p class="card-text wd-gray-color">${posts.cardBody}</p>
                      </div>`:''}
                    </div>
                    <div class="row wd-icons">
                    <div class="col-3">
                <i class='far fa-comment wd-gray-color'>&nbsp;${posts.commentNumber}</i>
            </div>
            <div class="col-3">
                <i class='fa fa-share-alt wd-gray-color'>&nbsp;${posts.shareNumber}</i>
            </div>
            <div class="col-3">
                <i class='fa fa-heart wd-gray-color'>&nbsp;${posts.heartNumber}</i>
            </div>
            <div class="col-3">
                <i class='fa fa-download wd-gray-color'></i>
            </div>
            </div>
                </div>
            </div>
        </div>
    `);
}

export default PostSummary;