import React from 'react';
import PropTypes from 'prop-types';

class CharItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    const { charId } = this.props;
    const charArr = [charId, Number(event.target.value)];
    this.props.updateCharacteristics(charArr);
  }

  render() {
    const {name, options} = this.props;
    return (
      <div className="charItem">
        <p>{name}</p>
        <section onChange={this.onChangeValue}>
          {Object.keys(options).map((key) => (
            <div>
              {/* <label>
                {options[key]}
                <br /> */}
                <input type="radio" value={key} name={name} />
              {/* </label> */}
            </div>
          ))}
        </section>
        <br />
        <div className="factorItemFactors">
          <div className="smallFactor">{options[1]}</div>
          {options[3] === 'Perfect' ? <div className="middleFactor">{options[3]}</div> : <div className="middleFactor" />}
          <div className="largeFactor">{options[5]}</div>
          </div>
          {/* <br />
        <br /> */}
      </div>
    );
  }
}

export default CharItem;
{ /* <label >

{this.props.options[1]}
<br />
<input type="radio" value="1" name={this.props.name} />
</label>
<label >
{this.props.options[2]}
<br />
<input type="radio" value="2" name={this.props.name} />
</label>
<label >
{this.props.options[3]}
<br />
<input type="radio" value="3" name={this.props.name} />
</label>
<label >
{this.props.options[4]}
<br />
<input type="radio" value="4" name={this.props.name} />
</label>
<label >
{this.props.options[5]}
<br />
<input type="radio" value="5" name={this.props.name} />
</label> */ }
