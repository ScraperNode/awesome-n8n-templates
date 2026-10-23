# ⚙️ Monitor scheduled workflow health with Silent Fail pings

> ⚡ **6 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick Overview
This workflow runs every hour and performs your custom work, then pings Silent Fail via an HTTP request so Silent Fail can alert you if the workflow stops running and the expected pings no longer arrive.

## How it works
1. Runs every hour on a schedule trigger.
2. Executes your custom workflow steps (replacing the placeholder step).
3. Sends an HTTP request to the Silent Fail ping URL to report a successful run completion.
4. Silent Fail monitors the ping cadence and alerts you if the workflow stops checking in.

## Setup
1. Create a monitor in Silent Fail and copy its ping URL/token.
2. Update the HTTP request URL to replace `PASTE_YOUR_MONITOR_TOKEN` with your Silent Fail monitor token.
3. Set the monitor’s expected interval in Silent Fail to match the workflow schedule (hourly by default), then activate the workflow.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
