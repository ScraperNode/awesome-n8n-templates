# ⚙️ Redis locking for concurrent task handling

> ⚡ **710 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## 👤 Who is this for?

This workflow is great for **n8n users who want to prevent duplicate or overlapping workflow runs**. If you're a developer, DevOps engineer, or automation enthusiast managing tasks like **database updates, syncing tools, or hitting rate-limited APIs**, this one’s for you.

---

## 🧩 What problem does this solve?

In the real world, automations can get triggered at the same time—whether that’s because of multiple webhook calls, overlapping schedules, or retries. And when two workflows try to do the same thing at once (like updating a record or syncing data), it can cause **conflicts, data corruption, or wasted API calls**.

This workflow helps avoid that problem by using **Redis as a lock system**, so **only one instance runs at a time**. Think of it like putting up a “🚧 Workflow in Progress” sign while your logic is running.

---

## ⚙️ What this workflow does

1. When the workflow starts, it tries to **set a Redis key** as a lock with a short expiry.
2. If the lock is free:
   - Your **main business logic runs**.
   - Once it's done, the lock is cleared.
3. If the lock is already taken (i.e., another run is in progress):
   - The workflow will **wait and retry** a few times.
4. If a duplicate request shows up while one is already being processed:
   - It **skips that duplicate** to avoid unnecessary work.

You can customize both the **timeout** and **retry logic** to match your needs.

---

## 🛠️ Setup guide

To use this template:

- You’ll need access to a **Redis instance** (either self-hosted or managed like Upstash, Redis Cloud, etc).
- Set up your Redis credentials in the n8n Redis node.
- Swap out the webhook node with your actual trigger or logic.
- Adjust the lock timeout to match how long your task typically takes.

&gt; 💡 **Bonus Tip:** Use this pattern wherever you need **idempotency** or want to avoid **duplicate processing**.

---

## 🧪 Example use case

Let’s say you have a workflow that **syncs ClickUp tickets to Google Sheets**. It runs daily at 9 AM and updates tickets, adds notes, and makes sure nothing is missed.

But what if two runs start at the same time? Or someone triggers a manual sync while the scheduled one is still working?

By wrapping that whole sync inside this **Redis locking template**, you can make sure it **only runs one at a time**, saving your APIs (and your sanity).

## 🔗 Nodes Used

Redis, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
