import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://corporate.arcelormittal.com/investors' }}
        style={{ marginTop: 30 }}
      />
    );
  }
}

