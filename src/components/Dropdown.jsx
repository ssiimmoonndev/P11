import React, { useState } from 'react';
import arrowBack from '../assets/arrow_back.svg';

export default function Dropdown({title, content}) {

  const [Open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen(!Open);
  }

  const containerClassName = `dropdown-container ${Open ? 'open' : ''}`;

  return (
    <div className={containerClassName}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        <p className="dropdown-title">{title}</p>
        <img src={arrowBack} alt="Ouvrir le menu" className="dropdown-icon" />
      </div>
      <div className="dropdown-content">
        <div className="dropdown-content-inner">
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}