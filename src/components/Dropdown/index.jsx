import React from 'react';
import createBemClass from 'react-bem-builder';

const cn = createBemClass('dropdown');

function Dropdown(props) {
  const {
    disabled,
    name,
    options,
  } = props;

  const defaultOption = options.find((option) => option.selected === true) || {};

  const [focused, setFocused] = React.useState(false);
  const [value, setValue] = React.useState(defaultOption.value);

  return (
    <select
      className={cn('', { focused })}
      disabled={disabled}
      id={name}
      name={name}
      onBlur={() => setFocused(false)}
      onChange={({ target }) => setValue(target.value)}
      onFocus={() => setFocused(true)}
      value={value}
    >
      {options.map((option) => (
        <option
          key={`dropdown-${option.value}`}
          value={option.value}
          disabled={option.disabled}
        >
          {option.label || option.value}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
