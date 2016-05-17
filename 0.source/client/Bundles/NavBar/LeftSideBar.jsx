import React from 'react';

import AppBar  from 'material-ui/lib/app-bar'
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'
import {IconButton, LeftNav, FontIcon, Divider, MenuItem} from 'material-ui';
import {InfoMessageActions} from '../InfoMessage/InfoMessageActions'

export default class LeftNavigation extends React.Component {

    constructor(props) {
      super(props);
    }

    closeLeftNav = () => {
      this.props.closeLeftNav();
    }

    everythingIsOk = () => {
      this.props.store.dispatch( InfoMessageActions.show('everythingIsOk',3000) );
    }

    somethingWentWrong = () => {
      this.props.store.dispatch( InfoMessageActions.show('somethingWentWrong',5000));
    }

    render = () => {
        return (
            <div>
                <LeftNav open={this.props.open}>
                    <AppBar title={this.props.title} showMenuIconButton={false} iconElementRight={<IconButton onClick={this.closeLeftNav.bind(this)}><NavigationClose /></IconButton>} />
                    <MenuItem
                      key={0}
                      primaryText="Welcome"
                      href="#/welcome"
                      leftIcon={<FontIcon className="fa fa-1x fa-save" />}
                    />
                    <Divider />
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
            </div>
        );
    }
}
