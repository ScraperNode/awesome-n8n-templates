# 📋 Create smenso tasks from Gmail with automatic project assignment

> ⚡ **13 views** · 📋 [Project Management](../)

## Description

# Workflow Description — Create smenso Task from Gmail with automatic Project Assignment

---

## English

### Title
Create smenso Task from Gmail with automatic Project Assignment

### Short Description
Turn emails into smenso tasks automatically — use a keyword in the subject line to assign tasks to the right project, get a confirmation reply, and keep your inbox clean.

### Full Description

This workflow monitors a Gmail inbox for emails with the subject **"smenso Task"** and automatically creates tasks in your smenso workspace. What makes it smart: by adding a keyword in square brackets to the subject line, the workflow automatically assigns the task to the matching smenso project. The sender receives a confirmation reply and the email is marked as read.

**How it works:**
1. Gmail Trigger polls the inbox every minute for unread emails matching "smenso Task"
2. A filter ensures only emails from trusted senders (your domain) are processed
3. All active smenso projects are fetched to enable automatic matching
4. A Code node extracts the keyword from the subject and finds the matching project
5. The task is created in the matched project (or a fallback project if no match is found)
6. The sender receives an automatic confirmation reply with task and project details
7. The email is marked as read so it won't be processed again

**Email format:**
- **Subject:** `smenso Task [ProjectKeyword]: My Task Title`
- **Body:** Task description

**Examples:**
- `smenso Task [Marketing]: Create new campaign brief` → task created in the Marketing project
- `smenso Task [IT]: Fix server issue` → task created in the IT project
- `smenso Task: General task without keyword` → task created in the default fallback project

**Use cases:**
- Allow team members to create smenso tasks directly from their email client
- Let clients or external partners submit tasks without needing a smenso account
- Forward important emails and turn them into actionable tasks automatically
- Use from mobile — compose an email and the task appears in the right project

**Setup requirements:**
- A smenso workspace with the Integration API add-on enabled
- A smenso API token (generated in the smenso Admin Center at admin.smenso.cloud)
- A Gmail account with OAuth2 credentials configured in n8n


---

## Deutsch

### Titel
smenso Task aus Gmail erstellen mit automatischer Projektzuordnung

### Kurzbeschreibung
E-Mails automatisch in smenso Tasks umwandeln — mit einem Keyword im Betreff wird der Task dem richtigen Projekt zugeordnet, der Absender erhält eine Bestätigung und das Postfach bleibt sauber.

### Ausführliche Beschreibung

Dieser Workflow überwacht ein Gmail-Postfach auf E-Mails mit dem Betreff **"smenso Task"** und erstellt automatisch Tasks in deinem smenso Workspace. Das Besondere: Durch ein Keyword in eckigen Klammern im Betreff wird der Task automatisch dem passenden smenso Projekt zugeordnet. Der Absender erhält eine Bestätigungs-E-Mail und die ursprüngliche Mail wird als gelesen markiert.

**So funktioniert es:**
1. Gmail Trigger prüft jede Minute das Postfach auf ungelesene E-Mails mit "smenso Task"
2. Ein Filter stellt sicher dass nur E-Mails von vertrauenswürdigen Absendern verarbeitet werden
3. Alle aktiven smenso Projekte werden abgerufen um die automatische Zuordnung zu ermöglichen
4. Ein Code Node extrahiert das Keyword aus dem Betreff und findet das passende Projekt
5. Der Task wird im gefundenen Projekt angelegt (oder im Fallback-Projekt falls kein Match)
6. Der Absender erhält automatisch eine Bestätigungs-E-Mail mit Task- und Projektdetails
7. Die E-Mail wird als gelesen markiert damit sie nicht erneut verarbeitet wird

**E-Mail Format:**
- **Betreff:** `smenso Task [ProjektKeyword]: Mein Task-Titel`
- **Inhalt:** Task-Beschreibung

**Beispiele:**
- `smenso Task [Marketing]: Neues Kampagnen-Briefing erstellen` → Task im Marketing-Projekt
- `smenso Task [IT]: Server-Problem beheben` → Task im IT-Projekt
- `smenso Task: Allgemeiner Task ohne Keyword` → Task im Standard-Fallback-Projekt

**Anwendungsfälle:**
- Teammitglieder können smenso Tasks direkt aus ihrem E-Mail-Client erstellen
- Kunden oder externe Partner können Tasks einreichen ohne smenso-Zugang zu benötigen
- Wichtige E-Mails weiterleiten und automatisch in umsetzbare Tasks umwandeln
- Vom Smartphone aus nutzen — E-Mail schreiben und der Task erscheint im richtigen Projekt

**Voraussetzungen:**
- smenso Workspace mit aktiviertem Enterprise Add-on "smenso Integration API"
- smenso API-Token (generiert im smenso Admin Center unter admin.smenso.cloud)
- Gmail-Konto mit OAuth2-Zugangsdaten in n8n

## 🔗 Nodes Used

Gmail, Gmail Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
