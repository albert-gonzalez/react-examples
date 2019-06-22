import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './suggest.css';
import MenuList from '../menuList/menuList';

const Suggest = ({
  onClickOut,
  onChange,
  value,
  queryParam,
  resultTransformer,
  url,
  showBox,
  onResultClick,
  result
}) => {
  const [cancelToken, setCancelToken] = useState(null);
  const suggest = useRef(null);

  useEffect(() => {
    const onClickOutCallback = event => {
      if (!suggest.current.contains(event.target)) {
        onClickOut();
      }
    };

    document.addEventListener('click', onClickOutCallback);

    return () => document.removeEventListener('click', onClickOutCallback);
  }, [onClickOut]);

  return (
    <div className="suggest" ref={suggest}>
      <input
        className="input suggest-input"
        type="text"
        value={value}
        onChange={event =>
          onChange(event, {
            queryParam: queryParam,
            resultTransformer: resultTransformer,
            url: url,
            cancelToken,
            setCancelToken
          })
        }
      />
      <div className={`suggest-box ${showBox ? 'shown' : ''}`}>
        <MenuList menu={result} onItemClick={onResultClick} />
      </div>
    </div>
  );
};

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
