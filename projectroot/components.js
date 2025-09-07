// components.js

export const restaurantRow = (restaurant) => {
  const { name, company } = restaurant;

  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${name}</td>
    <td>${company ? company : 'N/A'}</td>
  `;

  return tr;
};

export const restaurantModal = (restaurant, menu) => {
  const { name, address, postalCode, city, phone, company } = restaurant;
  const { courses } = menu;

  let menuHtml = '<ul>';
  courses.forEach(({ name, price, diets }) => {
    menuHtml += `<li>${name}, ${price ? price : '?€'}. ${diets || ''}</li>`;
  });
  menuHtml += '</ul>';

  return `
    <h1>${name}</h1>
    <p>${address}</p>
    <p>${postalCode}, ${city}</p>
    <p>${phone || 'No phone available'}</p>
    <p>${company || 'Independent'}</p>
    ${menuHtml}
  `;
};
