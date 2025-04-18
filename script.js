document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const logoImg = document.getElementById("logo-coningenio");

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");
        if (body.classList.contains("dark-mode")) {
            logoImg.src = "img/logo2darkmode.png";
        } else {
            logoImg.src = "img/logo2.png";
        }
    });

    const loadServices = async () => {
        try {
            const response = await fetch("https://cors-anywhere.herokuapp.com/https://ciisa.coningenio.cl/v1/services/", {
                headers: {
                    Authorization: "Bearer ciisa"
                }
            });
            const result = await response.json();

            console.log("Datos services:", result);

            const container = document.getElementById("services-container");
            container.innerHTML = "";

            result.data.forEach(service => {
                const card = document.createElement("div");
                card.className = "service-card";
                card.innerHTML = `
                    <div class="service-icon"><i class="fas fa-cogs"></i></div>
                    <h3>${service.titulo.esp}</h3>
                    <p>${service.descripcion.esp}</p>
                `;
                container.appendChild(card);
            });

            const select = document.getElementById("servicio");
            result.data.forEach(service => {
                const option = document.createElement("option");
                option.value = service.titulo.esp;
                option.textContent = service.titulo.esp;
                select.appendChild(option);
            });

        } catch (error) {
            console.error("Error al cargar servicios:", error);
        }
    };

    const loadAboutUs = async () => {
        try {
            const response = await fetch("https://cors-anywhere.herokuapp.com/https://ciisa.coningenio.cl/v1/about-us/", {
                headers: {
                    Authorization: "Bearer ciisa"
                }
            });
            const result = await response.json();

            console.log("Datos about-us:", result);

            const container = document.getElementById("about-container");
            container.innerHTML = "";

            result.data.forEach(section => {
                const div = document.createElement("div");
                div.className = "about-section";
                div.innerHTML = `
                    <h3>${section.titulo.esp}</h3>
                    <p>${section.descripcion.esp}</p>
                `;
                container.appendChild(div);
            });

        } catch (error) {
            console.error("Error al cargar información de 'Nosotros':", error);
        }
    };

    loadServices();
    loadAboutUs();

    const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validaciones básicas (el HTML5 ya hace parte del trabajo)
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const servicio = document.getElementById("servicio");
    const mensaje = document.getElementById("mensaje");

    let valid = true;

    if (!nombre.value.trim()) {
        document.getElementById("nombre-error").textContent = "Ingrese su nombre.";
        valid = false;
    } else {
        document.getElementById("nombre-error").textContent = "";
    }

    if (!email.value.trim() || !email.checkValidity()) {
        document.getElementById("email-error").textContent = "Ingrese un correo válido.";
        valid = false;
    } else {
        document.getElementById("email-error").textContent = "";
    }

    if (!servicio.value) {
        document.getElementById("servicio-error").textContent = "Seleccione un servicio.";
        valid = false;
    } else {
        document.getElementById("servicio-error").textContent = "";
    }

    if (!mensaje.value.trim()) {
        document.getElementById("mensaje-error").textContent = "Escriba un mensaje.";
        valid = false;
    } else {
        document.getElementById("mensaje-error").textContent = "";
    }

    if (valid) {
        console.log("Formulario enviado con éxito:");
        console.log("Nombre:", nombre.value);
        console.log("Email:", email.value);
        console.log("Servicio:", servicio.value);
        console.log("Mensaje:", mensaje.value);

        // Mostrar mensaje de éxito
        alert("¡Gracias por tu mensaje! Te contactaremos pronto.");

        // Limpiar formulario
        contactForm.reset();
    }
});

});
