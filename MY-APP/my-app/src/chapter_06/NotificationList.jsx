import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
    id: 1,
    message: "안녕하세요, 오늘 일정을 알려드립니다.",
  },
  {
    id: 2,
    message: "점심식사 시간입니다.",
  },
  {
    id: 3,
    message: "이제 곧 미팅이 시작됩니다.",
  },
];

var timer;

// notification 컴포넌트를 목록 형태로 보여주기 위한 컴포넌트
class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //notifications라는 이름의 빈 배열을 state에 넣은 것
      notifications: [], //생성자에서는 앞으로 사용할 데이터를 state에 넣어서 초기화함
    };
  }

  componentDidMount() {
    //생명주기 함수
    //알림데이터 배열 (reserved notifications)로 부터 알림 데이터를 하나씩 가져와서 state에 있는 notifications배열에 넣고 업데이트 하는 것
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({
          //state 업데이트 위해서 setState 함수 사용
          notifications: notifications,
        });
      } else {
        clearInterval(timer);
      }
    }, 1000); //1(1000ms)초 마다 정해진 작업 수행
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return {
            <Notification message={notification.message} />
          };
        })}
      </div>
    );
  }
}

export default NotificationList;
