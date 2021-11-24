import React, { Component } from "react";
import { Button } from "reactstrap";

export default class DisplayTable extends Component {
  render() {
    
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Id Number</th>
              <th scope="col">Voting District</th>
              <th scope="col">Political Party</th>
              <th scope="col">Cancel</th>
            </tr>
          </thead>
          <tbody>
            {this.props.votingList.map((list, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{list.name}</th>
                  <td>{list.surname}</td>
                  <td>{list.id}</td>
                  <td>{list.place}</td>
                  <td>{list.party}</td>
                  <td>
                    <Button color="danger" onClick={this.props.handleDelete} >X</Button>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
