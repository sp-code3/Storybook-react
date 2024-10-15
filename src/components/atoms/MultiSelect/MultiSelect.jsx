import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MultiSelect.css';
import info from '../../../assets/info.svg';

/** MultiSelect UI component for user interaction */
export const MultiSelect = ({
  headingSize,
  infoFilled,
  infoIcon,
  searchEnabled,
  searchState,
  searchPlaceholder,
  checkboxes,
  buttonTypes,
  buttonSize,
  buttonLabel,
  iconStart,
  iconEnd,
  iconBefore,
  iconAfter,
  variableModes,
  colorPrimitive,
  textColor,
  ...props
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((o) => o !== option)
        : [...prevSelected, option]
    );
  };

  const filteredOptions = checkboxes.filter((option) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="multi-select" style={{ borderColor: colorPrimitive }}>
      <div className="header">
        <h3 className={`heading ${headingSize}`} style={{ color: textColor }}> {/* Apply text color */}
          Select Options
        </h3>
        {infoFilled && <span className="info-icon">
          <img src={infoIcon} alt="info" className="info-img" /> {/* Correct rendering of info icon */}
        </span>}
      </div>
      {searchEnabled && (
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={searchPlaceholder}
          className="search-input"
          disabled={searchState === 'disabled'}
        />
      )}
      <div className="checkboxes">
        {filteredOptions.map((option, index) => (
          <label key={index} className="checkbox-label" style={{ color: textColor }}> {/* Apply text color */}
            <input
              type="checkbox"
              checked={selectedOptions.includes(option.value)}
              onChange={() => handleCheckboxChange(option.value)}
            />
            {option.avatar && <img src={option.avatar} alt="avatar" className="checkbox-avatar" />} {/* Avatar */}
            {option.label}
          </label>
        ))}
      </div>
      <div className={`button ${buttonSize}`}>
        {iconStart && <span className="icon-start">{iconStart}</span>}
        <button className={`button-type ${buttonTypes}`}>
          {iconBefore && <span className="icon-before">{iconBefore}</span>} {/* Icon Before Text */}
          {buttonLabel}
          {iconAfter && <span className="icon-after">{iconAfter}</span>}  {/* Icon After Text */}
        </button>
        {iconEnd && <span className="icon-end">{iconEnd}</span>}
      </div>
    </div>
  );
};

MultiSelect.propTypes = {
  headingSize: PropTypes.oneOf(['small', 'medium', 'large']),
  infoFilled: PropTypes.bool,
  infoIcon: PropTypes.node,
  searchEnabled: PropTypes.bool,
  searchState: PropTypes.oneOf(['enabled', 'disabled']),
  searchPlaceholder: PropTypes.string,
  checkboxes: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    avatar: PropTypes.string,  // Optional avatar field
  })),
  buttonTypes: PropTypes.oneOf(['filled', 'stroke', 'text']),
  buttonSize: PropTypes.oneOf(['small', 'medium', 'large']),
  buttonLabel: PropTypes.string,
  iconStart: PropTypes.node,  
  iconEnd: PropTypes.node,    
  iconBefore: PropTypes.node, 
  iconAfter: PropTypes.node,  
  variableModes: PropTypes.shape({
    colorPrimitive: PropTypes.string,
  }),
  colorPrimitive: PropTypes.string,
  textColor: PropTypes.string, 
};

MultiSelect.defaultProps = {
  headingSize: 'medium',
  infoFilled: true,
  infoIcon: info,  // Correctly imported image file
  searchEnabled: true,
  searchState: 'enabled',
  searchPlaceholder: 'Search...',
  checkboxes: [
    { label: 'Option 1', value: '1', avatar: '' },
    { label: 'Option 2', value: '2', avatar: '' },
  ],
  buttonTypes: 'filled',
  buttonSize: 'medium',
  buttonLabel: 'Submit',
  iconStart: null,  
  iconEnd: null,    
  iconBefore: null, 
  iconAfter: null,  
  variableModes: {
    colorPrimitive: '#007bff',
  },
  colorPrimitive: '#007bff',
  textColor: '#828285', 
};
