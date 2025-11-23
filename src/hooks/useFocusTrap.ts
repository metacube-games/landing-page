import { useEffect, useRef } from 'react';

/**
 * Custom hook to trap focus within a container element
 * Useful for modals, drawers, and other overlay components
 * @param isActive - Whether the focus trap is currently active
 */
export function useFocusTrap(isActive: boolean) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    // Focus the first element when trap activates
    firstFocusable?.focus();

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    };

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // Close menu on Escape - handled by parent component
        container.dispatchEvent(new CustomEvent('escapekeypress'));
      }
    };

    container.addEventListener('keydown', handleTabKey as EventListener);
    container.addEventListener('keydown', handleEscapeKey as EventListener);

    return () => {
      container.removeEventListener('keydown', handleTabKey as EventListener);
      container.removeEventListener('keydown', handleEscapeKey as EventListener);
    };
  }, [isActive]);

  return containerRef;
}
