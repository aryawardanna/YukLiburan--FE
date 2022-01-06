import { useState, useRef, useEffect } from 'react';
import propTypes from 'prop-types';

import { DataRange } from 'react-date-range';

import './index.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import formatDate from 'utils/formatDate';
import iconCalender from 'assets/image/ic_calender';

export default function Date(props) {
  const { value, placeholder, name } = props;
  const [isShowed, setIsShowed] = useState(false);

  const datePickerChange = (value) => {
    const target = {
      target: {
        value: value.selection,
        name,
      },
    };
    props.onChange(target);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const refDate = useRef(null);
  const handleClickOutside = (event) => {
    if (refDate && !refDate.current.contains(event.target)) {
      setIsShowed(false);
    }
  };

  const check = (focus) => {
    focus.indexOf(1) < 0 && setIsShowed(false);
  };

  const displayDate = `${value.startDate ? formatDate(value.startDate) : ''}${
    value.endDate ? ' - ' + formatDate(value.endDate) : ''
  } `;

  return <div></div>;
}

Date.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
};
