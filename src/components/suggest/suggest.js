import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './suggest.css';
import MenuList from '../menuList/menuList';

class Suggest extends Component {
  render() {
    return (
      <div className="suggest" ref="suggest">
        <input
          className="input suggest-input"
          type="text"
          value={this.props.value}
          onChange={event =>
            this.props.onChange(event, {
              queryParam: this.props.queryParam,
              resultTransformer: this.props.resultTransformer,
              url: this.props.url
            })
          }
        />
        <div className={`suggest-box ${this.props.showBox ? 'shown' : ''}`}>
          <MenuList
            menu={this.props.result}
            onItemClick={this.props.onResultClick}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.onClickOutCallback = event => {
      if (!this.refs.suggest.contains(event.target)) {
        this.props.onClickOut();
      }
    };

    document.addEventListener('click', this.onClickOutCallback);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClickOutCallback);
  }
}

Suggest.propTypes = {
  onResultClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onClickOut: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  result: PropTypes.array.isRequired,
  showBox: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  queryParam: PropTypes.string.isRequired,
  resultTransformer: PropTypes.func.isRequired
};

export default Suggest;
