import React from 'react'
import NavBar from '../NavBar/NavBar'
import InfoMessageComponent from '../InfoMessage/InfoMessageComponent'

export default class Layout extends React.Component {
  constructor(props) {
      super(props);
  }

  // the Layout holds the NavBar components and the InfoMessageComponent that is used in this example
  // the title and menuOptions are being populated by the AppConfig which was bootstraped at index.js
  render() {
    return (
      <div>
        <NavBar
          store={this.props.route.store}
        />
        <div className="container">
            {this.props.children}
            <InfoMessageComponent store={this.props.route.store}/>
        </div>
      </div>
    )
  }
}
