// navigation.js
document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;
    const userRole = localStorage.getItem('userRole'); // 'pro' ou null/client

    // Détection de la page active
    const isIndex = path.includes('index.html') || path === '/';
    const isMarket = path.includes('marketplace.html') || path.includes('dashboard-pro.html');
    const isChat = path.includes('mensajes.html');
    const isPros = path.includes('comunidad.html');

    // CONFIGURATION DYNAMIQUE
    // Si Pro -> "Chambas" / Si Client -> "Servicios"
    const labelTab2 = (userRole === 'pro') ? 'Chambas' : 'Servicios';
    const iconTab2 = (userRole === 'pro') ? 'fa-briefcase' : 'fa-list-ul';
    const linkTab2 = (userRole === 'pro') ? 'dashboard-pro.html' : 'servicios.html';

    const navHTML = `
    <style>
        .tab-bar-wrapper {
            position: fixed; bottom: 25px; width: 100%;
            max-width: 450px; padding: 0 20px; z-index: 9999;
            left: 50%; transform: translateX(-50%);
        }
        .tab-bar { 
            width: 100%; height: 70px; background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1);
            border-radius: 25px; display: grid; grid-template-columns: repeat(5, 1fr);
            align-items: center; box-shadow: 0 15px 35px rgba(0,0,0,0.5);
        }
        .tab-item { 
            display: flex; flex-direction: column; align-items: center; 
            justify-content: center; gap: 2px; color: #64748b; 
            cursor: pointer; text-decoration: none;
        }
        .tab-item.active { color: #f97316; }
        .tab-item i { font-size: 18px; }
        .tab-item span { font-size: 7px; font-weight: 900; text-transform: uppercase; }

        .plus-button {
            position: absolute; top: -28px; width: 55px; height: 55px;
            background: #f97316; border-radius: 18px;
            display: flex; align-items: center; justify-content: center;
            color: #000; font-size: 22px; border: 5px solid #020617;
            cursor: pointer;
        }
    </style>

    <div class="tab-bar-wrapper">
        <nav class="tab-bar">
            <div class="tab-item ${isIndex ? 'active' : ''}" onclick="window.location.href='index.html'">
                <i class="fa-solid fa-house"></i>
                <span>Inicio</span>
            </div>

            <div class="tab-item ${isMarket ? 'active' : ''}" onclick="window.location.href='${linkTab2}'">
                <i class="fa-solid ${iconTab2}"></i>
                <span>${labelTab2}</span>
            </div>
            
            <div class="flex justify-center items-center relative" onclick="window.location.href='solicitar.html'">
                <div class="plus-button">
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>

            <div class="tab-item ${isChat ? 'active' : ''}" onclick="window.location.href='mensajes.html'">
                <i class="fa-solid fa-comment"></i>
                <span>Chat</span>
            </div>

            <div class="tab-item ${isPros ? 'active' : ''}" onclick="window.location.href='comunidad.html'">
                <i class="fa-solid fa-users"></i>
                <span>Pros</span>
            </div>
        </nav>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', navHTML);
});