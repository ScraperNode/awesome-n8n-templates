# ⚡ 🧹 Archive (delete) duplicate items from a Notion database

> ⚡ **1,064 views** · ⚡ [Personal Productivity](../)

## Description

### 🧑‍💼 Who is this for?

If you’re using **Notion** to manage a database (like saving links, tasks, notes, or anything really), and it’s starting to get messy with duplicate entries, this workflow is for you.

It’s especially useful if you want to keep things tidy *without* doing any manual cleanup.

### 🧠 What problem is this workflow solving?

Notion doesn’t have a built-in way to find or remove duplicates, so you either clean them up manually 😩 or just let them pile up.

This workflow automatically finds entries that share the same property (like a URL or title) and archives the extra copies, keeping just one.

### ⚙️ What this workflow does

- Pulls all pages from a Notion database.
- Identifies duplicates based on a property you choose.
- Archives the duplicate pages (which is like soft-deleting them).
- Keeps one version of each duplicate group.

It includes **two optional triggers**:

- Run it every day ⏰
- Or trigger it automatically when a new page is added to the database ⚡

### 🛠️ Setup

1. Connect your Notion account in n8n.
2. Select your database in the Notion nodes.
3. In the **“Format items properly”** node, replace `"SET YOUR PROPERTY HERE"` with a reference to the property you want to use for detecting duplicates. I recommend using the n8n property drag-and-drop feature.
4. Enable whichever trigger you prefer — or both.

And that’s it. It runs on its own after that.

### 🧩 How to customize this workflow to your needs

- Use a different property for detecting duplicates by updating the `Set` node.
- Want to tag duplicates instead of archiving them? Just replace the last Notion node with an update operation.
- Adjust the schedule to run it hourly, weekly, or whenever suits your setup.

## 🔗 Nodes Used

Notion, Notion Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
