import React from 'react' 
import {FontIcon, IconButton, LeftNav, Divider, MenuItem, AppBar} from 'material-ui'
import {InfoMessageActions} from '../../InfoMessage/InfoMessageActions'

export default class WelcomeComponentRightSideBar extends React.Component {

  constructor(props) {
    super(props);
  }

  openRightSideBar() {
    this.props.store.dispatch( SideBarsActions.toggleRight(true));
  }

  closeRightSideBar() {
    this.props.store.dispatch( SideBarsActions.toggleRight(false));
  }

  everythingIsOk = () => {
    this.props.store.dispatch( InfoMessageActions.show('everythingIsOk',3000) );
  }

  somethingWentWrong = () => {
    this.props.store.dispatch( InfoMessageActions.show('somethingWentWrong',5000));
  }

  render() {
    return (
      <LeftNav
        className="RightSideBar"
        width={300}
        openRight={true}
        open={this.props.store.getState().SideBarsReducer.rightSideBarOpen}
      >
        <AppBar
          title={this.props.name}
          iconElementLeft={<IconButton onClick={this.closeRightSideBar.bind(this)}><FontIcon className="fa fa-1x fa-close" /></IconButton>}
        />
          <MenuItem
            key={1}
            primaryText="Everything is OK"
            onClick={this.everythingIsOk.bind(this)}
            leftIcon={<FontIcon className="fa fa-1x fa-save" />}
          />
          <MenuItem
            key={2}
            primaryText="Something went wrong"
            onClick={this.somethingWentWrong.bind(this)}
            leftIcon={<FontIcon className="fa fa-1x fa-save" />}
          />
          <MenuItem
            key={3}
            primaryText="Visit google"
            href="http://www.google.com"
            leftIcon={<FontIcon className="fa fa-1x fa-save" />}
          />
      </LeftNav>
    );
  }
}
