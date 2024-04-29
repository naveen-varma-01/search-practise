// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'
class DestinationSearch extends Component {
  state = {searchInput: ''}
  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }
  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name
        .toLowerCase()
        .includes(searchInput.toLocaleLowerCase()),
    )
    return (
      <div className="main-cont">
        <h1 className="title">Destination Search</h1>
        <input
          type="search"
          className="search"
          placeholder="search"
          value={searchInput}
          onChange={this.onChangeSearchInput}
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
        />
        <ul className="img-cont">
          {searchResults.map(eachImg => (
            <DestinationItem
              key={eachImg.id}
              name={eachImg.name}
              imgUrl={eachImg.imgUrl}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
