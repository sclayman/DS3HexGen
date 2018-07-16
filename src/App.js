import React from 'react';
import PropTypes from 'prop-types';
import weaponData from './data/weapons.json'
import armorData from './data/armor.json'
import ringData from './data/rings.json'
import magicData from './data/magic.json'
import itemData from './data/items.json'

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
      const items =[];
      let item;
      //build the list of items
      for (item in itemList) {
        items.push(<option value={item}>{itemList[item].name}</option>)
      }
      return items
    }
    let item;
    const options = [];
    //nest the items in their respective subgroups
    for (item in this.dataList) {
      options.push(<optgroup label={item}>{genOptions(this.dataList[item])}</optgroup>)
    }
    return (
      <select onChange={this.props.handleSearchChange}>
        {options}
      </select>
    )
  }
}

class InfusionSelect extends React.Component {
  //Infusions with their decimal values
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
      baseHex: ''
    };
  }

  handleSearchChange(i) {
    this.setState({baseHex: weaponData[i.target.value].hex});
  }

  render () {
    const {hex} = this.state.baseHex;

    return (
      <div className='main'>
        <div className="search">
          <Search
            handleSearchChange={this.handleSearchChange.bind(this)}
          />
        </div>
        <div className="infusions">
          <InfusionSelect />
        </div>
        <div className="levels">
          <LevelSelect />
        </div>
        <div className="hex-display">
          <input value={this.state.baseHex} />
        </div>
      </div>
    );
  }
}

export default App
