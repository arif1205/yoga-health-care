import { useState, useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [isLoggedin, setIsLoggedin] = useState(false);
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	const googleProvider = new GoogleAuthProvider();
	const auth = getAuth();

	const signInWithGoogle = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const user = result.user;
				setUser({ name: user.displayName });
				setIsLoggedin(true);
				setError("");
			})
			.catch((error) => {
				const errorMessage = error.message;
				setError(errorMessage);
				setUser({});
				setIsLoggedin(false);
			});
	};

	const addName = () => {
		updateProfile(auth.currentUser, {
			name,
		})
			.then(() => {})
			.catch((error) => {
				// An error occurred
				// ...
			});
	};

	const register = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				addName();
				setIsLoggedin(true);
				setError("");
			})
			.catch((error) => {
				const errorMessage = error.message;
				setError(errorMessage);
				setUser({});
				setIsLoggedin(false);
			});
	};

	const login = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				setUser({ name: user?.displayName });
				setIsLoggedin(true);
				setError("");
			})
			.catch((error) => {
				const errorMessage = error.message;
				setError(errorMessage);
				setUser({});
				setIsLoggedin(false);
			});
	};

	const logout = () => {
		signOut(auth).then(() => {
			setUser({});
			setIsLoggedin(false);
			setName("");
			setEmail("");
			setPassword("");
		});
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({ name: user.displayName });
			}
		});
	}, []);

	return {
		user,
		email,
		password,
		error,
		name,
		isLoggedin,
		signInWithGoogle,
		register,
		login,
		logout,
		setEmail,
		setName,
		setPassword,
	};
};

export default useFirebase;