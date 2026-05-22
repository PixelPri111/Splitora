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
