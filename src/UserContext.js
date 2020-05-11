import { createContext } from "react";

export const UserContext = createContext(0);

// const UserContext = React.createContext({
//   id: 0,
//   setId: () => {},
// });

// export const UserProvider = ({ children, user }) => {
//   const [currentUser, setCurrentUser] = useState(0);

//   const saveUser = (user) => {
//     setCurrentUser(user);
//     console.log("trying to save user", currentUser);
//   };

//   return (
//     <UserContext.Provider value={{ user: currentUser, saveUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// class UserProvider extends Component {
//   // Context state
//   state = {
//     user: { id: 0 },
//   };

//   // Method to update state
//   setUser = (user) => {
//     this.setState((prevState) => ({ user }));
//   };

//   render() {
//     const { children } = this.props;
//     const { user } = this.state;
//     const { setUser } = this;

//     return (
//       <UserContext.Provider
//         value={{
//           user,
//           setUser,
//         }}
//       >
//         {children}
//       </UserContext.Provider>
//     );
//   }
// }

//export const UserConsumer = UserContext.Consumer;

//export default UserContext;
