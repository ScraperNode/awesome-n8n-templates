# 📁 Selectively import workflows between instances using the n8n API and forms

> ⚡ **2 views** · 📁 [File Management](../)

## Description

## How it works

- Retrieves workflows directly from an n8n instance using the n8n API  
- Dynamically generates a form to select which workflows to import  
- Supports both fixed instance configuration and dynamic source/target selection  
- Formats workflows safely and creates them in the target instance  

You stay in control at every step: nothing is imported unless you explicitly select it.

## Set up steps

**Estimated setup time:** 2–5 minutes

- **Simple mode:**  
  Add API credentials for the source and target n8n instances and run the workflow.

- **Dynamic mode (optional):**  
  Connect a database (e.g. Notion or Supabase) containing your n8n instance URLs and API keys, then select the source and target instances via the form.

No manual exports, no bulk imports, and no additional configuration required.

## 🔗 Nodes Used

HTTP Request, Notion, n8n, Filter, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
