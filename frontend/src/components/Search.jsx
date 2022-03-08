import React from "react";
import { Form, Button, ListGroup, Card } from "react-bootstrap";
import ProfileListItem from './user/ProfileItem';
import { getUserList } from "../api/user";
import "../css/Search.css";


const Search = () => {
  const [searchText, setSearchText] = React.useState('');
  const [searchResult, setSearchResult] = React.useState('');

  const handleSearch = () => {
    const data = getUserList(searchText);
    data.then((data) => (console.log(data) ,setSearchResult(data)))
      .catch((err) => console.error(err));
  }

  return (
    <div className="search">
      <div className="search-wrapper">
        <Form className="search-form">
          <Form.Group>
            <Form.Control
              type="text"
              onInput={(event) => setSearchText(event.target.value)}
              placeholder="Search for a username"
            />
          </Form.Group>
          <Button varinat="primary" onClick={handleSearch}>Search</Button>
        </Form>
        {searchResult.length > 0 ? (<div className="search-results-wrapper">
          <Card style={{ width: "100%" }}>
            <ListGroup >
              {searchResult.map((item, idx) =>
                <ProfileListItem {...item} idx={idx} key={idx} />
              )}
            </ListGroup>
          </Card>
        </div>)
          : <p>No Search Results</p>}
      </div>
    </div>
  )
}

export default Search;