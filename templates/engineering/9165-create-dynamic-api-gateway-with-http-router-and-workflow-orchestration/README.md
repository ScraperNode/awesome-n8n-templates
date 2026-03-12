# ⚒️ Create dynamic API Gateway with HTTP Router and workflow orchestration

> ⚡ **394 views** · ⚒️ [Engineering](../)

## Description

## Overview  
This workflow provides a **universal webhook endpoint** that dynamically routes incoming requests to different subflows. It allows you to manage multiple API-like endpoints from a single entry point, while ensuring proper error handling and consistent responses.

## How it works  
1. **Webhook Receiver** – A single URL accepts requests.  
2. **Method Detection** – Branches capture the request method.  
3. **Route Resolver** – Matches the `action` parameter and method against your route configuration.
4. **Execute Subflow** – If valid, the matching workflow is executed.  
5. **Error Handling** – If invalid, the workflow responds with a clear status code and JSON error.

### About the `action` parameter  
The `action` query parameter is the **key** that controls routing:  

- In your **Routes Config**, every route is defined with an `action` name, a list of allowed HTTP methods, and the target subflow ID.  
- When a request comes in, the workflow looks up the provided `action` in this config.  
- If the action is valid and the method is allowed, the corresponding subflow is executed.  
- If not, the workflow returns a structured error.

In other words:  
- **Config side** → map `action` → subflow ID  
- **Request side** → send `?action=...` → determines which subflow runs  

This makes `action` both the **mapping key** in the configuration and the **control key** for triggering the correct logic.  




## Setup steps  
1. Import the workflow into n8n.  
2. Define your routes in the **Routes Config** node. Each route contains:  
   - `action` name  
   - allowed HTTP methods  
   - target subflow ID   

---  

This workflow is useful if you want to:  
- Expose **multiple clean API endpoints** without creating many Webhook nodes  
- Ensure consistent error handling across all endpoints  
- Keep your n8n setup more structured and maintainable  

---  

👉 A practical solution to turn n8n into a **flexible and maintainable API gateway**.

## 🔗 Nodes Used

Webhook, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
