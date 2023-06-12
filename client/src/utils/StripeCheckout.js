// import React from 'react';
// import { Elements, useStripe } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// let stripePromise;

// const getStripe = () => {
// 	if (!stripePromise) {
// 		stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
// 	}
// 	return stripePromise;
// };
// const StripeCheckout = () => {
// 	const items = [
// 		{
// 			// Nissan Gtr
// 			price: 'price_1NHLgEKUpNsLneO9x1XzRtTh',
// 			quantity: 1,
// 		},
// 		{
// 			// Mazda 3
// 			price: 'price_1NHLjPKUpNsLneO9gGTZZVGL',
// 			quantity: 1,
// 		},
// 		{
// 			// Hyundai Ioniq 5
// 			price: 'price_1NHLj7KUpNsLneO9HfiWseKL',
// 			quantity: 1,
// 		},
// 		{
// 			// Chevrolet Camaro
// 			price: 'price_1NHLigKUpNsLneO9QcIH8Kd2',
// 			quantity: 1,
// 		},
// 		{
// 			// Toyota Sienna
// 			price: 'price_1NHLi1KUpNsLneO9nVCMXwdw',
// 			quantity: 1,
// 		},
// 		{
// 			// Porsche Cayman
// 			price: 'price_1NHLhXKUpNsLneO9BJoLjJFQ',
// 			quantity: 1,
// 		},
// 		{
// 			// Tesla Model S
// 			price: 'price_1NHLhEKUpNsLneO9ZfAVk7X4',
// 			quantity: 1,
// 		},
// 		{
// 			// Honda Accord
// 			price: 'price_1NHLgwKUpNsLneO9BuxTgoWK',
// 			quantity: 1,
// 		},
// 	];

// 	const stripe = useStripe();
// 	const redirectToCheckout = async (item) => {
// 		const lineItems = [
// 			{
// 				price: item.price,
// 				quantity: item.quantity,
// 			},
// 		];

// 		const checkoutOption = {
// 			lineItems,
// 			mode: 'payment',
// 			successUrl: `${window.location.origin}/success`,
// 			cancelUrl: `${window.location.origin}/`,
// 		};

// 		const { error } = await stripe.redirectToCheckout(checkoutOption);

// 		if (error) {
// 			// Handle the error
// 			console.log('Error redirecting to checkout:', error);
// 		}
// 	};

// 	// return (
// 	// 	<div>
// 	// 		<h1>Processing Payment...</h1>
// 	// 		{items.map((item, index) => (
// 	// 			<div key={index}>
// 	// 				<h3>Item {index + 1}</h3>
// 	// 				<p>Price: {item.price}</p>
// 	// 				<p>Quantity: {item.quantity}</p>
// 	// 				<button onClick={() => redirectToCheckout(item)}>
// 	// 					Checkout Item {index + 1}
// 	// 				</button>
// 	// 			</div>
// 	// 		))}
// 	// 		{/* You can display a loading spinner or any other content while the payment is being processed */}
// 	// 	</div>
// 	// );
// };

// export default StripeCheckout;
