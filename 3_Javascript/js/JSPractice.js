document.getElementById('applyButton').addEventListener('click', function() {
    const width = document.getElementById('inputWidth').value;
    const height = document.getElementById('inputHeight').value;
    const content = document.getElementById('inputContent').value;
    const color = document.getElementById('inputColor').value;
    const align = document.getElementById('inputAlign').value;

    const newElement = document.createElement('div');
    
    newElement.style.width = width + 'px';
    newElement.style.height = height + 'px';
    
    newElement.style.color = color;
    
    newElement.style.textAlign = align;
    
    newElement.style.backgroundColor = '#f0f0f0'; 
    newElement.style.border = '1px solid black';
    newElement.style.lineHeight = height + 'px';
    
    newElement.innerText = content;

    const outputArea = document.getElementById('output');
    
    outputArea.innerHTML = '';
    outputArea.appendChild(newElement); 
});