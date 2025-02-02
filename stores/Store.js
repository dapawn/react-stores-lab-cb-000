class Store {
  constructor (props) {
    this.state = props;
    this.listeners = [];
  }

  setState (state) {
    this.state = state;
    for (const listener of this.listeners) {
      listener.call(this, state);
    }
  }

  getState () {
    return this.state;
  }

  addListener (listener) {
    this.listeners.push(listener);
    const removeListener = () => {
      this.listeners = this.listeners.filter(l => listener !== l);
    };
    return removeListener;
  }
}

export default Store;
