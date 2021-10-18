import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Service from "./Pages/Service/Service";
import Services from "./Pages/Services/Services";
import NotFound from "./Pages/NotFound/NotFound";
import Booking from "./Pages/Booking/Booking";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import TopNav from "./Pages/Utilities/TopNav";
import Footer from "./Pages/Utilities/Footer";
import PrivateRoute from "./Pages/Utilities/PrivateRoute";
import AuthProvider from "./Context/AuthProvider";
import Teacher from "./Pages/Teacher/Teacher";

function App() {
	return (
		<AuthProvider>
			<Router>
				<TopNav />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/about'>
						<About />
					</Route>
					<Route exact path='/services'>
						<Services />
					</Route>
					<PrivateRoute exact path='/service/:id'>
						<Service />
					</PrivateRoute>
					<PrivateRoute exact path='/booking'>
						<Booking />
					</PrivateRoute>
					<PrivateRoute exact path='/teacher'>
						<Teacher />
					</PrivateRoute>
					<Route exact path='/login'>
						<Login />
					</Route>
					<Route exact path='/register'>
						<Register />
					</Route>
					<Route path='*'>
						<NotFound />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</AuthProvider>
	);
}

export default App;
