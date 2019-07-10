import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    const {
      counters,
      onDecrement,
      onIncrement,
      onDelete,
      onReset
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;




// import React, { Component } from 'react';
// import './App.css';
// // import Movie from './components/movies';
// import NavBar from './components/navBar';
// import Counters from './components/counters';

// class App extends Component {
//   state = {
//     counters: [
//       { id: 1, value: 4 },
//       { id: 2, value: 0 },
//       { id: 3, value: 0 },
//       { id: 4, value: 0 }
//     ]
//   };

//   totalCounts = () => {
//     const total = this.state.counters.map(counter => {
//       let sum = 0;
//       sum += counter.value;
//       return sum;
//     });
//     console.log(total);
//     this.setState({ total });
//   };

//   handleDecrement = counter => {
//     const counters = [ ...this.state.counters ];
//     const index = counters.indexOf(counter);
//     counters[index] = {...counter}
//     counters[index].value--;
//     this.setState({ counters });
//   };

//   handleIncrement = counter => {
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter };
//     counters[index].value++;
//     this.setState({ counters });
//   };

//   handleReset = () => {
//     const counters = this.state.counters.map(c => {
//       c.value = 0;
//       return c;
//     });
//     this.setState({ counters });
//   };

//   handleDelete = counterId => {
//     const counters = this.state.counters.filter(c => c.id !== counterId);
//     this.setState({ counters });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <NavBar
//           totalCounters={this.state.counters.filter(c => c.value > 0).length}
//         />
//         <main className="container">
//           <Counters
//             counters={this.state.counters}
//             onReset={this.handleReset}
//             onIncrement={this.handleIncrement}
//             onDecrement={this.handleDecrement}
//             onDelete={this.handleDelete}
//           />
//         </main>
//       </React.Fragment>
//     );
//   }
// }

// export default App;

