# ⚙️ Monitor n8n workflow health daily with Watchflow

> ⚡ **101 views** · ⚙️ [DevOps & CI/CD](../)

## Description

![image.png](fileId:5093)
# 🚀 Stop Worrying About n8n Workflow Failures – The Ultimate Global Health Monitor

Ever had a critical n8n workflow fail silently, only to discover it days later? **Never again.**

This professional-grade template transforms your n8n workspace into a self-monitoring powerhouse. By leveraging the [Watchflow](https://watchflow.io) node, it automatically audits all your active workflows every day, ensuring your automation engine is running at 100% capacity.

---

## 💎 Why Your n8n Stack Needs This

Managing a handful of workflows is easy. Managing dozens is a nightmare—unless you have a **Watchflow Global Health Monitor**.

- **Eliminate "Silent Failures"**: Most workflows only alert you when *they* run. This monitor alerts you when they *don't* or when they fail without a trigger.
- **Centralized Uptime Dashboard**: Get a bird's-eye view of your entire n8n health inside Watchflow.
- **Enterprise-Grade Reliability**: Built for teams who can't afford a single minute of downtime.
- **Instant Actionable Alerts**: Don't just know *that* it failed—know *why* it failed with direct error reporting to your Watchflow dashboard.

---

## 🛠️ What’s Under the Hood?

This isn't just a simple fetch; it's a smart monitoring logic designed for efficiency:

1.  **Automated Discovery**: Dynamically fetches all `Active` workflows (optionally filtered by tags like #daily).
2.  **Health Audit**: Deep-dives into the latest execution of every workflow to verify its status.
3.  **Intelligent Reporting**:
    *   ✅ **Success?** Sends a heartbeat `Ping` to Watchflow to confirm everything is green.
    *   ❌ **Failure?** Sends a `Fail` event with the exact error message, so you can fix it before anyone notices.

---

## ⚡ Quick Start (Requirements)

To deploy this monitoring powerhouse, you'll need:

1.  **Watchflow Node**: Install the official node using the npm package name: `@watchflow/n8n-nodes-watchflow`.
2.  **Watchflow API Key**: [Signup at watchflow.io](https://watchflow.io), go to **Settings**, and find your key in the **API Key** section.
3.  **n8n API Key**: In your n8n instance, go to **Settings** -&gt; **n8n API** to generate your key.
4.  **Credential Tip**: When setting up your n8n API credentials, use your base URL followed by `/v1/api` (e.g., `https://n8n.yourdomain.com/v1/api`).

---

## 📈 The Result? Peace of Mind.

Deploy this template once, and let it take the watch over your automations. Whether you're running complex lead gen, financial syncs, or infrastructure scripts, the **Watchflow Global Health Monitor** is your first line of defense against automation downtime.

## 🔗 Nodes Used

n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
