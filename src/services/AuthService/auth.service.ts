import axiosInstance from "../../interceptor/axiosInstance";
import { deserialize, serialize } from "serializr";
import { store } from "../../store";
import { AUTHENTICATED } from "../../store/definitions/authConstants";
import Notification from "../../shared/components/Notification";
import { NotificationTypes } from "../../enums/notificationTypes";
import { useState } from "react";
import { ApiRoutes } from "../../routes/routeConstants/apiRoutes";
import { Customer } from "../../models/Customer/customer.model";

const UserService = () => {
	/* const [user, setUser] = useState<Customer>();

	const [error, setError] = useState<Error>();

	const [loading, setLoading] = useState(false);

	const loginUser = (user: Customer) => {
		setLoading(true);
		const userJSON = {
			customer: serialize(user),
		}
		return axiosInstance
			.post(ApiRoutes.USER_LOGIN, userJSON)
			.then((response) => {
				const userDetails = deserialize(Customer, response.data["customer"]);
				store.dispatch({
					type: AUTHENTICATED,
					payload: {
						authenticated: true,
						user: userDetails,
					},
				});
				Notification({
					message: "Login",
					description: "Logged in successfully",
					type: NotificationTypes.SUCCESS,
				});
				setUser(userDetails);
			})
			.catch((error) => {
				Notification({
					message: "Login failed",
					description: "incorrect email or password",
					type: NotificationTypes.ERROR,
				});
				setError(error);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return {
		user,
		error,
		loading,
		loginUser,
	}; */
};

export default UserService;
