# 📖 Detect KB gaps and auto-draft articles with GPT-4.1, Slack and Gmail

> ⚡ **39 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

### Who is this for?

Support teams, knowledge managers, and ops builders who are **drowning in outdated KB articles and repeat tickets**. If your team keeps answering the same questions because your knowledge base has gaps nobody has time to find — this template finds them automatically and writes the first draft for you.

### What does it do?

This is a **complete multi-agent AI pipeline** — 31 nodes across 7 pipeline stages that automate the entire KB maintenance lifecycle:

- **Gap analysis** — An AI agent cross-references your recent support tickets against your existing KB articles and identifies what's missing, what's weak, and what's stale.
- **Automated article drafting** — For every gap found, a second AI agent writes a complete KB article draft using your actual ticket data as context.
- **Quality review** — A third AI agent scores each draft on accuracy, completeness, and clarity — so you know what's ready to publish and what needs work.
- **Health scoring** — A fourth AI agent generates a comprehensive health report with a 0-100 score, letter grade, executive summary, and prioritised action items.
- **Dual notifications** — Results are delivered via both Slack (rich blocks) and Gmail (polished HTML email) with color-coded health scores, gap tables, and action items.
- **Staleness detection** — Flags existing articles that haven't been updated in configurable timeframes.
- **Scheduled automation** — Runs daily on a cron schedule (or manually on demand).

### How it works

The **Configuration** node defines your helpdesk API endpoints, notification settings, and thresholds. The pipeline fetches recent tickets and current KB articles via HTTP, normalises the data, then sends it to the **Gap Analysis Agent** (GPT-4.1).

If gaps are found, each gap is split into an individual item and routed through the **Article Drafter Agent** → **Quality Reviewer Agent** pipeline. In parallel, a **Staleness Check** flags outdated articles.

All results merge into the **Report Generator Agent**, which produces a structured health report. The **Format Outputs** node transforms this into both Slack blocks and a polished HTML email, delivered simultaneously via webhook and Gmail.

If no gaps are found, the pipeline skips article drafting but still runs the staleness check and generates a health report.

### How to use it

1. Import the workflow JSON into n8n
2. Open the **Configuration** node and set your helpdesk API URL, notification email, and Slack webhook
3. Connect your OpenAI credentials to the 4 AI model nodes
4. Connect your Gmail credential to the Send Email Report node
5. Update the 2 HTTP Request fetch nodes with your helpdesk authentication
6. Run manually to test, then activate the daily schedule

**Required:** OpenAI API key (GPT-4.1 and GPT-4.1-mini), Gmail account (for email reports)
**Optional:** Slack incoming webhook (for Slack reports), any helpdesk with a REST API (Zendesk, Freshdesk, Intercom, etc.)

---

## Tags

`AI`, `AI Agent`, `Multi-Agent`, `LLM`, `OpenAI`, `GPT-4.1`, `Knowledge Base`, `Support`, `Helpdesk`, `Zendesk`, `Content`, `Automation`, `Gap Analysis`, `KB Management`, `Slack`, `Gmail`, `Report`

---


### Data Collection
&gt; **Ticket & KB Fetcher** — Pulls recent support tickets and current knowledge base articles from your helpdesk API. Data is normalised into a consistent format for AI analysis. Update the HTTP Request nodes with your helpdesk URL and authentication.

### AI Analysis Pipeline
&gt; **Multi-Agent Gap Analysis** — 4 specialised AI agents work in sequence: (1) Gap Analysis identifies missing, weak, and stale content by cross-referencing tickets against KB articles. (2) Article Drafter writes complete KB article drafts for each gap. (3) Quality Reviewer scores each draft. (4) Report Generator produces a health score, executive summary, and prioritised actions.

### Output & Notifications
&gt; **Dual Notification System** — Results are formatted into both Slack blocks (with emoji health grades, key findings, and action items) and a polished HTML email (with color-coded score circle, gap tables with urgency badges, and action tables). Both are delivered simultaneously. Either channel can be disabled in the Configuration node.

### Staleness Detection
&gt; **Article Freshness Check** — Runs in parallel with the main pipeline. Flags any KB article not updated within the configurable threshold (default: 90 days). Results feed into the health report regardless of whether gaps were found.

---

## Setup Note

&gt; ⚠️ **Credential Setup Required**: After importing, you must configure: (1) OpenAI credentials on 4 AI model nodes (2x GPT-4.1, 2x GPT-4.1-mini), (2) Gmail OAuth credential on the Send Email Report node, (3) Your helpdesk API URL and auth on 2 HTTP Request nodes, and (4) Your Slack webhook URL and email address in the Configuration node. See the Setup Guide for a step-by-step checklist.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
