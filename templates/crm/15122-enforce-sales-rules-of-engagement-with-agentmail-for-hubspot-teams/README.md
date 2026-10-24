# 🤝 Enforce sales rules of engagement with AgentMail for HubSpot teams

> ⚡ **11 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Who’s it for
This is for SaaS founders, agency owners, and Sales Ops managers who use **HubSpot** but are tired of "toe-stepping." If your BDRs are accidentally emailing your AE’s active deals, or Marketing is blasting "Closed Won" accounts with generic newsletters, your CRM has failed you. This template is for teams that want infrastructure-level enforcement of their sales hierarchy using **AgentMail**.

## How it works / What it does
CRM "Rules of Engagement" are often ignored because human laziness is stronger than your HubSpot setup. This agnostic flow moves enforcement from the CRM dashboard directly to your email infrastructure:

* **The Deal Shield:** When an AE (Priority 3) sends an email, the BDR and Marketing inboxes are automatically blocked at the server level for that specific lead.
* **Pro Triple-Threat Routing:** Detects "HOT" signals in replies (e.g., "pricing", "demo") and automatically labels the thread while shielding the lead from automated marketing drips.
* **Market Refresh:** An automated weekly decay timer releases "Soft Blocks" after your defined window (e.g., 30 days), ensuring your reachable market doesn't shrink into a black hole.

## Requirements
* **AgentMail Account:** You need an API key from the [AgentMail Console](https://console.agentmail.to).
* **n8n Instance:** Must support native **Data Tables**.

## How to set up
1.  **Initialize the Brain:** Click "Execute Workflow" on the **DATABASE SETUP** trigger. This creates your `Team_Config` Data Table automatically.
2.  **Set Your Rules:** Go to the **Data Tab** (left menu) in n8n and enter your rep emails and priorities. (AE = 3, BDR = 2, Mkt = 1).
3.  **Bootstrap Webhooks:** Run the **Layer 1** trigger once to automatically register your n8n URLs as webhooks in AgentMail.
4.  **Activate:** Toggle the workflow to **Active**. The infrastructure is now the Law—reps cannot bypass these blocks.

## How to customize the workflow
To add more tiers (e.g., an Account Management team), simply **add a new row** to the `Team_Config` Data Table. The hierarchy logic is fully dynamic: any new tier added will automatically block those with a lower `priority` integer. No code or regex editing is required.

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
