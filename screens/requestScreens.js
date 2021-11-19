import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  SafeAreaView,
  StatusBar,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import db from "../config";
import firebase from "firebase";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Requests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      docId: "",
      allUsers: [],
      email: firebase.auth().currentUser.email,
      searchValue: "",
    };
  }
  fetchUser = async () => {
    db.collection("friendRequests")
      .where("requesteeId", "==", this.state.email)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          var user = doc.data();

          var temporary = [];
          userSnapshot.map((user) => {
            user["docId"] = doc.id;
            temporary.push(user);
          });
          console.log(temporary);
          this.setState({ allUsers: temporary });
        });
      });
  };
  fetchMyId = () => {
    db.collection("user")
      .where("email", "==", this.state.email)
      .get()
      .then((snapShot) => {
        snapShot.forEach((docs) => {
          var user = docs.data();
          this.setState({
            firstName: user.firstName,
            lastName: user.lastName,
            docId: docs.id,
          });
        });
      });
  };
  //requestee is the person sent to
  //requestor is u

  renderItem = ({ item, index }) => {
    return (
      <View>
        <View style={styles.flatlistCont}>
          <Text style={styles.flatlistName}>{item.requestorName}</Text>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => {
              db.collection("friendList").add({
                requestorId: item.requestorId,
                requesteeId: item.requesteeId,
              });
              db.collection("friendRequest").doc(item.docId).delete();
            }}
          >
            <Text>ACCEPT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => {
              db.collection("friendRequest").doc(item.docId).delete();
            }}
          >
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
        <Text>{}</Text>
        <Text>User Id:{item.docId}</Text>
      </View>
    );
  };
  componentDidMount() {
    //this.loadFontAsync();
    this.fetchMyId();
   this.fetchUser();
  }

  render() {
    console.log(this.state.allUsers);
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.allUsers}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={this.renderItem}
        />
       
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    borderWidth: 2,
    borderRadius: 20,
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: { color: "black", fontSize: 30 },
  title: {
    fontFamily: "bubblegum-sans",
    fontSize: 20,
    color: "white",
    borderWidth: 2,
    borderRadius: 5,
    margin: 10,
    textAlign: "center",
  },
  fab: {
    width: 30,
    height: 30,
    borderRadius: 15,

    backgroundColor: "grey",
    borderWidth: 1,
    alignItems: "center",
  },

  buttons: {
    width: 70,
    height: 30,
    backgroundColor: "red",
    marginTop: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  flatlistButton: {
    width: "100%",
    height: 90,
    margin: 10,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  flatlistName: {
    fontSize: 30,
    color: "black",
    margin: 10,
    textAlign: "center",
  },
  textInput: {
    width: "80%",
    paddingVertical: 2,
    borderRadius: 10,
    borderWidth: 2,
    fontSize: 20,
    marginTop: 37,
    textAlign: "center",
    alignSelf: "center",
  },
  flatlistCont: { flexDirection: "row" },
});
