import React, {Component, Fragment} from 'react';
import { CSSTransition } from 'react-transition-group';
// import './style.css';
import './csstransition.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      show: true
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  render() {
    return (
      <Fragment>
        {/* <div className={this.state.show ? 'show' : 'hide'}>hello</div> */}
        {/* 引入了cssTransition之后， 包裹住写成 */}
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='fade'
          unmountOnExit 
          // 隐藏之后dom被移除
          onEntered={(el)=> {el.style.color='red'}}
          //在入场动画结束之后 onEntered会被自动执行
          // el参数指的就是<div>hello</div>这个元素
          appear={true}
        >
          <div>hello</div>
        </CSSTransition>
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    )
  }

  handleToggle() {
    this.setState({
      show: this.state.show ? false : true
    })
  }
}

export default App;