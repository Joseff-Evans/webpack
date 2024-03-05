import * as React from 'react';
import type { IHelloWorldProps } from './IHelloWorldProps';

import App from './App';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <App />
    );
  }
}
