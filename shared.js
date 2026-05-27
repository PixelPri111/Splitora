// Shared logic for Splitora
document.addEventListener('DOMContentLoaded', () => {
    console.log('Splitora shared logic loaded');
});

function exportData() {
    alert('Exporting your transaction history...');
}

function shareSplitLink() {
    const link = window.location.origin + '/join-group=' + Math.random().toString(36).substring(7);
    navigator.clipboard.writeText(link).then(() => {
        alert('Group split link copied to clipboard!');
    });
}

/**
 * Robustly sanitizes currency input strings by stripping away currency symbols (₹, $, etc.),
 * commas, spaces, and other non-numeric characters, preserving the decimal points.
 * Falls back to 0 to prevent UI-breaking NaN values.
 * @param {string|number} value 
 * @returns {number}
 */
function sanitizeCurrency(value) {
    if (value === null || value === undefined) return 0;
    if (typeof value === 'number') {
        return isNaN(value) ? 0 : value;
    }
    let clean = value.toString().trim();
    if (!clean) return 0;
    
    // Strip everything except digits and dot
    clean = clean.replace(/[^0-9.]/g, '');
    
    // Handle multiple decimal points (keep only first dot)
    const parts = clean.split('.');
    if (parts.length > 2) {
        clean = parts[0] + '.' + parts.slice(1).join('');
    }
    
    const parsed = parseFloat(clean);
    return isNaN(parsed) ? 0 : parsed;
}

