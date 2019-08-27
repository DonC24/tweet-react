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
        return `${date} ${month}`
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
        return (
          <div>
              <p><img src={`${this.props.profileimg}`} />{this.props.user.name} @{this.props.user.screen_name} &#183; {time} </p>
              <p>{this.props.content} </p>
          </div>

        );
    }
}

class Tweets extends React.Component {

    render() {
        let itemsElements = this.props.tweets.map( (tweet, index) => {
                              return <ListItem user={tweet.user} date={tweet.created_at} content={tweet.text} link={tweet.entities.urls[0]} profileimg = {tweet.user.profile_image_url_https} key={index}></ListItem>;
                            });
        return (
          <div>
            {itemsElements}
          </div>
        );
    }
}

ReactDOM.render(
    <Tweets tweets={tweets} />,
    document.getElementById('root')
);