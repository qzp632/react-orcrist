import React, {Component} from 'react';
import {hoverMsg, initMsg} from './action';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import '../../css/common.less'
import './style.less';

class Table extends Component {
  static propTypes = {
    list: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      hover: React.PropTypes.bool.isRequired
    }).isRequired).isRequired,
    clickHoverHandler: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    //this.clickHoverHandler = this.clickHoverHandler.bind(this);
  }

  componentWillMount() {

  }

  render() {
    let {list, clickHoverHandler} = this.props;
    return (
      <table className="table-article">
        <thead>
        <tr>
          <th className="th-name">Name</th>
          <th className="th-text">Text</th>
        </tr>
        </thead>
        <tbody>
        {
          list.map((item, idx) => {
            return (<Trlist item={item} key={idx} clickHandler={clickHoverHandler}></Trlist>)
          })
        }
        </tbody>
      </table>
    )
  }
}

class Trlist extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let {item, clickHandler} = this.props;
    return (
      <tr className={item.hover ? 'table-item active' : 'table-item'} key={item.id} data-id={item.id} onClick={()=> {
        clickHandler(item.id);
      }}>
        <td>{item.name}</td>
        <td>{item.text}</td>
      </tr>
    )
  }
}

const getAllList = (list) => {
  return list;
};

const getAll = (state) => ({
  list: getAllList(state.tableReducer.list)
});

const getClickHoverHandler = (dispatch) => ({
  clickHoverHandler: bindActionCreators(hoverMsg, dispatch)
});

const TableInitList = connect(
  getAll,
  getClickHoverHandler
)(Table);

export default TableInitList;

