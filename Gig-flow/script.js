// Create the sparkle effect on mouse move
document.addEventListener('mousemove', function(e) {
    const sparkleContainer = document.getElementById('sparkles');

    // Check if the container exists
    if (!sparkleContainer) return;

    // Create a sparkle element
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    // Set the sparkle position based on the mouse coordinates
    const size = Math.random() * 5 + 5; // Random size between 5px and 10px
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.left = `${e.pageX - size / 2}px`; // Position relative to the mouse X
    sparkle.style.top = `${e.pageY - size / 2}px`;  // Position relative to the mouse Y

    // Append the sparkle to the sparkle container
    sparkleContainer.appendChild(sparkle);

    // Remove the sparkle after the animation ends
    setTimeout(function() {
        sparkle.remove();
    }, 1500); // 1.5s for the animation duration
});
