import React from 'react';
import OriginalLink from '@theme-original/DocSidebarItem/Link';
import {
  FaBook,
  FaTools,
  FaServer,
  FaCloud,
  FaLock,
  FaHeadset,
  FaPaperclip,
  FaQuestionCircle,
} from 'react-icons/fa';

const iconMap = {
 
  'DevOps Foundations': <FaTools style={{ marginRight: '0.5rem' }} />,
   'Getting Started': <FaBook style={{ marginRight: '0.5rem' }} />,
  'Security': <FaLock style={{ marginRight: '0.5rem' }} />,
  'Support': <FaHeadset style={{ marginRight: '0.5rem' }} />,
  'Appendices': <FaPaperclip style={{ marginRight: '0.5rem' }} />,
  'Need Help': <FaQuestionCircle style={{ marginRight: '0.5rem' }} />,
};

export default function DocSidebarItemLink(props) {
  const label = props.item.label;
  const icon = iconMap[label];

  return (
    <OriginalLink
      {...props}
      item={{
        ...props.item,
        label: (
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {icon}
            {label}
          </span>
        ),
      }}
    />
  );
}
