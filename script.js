

    
    // JSON con i dati degli appartamenti
    const apartments = [
        {
            title: "Appartamento Vista Mare",
            rating: "4.80",
            hostName: "Mario Rossi",
            date: "01-06 Feb",
            price: 100,
            images: [
                "assets/1.webp",
                "assets/2.webp",
                "assets/3.webp",
                "assets/4.webp"
            ]
        },
        {
            title: "Loft Moderno",
            rating: "4.54",
            hostName: "Anna Bianchi",
            date: "03-08 Feb",
            price: 120,
            images: [
                "assets/3.webp",
                "assets/1.webp",
                "assets/2.webp",
                "assets/4.webp",
            ]
        },
        {
            title: "Appartamento in Centro",
            rating: "4.73",
            hostName: "Luca Verdi",
            date: "05-10 Feb",
            price: 90,
            images: [
                "assets/2.webp",
                "assets/1.webp",
                "assets/4.webp",
                "assets/3.webp",
            ]
        },
        {
            title: "Villa in Montagna",
            rating: "5.00",
            hostName: "Claudia Moretti",
            date: "10-15 Feb",
            price: 150,
            images: [
                "assets/4.webp",
                "assets/1.webp",
                "assets/2.webp",
                "assets/3.webp",
            ]
        },
        {
            title: "Appartamento Vista Mare",
            rating: "4.80",
            hostName: "Mario Rossi",
            date: "01-06 Feb",
            price: 100,
            images: [
                "assets/1.webp",
                "assets/2.webp",
                "assets/3.webp",
                "assets/4.webp"
            ]
        },
        {
            title: "Loft Moderno",
            rating: "4.54",
            hostName: "Anna Bianchi",
            date: "03-08 Feb",
            price: 120,
            images: [
                "assets/3.webp",
                "assets/1.webp",
                "assets/2.webp",
                "assets/4.webp",
            ]
        },
        {
            title: "Appartamento in Centro",
            rating: "4.73",
            hostName: "Luca Verdi",
            date: "05-10 Feb",
            price: 90,
            images: [
                "assets/2.webp",
                "assets/1.webp",
                "assets/4.webp",
                "assets/3.webp",
            ]
        },
        {
            title: "Villa in Montagna",
            rating: "5.00",
            hostName: "Claudia Moretti",
            date: "10-15 Feb",
            price: 150,
            images: [
                "assets/4.webp",
                "assets/1.webp",
                "assets/2.webp",
                "assets/3.webp",
            ]
        }

    ];

    // Funzione per generare dinamicamente le card con il carousel
  
    function renderApartments(apartments) {
        const container = document.getElementById("apartments-list");

        apartments.forEach((apartment, index) => {
            const carouselId = `carousel-${index}`; // ID univoco per ogni carousel
            const card = document.createElement("div");
            card.classList.add("col-6", "col-md-4", "col-lg-3", "mb-4");

            card.innerHTML = `
                <div class="overflow-hidden position-relative">
                    <header class="row d-flex align-items-center flex-nowrap p-3 position-absolute top-0 left-0 w-100 z-1"> 
                        <div class="col">
                            <small class="d-inline-block text-nowrap py-1 px-3 bg-white rounded-pill">Amato dagli ospiti</small>
                            </div>
                        <div class="col-auto like">
                            <i class="bi bi-heart text-white"></i>
                            <i class="bi bi-heart-fill text-white d-none"></i>
                            </div>
                        </header>

                <div id="${carouselId}" class="carousel slide rounded overflow-hidden mb-3" data-bs-ride="false">
                    
                    <!-- Indicatori (puntini) -->
                    <div class="carousel-indicators">
                        ${apartment.images.map((image, imgIndex) => `
                    <button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="${imgIndex}"class="${imgIndex === 0 ? "active" : ""}"aria-label="Slide ${imgIndex + 1}"></button>`).join('')}
                    </div>

                    <!-- Slide delle immagini -->
                    <div class="carousel-inner">
                     ${apartment.images.map((image, imgIndex) => `
                            <div class="carousel-item ${imgIndex === 0 ? "active" : ""}">
                                <img src="${image}" class="d-block w-100" alt="${apartment.title}">
                            </div>`
                                ).join('')}
                    </div>

                    <!-- Pulsanti di navigazione -->
                    <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></>
                        <span class="visually-hidden">Next</span>
                    </button>

                </div>
                
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <h6 class="card-title">${apartment.title}</h6>
                            </div>
                            <div class="col-auto d-flex align-items-center lh-1">
                               <i class="bi bi-star-fill"></i> 
                               <span class="mt-1 ms-1">${apartment.rating}</span> 
                            </div>
                        </div>

                        
                        <p class="card-text">
                           <span class="text-secondary">
                            Host: ${apartment.hostName}<br>
                            Date: ${apartment.date}<br>
                            </span>
                            <span class="fw-bold">${apartment.price} € </span> notte
                            
                        </p>
                    </div>
                </div>
            `;

            container.appendChild(card);
        });
    }

    // Renderizza gli appartamenti
    renderApartments(apartments);

    //Funzione per cambiare d-none ai cuori presenti nel div con classe like
    document.addEventListener("DOMContentLoaded", function () {
        // Seleziona tutti i div con classe "like"
        document.querySelectorAll(".like").forEach(likeDiv => {
            likeDiv.addEventListener("click", function () {
                // Trova i due elementi <i> all'interno del div like
                const icons = likeDiv.querySelectorAll("i");

                // Se ci sono esattamente 2 icone, scambia la classe d-none
                if (icons.length === 2) {
                    icons[0].classList.toggle("d-none");
                    icons[1].classList.toggle("d-none");
                }
            });
        });
    });
