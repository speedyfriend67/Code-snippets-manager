const snippets = [];

function addSnippet() {
    const languageInput = document.getElementById('language');
    const codeInput = document.getElementById('code');

    const language = languageInput.value.trim();
    const code = codeInput.value.trim();

    if (language && code) {
        const snippet = { language, code };
        snippets.push(snippet);
        displaySnippets();
        
        // Clear inputs
        languageInput.value = '';
        codeInput.value = '';
    } else {
        alert('Please enter both language and code.');
    }
}

function displaySnippets() {
    const snippetList = document.getElementById('snippet-list');
    snippetList.innerHTML = '';

    snippets.forEach((snippet, index) => {
        const snippetItem = document.createElement('div');
        snippetItem.classList.add('snippet');

        const preElement = document.createElement('pre');
        preElement.textContent = snippet.code;

        snippetItem.innerHTML = `<strong>${snippet.language}</strong>`;
        snippetItem.appendChild(preElement);

        snippetList.appendChild(snippetItem);
    });
}
