# 📋 Send a weekly smenso project status report via email with Gmail

> ⚡ **74 views** · 📋 [Project Management](../)

## Description

# Workflow Description — Weekly smenso Project Status Report via Email

---

## English

### Title
Weekly smenso Project Status Report via Email

### Short Description (for n8n template subtitle)
Automatically send a formatted weekly project status report from smenso to your inbox every Monday morning — no manual effort required.

### Full Description

This workflow runs every Monday at 8:00 AM, fetches all active projects from your smenso workspace, and sends a clean HTML status report via email. Perfect for management reporting, weekly standups, or keeping stakeholders informed without any manual work.

**How it works:**
1. The Schedule Trigger fires every Monday at 8:00 AM
2. The smenso node fetches all active projects from your workspace using the Get Many operation
3. A Code node builds a formatted HTML table with project names, start dates, and end dates
4. The report is sent via email (Gmail, Outlook, or SMTP)

**Use cases:**
- Automated weekly project overview for management or clients
- Monday morning briefing for project leads
- Keep stakeholders informed without logging into smenso
- Build a paper trail of weekly project status

**Setup requirements:**
- A smenso workspace with the Integration API add-on enabled
- A smenso API token (generated in the smenso Admin Center at admin.smenso.cloud)
- An email account configured in n8n (Gmail, Microsoft Outlook, or SMTP)

**Customize:**
- Change the schedule (e.g. daily, every Friday) by editing the cron expression
- Add additional project fields to the report (status, budget, responsible user)
- Replace Gmail with Microsoft Outlook or any SMTP node

---

## Deutsch

### Titel
Wöchentlicher smenso Projektstatusbericht per E-Mail

### Kurzbeschreibung
Verschicke jeden Montag automatisch einen formatierten Projektstatusbericht aus smenso per E-Mail — ohne manuellen Aufwand.

### Ausführliche Beschreibung

Dieser Workflow läuft jeden Montag um 8:00 Uhr, ruft alle aktiven Projekte aus deinem smenso Workspace ab und versendet einen übersichtlichen HTML-Statusbericht per E-Mail. Ideal für Management-Reporting, wöchentliche Standups oder um Stakeholder ohne manuellen Aufwand auf dem Laufenden zu halten.

**So funktioniert es:**
1. Der Schedule Trigger startet jeden Montag um 8:00 Uhr
2. Der smenso Node ruft alle aktiven Projekte über die Get Many Operation ab
3. Ein Code Node erstellt eine formatierte HTML-Tabelle mit Projektnamen, Start- und Enddaten
4. Der Bericht wird per E-Mail versendet (Gmail, Outlook oder SMTP)

**Anwendungsfälle:**
- Automatisierte wöchentliche Projektübersicht für Management oder Kunden
- Montagmorgen-Briefing für Projektleiter
- Stakeholder informieren ohne smenso zu öffnen
- Wöchentliche Projektstatushistorie aufbauen

**Voraussetzungen:**
- smenso Workspace mit aktiviertem Enterprise Add-on "smenso Integration API"
- smenso API-Token (generiert im smenso Admin Center unter admin.smenso.cloud)
- E-Mail-Konto in n8n konfiguriert (Gmail, Microsoft Outlook oder SMTP)

**Anpassen:**
- Zeitplan ändern (z.B. täglich, jeden Freitag) über den Cron-Ausdruck
- Weitere Projektfelder in den Bericht aufnehmen (Status, Budget, Verantwortlicher)
- Gmail durch Microsoft Outlook oder einen SMTP-Node ersetzen

## 🔗 Nodes Used

Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
