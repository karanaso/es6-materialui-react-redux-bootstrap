import React from 'react';
import {Snackbar} from 'material-ui';

import { InfoMessageActions } from './InfoMessageActions';

export default class InfoMessageComponent extends React.Component {
  constructor(props,context){
    super(props,context);
  }

  snackbarCloseRequest = () => {
    this.props.store.dispatch( InfoMessageActions.hide() );
  }

  render = () => {
    return (
      <Snackbar
         open={this.props.store.getState().InfoMessageReducer.open}
         message={this.props.store.getState().InfoMessageReducer.message}
         autoHideDuration={this.props.store.getState().InfoMessageReducer.duration}
         onRequestClose={this.snackbarCloseRequest.bind(this)}
      />
    )
  }
}
