import React from 'react';
import PropTypes from 'prop-types';
import weaponData from './data/weapons.json'
import armorData from './data/armor.json'
import ringData from './data/rings.json'
import magicData from './data/magic.json'
import itemData from './data/items.json'

function HexDisplay(props) {
  return (
    <input className='hex-input' type='readonly' value={props.value} />
  );
}

class Search extends React.Component {
  dataList = {
    'Weapons' : weaponData,
    'Armor' : armorData,
    'Rings' : ringData,
    'Magic' : magicData,
    'Items' : itemData
  }

  render() {
    function genOptions(itemList) {
      var items =[];
      var item;
      for (item in itemList) {
        items.push(<option value={item}>{itemList[item].name}</option>)
      }
      return items
    }
    var item;
    var options = [];
    for (item in this.dataList) {
      options.push(<optgroup label={item}>{genOptions(this.dataList[item])}</optgroup>)
    }
    return (
      <select>
        {options}
      </select>
    )
  }
}

class Infusions extends React.Component {
  //TOOD: Create selector for Infusions
}

class App extends React.Component {
  render () {
    return (
      <Search />
    );
  }
}

export default App
