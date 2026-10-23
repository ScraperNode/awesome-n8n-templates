# 📋 Create smenso tasks from webhooks and notify Microsoft Teams

> ⚡ **11 views** · 📋 [Project Management](../)

## Description

# Workflow Description — Create smenso Task from Webhook and notify Microsoft Teams

---

## English

### Title
Create smenso Task from Webhook and notify Microsoft Teams

### Short Description (for n8n template subtitle)
Receive data from any app or form via webhook, automatically create a task in smenso, and notify your team in Microsoft Teams.

### Full Description

This workflow listens for incoming webhook requests and automatically creates a task in your smenso project management workspace. Once the task is created, the team receives an instant notification in a Microsoft Teams channel via an Adaptive Card.

**How it works:**
1. The Webhook node receives a POST request from any external app, form, or system
2. The incoming data is mapped to smenso task fields (title, description, project)
3. A new task is created in the defined smenso project via the smenso API
4. Microsoft Teams receives a notification with the task details as an Adaptive Card
5. The webhook caller receives a JSON success response

**Use cases:**
- Connect any web form (Typeform, Elementor, Webflow) to smenso — new submission = new task
- Trigger task creation from other tools like Zapier, Make, or custom applications
- Allow external systems to push tasks into smenso without direct API access
- Keep your team informed in Microsoft Teams whenever a new task arrives

**Setup requirements:**
- A smenso workspace with the Integration API add-on enabled
- A smenso API token (generated in the smenso Admin Center at admin.smenso.cloud)
- Your smenso Project ID (find it by running smenso → Project → Get Many)
- A Microsoft Teams Incoming Webhook URL (create via Teams channel → Manage channel → Connectors → Incoming Webhook)

**Webhook payload format:**
Send a POST request to the webhook URL with the following JSON body:
```json
{
  "title": "My Task Title",
  "description": "Task description goes here",
  "projectId": "your-smenso-project-id"
}
```

**Note:** The projectId field is optional — if not provided, the workflow uses the default project ID configured in the "Prepare Fields" node.

---

## Deutsch

### Titel
smenso Task per Webhook erstellen und Microsoft Teams benachrichtigen

### Kurzbeschreibung
Empfange Daten von beliebigen Apps oder Formularen per Webhook, erstelle automatisch einen Task in smenso und benachrichtige dein Team in Microsoft Teams.

### Ausführliche Beschreibung

Dieser Workflow empfängt eingehende Webhook-Anfragen und erstellt automatisch einen Task in deinem smenso Projektmanagement-Workspace. Nach der Task-Erstellung erhält das Team sofort eine Benachrichtigung in einem Microsoft Teams Channel als Adaptive Card.

**So funktioniert es:**
1. Der Webhook-Node empfängt einen POST-Request von einer externen App, einem Formular oder System
2. Die eingehenden Daten werden auf smenso Task-Felder gemappt (Titel, Beschreibung, Projekt)
3. Ein neuer Task wird über die smenso API im definierten Projekt angelegt
4. Microsoft Teams erhält eine Benachrichtigung mit den Task-Details als Adaptive Card
5. Der Webhook-Aufrufer erhält eine JSON-Erfolgsantwort

**Anwendungsfälle:**
- Beliebige Webformulare (Typeform, Elementor, Webflow) mit smenso verbinden — neue Einreichung = neuer Task
- Task-Erstellung aus anderen Tools wie Zapier, Make oder eigenen Anwendungen auslösen
- Externen Systemen ermöglichen, Tasks in smenso zu pushen ohne direkten API-Zugang
- Team in Microsoft Teams informieren sobald ein neuer Task eingeht

**Voraussetzungen:**
- smenso Workspace mit aktiviertem Enterprise Add-on "smenso Integration API"
- smenso API-Token (generiert im smenso Admin Center unter admin.smenso.cloud)
- smenso Projekt-ID (zu finden über smenso Node → Ressource: Project → Operation: Get Many, oder im smenso-projekt auf GUID , siehe [Helpcenter](https://help.smenso.de/hc/de/articles/360010813977-Projekt-verwalten-Projektstammdaten) )
- Microsoft Teams Incoming Webhook URL (erstellen über Teams Channel → Kanal verwalten → Connectors → Incoming Webhook)

**Webhook Payload Format:**
POST-Request an die Webhook-URL mit folgendem JSON-Body:
```json
{
  "title": "Mein Task-Titel",
  "description": "Task-Beschreibung hier",
  "projectId": "deine-smenso-projekt-id"
}
```

**Hinweis:** Das Feld projectId ist optional — falls nicht angegeben, verwendet der Workflow die Standard-Projekt-ID aus dem "Prepare Fields" Node.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
