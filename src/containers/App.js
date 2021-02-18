import React from "react"
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox"
import Scroll from "../components/Scroll"
import ErrorBoundry from "../components/ErrorBoundry"
import "./index.css"

//app
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfiled: "",
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users })
      })
  }

  onSearchChange = (event) => {
    this.setState({ searchfiled: event.target.value })
  }

  render() {
    const { robots, searchfiled } = this.state
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfiled.toLowerCase())
    })
    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <>
        <div className="search-area">
          <h1>Robofriends</h1>
          <SearchBox className="searchbox" searchChange={this.onSearchChange} />
        </div>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </>
    )
  }
}

export default App
