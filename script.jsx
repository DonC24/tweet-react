/*var monkey = "hello";
ReactDOM.render(
    <div>
      {monkey}
    </div>,
    document.getElementById('root')
);*/
let timeConverted = function(time) {
    let sometime = new Date(time)
    console.log(sometime)
    var day, hour, minute, seconds;
    seconds = Math.floor(time / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    let date = sometime.getDate();
    let monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let month = monthArray[sometime.getMonth()]
    if (day > 0) {
        return "biggerthan1"
    } else {
        if (hour > 0) {
            return `${hour} hours ago`;
        } else {
            return `${minute} mins ago`;
        }
    }
}

class ListItem extends React.Component {

    render() {
        console.log(this.props.link)
        let now = new Date();
        let parseddate = Date.parse(this.props.date);
        console.log(parseddate);
        let parsednow = Date.parse(now);
        let durfrom = parsednow - parseddate;
        console.log(durfrom);
        let time = timeConverted(durfrom);
        if (time === "biggerthan1"){
            time = this.props.date;
        }

        let profileurl = `www.twitter.com/${this.props.user.screen_name}`
        return (
          <div>
              <img class="rounded-circle" src={`${this.props.profileimg}`} />{this.props.user.name} <a href={profileurl}>@{this.props.user.screen_name}</a> &#183; {time}
          </div>

        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <p>{this.props.content} </p>
        );
    }
}

class Tweets extends React.Component {

    render() {
        let itemsElements = this.props.tweets.map( (tweet, index) => {
            return(
                    <div class="row justify-content-center">
                        <div class="col-6">
                          <ListItem user={tweet.user} date={tweet.created_at} profileimg = {tweet.user.profile_image_url_https} key={index}></ListItem>
                          <Content content={tweet.text} link={tweet.entities.urls[0]} ></Content>
                          </div>
                    </div>
            )
        });
    return (
        <div class="container">{itemsElements}</div>
        )
    }
}

ReactDOM.render(
    <Tweets tweets={tweets} />,
    document.getElementById('root')
);