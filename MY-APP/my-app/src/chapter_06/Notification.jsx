import React from "react";

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  messageText: {
    color: "black",
    fontSize: 16,
  },
};

class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}; // state에 아무런 데이터도 가지고 있지 않음
  }

  componentDidMount() {
    console.log("this.componentDidMount() called");
    console.log(`${this.props.id} componentDidMount() called. `);
    //컴포넌트가 마운트된 후
  }
  componentDidUpdate() {
    console.log("this.componentDidUpdate() called");
    console.log(`${this.props.id} componentDidUpdate() called. `);
    //컴포넌트가 업데이트된 후
  }
  componentWillUnmount() {
    console.log("this.componentWillUnmount() called");
    console.log(`${this.props.id} componentWillUnmout() called. `);
    //컴포넌트 종료된 후
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.messageText}>{this.props.message}</span>
      </div>
    );
  }
}

export default Notification;
