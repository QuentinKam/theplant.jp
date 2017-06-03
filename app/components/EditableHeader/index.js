/**
*
* EditableHeader
*
*/

import React from 'react';
// import styled from 'styled-components';

class EditableHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      text: '123',
      color: 'red',
      openEditor: false,
      deleted: false
    };
  }
  render() {
    const {text, color, deleted} = this.state

    return (deleted
      ? null
      : <div style={{
        // width: '50px',
        // height: '50px',
        background: color,
        zIndex: '1000',
        // background: '#fff',
        border: '1px solid #999',
        borderRadius: '3px',
        width: '180px',
        height: '180px',
        left: '-11px',
        position: 'relative',
        top: '-11px',
        // margin: '10px',
        // padding: '10px',
        // float: 'left',
      }}>
        <span onClick={() => {
          this.setState({deleted: true})
        }}>X</span>
        <p onClick={() => {
          this.setState({openEditor: true});
        }}>{text}</p>
        {this.state.openEditor
          ? <form onSubmit={(e) => {
              e.preventDefault();
              this.setState({openEditor: false})
            }}>
              text:
              <input type="text" value={text} onChange={(event) => {
                this.setState({text: event.target.value})
              }}/>
              color:
              <input type="text" value={color} onChange={(event) => {
                this.setState({color: event.target.value})
              }}/>
              <button type="submit">submit</button>
            </form>
          : null
        }
      </div>);
  }
}

EditableHeader.propTypes = {};

export default EditableHeader;
