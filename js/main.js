/**
 * Main Application Logic
 * General utilities and site-wide interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Update Year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
