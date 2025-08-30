fetch("data/recipes.json")
  .then(response => response.json())
  .then(recetas => {
    const contenedor = document.getElementById("recetas");
    recetas.forEach(r => {
      const recetaHTML = `
        <div class="receta">
          <h2>${r.titulo}</h2>
          <img src="${r.imagen}" alt="${r.titulo}">
          <h3>Ingredientes:</h3>
          <ul>${r.ingredientes.map(i => `<li>${i}</li>`).join("")}</ul>
          <h3>Instrucciones:</h3>
          <p>${r.instrucciones}</p>
        </div>
      `;
      contenedor.innerHTML += recetaHTML;
    });
  });
