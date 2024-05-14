import React from "react";

//
class ClassCounter extends React.Component {
  //V klassovom komponente sostojanie uderzhivaetsa i sozdajotsa inache chem v funkcee komponent
  //Zdes Hooks ispolzovat nelza V ETOM VSA BOL PROCESSA
  //State
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  //
  //Tak kak my rabotaem vnutri klassa to ot slova function mozhno izbavitsa
  //Functions
  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  //
  render() {
    //Esli v return Vozvrashaem objekt to pishem figurnie skobki
    return (
      <div>
        {/* Kogda my vnutri klassa to nado ispolzovat this. */}
        <h1>{this.state.count}</h1>
        <button className="btn" onClick={this.increment}>
          Increment
        </button>
        <button className="btn" onClick={this.decrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export default ClassCounter;
