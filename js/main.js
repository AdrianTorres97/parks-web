const parks = [
  { name: "Central Park", city: "City A" },
  { name: "Lake Park", city: "City B" }
];

const container = document.getElementById("parks-container");

parks.forEach(park => {
  const div = document.createElement("div");
  div.textContent = `${park.name} - ${park.city}`;
  container.appendChild(div);
});
