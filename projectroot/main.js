// main.js
import { baseUrl } from './variables.js';
import { fetchData } from './utils.js';
import { restaurantRow, restaurantModal } from './components.js';

const restaurantTable = document.querySelector('#restaurant-table tbody');
const modal = document.querySelector('#modal');

const loadRestaurants = async () => {
  const restaurants = await fetchData(`${baseUrl}/restaurants`);
  if (!restaurants) return;

  restaurants.forEach((restaurant) => {
    const row = restaurantRow(restaurant);

    row.addEventListener('click', async () => {
      const menu = await fetchData(`${baseUrl}/restaurants/${restaurant.id}/menu`);
      modal.innerHTML = restaurantModal(restaurant, menu);
      modal.style.display = 'block';
    });

    restaurantTable.appendChild(row);
  });
};

loadRestaurants();
