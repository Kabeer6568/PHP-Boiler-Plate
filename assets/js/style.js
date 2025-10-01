function toggleMenu() {
            const menu = document.getElementById('navMenu');
            menu.classList.toggle('active');
        }

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            const menu = document.getElementById('navMenu');
            const toggle = document.querySelector('.menu-toggle');
            
            if (!menu.contains(e.target) && !toggle.contains(e.target)) {
                menu.classList.remove('active');
            }
        });



        // Login Page

function togglePassword(inputId) {
            const input = document.getElementById(inputId);
            input.type = input.type === 'password' ? 'text' : 'password';
        }

        function handleLogin(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            alert(`Login attempted with:\nEmail: ${email}`);
            // Add your login logic here
        }