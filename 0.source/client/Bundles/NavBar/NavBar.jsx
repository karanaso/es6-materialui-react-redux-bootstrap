import React from 'react'
import AppBar  from 'material-ui/lib/app-bar'
import LeftSideBar from './LeftSideBar'
import {SideBarsActions} from './SideBarsReducer'


import IconMenu from 'material-ui/lib/menus/icon-menu'
import IconButton from 'material-ui/lib/icon-button'
import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu'
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert'
import MenuItem from 'material-ui/lib/menus/menu-item'


export default class NavBar extends React.Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
    document.querySelector('.container').addEventListener('click', () => {
      this.props.store.dispatch( SideBarsActions.closeBothSideBars() );
    });
  }

  toggleLeftSideBar() {
    this.props.store.dispatch( SideBarsActions.toggleLeft(true) );
  }

  openLeftSideBar() {
    this.props.store.dispatch( SideBarsActions.toggleLeft(true) );
  }

  closeLeftSideBar() {
    this.props.store.dispatch( SideBarsActions.toggleLeft(false) );
  }

  toggleRightSideBar = () => {
    this.props.store.dispatch( SideBarsActions.toggleRight(true) );
  }

  render = () => {
    return (
      <div>
        <AppBar
          title="ES6/ReactJS/Redux/Persist/Material-ui/Bootstrap/Font-awesome"
          showMenuIconButton={true}
          iconElementRight={<IconButton onClick={this.toggleRightSideBar.bind(this)}><MoreVertIcon /></IconButton>}
          onLeftIconButtonTouchTap={this.openLeftSideBar.bind(this)}
          className="AppBar"
        />
        <LeftSideBar
          store={this.props.store}
          className="LeftSideBar"
          title={this.props.title}
          menuOptions={this.props.menuOptions}
          open={this.props.store.getState().SideBarsReducer.leftSideBarOpen}
          closeLeftNav={this.closeLeftSideBar.bind(this)}
        />
      </div>
    )
  }
}
