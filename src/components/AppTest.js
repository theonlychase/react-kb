import React from 'react';
import TestComponent from './TestComponent';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const AppTest = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <TestComponent />
  </MuiThemeProvider>
);

export default AppTest;