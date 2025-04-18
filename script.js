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
            data.forEach(service => {
                const option = document.createElement("option");
                option.value = service.title;
                option.textContent = service.title;
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
});
