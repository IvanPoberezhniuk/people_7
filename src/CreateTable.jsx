import React from "react";
import { prepareData, isSpecial } from "./myMethods";

const CreateTd = props => {
  return <td>{props.value}</td>;
};

const CreateTh = props => {
  return <th onClick={() => props.sortBy(props.head)}>{props.head}</th>;
};

const CreateRow = props => {
  let className = isSpecial(props.person);
  let values = Object.values(props.person);

  return (
    <tr className={className}>
      {values.map(value => (
        <CreateTd value={value} />
      ))}
    </tr>
  );
};

class CreateTable extends React.Component {
  createHeads() {
    let heads = Object.keys(this.props.people[0]);

    return (
      <tr>
        {heads.map(head => (
          <CreateTh head={head} sortBy={this.props.sortBy} />
        ))}
      </tr>
    );
  }

  createRows() {
    return this.props.people.map(person => (
      <CreateRow key={person.id} person={person} />
    ));
  }

  render() {
    return (
      <table>
        <thead>{this.createHeads()}</thead>
        <tbody>{this.createRows()}</tbody>
      </table>
    );
  }
}

export default CreateTable;
