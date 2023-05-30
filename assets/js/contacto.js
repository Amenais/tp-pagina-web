fetch('../assets/json/universities.json')
  .then(response => response.json())
  .then(data => {
    // console.log(data); // Depuración: muestra los datos del archivo JSON en la consola
    const universityInput = document.getElementById('university-input');
    const suggestionsDatalist = document.getElementById('suggestions');

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const university = data[key];
        const option = document.createElement('option');
        option.value = university.name;
        suggestionsDatalist.appendChild(option);
      }
    }
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });