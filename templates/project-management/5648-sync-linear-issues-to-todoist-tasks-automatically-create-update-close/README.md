# 📋 Sync Linear issues to Todoist tasks automatically (create, update, close)

> ⚡ **910 views** · 📋 [Project Management](../)

## Description

## ✨ Try It Out!
Sync your **Linear issues to Todoist** automatically with this n8n workflow. When an issue is created, updated, or completed in Linear, a corresponding task is created, updated, or closed in Todoist.

---

## ⚙️ How It Works

- Triggered by issue changes via `linearTrigger`
- Routes based on action (`create`, `update`, `remove`)
- Checks if a matching Todoist task already exists (via issue ID)
- If the issue has:
  - A **due date**
  - And is assigned to **you** (`youremail@example.com`)  
  ➤ Then it creates or updates the task accordingly
- If the issue is marked **Done**, the Todoist task is closed
- If it's deleted in Linear, the Todoist task is also removed
- Sub-issues get enriched with their parent title for clarity

---

## 🛠️ Customization

- Replace `youremail@example.com` with your **Linear email** in the `IF` nodes
- Adjust which states are synced (e.g. “In Progress”, “Todo”...)
- Customize the Todoist project, labels, or title formatting

---

## ⚠️ Bi-directional Sync?

This workflow is **one-way** (Linear ➜ Todoist).  
Bi-directional syncing *might* be possible but isn’t handled here—it would be a cool upgrade!

---

## ✅ Requirements

- n8n with OAuth2 access to **Linear** and **Todoist**
- Your **Linear email** set in the workflow for filtering
- A target Todoist project (default: *Inbox*)

---

## 💬 Need Help?

Ask in the [n8n Forum](https://community.n8n.io/) or join the [Discord](https://discord.com/invite/XPKeKXeB7d).

Happy Automating! 🚀

## 🔗 Nodes Used

Todoist, Linear Trigger, Linear

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
