/**
 * Utility function for smooth scrolling to sections with perfect alignment
 * Works consistently across all devices (Windows, tablets, mobile)
 */
export const scrollToSection = (sectionId: string) => {
  // Add a small delay to ensure layout is stable
  setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    // Handle specific sections with different alignment
    let offset = 0;
    
    // For insurance management and hospitality bookkeeping, center them properly
    if (sectionId === 'insurance-management' || sectionId === 'hospitality-bookkeeping') {
      const windowHeight = window.innerHeight;
      const elementHeight = element.offsetHeight;
      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top + window.pageYOffset;
      
      // Center the element in the viewport
      offset = (windowHeight - elementHeight) / 2;
      const targetScrollTop = elementTop - offset;
      
      // Ensure we don't scroll above the top of the page
      const finalScrollTop = Math.max(0, targetScrollTop);
      
      // Smooth scroll to the calculated position
      try {
        window.scrollTo({
          top: finalScrollTop,
          behavior: 'smooth'
        });
      } catch {
        window.scrollTo(0, finalScrollTop);
      }
      return;
    }
    
    // For other sections, use tight alignment at the top
    const elementRect = element.getBoundingClientRect();
    const elementTop = elementRect.top + window.pageYOffset;
    const targetScrollTop = elementTop - offset;
    
    // Ensure we don't scroll above the top of the page
    const finalScrollTop = Math.max(0, targetScrollTop);
    
    // Smooth scroll with fallback for better browser compatibility
    try {
      window.scrollTo({
        top: finalScrollTop,
        behavior: 'smooth'
      });
    } catch {
      // Fallback for browsers that don't support smooth scrolling
      window.scrollTo(0, finalScrollTop);
    }
    
  }, 50); // Small delay to ensure layout stability
};
