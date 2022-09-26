/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { fetchUserData, updateUserData } from "../store/slices/authThunk";
import Loading from "../components/Loading";

const Dashboard = () => {
	const profile = useSelector((state) => state.auth.userData);
	const dispatch = useDispatch();
	const [edit, setEdit] = useState(false);
	const [isLoading, SetIsLoading] = useState(true);
	const [updatedFirstName, setUpdatedFirstName] = useState("");
	const [updatedLastName, setUpdatedLastName] = useState("");

	useEffect(() => {
		dispatch(fetchUserData());
		SetIsLoading(false);
	}, [isLoading]);

	const handleEdit = () => {
		setUpdatedFirstName(profile.firstName);
		setUpdatedLastName(profile.lastName);
		setEdit(true);
	};

	const handleEditCancel = () => {
		setEdit(false);
	};

	async function handleChange(e) {
		e.preventDefault();

		const updatedProfile = {
			firstName: updatedFirstName,
			lastName: updatedLastName,
		};
		dispatch(updateUserData(updatedProfile));
		setEdit(false);
	}

	return (
		<>
			{isLoading && <Loading />}
			{!isLoading && (
				<>
					<Navbar />
					<main className="main bg-dark">
						{!edit ? (
							<div className="header">
								<h1>
									Welcome back
									<br />
									{profile.firstName + " " + profile.lastName}
								</h1>
								<button className="edit-button" onClick={handleEdit}>
									Edit Name
								</button>
							</div>
						) : (
							<div className="header">
								<h1>
									Welcome back
									<br />
									<input
										type="text"
										defaultValue={updatedFirstName}
										onChange={(e) => setUpdatedFirstName(e.target.value)}
									/>
									<input
										type="text"
										defaultValue={updatedLastName}
										onChange={(e) => setUpdatedLastName(e.target.value)}
									/>
								</h1>
								<button className="edit-button" onClick={handleChange}>
									Save
								</button>
								<button className="edit-button" onClick={handleEditCancel}>
									Cancel
								</button>
							</div>
						)}
						<h2 className="sr-only">Accounts</h2>
						<section className="account">
							<div className="account-content-wrapper">
								<h3 className="account-title">Argent Bank Checking (x8349)</h3>
								<p className="account-amount">$2,082.79</p>
								<p className="account-amount-description">Available Balance</p>
							</div>
							<div className="account-content-wrapper cta">
								<button className="transaction-button">
									View transactions
								</button>
							</div>
						</section>
						<section className="account">
							<div className="account-content-wrapper">
								<h3 className="account-title">Argent Bank Savings (x6712)</h3>
								<p className="account-amount">$10,928.42</p>
								<p className="account-amount-description">Available Balance</p>
							</div>
							<div className="account-content-wrapper cta">
								<button className="transaction-button">
									View transactions
								</button>
							</div>
						</section>
						<section className="account">
							<div className="account-content-wrapper">
								<h3 className="account-title">
									Argent Bank Credit Card (x8349)
								</h3>
								<p className="account-amount">$184.30</p>
								<p className="account-amount-description">Current Balance</p>
							</div>
							<div className="account-content-wrapper cta">
								<button className="transaction-button">
									View transactions
								</button>
							</div>
						</section>
					</main>
					<Footer />
				</>
			)}
		</>
	);
};

export default Dashboard;
