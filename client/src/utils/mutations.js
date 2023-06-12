import { gql } from '@apollo/client';

export const LOGIN = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				username
				email
			}
		}
	}
`;

export const ADD_USER = gql`
	mutation addUser($username: String!, $email: String!, $password: String!) {
		addUser(username: $username, email: $email, password: $password) {
			token
			user {
				_id
				username
				email
			}
		}
	}
`;

export const ADD_VEHICLE = gql`
	mutation addVehicle($vehicle: addVehicleInput!) {
		addVehicle(vehicle: $vehicle) {
			_id 
			username
			email
			savedVehicles {
				make
				model
				year
				license
				color
				numberOfSeats
				transmission
				engine
				vehicleClass
				image
			}
		}
	}
`;

export const REMOVE_VEHICLE = gql`
	mutation removeVehicle($license: String!) {
		removeVehicle(license: $license) {
			username
			email
			savedVehicles {
				make
				model
				year
				license
				color
				numberOfSeats
				transmission
				engine
				vehicleClass
				image
			}
		}
	}
`;

export const CREATE_RESERVATION = gql`
	mutation createReservation($vehicle: String!) {
		createReservation(vehicle: $addVehicleInput) {
			carType
			dropOffDate
			returnDate
			userId
		}
	}
`
