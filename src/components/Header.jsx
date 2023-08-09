//import { Component } from "react";
//class Header extends Component {
//render() {
//return <h1>Hello I am Class Component and this is {this.props.anydata}</h1>; //This is how you declare a class component and call it as props
//}
//}
function Header(props) {
  return (
    <h1>Hello World --this is the props that is declared {props.anydata}</h1>
  ); //This is how to create a function, can be declared anywhere in App. Better to declare it in another file called components
}

export default Header;
