const customOnLoad = (() => {
    if (document.readyState == 'loading') {
        alert('Документ загружается')
        document.addEventListener('DOMContentLoaded', () => alert('Документ готов'));
    }
})()
