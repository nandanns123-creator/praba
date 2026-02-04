// Recipe data (unchanged from Part 1)
const recipes = [ /* your 8 recipes from Part 1 */ ];

// State management
let currentFilter = 'all';
let currentSort = 'none';

// DOM references
const recipeContainer = document.querySelector('#recipe-container');
const filterButtons = document.querySelectorAll('[data-filter]');
const sortButtons = document.querySelectorAll('[data-sort]');

// Pure filter functions
const filterByDifficulty = (recipes, filterType) => {
  switch(filterType) {
    case 'easy': return recipes.filter(r => r.difficulty === 'easy');
    case 'medium': return recipes.filter(r => r.difficulty === 'medium');
    case 'hard': return recipes.filter(r => r.difficulty === 'hard');
    case 'quick': return recipes.filter(r => r.time < 30);
    default: return recipes;
  }
};

// Pure sort functions  
const sortByName = (recipes) => [...recipes].sort((a, b) => a.title.localeCompare(b.title));
const sortByTime = (recipes) => [...recipes].sort((a, b) => a.time - b.time);

// Main update pipeline
const updateDisplay = () => {
  let recipesToDisplay = recipes;
  
  // Apply filter
  recipesToDisplay = filterByDifficulty(recipesToDisplay, currentFilter);
  
  // Apply sort
  switch(currentSort) {
    case 'name': recipesToDisplay = sortByName(recipesToDisplay); break;
    case 'time': recipesToDisplay = sortByTime(recipesToDisplay); break;
  }
  
  // Render
  renderRecipes(recipesToDisplay);
  console.log(Displaying ${recipesToDisplay.length} recipes (Filter: ${currentFilter}, Sort: ${currentSort}));
};

// Update active button states
const updateActiveButtons = () => {
  filterButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.filter === currentFilter));
  sortButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.sort === currentSort));
};

// Event handlers
const handleFilterClick = (e) => {
  if (e.target.dataset.filter) {
    currentFilter = e.target.dataset.filter;
    updateDisplay();
    updateActiveButtons();
  }
};

const handleSortClick = (e) => {
  if (e.target.dataset.sort) {
    currentSort = e.target.dataset.sort;
    updateDisplay();
    updateActiveButtons();
  }
};

// Setup listeners
const setupEventListeners = () => {
  document.querySelector('.filter-buttons').addEventListener('click', handleFilterClick);
  document.querySelector('.sort-buttons').addEventListener('click', handleSortClick);
};

// Part 1 functions (unchanged)
const createRecipeCard = (recipe) => {
  return `
    <div class="recipe-card" data-id="${recipe.id}">
      <h3>${recipe.title}</h3>
      <div class="recipe-meta">
        <span>⏱️ ${recipe.time} min</span>
        <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
      </div>
      <p>${recipe.description}</p>
    </div>
  `;
};

const renderRecipes = (recipesToRender) => {
  const recipeCardsHTML = recipesToRender.map(createRecipeCard).join('');
  recipeContainer.innerHTML = recipeCardsHTML;
};

// Initialize
setupEventListeners();
updateDisplay();// Recipe data (unchanged from Part 1)
const recipes = [ /* your 8 recipes from Part 1 */ ];

// State management
let currentFilter = 'all';
let currentSort = 'none';

// DOM references
const recipeContainer = document.querySelector('#recipe-container');
const filterButtons = document.querySelectorAll('[data-filter]');
const sortButtons = document.querySelectorAll('[data-sort]');

// Pure filter functions
const filterByDifficulty = (recipes, filterType) => {
  switch(filterType) {
    case 'easy': return recipes.filter(r => r.difficulty === 'easy');
    case 'medium': return recipes.filter(r => r.difficulty === 'medium');
    case 'hard': return recipes.filter(r => r.difficulty === 'hard');
    case 'quick': return recipes.filter(r => r.time < 30);
    default: return recipes;
  }
};

// Pure sort functions  
const sortByName = (recipes) => [...recipes].sort((a, b) => a.title.localeCompare(b.title));
const sortByTime = (recipes) => [...recipes].sort((a, b) => a.time - b.time);

// Main update pipeline
const updateDisplay = () => {
  let recipesToDisplay = recipes;
  
  // Apply filter
  recipesToDisplay = filterByDifficulty(recipesToDisplay, currentFilter);
  
  // Apply sort
  switch(currentSort) {
    case 'name': recipesToDisplay = sortByName(recipesToDisplay); break;
    case 'time': recipesToDisplay = sortByTime(recipesToDisplay); break;
  }
  
  // Render
  renderRecipes(recipesToDisplay);
  console.log(Displaying ${recipesToDisplay.length} recipes (Filter: ${currentFilter}, Sort: ${currentSort}));
};

