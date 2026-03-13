# models/virtual_room.py
# Odoo-Modell für miko_virtual_rooms – Referenz für Backend-Setup
from odoo import models, fields


class VirtualRoom(models.Model):
    _name = 'miko.virtual.room'
    _description = 'Virtueller Raum mikofilm'
    _order = 'sequence asc, name asc'

    name = fields.Char('Raumname', required=True)
    sequence = fields.Integer('Reihenfolge', default=10)

    category = fields.Selection([
        ('conference', 'Meeting & Conference Room'),
        ('office', 'Office'),
        ('project', 'Project'),
    ], required=True)

    status = fields.Selection([
        ('free', 'Frei'),
        ('occupied', 'Besetzt'),
    ], default='free')

    # Für spätere Google Calendar Sync
    google_calendar_id = fields.Char('Google Calendar ID')
    url_slug = fields.Char('URL Slug')  # z.B. "conference-room-1"
