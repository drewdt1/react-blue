import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  exportProject,
} from '../actions/actions';
import { bindActionCreators } from 'redux';
// import Edit from '../components/navEdit.jsx';
// import Zoom from './../components/navZoom.jsx';
// import Export from '../components/navExport.jsx';

// placeholder while testing
const mapStateToProps = store => ({
  state: store.main,
  projectName: store.main.projectName,
  currentComponent: store.main.currentComponent,
  lastId: store.main.lastId
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { 
      exportProject
  },
  dispatch
);

const TopNavBarContainer = props => {
  return(
  <div>
    <button onClick={props.exportProject}>Export</button>
  </div>
)};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavBarContainer);