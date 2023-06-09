import { gql } from '@apollo/client';

export const GET_ME = gql`
	query me {
		me {
			_id
			username
			email
		}
	}
`;

export const VEHICLES = gql`
	query getVehicles {
		vehicles {
			make
			model
			image
		}
	}
`;
