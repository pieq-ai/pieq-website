/**
 * Utility function for smooth scrolling to sections with proper positioning
 * Handles different scroll behaviors for different section types
 */
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const headerHeight = 80; // Approximate header height
  
  // For solutions and contact sections, use smaller offset for better alignment
  if (sectionId === 'solutions' || sectionId === 'contact') {
    const elementPosition = element.offsetTop - 20; // Further reduced offset to minimize extra space
    window.scrollTo({
      top: Math.max(0, elementPosition),
      behavior: 'smooth'
    });
  } else if (sectionId === 'insurance-management') {
    // For insurance management, center the card to show the text above and card in middle
    const windowHeight = window.innerHeight;
    const elementHeight = element.offsetHeight;
    const elementPosition = element.offsetTop - headerHeight - (windowHeight - elementHeight) / 2 + 50; // Move down slightly more
    window.scrollTo({
      top: Math.max(0, elementPosition),
      behavior: 'smooth'
    });
  } else if (sectionId === 'hospitality-bookkeeping') {
    // For hospitality bookkeeping, use centering behavior
    const windowHeight = window.innerHeight;
    const elementHeight = element.offsetHeight;
    const elementPosition = element.offsetTop - headerHeight - (windowHeight - elementHeight) / 2;
    window.scrollTo({
      top: Math.max(0, elementPosition),
      behavior: 'smooth'
    });
  } else {
    // For other sections, use centering behavior
    const windowHeight = window.innerHeight;
    const elementHeight = element.offsetHeight;
    const elementPosition = element.offsetTop - headerHeight - (windowHeight - elementHeight) / 2;
    window.scrollTo({
      top: Math.max(0, elementPosition),
      behavior: 'smooth'
    });
  }
};
