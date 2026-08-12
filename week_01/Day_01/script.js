const button = document.querySelector('.cta');
const bubbleContainer = document.querySelector('.bubble-container');

const createBubbles = (count) => {
  for (let i = 0; i < count; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    const size = 8 + Math.random() * 18;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${10 + Math.random() * 80}%`;
    bubble.style.bottom = `${5 + Math.random() * 30}%`;
    bubble.style.animationDuration = `${6 + Math.random() * 6}s`;
    bubble.style.animationDelay = `${Math.random() * 4}s`;
    bubbleContainer.appendChild(bubble);
  }
};

const toggleVibe = () => {
  document.body.classList.toggle('vibe-on');
  if (button.textContent.includes('On')) {
    button.textContent = 'Catch the Glow';
  } else {
    button.textContent = 'Turn Up the Vibes';
  }
};

button.addEventListener('click', toggleVibe);
createBubbles(18);
