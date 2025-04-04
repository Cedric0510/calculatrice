// Augmente le timeout par défaut pour tous les tests
jest.setTimeout(10000);

// Silence les erreurs attendues dans les tests
const originalConsoleError = console.error;
console.error = (...args) => {
  // Ne pas afficher les erreurs qui font partie des tests
  if (
    args[0].includes('Erreur lors de') && 
    args[1] && 
    args[1].message === 'DB error'
  ) {
    return;
  }
  originalConsoleError(...args);
};