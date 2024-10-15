// SearchableSingleSelect.stories.jsx
import React, { useState } from 'react';
import SelectField from './SearchableSingleSelect';
import './SearchableSingleSelect.css';

export default {
  title: 'Components/SelectField',
  component: SelectField,
  tags: ['autodocs'],
};

const Template = (args) => {
  const [value, setValue] = useState(args.value);
  const handleChange = (event) => setValue(event.target.value);

  return <SelectField {...args} value={value} onChange={handleChange} />;
};

// 1. Basic Select
export const Basic = Template.bind({});
Basic.args = {
  label: 'Select one or more options',
  value: '',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
};

// 2. Multi-Select
export const MultiSelect = Template.bind({});
MultiSelect.args = {
  label: 'Choose multiple options:',
  value: [],
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
  multiple: true,
};

// 3. Select with Disabled Option
export const WithDisabledOption = Template.bind({});
WithDisabledOption.args = {
  label: 'Choose an option:',
  value: '',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2 (Disabled)', value: '2', disabled: true },
    { label: 'Option 3', value: '3' },
  ],
};

// 4. Select with Placeholder
export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  label: 'Choose an option:',
  value: '',
  placeholder: 'Select an option',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
};

// 5. Grouped Options
export const GroupedOptions = Template.bind({});
GroupedOptions.args = {
  label: 'Choose an option:',
  value: '',
  options: [
    {
      group: 'Group 1',
      options: [
        { label: 'Option 1.1', value: '1.1' },
        { label: 'Option 1.2', value: '1.2' },
      ],
    },
    {
      group: 'Group 2',
      options: [
        { label: 'Option 2.1', value: '2.1' },
        { label: 'Option 2.2', value: '2.2' },
      ],
    },
  ],
};

// 6. Disabled Select
export const DisabledSelect = Template.bind({});
DisabledSelect.args = {
  label: 'Disabled Select:',
  value: '',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
  disabled: true,
};
