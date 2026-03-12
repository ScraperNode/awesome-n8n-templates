# ⚒️ Design scalable sync workflows with Data Tables, ProspectPro and HubSpot

> ⚡ **614 views** · ⚒️ [Engineering](../)

## Description

This template is a **pattern library** (one importable workflow) that shows a repeatable way to structure n8n automations so they remain **easy to extend, cheaper to run, and safer to scale**.

It’s intentionally **opinionated and dry**: the goal is not “plug & play”, but a set of proven building blocks you can copy into your own workflows.

### Problems this framework solves
- **Spaghetti workflows that are hard to change**  
  A consistent split into *Trigger → Manager → Function → Utility* so changes don’t ripple through everything.
- **Duplicate processing when runs overlap**  
  Uses “in progress / success / error” indicators so the trigger can skip items that are already being processed.
- **Unnecessary re-runs that keep failing**  
  Items that fail can be marked/parked, so you don’t burn executions repeating the same error.
- **Execution costs exploding over time**  
  Offers polling + batching alternatives when “one event = one execution” becomes too expensive.
- **Rate limits and API throttling under load**  
  Includes rate-limited processing patterns (delays/throttling) to smooth spikes.
- **Missed items during downtime, deploys, or restarts**  
  Stores sync state (e.g., lastSync) in **n8n Data Tables** instead of relying on in-memory state.
- **Long-running pagination that becomes fragile**  
  Demonstrates manual “page-wise” pagination (fetch N → process N → checkpoint → repeat) to avoid huge in-memory batches.
- **Debugging incidents without visibility**  
  Includes an error workflow pattern (Error Trigger + notification) and structured error logging.

### What you get in this template
- Trigger patterns (simple and rate-limited)
- Polling / batching patterns (basic → more robust → fully configurable with pagination)
- A “manager” pattern for stateful processing and overlap protection
- Function + utility workflow examples for reusability
- Error logging to a Data Table and an example Telegram alert

### Requirements / setup
- n8n version that includes the **Data Table** node
- Create/replace Data Tables used in the template (e.g. `Timestamps`, `Errors`)
- Example nodes use **ProspectPro**, **HubSpot**, and **Telegram** (optional). Replace these with your own tools if you’re not using them.

### Important notes
- This is **not** a finished automation. Import it, then **choose the pattern(s)** you need and swap the example “get items / process item” steps for your own logic.
- Some patterns include looping/recursion options—configure stop conditions carefully to avoid unintended infinite runs.
- This framework is **one** effective route to scalable n8n systems, not the only one.

**Note:** this is a living document that will be updated periodically.

## 🔗 Nodes Used

HTTP Request, Webhook, Telegram, HubSpot, Execute Sub-workflow, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
