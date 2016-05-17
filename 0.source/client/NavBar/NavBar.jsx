import React from 'react'
import AppBar  from 'material-ui/lib/app-bar'
import LeftSideBar from './LeftSideBar'
import {SideBarsActions} from './SideBarsReducer'


import IconMenu from 'material-ui/lib/menus/icon-menu'
import IconButton from 'material-ui/lib/icon-button'
import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu'
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert'
import MenuItem from 'material-ui/lib/menus/menu-item'
import injectTapEventPlugin from 'react-tap-event-plugin'

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        injectTapEventPlugin();
    }

    componentDidMount() {
      document.querySelector('.container').addEventListener('click', () => {
        this.closeLeftSideBar();
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
      this.props.store.dispatch( SideBarsActions.toggleRight(false) );
    }

    render() {
        return (
            <div>
                <AppBar
                    title={this.props.title}
                    showMenuIconButton={true}
                    iconElementRight={<IconButton onClick={this.toggleRightSideBar.bind(this)}><MoreVertIcon /></IconButton>}
                    onLeftIconButtonTouchTap={this.openLeftSideBar.bind(this)}
                    onRightIconButtonTouchTap={this.openRightSideBar.bind(this)}
                    className="AppBar"
                />
                <LeftSideBar
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
