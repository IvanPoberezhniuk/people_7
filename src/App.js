import "./App.css";
import React from "react";
import peopleData from "./peopleData";
import SearchField from "./SearchField";
import CreateTable from "./CreateTable";
import { prepareData, isSpecial } from "./myMethods";

let people = prepareData(peopleData);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: people,
      direction: "asc"
    };

    this.sortBy = this.sortBy.bind(this);
    this.filterList = this.filterList.bind(this);
  }

  filterList(event) {
    let value = event.target.value.toLowerCase();
    let filteredPeople = this.state.people.filter(person => {
      for (let key in person) {
        let keyValue = person[key].toString().toLowerCase();

        if (keyValue.includes(value)) {
          return true;
        }
      }
    });

    this.setState({
      people: filteredPeople.length > 0 ? filteredPeople : people
    });
  }

  sortBy(key) {
    this.setState({
      people: people.sort((a, b) => {
        if (typeof a[key] === "number") {
          return this.state.direction[key] === "asc"
            ? parseFloat(a[key]) - parseFloat(b[key])
            : parseFloat(b[key]) - parseFloat(a[key]);
        } else {
          return this.state.direction[key] === "asc"
            ? ("" + a[key]).localeCompare(b[key])
            : ("" + b[key]).localeCompare(a[key]);
        }
      }),
      direction: {
        [key]: this.state.direction[key] === "asc" ? "desc" : "asc"
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <SearchField filterList={this.filterList} />
        <CreateTable sortBy={this.sortBy} people={this.state.people} />;
      </React.Fragment>
    );
  }
}

export default App;
