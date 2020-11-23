import React from 'react';
import styles from './Forum.module.css';
import {useState} from 'react';

export function ForumPage(props) {
    let posts;
    const [post, setPost] = useState("");

    function submit(e) {
        if(typeof props.forum === 'function') {
            props.forum(post);
        }
        console.log(post);
        e.preventDefault();
    }


    
    return (
        
            <section>

            <div className={styles.container} id="header">
                <div class={styles.level}>
                        <div id="header-title" class="title has-text-weight-bold"> Forum Page! </div>
                        <button className={styles.button} id="make" class="write" type="write" >Make a Post!</button>        
                </div>
            </div>
            <form onSubmit={submit}>
            <div className="field has-addons">
                
                <p className="control">
                    <input className={`input ${styles['input-control']}`}
                           onChange={(e) => setPost(e.target.value)}
                           type="text"
                           value={post}
                           placeholder="write post here"
                    />
                </p>
                </div>

            </form>
    </section>


    );
}

/*
let tweets;

export function renderHeader() {
  return(`<div class="container"id = "header">
  
  <div class="level"  style="background-color: lightskyblue;" style="border: black;">
  <p class=" tweet image is-64x64">
          <img class="tweetpic" src="tweet.jpg"></p>
  <div id="header-title" class="title has-text-weight-bold"> COMP 426 Twitter  </div>  
  <button class="button" id ="make" class="write" type="write" >Make a Tweet!</button>        
</div>
</div> `);
};  


export function renderTweetCard(tweet) {
  //console.log(tweet)
    return (`  
  <div class = "box twitter-card" id="${tweet.id}">
  <article class="media" style="background-color: lightgrey;">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="propic.jpg">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p id="body-${tweet.id}"> 
            <strong>${tweet.author}</strong> <small>@----</small> <small>${tweet.author}</small>
            <strong id="numlikes-${tweet.id}"style="float: right; margin-right: 100px;">Likes: ${tweet.likeCount} </strong>
            <strong id="numrts-${tweet.id}" style="float: right; margin-right: 100px;">Retweets: ${tweet.retweetCount} </strong>
            <br>
            ${tweet.body}
          </p>
        </div>        
      </div>
      <div class="media-right">
          <button class=" likebutton button is-info" id="likebutton-${tweet.id}" type="likebutton" name = "${tweet.id}" value="Edit">Like</button>
          <button  class="rtbutton button is-info" id="rtbutton-${tweet.id}" type="retweet" name = "${tweet.id}"value="Edit">Retweet</button>
          <button class=" replybutton button is-info" id="replybutton-${tweet.id}" type="reply"name = "${tweet.id}" value="Edit">Reply</button>
      </div>
    </article>
  </div>  
  `);
};

export function renderMyTweetCard(tweet) {
  //console.log(tweet)
    return (`  
  <div class = "box twitter-card" id="${tweet.id}">
  <article class="media" style="background-color: lightgrey;">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="propic.jpg">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p id="body-${tweet.id}"> 
            <strong>${tweet.author}</strong> <small>@----</small> <small>${tweet.author}</small>
            <strong id="numlikes-${tweet.id}" style="float: right; margin-right: 100px;">Likes: ${tweet.likeCount} </strong>
            <strong id ="numrts-${tweet.id}" style="float: right; margin-right: 100px;">Retweets: ${tweet.retweetCount} </strong>
            <br>
            ${tweet.body}
          </p>
        </div>        
      </div>
      <div class="media-right">
          <button  class="rtbutton button is-info" id="rtbutton-${tweet.id}" type="retweet" name = "${tweet.id}" value="Edit">Retweet</button>
          <button class=" replybutton button is-info" id="replybutton-${tweet.id}" type="reply"name = "${tweet.id}" value="Edit">Reply</button>
          <button class="editbutton button is-warning" id="editbutton-${tweet.id}" type="edit" name = "${tweet.id}"value="Edit">Edit</button>
          <button class="deletebutton button is-danger is-outlined"  id="deletebutton-${tweet.id}"type="delete" name = "${tweet.id}">Delete</button>
      </div>
    </article>
  </div>  
  `);
};

export function renderFullRetweetCard() {

}



export function renderNewTweet() {
  console.log('hello')
  return (
    `<div id="newtweetform" class="level">
    <div class="control">
    <textarea maxlength="280" class="textarea is-focused" id="thetweet" placeholder="tweet here"></textarea>

  </div>
  <div class="control">
  <button class="button is-primary" id="posttweet">Post!</button>
  </div>
</div>`
  )
  };

  export function renderEditTweet(tweet) {
    console.log('hello')
    return (
      `<div class="level" id="editform">
      <div class="control">
      <textarea maxlength="280" class="textarea is-focused" id="editedtweet" name="${tweet.id}">${tweet.body}</textarea>  
    </div>
    <div class="control">
    <button class="postedit button is-primary" name="${tweet.id}"id="edittweet-${tweet.id}">Update!</button>
    </div>
  </div>`
    )
    };
export function renderLikedTweet(tweet) {
      console.log('hi')
      return (
        `<button class=" likedbutton button is-success" id="likedbutton-${tweet.id}" type="liked" name="${tweet.id}" value="Edit">Liked</button>`
      )
      };
      
export function renderUnlikedTweet(tweet) {
  return(`<button class=" likebutton button is-info" id="likebutton-${tweet.id}" 
  type="likebutton" name = "${tweet.id}" value="Edit">Like</button> `)
};
      
export function renderRetweet(tweet) {
  if(tweet.parent == undefined) {
    return(`<p class="deletedretweet"> RETWEET: this tweet has been deleted </p>`)
  }
  return(`
  <p class="retweetmsg"id="retweeted-${tweet.id}" type="rt" name="${tweet.id}" value="Edit"> RETWEET</p>
          <div class="box">
        <div class="media-content">
          <div class="content">
            <p id="body-${tweet.id}"> 
              <strong>${tweet.author}</strong> <small>@----</small> <small>${tweet.parent.author}</small>
              <strong style="float: right; margin-right: 100px;">Likes: ${tweet.parent.likeCount} </strong>
              <strong style="float: right; margin-right: 100px;">Retweets: ${tweet.parent.retweetCount} </strong>
              <br>
              ${tweet.parent.body}
            </p>
          </div>        
        </div>
        </div>`

      )
} ;    
      
export function renderRetweetForm(id) {
  return (
    `<div id="rtform" class="level">
    <div class="control">
    <textarea maxlength="280" class="textarea is-focused" id="theretweetmessage" placeholder="retweet message here" name="${id}"></textarea>

  </div>
  <div class="control">
  <button class="postretweetbutton button is-primary" id="postretweet">Retweet!</button>
  </div>
</div>`
  )
}  

export function renderUpdatedTweet(tweet) {
  return (`<p id="body-${tweet.id}">
  <strong>${tweet.author}</strong> <small>@----</small> <small>${tweet.author}</small>
  <strong style="float: right; margin-right: 100px;">Likes: ${tweet.likeCount} </strong>
  <strong style="float: right; margin-right: 100px;">Retweets: ${tweet.retweetCount} </strong>
  <br>
  ${tweet.body}
</p> `
  )
}

export function renderReplyForm(id) {
  console.log('hello')
  console.log(id)
    return (
      `<div id="replyform" class="level">
      <div class="control">
      <textarea maxlength="280" class="textarea is-focused" id="thereply" placeholder="reply here" name="${id}"></textarea>
  
    </div>
    <div class="control">
    <button class="postreply button is-primary" id="postreply">Reply!</button>
    </div>
  </div>`
    )
}; 

//EVENT HANDLERS

export const handleMakeTweetButtonPress = function(event) {
  $("#header").append(renderNewTweet());

};

export const handlePostTweetButtonPress = async function(event) {
  var actualTweet = document.getElementById("thetweet").value;
  let make = await makeTweet(actualTweet);
  console.log('hello')
  $("#newtweetform").remove()
 $("#alltweets").empty()
  tweets = await getTweets();
  loadTweetsIntoDOM(tweets);
  console.log(tweets)
  $("#header").replaceWith(renderHeader()); 

};

export const handleEditButtonPress = async function(event) {
  // EDIT A TWEET   
  const $edittweetcard = $(event.target).closest('.twitter-card');
  console.log($edittweetcard)
  const tweetID = event.currentTarget.name;
  console.log(tweetID)
  let editmessage;
  tweets = await getTweets()
  for(let i = 0; i<tweets.length; i++) {
    if (tweetID == tweets[i].id) {
      editmessage = tweets[i].body;
      console.log(editmessage)
      console.log(tweets[i])
      $("#"+tweetID).append(renderEditTweet(tweets[i]));
     
    }
  }
  


//check if already liked
};

export const handlePostEditButtonPress = async function(event) {
  // POST EDIT 
  const $edittweetcard = $(event.target).closest('.twitter-card');
  const tweetID = event.currentTarget.name;
  console.log(tweetID)
  var actualEdit = document.getElementById("editedtweet").value;  
  console.log(actualEdit); 
  let updateURL = "https://comp426-1fa20.cs.unc.edu/a09/tweets/" + tweetID
  console.log(updateURL)
  let updated = await updateTweet(updateURL, actualEdit);
  $("#editform").remove()
  $("#body-"+ tweetID).replaceWith(renderUpdatedTweet(updated))

};

export const handleUnlikeButtonPress = async function(event){
  const tweetID = event.currentTarget.name;
  console.log(tweetID)
  let unlikeURL = 'https://comp426-1fa20.cs.unc.edu/a09/tweets/' +tweetID+ '/unlike'
  let unliked = await unlikeTweet(unlikeURL);
  for(let i = 0; i<tweets.length; i++) {
    if (tweetID == tweets[i].id) {
      tweets[i].likeCount = tweets[i].likeCount-1;
      tweets[i].isLiked == false;
      console.log(tweets[i])
      $('#'+tweetID).replaceWith(renderTweetCard(tweets[i]))
      console.log(tweetID)
      $('#likedbutton-'+tweetID).replaceWith(renderUnlikedTweet(tweets[i]))
    }
  }


}


export const handleLikeButtonPress =  async function(event) {
  // LIKE A TWEET
  try { 
  const $liketweetcard = $(event.target).closest('.twitter-card');
  console.log($liketweetcard)
  const tweetID = event.currentTarget.name; 
  console.log(tweetID)
  let likeURL = "https://comp426-1fa20.cs.unc.edu/a09/tweets/" + tweetID + "/like"
  console.log(likeURL)
  likeTweet(likeURL);
  let likedTweet = await likeTweet(likeURL);
  for(let i = 0; i<tweets.length; i++) {
    if (tweetID == tweets[i].id) {
      tweets[i].likeCount = tweets[i].likeCount+1;
      tweets[i].isLiked == true;
      console.log(tweets[i])
      //$('#body-'+tweetID).replaceWith(renderTweetCard(tweets[i]))
      $('#numlikes-'+tweetID).replaceWith(`<strong id="numlikes" style="float: right; 
      margin-right: 100px;">Likes: ${tweets[i].likeCount} </strong>
      `)
      console.log(tweetID)
      $('#likebutton-'+tweetID).replaceWith(renderLikedTweet(tweets[i]))
    }
  }
} catch(error){
  //$('#body-'+tweetID).replaceWith(`<p> This tweet has been deleted. Please refresh the page.</p>`)
  console.log(error)
}

 
//replace tweet div with update

//check if already liked
};


export const handleRetweetButtonPress = async function(event) {

  const $rttweetcard = $(event.target).closest('.twitter-card');
  console.log($rttweetcard)
  const parentID = $rttweetcard.attr('id');
  console.log(parentID)
  $("#"+parentID).append(renderRetweetForm(parentID));
}

// RETWEET 
export const handlePostRetweetButtonPress = async function(event) {
  const $rttweetcard = $(event.target).closest('.twitter-card');
  const tweetID = $rttweetcard.attr('id');
  var rtMessage = document.getElementById("theretweetmessage").value;
  console.log(rtMessage)
//console.log(rtURL);

  let retweeted = await retweetTweet(tweetID, rtMessage)
  console.log(retweeted)
  retweeted.retweetCount= retweeted.retweetCount+1;
  retweeted.isRetweeted == true;
  $('#alltweets').prepend(renderMyTweetCard(retweeted))
  $('#body-'+retweeted.id).append(renderRetweet(retweeted))
 
  $('#rtform').remove()
 
};



//check if already liked


export const handleReplyButtonPress = function(event) {
  //REPLY TO A TWEET
const $replytweetcard = $(event.target).closest('.twitter-card');
console.log($replytweetcard)
const parentID = $replytweetcard.attr('id');
console.log(parentID)
$("#"+parentID).append(renderReplyForm(parentID));
};

export const handlePostReplyButtonPress = async function(event) {
  //POST REPLY 
  const $replytweetcard = $(event.target).closest('.twitter-card');
  var actualReply = document.getElementById("thereply").value;
  const parentID = $replytweetcard.attr('id');
  var parent = document.getElementById("thereply").name;
  console.log(parentID);
  console.log(actualReply);
  let replyURL = 'https://comp426-1fa20.cs.unc.edu/a09/tweets'
  let replied = await replyToTweet(parentID, replyURL, actualReply);
  $("#replyform").remove()


};

export const handleDeleteButtonPress = async function(event) {
  //REPLY TO A TWEET
const $deletetweetcard = $(event.target).closest('.twitter-card');
console.log($deletetweetcard)
const tweetID = $deletetweetcard.attr('id');
console.log(tweetID)
$deletetweetcard.remove()
let deleted = await deleteTweet(tweetID);

};



export const loadHeaderIntodom = function() {
  const $root = $('#root');
  $root.append(renderHeader());
  $('.like').on("click", handleLikeButtonPress);
  $root.on("click", ".rtbutton", handleRetweetButtonPress);
  $root.on("click", ".postretweetbutton", handlePostRetweetButtonPress);
  $root.on("click", ".likebutton", handleLikeButtonPress);
  $root.on("click", ".replybutton", handleReplyButtonPress);
  $root.on("click", "#make", handleMakeTweetButtonPress);
  $root.on("click", ".editbutton", handleEditButtonPress);
  $root.on("click", "#posttweet", handlePostTweetButtonPress);
  $root.on("click", ".postreply", handlePostReplyButtonPress);
  $root.on("click", ".postedit", handlePostEditButtonPress);
  $root.on("click", ".deletebutton", handleDeleteButtonPress);
  $root.on("click", ".likedbutton", handleUnlikeButtonPress);

}


export const loadTweetsIntoDOM = function(tweets) {  
  $(root).append(`<div id="alltweets"></div>`)
  //console.log(tweets.length)
   for (let i = 0; i < tweets.length; i++) {  
    if(tweets[i].isMine == true) {
      $("#alltweets").append(renderMyTweetCard(tweets[i]))
      if(tweets[i].type == "retweet") {
        $('#body-'+tweets[i].id).append(renderRetweet(tweets[i]))
      }
    } else {
      if(tweets[i].type == "tweet"){
        $("#alltweets").append(renderTweetCard(tweets[i]))
      }
      else if(tweets[i].type == "retweet") {
        $("#alltweets").append(renderTweetCard(tweets[i]))
        $('#body-'+tweets[i].id).append(renderRetweet(tweets[i]))
      }
      if(tweets[i].isLiked == true){
        $('#likebutton-'+tweets[i].id).replaceWith(renderLikedTweet(tweets[i]))
      } 
       
    }          
  } 
  


  //console.log('hello')


};



$( async function() {
  loadHeaderIntodom()
  tweets = await getTweets();
  loadTweetsIntoDOM(tweets);
});





// API CALLS
export async function makeTweet(body) {
  const result = await axios({
    method: 'post',
    url: 'https://comp426-1fa20.cs.unc.edu/a09/tweets',
    withCredentials: true,
    data: {
      body: body
    },
  });

};

export async function updateTweet(url, body) {
  const result = await axios({
    method: 'put',
    url: url,
    withCredentials: true,
    data: {
      body: body
    },
  });
  return result.data

};


export async function likeTweet(url) {
  const result = await axios({
    method: 'put',
    url: url,
    withCredentials: true,
  })
};


export async function replyToTweet(parentID, url, actualReply) {  
  const result = await axios({
    method: 'post',
    url: url,
    withCredentials: true,
    data: {
      "type": "reply",
      "parent": parentID,
      "body": actualReply
    }  
  });
};

export async function getTweets() {
  const result = await axios({
      method: 'get',
      url: 'https://comp426-1fa20.cs.unc.edu/a09/tweets',
      withCredentials: true,
    });
    //console.log(result.data)
  return result.data;
 

};

export async function retweetTweet(parent, body) {
  const result = await axios({
    method: 'post',
    url: 'https://comp426-1fa20.cs.unc.edu/a09/tweets',
    withCredentials: true,
    data: {
      "type": "retweet",
      "parent": parent,
      "body": body
    },
  });
  return result.data
}

export async function deleteTweet(id) {
  const result = await axios({
    method: 'delete',
    url: 'https://comp426-1fa20.cs.unc.edu/a09/tweets/'+id,
    withCredentials: true,
  });
}

export async function unlikeTweet(url){
  const result = await axios({
    method: 'put',
    url: url,
    withCredentials: true,
  });
}


*/
