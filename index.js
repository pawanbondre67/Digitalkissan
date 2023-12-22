function toggleChatbot() {
            var popup = document.getElementById('chatbotPopup');
            popup.classList.toggle('slide-in-up');
            popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
        }