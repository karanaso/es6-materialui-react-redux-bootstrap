import React from 'react'
import {Card,CardActions,CardHeader,CardMedia,CardTitle,FlatButton,CardText} from 'material-ui'
import {InfoMessageActions} from '../../InfoMessage/InfoMessageActions'
import WelcomeComponentRightSideBar from './WelcomeComponentRightSideBar'

export default class WelcomeComponent extends React.Component {
  constructor (props) {
    super(props);

  }

  everythingIsOk = () => {
    this.props.route.store.dispatch( InfoMessageActions.show('everythingIsOk',3000) );
  }

  somethingWentWrong = () => {
    this.props.route.store.dispatch( InfoMessageActions.show('somethingWentWrong',5000));
  }

  render = () => {
    return (
      <div>
        <Card>
          <CardTitle
            title="ES6/ReactJS/Redux/Material-ui boilerplate"
            subtitle="using bundles"
          />
          <CardText>
            This is small ReactJS/Redux/redux-persist/Bootstrap/FontAwesome using ES6 and Material-UI boilerplate using bundles.
            <hr />
            <strong>index.js</strong>
            <hr />
            The application bootstraps index.js that loads React,ReactDom, setimmediate (needed for persistStore), Provider from redux, createStore and all
            reducers that are available in the application. In this specific example InfoMessageReducer base
          </CardText>
          <CardActions>
            <FlatButton
              onClick={this.everythingIsOk.bind(this)}
              label="everythingIsOk"
            />
            <FlatButton
              onClick={this.somethingWentWrong.bind(this)}
              label="somethingWentWrong "
            />
          </CardActions>
        </Card>

        <WelcomeComponentRightSideBar
            store={this.props.route.store}
        />
      </div>
    )
  }

}
