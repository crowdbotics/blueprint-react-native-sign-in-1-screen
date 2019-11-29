import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {SignIn1} from './signIn1.component';

export class SignIn1Container extends React.Component {
  static navigationOptions = {
    header: null,
  };

  navigationKey = 'SignIn1Container';

  onSignInPress = data => {
    this.props.navigation.goBack();
  };

  onSignUpPress = () => {
    this.props.navigation.navigate({
      routeName: 'Sign Up 1',
      key: this.navigationKey,
    });
  };

  onGooglePress = () => {};

  onFacebookPress = () => {};

  onTwitterPress = () => {};

  onEwaPress = () => {};

  render() {
    return (
      <SignIn1
        onSignInPress={this.onSignInPress}
        onSignUpPress={this.onSignUpPress}
        onGooglePress={this.onGooglePress}
        onFacebookPress={this.onFacebookPress}
        onTwitterPress={this.onTwitterPress}
        onEwaPress={this.onEwaPress}
      />
    );
  }
}
