import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfilePage from "./Pages/ProfilePage";
function App() {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				console.log("LOGGED-IN", userAuth);
				dispatch(
					login({
						uid: userAuth.uid,
						email: userAuth.email,
					})
				);
			} else {
				dispatch(logout());
			}
		});
		return unsubscribe;
	}, [dispatch]);
	return (
		<div className="App">
			<Router>
				{!user ? (
					<LoginPage />
				) : (
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route exact path="/profile">
							<ProfilePage />
						</Route>
					</Switch>
				)}
			</Router>
		</div>
	);
}

export default App;
