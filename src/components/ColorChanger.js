import React from 'react';

export default function ColorChanger(props) {
  return (
    <select className="dropDownContainer" value={props.fontColor} onChange={e => props.updateColor(e.target.value)}>
      <option value="black"> Black </option>
      <option value="blue"> Blue </option>
      <option value="green"> Green </option>
    </select>
  )
}