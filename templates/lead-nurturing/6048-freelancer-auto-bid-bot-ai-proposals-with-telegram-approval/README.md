# 💬 Freelancer Auto-Bid Bot — AI Proposals with Telegram Approval

> ⚡ **353 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# 🔁 Auto-Bidder for Freelancer.com with Telegram Approval and AI Proposals

This **n8n template** automates your freelance bidding workflow on [Freelancer.com](https://freelancer.com), combining API calls, Telegram interactions, and AI-generated proposals. Ideal for freelancers who want to bid smarter, faster, and hands-free.

## ✨ Features

- 🔍 **Skill-Based Project Search**  
  Searches for active projects on Freelancer.com using your chosen skill keywords (e.g., `n8n`, `Python`, `Django`).

- 🚫 **Duplicate Bid Prevention**  
  Automatically checks if you’ve already bid on a project and skips it.

- 🤖 **AI Proposal Generation**  
  Generates short, persuasive, and customized proposals using an AI agent.

- 📬 **Telegram Notifications**  
  Sends project summaries to Telegram with inline buttons to **Bid** or **Cancel**.

- ✅ **Auto-Bid Submission**  
  When you approve a project via Telegram, the bid is submitted with predefined values (amount, period, milestone).

- ⏱️ **Manual or Scheduled Execution**  
  Supports both on-demand and scheduled workflows (hourly, daily, etc.).

## 📌 Requirements

- Freelancer.com API token (OAuth)
- Telegram Bot API token
- OpenAI API key (for proposal generation)

## 📎 Use Cases

- Freelancers automating repetitive bidding tasks
- Agencies managing client profiles
- Developers experimenting with AI + API + chat integration

## 🔗 Included Workflows

- `freelancerMain` – Kicks off execution with skill input
- `freelancerAgent` – Performs project search, bidding logic, Telegram prompts, and AI proposal generation

---

&gt; 💡 Tip: You can easily customize the skill query list, bid amount logic, or prompt format in the workflow settings.

## 🔗 Nodes Used

HTTP Request, Telegram, Execute Sub-workflow, Execute Workflow Trigger, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
