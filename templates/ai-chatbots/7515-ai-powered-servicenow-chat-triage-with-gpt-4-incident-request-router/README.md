# 🤖 AI-powered ServiceNow chat triage with GPT-4 — Incident & request router

> ⚡ **788 views** · 🤖 [AI Chatbots & Agents](../)

## Description

# Short description

Automatically triage incoming chat messages into **Incidents**, **Service Requests**, or **Other** using an LLM-powered classifier; create Incidents in ServiceNow, submit Service Catalog requests (HTTP), and route everything else to an AI Agent with web search + memory. Includes an optional summarization step for ticket context.

# Full description

This n8n template wires a chat trigger to an LLM-based **Text Classifier** and then routes messages to the appropriate downstream action:

1. **Trigger**: `When chat message received` — incoming messages from your chat channel.
2. **Text Classifier**: small LLM prompt/classifier that returns one of three labels: `Incident`, `Request`, or `Everything Else`.
3. **Create Incident** (ServiceNow connector): when labeled **Incident**, the workflow creates a Servicenow Incident record (short fields: short\_description, description, priority, caller).
4. **Submit General Request** (HTTP Request): when labeled **Request**, the workflow calls your Service Catalog API (POST) to place a catalog item / submit a request.
5. **AI Agent**: when labeled **Everything Else**, route to an AI Agent node that:

   * uses an OpenAI chat model for contextual replies,
   * can consult **SerpAPI** (web search) as a tool,
   * saves relevant context to **Simple Memory** for future conversations.
6. **Summarization Chain**: optional chain to summarize long chat threads into concise ticket descriptions before creating incidents/requests.

This template is ideal for support desks that want automated triage with human-quality context and searchable memory.

# Key highlights (what to call out)

* **Three-way LLM triage**: ensures messages are routed automatically to the correct backend action (Incident vs Service Request vs AI handling).
* **ServiceNow native connector**: uses the ServiceNow node to create Incidents (safer than raw HTTP for incidents).
* **Service Catalog via HTTP**: flexible — supports organizations using RESTful catalog endpoints.
* **Summarization before ticket creation**: produces concise, high-quality `short_description` and `description` fields.
* **AI Agent + Memory + Web Search**: handles non-ticket queries with web-augmented answers and stores context for follow-ups.
* **Failover & logging**: include a catch node (optional) that logs failures and notifies admins.

# Required credentials & inputs (must configure)

* **ServiceNow**: Instance URL + API user (must have rights to create incidents).
* **Service Catalog HTTP endpoint**: URL + API key / auth header (for POST).
* **OpenAI API key** (or other LLM provider): for Text Classifier, Summarization Chain, and AI Agent.
* **SerpAPI key** (optional): for web search tools inside the AI Agent.
* **Memory store**: Simple Memory node (or external DB) for conversation history.

# Nodes included (quick map)

* Trigger: `When chat message received`
* Processor: `Text Classifier` (OpenAI/LLM)
* Branch A: `ServiceNow (Create Incident)`
* Branch B: `HTTP Request` (Service Catalog POST)
* Branch C: `AI Agent` (OpenAI + SerpAPI + Simple Memory)
* Shared: `Summarization Chain` (used before A or B where enabled)
* Optional: `Error / Audit logging` node, `Slack/email` notifications

# Recommended n8n settings & tips

* **Use structured outputs** from classifier (`{ label: "Incident", confidence: 0.92 }`) so you can implement confidence thresholds.
* **If confidence &lt; 0.7**, route to a human review queue instead of auto-creating a ticket.
* **Sanitize user PII** before storing in memory or sending to external APIs.
* **Rate-limit** OpenAI/SerpAPI calls to avoid unexpected bills.
* **Test the Service Catalog POST body** in Postman first — include sample `variables` JSON.

# Short sample variables JSON (Service Catalog POST)

```json
{
  "sysparm_quantity": 1,
  "variables": {
    
    "description": "User reports VPN timeout on Windows machine; error code 1234"
  }
}
```

## 🔗 Nodes Used

HTTP Request, ServiceNow, AI Agent, Summarization Chain, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
