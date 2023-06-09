export const getReservation = () => {
    const userReservation = localStorage.getItem('reservations')
    ? JSON.parse(localStorage.getItem('reservations'))
    : [];

    return userReservation;
};

export const userReservation = (reservationArr) => {
    if (reservationArr.length) {
        localStorage.setItem('reservations', JSON.stringify(reservationArr));
    } else {
        localStorage.removeItem('reservations');
    }
};

export const deleteReservation = (_id) => {
    const userReservation = localStorage.getItem('reservations')
    ? JSON.parse(localStorage.getItem('reservations'))
    : null;

    if (!userReservation) {
        return false;
    }

    const updatedReservation = userReservation?.filter((savedReservation) => savedReservation !== _id);
    localStorage.setItem('reservations', JSON.stringify(updatedReservation));

    return true;
};