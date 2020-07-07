import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: "Off",
      style: "red",
      img: null
    };
  }

  // obj = {
  //   count: 1,
  //   b: [2, 3, 4],
  // };



  on = () => {
    if(this.state.count == "On" && this.state.img !==null){
    this.setState({
      count: "Off",
      style: "red",
      img: null
       });
  }else {
      this.setState({
        count: "On",
          style: "green",
        img: "https://i.ya-webdesign.com/images/loading-gif-png-5.gif"
      });
    }};

  render() {
    const { num } = this.props;
    return (
<>
        <button onClick={this.on} className={this.state.style}>{this.state.count}</button>
  <img src={this.state.img}/>
</>
    );
  }
}

// const increment = (event) => {
//   count++
// }

// elem.addeventlistener("click", increment)

export default Counter;
