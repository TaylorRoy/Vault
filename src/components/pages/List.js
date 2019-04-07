import React from "react";
import NavBar from "../NavBar/NavBar";

const List = () => (
    <div>
        <NavBar />
        <p>Welcome to list page.</p>
        {/* {this.state.books.length ? (
        <List>
                    {this.state.books.map(book => (
                      <ListItem key={book._id}>
                        <a href={"/books/" + book._id}>
                          <strong>
                            {book.title} by {book.author}
                          </strong>
                        </a>
                        <DeleteBtn />
                      </ListItem>
                    ))}
                  </List> */}
    </div>
);

export default List;