export const getSavedVehicles = () => {
    const savedVehicles = localStorage.getItem('saved_vehicles')
    ? JSON.parse(localStorage.getItem('saved_vehicles'))
    : [];

    return savedVehicles;
};

export const savedVehicles = (savedVehiclesArr) => {
    if (savedVehiclesArr.length) {
        localStorage.setItem('saved_vehicles', JSON.stringify(savedVehiclesArr));
    } else {
        localStorage.removeItem('saved_vehicles');
    }
};

export const removeVehicle = (license) => {
    const savedVehicles = localStorage.getItem('saved_vehicles')
    ? JSON.parse(localStorage.getItem('saved_vehicles'))
    : null;

    if (!savedVehicles) {
        return false;
    }

    const updatedSavedVehicles = savedVehicles?.filter((savedVehicles) => savedVehicles !== license);
    localStorage.setItem('saved_books', JSON.stringify(updatedSavedVehicles));

    return true;
}