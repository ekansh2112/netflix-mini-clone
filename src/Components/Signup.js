import React, { useRef } from "react";
import { auth } from "../firebase";
import "./Signup.css";

const Signup = () => {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const register = (e) => {
		e.preventDefault();
		auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
			.then((authUser) => console.log(authUser))
			.catch((err) => alert(err.message));
	};
	const signin = (e) => {
		e.preventDefault();
		auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
			.then((authUser) => console.log(authUser))
			.catch((err) => alert(err.message));
	};
	return (
		<div className="signup">
			<h1>Sign in</h1>
			<form className="sform" action="">
				<input ref={emailRef} type="email" placeholder="Email" />
				<input ref={passwordRef} type="password" placeholder="Password" />
				<button onClick={signin} type="submit">
					Submit
				</button>
				<h4>
					<span className="newtonetflix">New to Neflix?</span>{" "}
					<span onClick={register} className="signupnow">
						Sign up now
					</span>
				</h4>
			</form>
		</div>
	);
};

export default Signup;
