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

	useEffect(() => {
		onAuthStateChanged(auth, (result) => {
			if (result) {
				const uid = result.uid;
				setUser({ name: result.displayName, id: uid });
				setIsLoggedin(true);
			} else {
				setUser({});
				setIsLoggedin(false);
			}
		});
	}, []);

	const signInWithGoogle = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const user = result.user;
				setUser({ name: user.displayName, id: user.uid });
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

	// add name after new user created
	const addName = () => {
		updateProfile(auth.currentUser, {
			displayName: name,
		})
			.then(() => {
				setUser({ name: user?.displayName, id: user?.uid });
			})
			.catch((error) => {});
	};

	const register = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				addName();
				setUser({ name: user?.displayName, id: user?.uid });
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
				setUser({ name: user?.displayName, id: user.uid });
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
