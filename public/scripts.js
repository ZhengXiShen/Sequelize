async function getDining() {
    const request = await fetch('/api/dining/');
    const result = await request.json();
    const table = document.querySelector('tbody');
  
    result.data.forEach((item) => {
      const location = document.createElement('tr');
      location.innerHTML = `
      <th>${item.hall_id}</th>
      <th>${item.hall_name}</th>
      <th>${item.hall_address}</th>`;
      table.append(location);
    });
  
}

window.onload = getDining();