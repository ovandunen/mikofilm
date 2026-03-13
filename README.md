# mikofilm

Minimalistische Multi-Page Website für mikofilm. Virtuelle Räume (Conference Rooms, Office, Projects) werden mit Status (frei/besetzt) aus der Odoo JSON-RPC API geladen.

 ## Struktur

```
mikofilm/
├── index.html
├── conference-rooms.html
├── office.html
├── projects.html
├── cooperations.html
├── css/style.css
├── js/odoo-api.js
├── js/main.js
└── assets/
    └── mobius.png    ← Original-Render einfügen
```

## Nächste Schritte

1. **assets/mobius.png** – Originalbild von mikofilm einfügen
2. Odoo Modul `miko_virtual_rooms` installieren
3. `js/odoo-api.js` – `OdooAPI.config.baseUrl` und `db` anpassen
4. CORS in Nginx konfigurieren
5. Statische Website deployen (Hetzner VPS, Netlify, etc.)

## Lokal testen

```bash
# Mit Python
python3 -m http.server 8000

# Oder mit npx
npx serve .
```

Dann http://localhost:8000 öffnen.
