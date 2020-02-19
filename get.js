import React, { Component } from 'react';
import { subscribe } from './registry.js';

class GetContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: null
    }
  }

  componentDidMount() {
    this.subscription = subscribe(this.props.name, this.onChange);
  }

  onChange = (content) => {
    // var self = this;
    // wrap in a set timeout so we don't get warnings about setting state
    // inside of a render functiosn
    // setTimeout(function() {
      // if (self.isMounted()) self.setState({content: content});
    // });
    this.setState({content: content})
  }

  componentWillUnmount() {
    this.subscription();
  }

  render() {
    var content = this.state.content;
    var length = content ? content.length : 0;
    if (length === 0) return false;
    if (length === 1 && !Array.isArray(content[0])) return content[0] || false;
    return <div>{ content }</div>
  }
}

export default GetContent