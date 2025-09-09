// document.addEventListener('DOMContentLoaded', () => {
//     const mapSlugToSectionId = {
//       'recetas_pollo': 'recetas-pollo',
//       'recetas_cerdo': 'recetas-cerdo',
//       'recetas_platano': 'recetas-platano'
//     };

//     const dataBasePath = 'data';

//     const createEl = (tag, className, text) => {
//       const el = document.createElement(tag);
//       if (className) el.className = className;
//       if (text) el.textContent = text;
//       return el;
//     };

//     const renderRecipeCard = (recipe) => {
//       const card = createEl('article', 'recipe-card');
//       const title = createEl('h3', 'recipe-title', recipe.title);
//       const excerpt = createEl('p', 'recipe-excerpt', recipe.excerpt || '');

//       const btn = createEl('button', 'recipe-toggle', 'Ver detalles');
//       const details = createEl('div', 'recipe-details');
//       details.hidden = true;

//       let loaded = false;
//       btn.addEventListener('click', async () => {
//         details.hidden = !details.hidden;
//         btn.textContent = details.hidden ? 'Ver detalles' : 'Ocultar detalles';
//         if (!loaded && !details.hidden) {
//           try {
//             const res = await fetch(`${dataBasePath}/recetas/${recipe.id}.json`);
//             if (!res.ok) throw new Error('No se pudo cargar la receta');
//             const data = await res.json();

//             details.innerHTML = '';
//             if (data.description) {
//               const d = createEl('p', 'recipe-description', data.description);
//               details.appendChild(d);
//             }

//             if (Array.isArray(data.ingredients) && data.ingredients.length) {
//               const h = createEl('h4', 'recipe-subtitle', 'Ingredientes');
//               const ul = createEl('ul', 'recipe-ingredients');
//               data.ingredients.forEach(i => {
//                 const li = createEl('li', null, i);
//                 ul.appendChild(li);
//               });
//               details.appendChild(h);
//               details.appendChild(ul);
//             }

//             if (Array.isArray(data.steps) && data.steps.length) {
//               const h = createEl('h4', 'recipe-subtitle', 'Paso a paso');
//               const ol = createEl('ol', 'recipe-steps');
//               data.steps.forEach(s => {
//                 const li = createEl('li', null, s);
//                 ol.appendChild(li);
//               });
//               details.appendChild(h);
//               details.appendChild(ol);
//             }

//             loaded = true;
//           } catch (err) {
//             details.innerHTML = '<p class="error">No se pudo cargar el detalle de la receta.</p>';
//           }
//         }
//       });

//       card.appendChild(title);
//       if (excerpt.textContent) card.appendChild(excerpt);
//       card.appendChild(btn);
//       card.appendChild(details);
//       return card;
//     };

//     const renderCategory = (category) => {
//       const sectionId = mapSlugToSectionId[category.slug];
//       if (!sectionId) return;
//       const section = document.getElementById(sectionId);
//       if (!section) return;
//       // Dado que hay IDs duplicados "recetas" dentro de cada sección,
//       // seleccionamos el primer div interno como contenedor.
//       const container = section.querySelector('div') || section;
//       container.innerHTML = '';

//       category.recipes.forEach(recipe => {
//         const card = renderRecipeCard(recipe);
//         container.appendChild(card);
//       });
//     };

//     const init = async () => {
//       try {
//         const res = await fetch(`${dataBasePath}/recipes.json`);
//         if (!res.ok) throw new Error('No se pudieron cargar las categorías');
//         const categories = await res.json();
//         categories.forEach(renderCategory);
//       } catch (err) {
//         console.error(err);
//         // Mostrar un mensaje básico en cada sección si falla la carga
//         Object.values(mapSlugToSectionId).forEach(id => {
//           const section = document.getElementById(id);
//           if (section) {
//             const container = section.querySelector('div') || section;
//             const p = createEl('p', 'error', 'No se pudieron cargar las recetas.');
//             container.innerHTML = '';
//             container.appendChild(p);
//           }
//         });
//       }
//     };

//     init();
//   });

async function renderRecipeCard() {
  const res = await fetch(`./data/recipes.json`);
  if (!res.ok) throw new Error('No se pudieron cargar las categorías');
  const categories = await res.json();

  const idCategories = [
    "recetas-pollo", // => 0 length = 1
    "recetas-cerdo", // => 1 length = 2
    "recetas-platano" // => 2 length = 3
  ];

  let iter = 0;
  while (iter < idCategories.length) {
    const idCategory = idCategories[iter];

    const section = document.getElementById(idCategory);
    if (!section) continue; // contenedor de errores en el dado caso de que no encuentre la sección

    

    iter++;
  }
}

document.addEventListener('DOMContentLoaded', renderRecipeCard)
