/*
 *
 * Test
 *
 */

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import {FormattedMessage} from 'react-intl';
import {createStructuredSelector} from 'reselect';
import makeSelectTest from './selectors';
import messages from './messages';
import Section from './Section';
import OutterBox from './OutterBox';
import Parent from './Parent';
import Box from './Box';
import Draggable, {DraggableCore} from 'react-draggable';
import EditableHeader from '../../components/EditableHeader/index.js';

export class Test extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
    this.openEditor = this.openEditor.bind(this);
    this.state = {
      activeDrags: 0,
      openEditor: false,
      text: '',
      color: ''
    };
  }

  onStart() {
    this.setState({
      activeDrags: ++this.state.activeDrags
    });
  }

  onStop() {
    this.setState({
      activeDrags: --this.state.activeDrags
    });
  }

  openEditor() {
    this.setState({openEditor: true})
  }

  render() {
    const dragHandlers = {
      onStart: this.onStart,
      onStop: this.onStop
    };

    let {text, color} = this.state

    return (
      <div>
        <Helmet title="Test" meta={[{
            name: 'description',
            content: 'Description of Test'
          }
        ]}/>

        <OutterBox>
          <Parent>
            <Draggable bounds="parent" {...dragHandlers}>
              <Box>
                  <EditableHeader>
                  </EditableHeader>
              </Box>
            </Draggable>
            <Draggable bounds="parent" {...dragHandlers}>
              <Box>
                I can only be moved within my offsetParent.<br/><br/>
                Both parent padding and child margin work properly.
              </Box>
            </Draggable>
            <Draggable bounds="parent" {...dragHandlers}>
              <Box>
                I also can only be moved within my offsetParent.<br/><br/>
                Both parent padding and child margin work properly.
              </Box>
            </Draggable>
          </Parent>
        </OutterBox>
      </div>
    );
  }
}

Test.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({Test: makeSelectTest()});

function mapDispatchToProps(dispatch) {
  return {dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
