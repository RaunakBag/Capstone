import React from "react";
import { ListGroup, Container } from "react-bootstrap";

export default class FetchPlanets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      planets: null,
      selectedPlanets: []
    };
  }
  async componentDidMount() {
    const url = "https://assignment-machstatz.herokuapp.com/planet";
    const res = await fetch(url);
    const data = await res.json();
    this.setState({ planets: data, loading: false });
    console.log(this.state.planets);
  }
  fetch = e => {
    const data = this.state.selectedPlanets;
    if (!data.includes(e.target.innerText)) {
      data.push(e.target.innerText);
      this.setState(
        {
          selectedPlanets: data
        },
        () => {
          this.props.updatePlanets(this.state.selectedPlanets);
        }
      );
    }
  };

  render() {
    return (
      <Container fluid>
        {this.state.loading || !this.state.planets ? (
          <div>Loading...</div>
        ) : (
          <ListGroup>
            {this.state.planets.map((planetnames, index) => {
              return (
                <ListGroup.Item
                  key={index}
                  onClick={e => {
                    this.fetch(e);
                  }}
                  className="selectlg"
                >
                  {planetnames.id}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        )}
      </Container>
    );
  }
}

