# ⚒️ Unify multiple triggers into a single workflow

> ⚡ **1,828 views** · ⚒️ [Engineering](../)

## Description

Stop duplicating your work! This template demonstrates a powerful design pattern to handle multiple triggers (e.g., Form, Webhook, Sub-workflow) within a single, unified workflow. 

By using a "normalize and consolidate" technique, your core logic becomes independent of the trigger that started it, making your automations cleaner, more scalable, and far easier to maintain.

## **Who is this for?**

* **n8n developers & architects:** Build robust, enterprise-grade workflows that are easy to maintain.
* **Automation specialists:** Integrate the same core process with multiple external systems without repeating yourself.
* **Anyone who values clean design:** Apply the DRY (Don't Repeat Yourself) principle to your automations.

## What problem does this solve?

* **Reduces duplication:** Avoids creating near-identical workflows for each trigger source.
* **Simplifies maintenance:** Update your core logic in one place, not across multiple workflows.
* **Improves scalability:** Easily add new triggers without altering the core processing logic.
* **Enhances readability:** A clear separation of data intake from core logic makes workflows easier to understand.

## How it works (The "Normalize & Consolidate" Pattern)

1.  **Trigger:** The workflow starts from one of several possible entry points, each with a unique data structure.
2.  **Normalize:** Each trigger path immediately flows into a dedicated **Set** node. This node acts as an adapter, reformatting the unique data into a standardized schema with consistent key names (e.g., mapping `body.feedback` to `feedback`).
3.  **Consolidate:** All "normalize" nodes connect to a single **Set** node. This node uses the generic `{{ $json.key_name }}` expression to accept the standardized data from any branch. From here, the workflow is a single, unified path.

## Setup

This template is a blueprint. To adapt it:

1.  **Replace the triggers** with your own.
2.  **Normalize your data:** After each trigger, use a **Set** node to map its unique output to your common schema.
3.  **Connect to the consolidator:** Link all your "normalize" nodes to the **Consolidate trigger data** node.
4.  **Build your core logic** after the consolidation point, referencing the unified data.


## Taking it further

* **Merge any branches:** Use this pattern to merge any parallel branches in a workflow, not just triggers.
* **Create robust error handling:** Unify "success" and "error" paths before a final notification step to report on the outcome.

## 🔗 Nodes Used

Slack, Webhook, Execute Workflow Trigger, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
