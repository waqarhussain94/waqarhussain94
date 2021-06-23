import React, {Component} from 'react';
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_VIDEO':
      return {...state, video: action.payload};
    case 'SET_TEXT':
      return {...state, textStyle: action.payload};
    case 'SET_TEMPLATE':
      return {...state, Template: action.payload};
    default:
      return state;
  }
};

export class ContextProvider extends Component {
  state = {
    dispatch: action => {
      this.setState(state => reducer(state, action));
    },
    textStyle: [],
    Template: [],
    video: null,
  };

  render() {
    let {
      state,
      props: {children},
    } = this;

    return <Context.Provider value={state}>{children}</Context.Provider>;
  }
}

export const ContextConsumer = Context.Consumer;
