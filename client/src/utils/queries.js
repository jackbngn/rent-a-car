import { gql } from '@apollo/client';

export const GET_ME = gql`
	query me {
		me {
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

export const VEHICLES = gql`
	query getVehicles {
		vehicles {
			_id
			make
			model
			image
			license
		}
	}
`;
