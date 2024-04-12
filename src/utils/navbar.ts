export function navScroll() {
  // Ecouteur d'événement pour le défilement
  window.addEventListener('scroll', () => {
    // Convertir 30rem en pixels (suppose que la taille de police de base est de 16px)
    const remInPixels = 7 * parseFloat(getComputedStyle(document.documentElement).fontSize);

    // Vérifier si le défilement a dépassé 30rem
    if (window.scrollY > remInPixels) {
      // Sélectionner et mettre à jour les éléments .navbar_link
      document.querySelectorAll('.navbar_link').forEach((element) => {
        if (element instanceof HTMLElement) {
          element.style.backgroundColor = 'var(--background-color--background-primary)';
        }
      });
      // Sélectionner et mettre à jour les éléments .navbar_brand-wrapper
      document.querySelectorAll('.navbar_brand-wrapper').forEach((element) => {
        if (element instanceof HTMLElement) {
          element.style.opacity = '0';
        }
      });
    } else {
      // Réinitialiser les styles pour .navbar_link
      document.querySelectorAll('.navbar_link').forEach((element) => {
        if (element instanceof HTMLElement) {
          element.style.backgroundColor = ''; // Ou une autre couleur par défaut
        }
      });
      // Réinitialiser les styles pour .navbar_brand-wrapper
      document.querySelectorAll('.navbar_brand-wrapper').forEach((element) => {
        if (element instanceof HTMLElement) {
          element.style.opacity = ''; // Réinitialiser à l'opacité par défaut
        }
      });
    }
  });
}
