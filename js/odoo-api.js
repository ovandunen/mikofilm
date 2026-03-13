/**
 * Odoo JSON-RPC API Client – mikofilm
 * Konfiguration vor Deployment anpassen
 */
const OdooAPI = {

  config: {
    baseUrl: 'https://DEINE-ODOO-DOMAIN.com',  // ← anpassen
    db:      'DEINE-DATENBANK',                 // ← anpassen
  },

  /**
   * Generischer JSON-RPC Call an Odoo
   */
  async call(model, method, args = [], kwargs = {}) {
    const res = await fetch(`${this.config.baseUrl}/web/dataset/call_kw`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'call',
        params: { model, method, args, kwargs }
      })
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error.data?.message || data.error.message);
    return data.result;
  },

  /**
   * Alle virtuellen Räume laden
   */
  async getAllRooms() {
    return await this.call('miko.virtual.room', 'search_read', [[]], {
      fields: ['name', 'category', 'status', 'url_slug'],
      order: 'sequence asc, name asc'
    });
  },

  /**
   * Räume nach Kategorie filtern
   * Kategorien: conference | office | project
   */
  async getRoomsByCategory(category) {
    return await this.call('miko.virtual.room', 'search_read',
      [[['category', '=', category]]],
      { fields: ['name', 'status', 'url_slug'], order: 'sequence asc' }
    );
  }
};
