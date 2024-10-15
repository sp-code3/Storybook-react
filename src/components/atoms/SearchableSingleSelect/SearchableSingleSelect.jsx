// SelectField.jsx
import React from 'react';
import './SearchableSingleSelect.css';

const SelectField = ({
  label,
  options,
  value,
  onChange,
  multiple,
  placeholder,
  disabled,
}) => {
  return (
    <div className="select-container">
      <label className="select-label">{label}</label>
      <select
        className={`select-field ${multiple ? 'select-multiple' : ''}`}
        value={value}
        onChange={onChange}
        multiple={multiple}
        disabled={disabled}
      >
        {placeholder && !multiple && (
          <option className="select-placeholder" value="">
            {placeholder}
          </option>
        )}
        {options.map((option) =>
          option.group ? (
            <optgroup label={option.group} key={option.group}>
              {option.options.map((subOption) => (
                <option key={subOption.value} value={subOption.value}>
                  {subOption.label}
                </option>
              ))}
            </optgroup>
          ) : (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          )
        )}
      </select>
    </div>
  );
};

export default SelectField;
