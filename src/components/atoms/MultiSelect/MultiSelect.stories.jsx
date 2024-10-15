import React from 'react';
import { MultiSelect } from './MultiSelect';
import assetimg from '../../../assets/avatar.svg';
import info from '../../../assets/info.svg';

export default {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    headingSize: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      defaultValue: 'medium',
    },
    infoFilled: {
      control: 'boolean',
      defaultValue: true,
    },
    infoIcon: {
      control: 'text',
      defaultValue: info,
    },
    searchEnabled: {
      control: 'boolean',
      defaultValue: true,
    },
    searchState: {
      control: { type: 'select', options: ['enabled', 'disabled'] },
      defaultValue: 'enabled',
    },
    searchPlaceholder: {
      control: 'text',
      defaultValue: 'Search...',
    },
    checkboxes: {
      control: 'object',
      defaultValue: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
        { label: 'Option 4', value: '4' },
        { label: 'Option 5', value: '5' },
        { label: 'Option 6', value: '6' },
      ],
    },
    buttonTypes: {
      control: { type: 'select', options: ['filled', 'stroke'] },
      defaultValue: 'filled',
    },
    buttonSize: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      defaultValue: 'medium',
    },
    buttonLabel: {
      control: 'text',
      defaultValue: 'Submit',
    },
    iconStart: {
      control: 'text',  // Control for left icon
    },
    iconEnd: {
      control: 'text',  // Control for right icon
    },
    colorPrimitive: {
      control: 'color',
      defaultValue: '#007bff',
    },
    textColor: {
      control: 'color',  // Control for text color
      defaultValue: '#828285',
    },
  },
};

const Template = (args) => <MultiSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  headingSize: 'medium',
  infoFilled: true,
  infoIcon: info,
  searchEnabled: true,
  searchState: 'enabled',
  searchPlaceholder: 'Search...',
  checkboxes: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
    { label: 'Option 4', value: '4' },
    { label: 'Option 5', value: '5' },
    { label: 'Option 6', value: '6' },
  ],
  buttonTypes: 'filled',
  buttonSize: 'medium',
  buttonLabel: 'Submit',
  iconStart: '',
  iconEnd: '',
  colorPrimitive: '#e5e5e5',
  textColor: '#828285',
};
export const WithAvatars = Template.bind({});
WithAvatars.args = {
  headingSize: 'medium',
  infoFilled: true,
  infoIcon: info,
  searchEnabled: true,
  searchState: 'enabled',
  searchPlaceholder: 'Search...',
  checkboxes: [
    { label: 'John Doe', value: '1', avatar: assetimg },
    { label: 'Jane Smith', value: '2', avatar: assetimg },
  ],
  buttonTypes: 'filled',
  buttonSize: 'medium',
  buttonLabel: 'Submit',
  iconStart: null,
  iconEnd: null,
  colorPrimitive: '#007bff',
  textColor: '#828285',
};

export const NoSearchMultiSelect = Template.bind({});
NoSearchMultiSelect.args = {
  headingSize: 'medium',
  infoFilled: false,
  infoIcon: info,
  searchEnabled: false,  // No search field
  checkboxes: [
    { label: 'Option X', value: 'x' },
    { label: 'Option Y', value: 'y' },
  ],
  buttonTypes: 'filled',
  buttonSize: 'medium',
  buttonLabel: 'Done',
  iconStart: '',
  iconEnd: '✔️',  // Checkmark icon at the end
  colorPrimitive: '#dc3545',  // Red color
  textColor: '#000000',        // White text
};

export const DisabledSearch = Template.bind({});
DisabledSearch.args = {
  headingSize: 'medium',
  infoFilled: false,
  infoIcon: info,
  searchEnabled: true,
  searchState: 'disabled',  // Disabled search input
  searchPlaceholder: 'Search is disabled',
  checkboxes: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ],
  buttonTypes: 'stroke',
  buttonSize: 'medium',
  buttonLabel: 'Submit',
  iconStart: '',
  iconEnd: '',
  colorPrimitive: '#6c757d',  // Grey color for disabled state
  textColor: '#6c757d',
};


// export const SmallHeadingStrokeButton = Template.bind({});
// SmallHeadingStrokeButton.args = {
//   headingSize: 'small',
//   infoFilled: false,
//   infoIcon: info,
//   searchEnabled: true,
//   searchState: 'enabled',
//   searchPlaceholder: 'Search...',
//   checkboxes: [
//     { label: 'Option A', value: 'a' },
//     { label: 'Option B', value: 'b' },
//   ],
//   buttonTypes: 'stroke',
//   buttonSize: 'small',
//   buttonLabel: 'Apply',
//   iconStart: '',
//   iconEnd: '',
//   colorPrimitive: '#28a745',  // Green border
//   textColor: '#828285',        // Dark grey text
// };
// export const LargeHeadingWithIcons = Template.bind({});
// LargeHeadingWithIcons.args = {
//   headingSize: 'large',
//   infoFilled: true,
//   infoIcon: info,
//   searchEnabled: true,
//   searchState: 'enabled',
//   searchPlaceholder: 'Type to search...',
//   checkboxes: [
//     { label: 'Option 1', value: '1' },
//     { label: 'Option 2', value: '2' },
//   ],
//   buttonTypes: 'filled',
//   buttonSize: 'large',
//   buttonLabel: 'Submit',
//   iconStart: '🔍',  // Search icon
//   iconEnd: '➡️',    // Arrow icon
//   colorPrimitive: '#007bff',  // Default blue
//   textColor: '#828285',
// };
// export const DarkThemeMultiSelect = Template.bind({});
// DarkThemeMultiSelect.args = {
//   headingSize: 'medium',
//   infoFilled: true,
//   infoIcon: info,
//   searchEnabled: true,
//   searchState: 'enabled',
//   searchPlaceholder: 'Find options...',
//   checkboxes: [
//     { label: 'Dark Option 1', value: 'dark1' },
//     { label: 'Dark Option 2', value: 'dark2' },
//   ],
//   buttonTypes: 'filled',
//   buttonSize: 'medium',
//   buttonLabel: 'Confirm',
//   iconStart: '🔎',
//   iconEnd: '✔️',
//   colorPrimitive: '#343a40',  // Dark grey border
//   textColor: '#000000',        // White text
// };
// export const CustomColorLargeButton = Template.bind({});
// CustomColorLargeButton.args = {
//   headingSize: 'large',
//   infoFilled: true,
//   infoIcon: info,
//   searchEnabled: true,
//   searchState: 'enabled',
//   searchPlaceholder: 'Search...',
//   checkboxes: [
//     { label: 'Custom Option 1', value: 'custom1' },
//     { label: 'Custom Option 2', value: 'custom2' },
//   ],
//   buttonTypes: 'filled',
//   buttonSize: 'large',
//   buttonLabel: 'Proceed',
//   iconStart: '🚀',  // Rocket icon
//   iconEnd: '➡️',    // Arrow icon
//   colorPrimitive: '#ff5733',  // Custom orange border
//   textColor: '#0000ff',        // Blue text
// };

