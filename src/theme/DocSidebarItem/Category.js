import React from 'react';
import OriginalCategory from '@theme-original/DocSidebarItem/Category';
import { FaBook, FaCloud, FaShieldAlt, FaToolbox } from 'react-icons/fa';

const iconMap = { 
  'Infrastructure As Code (IAC)': <FaToolbox style={{ marginRight: '0.5rem' }} />,
  'Cloud Providers': <FaCloud style={{ marginRight: '0.5rem' }} />,
};

export default function CategoryWithIcons(props) {
  const { label } = props.item;
  const icon = iconMap[label];

  return (
    <OriginalCategory
      {...props}
      item={{
        ...props.item,
        label: icon ? (
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {icon}
            {label}
          </span>
        ) : (
          label
        ),
      }}
    />
  );
}
