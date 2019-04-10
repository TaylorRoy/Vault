import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import { List } from "../List";
import { ListItem } from "../List";
import Password from "../Password/Password"
import DeleteBtn from "../DeleteBtn";
import axios from "axios";

class PasswordList extends Component {

  state = {
    passwords: []
  }

  // When the component mounts, load all passwordss and save them to this.state.passwordss
  componentDidMount() {
    this.loadPasswords();
  }

  // Loads all passwordss and sets them to this.state.passwords
  loadPasswords = (res) => {
    console.log("in loadPasswords")
    axios.get("/api/loadpasswords")
      .then(res => this.setState({
        passwords: res.data
      })
      )
      .catch(err => console.log(err));
    console.log("leads", this.state.leads);
  };

  deletePassword = (id) => {
    axios.delete("/api/deletepassword/" + id)
    .then(res => this.loadPasswords())
    .catch(err => console.log(err))
  }

  //create PDF of justPassword section of the Sameday page
  // getPDF = () => {
  //   var doc = new jsPDF();
  //   var timesToRun = this.state.leads.length;
  //   for (var i = 0; i < timesToRun; i++) {
  //     makePdfPage(i)
  //     function makePdfPage(i) {
  //       html2canvas(document.querySelectorAll(".list-group-item")[i]).then(canvas => {
  //         var image = canvas.toDataURL("image/png");
  //         doc.addImage(image, "JPEG", 20, 20);
  //         var svg = document.querySelectorAll(".list-group-item")[i].children[1].children[0].outerHTML;
  //         var canvas2 = document.createElement('canvas');
  //         canvg(canvas2, svg);
  //         var imgData = canvas2.toDataURL('image/png');
  //         doc.addImage(imgData, 'PNG', 10, 80, 180, 100);
  //         doc.addPage();
  //         if (i >= timesToRun - 1) {
  //           doc.save("testttttt.pdf");
  //         }
  //       });
  //     }
  //   }
  // }

  render() {
    return (

      <div>
        <NavBar />
        <p>Welcome to list page.</p>

        <p>Number of Passwords: {this.state.passwords.length}</p>

        {this.state.passwords.length ? (
          <List>
            {this.state.passwords.map(password => (
              <ListItem key={password._id} id={password._id}>
                <Password
                  username={password.username}
                  lastname={password.password}
                // company={password.company}
                />

                <DeleteBtn onClick = {() => this.deletePassword(password._id)} />
              </ListItem>
            ))}
          </List>
        ) : (
            <h3>No Results to Display</h3>
          )}
      </div>
    )
  }
};

export default PasswordList;