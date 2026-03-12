# ⚒️ Prevent concurrent workflow runs using Redis

> ⚡ **925 views** · ⚒️ [Engineering](../)

## Description

## What does this template do?  
This workflow sets a small "lock" value in Redis so that only one copy of a long job can run at the same time. If another trigger fires while the job is still busy, the workflow sees the lock, stops early, and throws a clear error. This protects your data and keeps you from hitting rate limits.  
Because the workflow also stores simple progress flags ("working", "loading", "finishing"), you can poll the current status and show live progress for very long jobs.

## Use Case  
Great when the same workflow can be called many times in parallel (for example by webhooks, cron jobs, or nested Execute Workflow calls) and you need an "only run once at a time" guarantee without building a full queue system.

## What the Workflow Does  
- ⚡ Starts through **Execute Workflow Trigger** called by another workflow  
- 🔄 A **Switch** sends the run to **Get**, **Set**, or **Unset** actions  
- 💾 **Redis** reads or writes a key named `process_status_&lt;key&gt;` with a time‑to‑live (default 600 s)  
- 🚦 **If** nodes check the key and decide to continue or stop  
- ⏱️ **Wait** nodes stand in for the slow part of your job (replace these with your real work)  
- 📈 Updates the key with human‑readable progress values that another workflow can fetch with `action = get`  
- 🏁 When done, the lock is removed so the next run can start  

## Apps & Services Used  
- Redis  
- Core n8n nodes (Switch, If, Set, Wait, Stop and Error)  

## Pre‑requisites  
- A Redis server that n8n can reach  
- Redis credentials stored in n8n  
- A second workflow that calls this one and sends:  
  - `action` set to `get`, `set`, or `unset`  
  - `key` set to a unique name for the job  
  - Optional `timeout` in seconds  

## Customization Tips  
- Increase or decrease the TTL in the **Set Timeout** node to match how long your job usually runs  
- Add or rename status values ("working", "loading", "finishing", and so on) to show finer progress  
- Replace **Stop and Error** with a Slack or email alert, or even push the extra trigger into a queue if you prefer waiting instead of failing  
- Use different Redis keys if you need separate locks for different tasks  
- Build a small "status endpoint" workflow that calls this one with `action = get` to display real‑time progress to users

## Additional Use Cases  

### 🛑 Telegram callback spam filter  
If a Telegram bot sends many identical callbacks in a burst, call this workflow first to place a lock. Only the first callback will proceed; the rest will exit cleanly until the lock clears. This keeps your bot from flooding downstream APIs.

### 🧩 External API rate‑limit protection  
Run heavy API syncs one after the other so parallel calls do not break vendor rate limits.

### 🔔 Maintenance window lock  
Block scheduled maintenance tasks from overlapping, making sure each window finishes before the next starts.

## 🔗 Nodes Used

Redis, Execute Sub-workflow, Stop and Error, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
