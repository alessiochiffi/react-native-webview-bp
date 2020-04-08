import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { NetInfo } from 'react-native';

export default class MyWeb extends Component {
  state = {
    isConnected: true
  };

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = isConnected => {
      this.setState({ isConnected });
  };

  render() {
    if (!this.state.isConnected) {
      return 'search for internet';
    }
    return (
      <WebView
        source={{ uri: 'https://corporate.arcelormittal.com/investors' }}
        style={{ marginTop: 30 }}
      />
    );
  }
}

