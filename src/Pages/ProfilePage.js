import React from "react";
import { useSelector } from "react-redux";
import Nav from "../Components/Nav";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import "./ProfilePage.css";
const ProfilePage = () => {
	const user = useSelector(selectUser);

	return (
		<div className="profilepage">
			<Nav />
			<div className="profilescreen_body">
				<h1>Edit Profile</h1>
				<div className="profilescreen_info">
					<img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
					<div className="profilescreen_detail">
						<h2>{user.email}</h2>
						<div className="profilescreen_plans">
							<h3>Plans</h3>
							<button onClick={() => auth.signOut()} className="signout_btn">
								Sign out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
