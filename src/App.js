import React from 'react';
import PropTypes from 'prop-types';
import weaponData from './data/weapons.json'
import armorData from './data/armor.json'
import ringData from './data/rings.json'
import magicData from './data/magic.json'
import itemData from './data/items.json'

function HexDisplay(props) {
  return (
    <input className='hex-input' type='readonly' value={props.hex} />
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

  change(i) {
    this.setState({hex: weaponData[i.target.value].hex})
  }

  render() {
    function genOptions(itemList) {
      const items =[];
      let item;
      for (item in itemList) {
        items.push(<option value={item}>{itemList[item].name}</option>)
      }
      return items
    }
    let item;
    const options = [];
    for (item in this.dataList) {
      options.push(<optgroup label={item}>{genOptions(this.dataList[item])}</optgroup>)
    }
    return (
      <select onChange={i => this.change(i)} value={item}>
        {options}
      </select>
    )
  }
}

class InfusionSelect extends React.Component {
  infusions = {
    "Regular" : 0,
    "Heavy" : 100,
    "Sharp" : 200,
    "Refined" : 300,
    "Simple" : 400,
    "Crystal" : 500,
    "Fire" : 600,
    "Chaos" : 700,
    "Lightning" : 800,
    "Deep" : 900,
    "Poison" : 1100,
    "Blood" : 1200,
    "Raw" : 1300,
    "Blessed" : 1400,
    "Hollow" : 1500
  }
  render () {
    const options = [];
    let option;
    let infusion;
    for (infusion in this.infusions) {
      options.push(<option value={this.infusions[infusion]}>{infusion}</option>)
    }
    return (
      <select>
        {options}
      </select>
    )
  }
}

class LevelSelect extends React.Component {
  render () {
    const options = [];
    for (let i = 0; i <= 10; i++) {
      options.push(<option value={i}>+{i}</option>)
    }
    return(
      <select>
        {options}
      </select>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hex: ''
    };
  }

  renderHex() {
    return (
      <HexDisplay
        value={this.props.hex}
      />
    )
  }

  render () {
    return (
      <div className='main'>
        <div className="search">
          <Search />
        </div>
        <div className="infusions">
          <InfusionSelect />
        </div>
        <div className="levels">
          <LevelSelect />
        </div>
        <div className="hex-display">
          {this.renderHex(this.state.hex)}
        </div>
      </div>
    );
  }
}

export default App
