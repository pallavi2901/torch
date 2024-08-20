function toggleState() {
    const button = document.getElementById('toggleButton');
    const container = document.getElementById('container');
    const text = document.getElementById('text');

    if (button.classList.contains('active')) {
        // Revert to initial state
        button.classList.remove('active');
        button.textContent = 'Click Again';
        container.style.backgroundColor = '#f0f0f0';
        text.textContent = 'Try Once';
    } else {
        // Change to new state
        button.classList.add('active');
        button.textContent = 'Clicked!';
        container.style.backgroundColor = '#73FBFD';
        text.textContent = 'Torch On!';
    }
}
