# ⚙️ Reconnect migrated workflows and datatables between n8n instances

> ⚡ **30 views** · ⚙️ [DevOps & CI/CD](../)

## Description

**Purpose**
This workflow is designed to automate the re-wiring of all your subworkflows and datatable actions after migrating them to a new n8n instance.

**What it does**

- **Recursive ID Swapping**: 
Takes a master dictionary of your old IDs -&gt; new IDs, loops through your workflow JSONs, and recursively hunts down and replaces the node parameters. (Saves you from having to know if the ID is nested in an options object or at the root).

- **Bypasses the strict API schema**: 
If you've ever tried to push an updated workflow back to n8n via the API and hit the dreaded request/body/settings must NOT have additional properties error, this script fixes that. It strips out the legacy settings, id, and createdAt properties before sending the PUT request, so the new instance accepts the payload cleanly.

- **Fixes the stringification bug:** 
Wraps the payload properly so you don't accidentally send [object Object] to the API.

**Instructions**
Basically you just need to define the relevant URL's and setup your n8n API credentials - then VERY CAREFULLY select the right credentials in the right nodes.  Full instructions can be found in the sticky notes.

## 🔗 Nodes Used

HTTP Request, n8n

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