// Update active button states
const updateActiveButtons = () => {
  filterButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.filter === currentFilter));
  sortButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.sort === currentSort));
};

// Event handlers
const handleFilterClick = (e) => {
  if (e.target.dataset.filter) {
    currentFilter = e.target.dataset.filter;
    updateDisplay();
    updateActiveButtons();
  }
};

const handleSortClick = (e) => {
  if (e.target.dataset.sort) {
    currentSort = e.target.dataset.sort;
    updateDisplay();
    updateActiveButtons();
  }
};

// Setup listeners
const setupEventListeners = () => {
  document.querySelector('.filter-buttons').addEventListener('click', handleFilterClick);
  document.querySelector('.sort-buttons').addEventListener('click', handleSortClick);
};

// Part 1 functions (unchanged)
const createRecipeCard = (recipe) => {
  return `
    <div class="recipe-card" data-id="${recipe.id}">
      <h3>${recipe.title}</h3>
      <div class="recipe-meta">
        <span>⏱️ ${recipe.time} min</span>
        <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
      </div>
      <p>${recipe.description}</p>
    </div>
  `;
};

const renderRecipes = (recipesToRender) => {
  const recipeCardsHTML = recipesToRender.map(createRecipeCard).join('');
  recipeContainer.innerHTML = recipeCardsHTML;
};

// Initialize
setupEventListeners();
updateDisplay();// Recipe data (unchanged from Part 1)
const recipes = [ /* your 8 recipes from Part 1 */ ];

// State management
let currentFilter = 'all';
let currentSort = 'none';

// DOM references
const recipeContainer = document.querySelector('#recipe-container');
const filterButtons = document.querySelectorAll('[data-filter]');
const sortButtons = document.querySelectorAll('[data-sort]');

// Pure filter functions
const filterByDifficulty = (recipes, filterType) => {
  switch(filterType) {
    case 'easy': return recipes.filter(r => r.difficulty === 'easy');
    case 'medium': return recipes.filter(r => r.difficulty === 'medium');
    case 'hard': return recipes.filter(r => r.difficulty === 'hard');
    case 'quick': return recipes.filter(r => r.time < 30);
    default: return recipes;
  }
};

// Pure sort functions  
const sortByName = (recipes) => [...recipes].sort((a, b) => a.title.localeCompare(b.title));
const sortByTime = (recipes) => [...recipes].sort((a, b) => a.time - b.time);

// Main update pipeline
const updateDisplay = () => {
  let recipesToDisplay = recipes;
  
  // Apply filter
  recipesToDisplay = filterByDifficulty(recipesToDisplay, currentFilter);
  
  // Apply sort
  switch(currentSort) {
    case 'name': recipesToDisplay = sortByName(recipesToDisplay); break;
    case 'time': recipesToDisplay = sortByTime(recipesToDisplay); break;
  }
  
  // Render
  renderRecipes(recipesToDisplay);
  console.log(Displaying ${recipesToDisplay.length} recipes (Filter: ${currentFilter}, Sort: ${currentSort}));
};

// Update active button states
const updateActiveButtons = () => {
  filterButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.filter === currentFilter));
  sortButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.sort === currentSort));
};

// Event handlers
const handleFilterClick = (e) => {
  if (e.target.dataset.filter) {
    currentFilter = e.target.dataset.filter;
    updateDisplay();
    updateActiveButtons();
  }
};

const handleSortClick = (e) => {
  if (e.target.dataset.sort) {
    currentSort = e.target.dataset.sort;
    updateDisplay();
    updateActiveButtons();
  }
};

// Setup listeners
const setupEventListeners = () => {
  document.querySelector('.filter-buttons').addEventListener('click', handleFilterClick);
  document.querySelector('.sort-buttons').addEventListener('click', handleSortClick);
};

// Part 1 functions (unchanged)
const createRecipeCard = (recipe) => {
  return `
    <div class="recipe-card" data-id="${recipe.id}">
      <h3>${recipe.title}</h3>
      <div class="recipe-meta">
        <span>⏱️ ${recipe.time} min</span>
        <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
      </div>
      <p>${recipe.description}</p>
    </div>
  `;
};

const renderRecipes = (recipesToRender) => {
  const recipeCardsHTML = recipesToRender.map(createRecipeCard).join('');
  recipeContainer.innerHTML = recipeCardsHTML;
};

// Initialize
setupEventListeners();
updateDisplay();
