import React, { Component } from "react";
import "../App.css";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import DisplayTable from "../Components/DisplayTable";

class FormR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votingList: [],
      name: "",
      surname: "",
      id: "",
      place: "",
      party: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
    console.log("name", event.target.name);
  };

  handleDelete = (i) => {
    let votingList = this.state.votingList.slice();
    votingList.splice(i, 1);
    this.setState({
      votingList,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, surname, id, place, party } = this.state;

    let newState = {
      name,
      surname,
      id,
      place,
      party,
    };
    if (name && surname && id && place && party !== "") {
      this.setState({
        votingList: [...this.state.votingList, newState],
      });
    }
    this.setState({
      name: "",
      surname: "",
      id: "",
      place: "",
      party: "",
    });
  };

  render() {
    const { name, surname, id, place, party } = this.state;
    return (
      <div>
        <h1 style={{ textAlign: "center", paddingTop: "3rem", paddingBottom: "3rem" }}>
          Voting Registration Form
        </h1>

        <div className="formBody" style={{ paddingTop: "3rem" }}>
          <div className="side1">
            <h1>How do I register?</h1>

            <h2>Who can register?</h2>
            <h3>You must:</h3>
            <ul>
              <li>be a South African citizen;</li>
              <li>
                be at least 16 years old (you can only vote from age 18); and
              </li>
              <li>
                and have a green, bar-coded ID book; smartcard ID; or valid
                Temporary Identity Certificate (TIC).
              </li>
            </ul>

            <h2>What documents do I need to apply for registration?</h2>
            <ul>
              <li>green, bar-coded ID book;</li>
              <li>smartcard ID; or</li>
              <li>valid Temporary Identity Certificate (TIC).</li>
            </ul>

            <p>
              No other forms of ID can be accepted. Only original documents (no
              copies) are accepted.
            </p>

            <h2>What happens when I apply?</h2>
            <ul>
              <li>Complete the registration form;</li>
              <li>Scan your identity document;</li>
            </ul>
              <p style={{ color: "red" }}>
                Please note that completing the form and receiving a
                cornfirmation text doesn't mean that you're registered, it only
                means that you've applied for registration. Your registration
                must still be processed (may take up to 7 working days).
              </p>

              <h2>How do I know if or where I'm registered?</h2>
              <h3>To check your registration details, you can:</h3>
              <ul>
                <li>send an SMS with your ID number to 32810 (R1.00 per SMS);</li>
                <li><span style={{color:"blue"}}>download our mobile app</span> and enter your ID number;</li>
                <li>Check your voter <span style={{color:"blue"}}>registration details;</span></li>
                <li>or check at your local IEC office during office hours.</li>
              </ul>
          </div>
          <div className="side2">
            <Form className="form" onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="exampleName">Name</Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Firstname"
                    value={name}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSurname">Surname</Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    value={surname}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for="exampleId">Id Number</Label>
                <Col sm={10}>
                  <Input
                    type="number"
                    name="id"
                    placeholder="Id Number"
                    value={id}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for="examplePlace">Voting District</Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="place"
                    placeholder="District"
                    value={place}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup
                tag="fieldset"
                row
                value={party}
                onChange={this.handleChange}
              >
                <legend style={{ padding: "2rem" }}>
                  South African Parliamentary parties
                </legend>
                <Col sm={10}>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="party" value="ANC" />
                      African National Congress{" "}
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="party" value="DA" />
                      Democratic Alliance
                    </Label>
                  </FormGroup>

                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="party" value="EFF" />
                      Economic Freedom Fighters{" "}
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="party" value="IFP" />
                      Inkatha Freedom Party{" "}
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="party" value="FFP" />
                      Freedom Front Plus{" "}
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="party" value="ACDP" />
                      African Christian Democratic Party
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="party" value="UDM" />
                      United Democratic Movement
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="party" value="ATM" />
                      African Transformation Movement{" "}
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="party" value="GOOD" />
                      Good{" "}
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="party" value="NFP" />
                      National Freedom Party{" "}
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="party" value="AIC" />
                      African Independent Congress{" "}
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="party" value="COPE" />
                      Congress of the People{" "}
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="party" value="PAC" />
                      Pan Africanist Congress of Azania{" "}
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="party" value="ALJAMA" />
                      Al Jama-ah
                    </Label>
                  </FormGroup>
                </Col>
              </FormGroup>

              <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                  <Button color="success">Register</Button>{" "}
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
        <hr />
        <div>
          <DisplayTable
            votingList={this.state.votingList}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default FormR;
