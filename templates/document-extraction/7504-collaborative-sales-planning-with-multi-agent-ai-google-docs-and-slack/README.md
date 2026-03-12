# 🔬 Collaborative sales planning with multi-agent AI, Google Docs, and Slack

> ⚡ **1,071 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Multi-Agent Architecture Free Bootstrap Template for Beginners
[![Watch the video](https://wisestackai.s3.ap-southeast-1.amazonaws.com/n8n-multi-agent-architecture-free-bootstrap-template-for-beginners.jpg)](https://www.youtube.com/watch?v=BfMY2jFJR9k)

_Free template to learn and reuse a multi-agent architecture in n8n. The company metaphor: a **CEO (orchestrator)** delegates to **Marketing, Operations, Finance** to produce a short sales-season plan, export it to PDF, and share it._

## **Who’s it for**
- Builders who want a **clear, minimal pattern** for multi-agent orchestration in n8n.  
- Teams demoing/teaching agent collaboration with **one coordinator + three specialists**.  
- Anyone needing a **repeatable template** to generate plans from multiple “departments”.

## **How it works / What it does**
1. **Trigger (Manual)** — Click *Execute workflow* to start.
2. **Edit Fields** — Provide brief inputs (company, products, dates, constraints, channels, goals).
3. **CEO Agent (Orchestrator)** — Reads the brief, calls 3 tool agents once, merges results, resolves conflicts.
4. **Marketing Agent** — Proposes top campaigns + channels + content calendar.
5. **Operations Agent** — Outlines inventory/staffing readiness, fulfillment steps, risks.
6. **Finance Agent** — Suggests pricing/discounts, budget split, targets.
7. **Compose Document** — CEO produces Markdown; node converts to Google Doc → **PDF**.
8. **Share** — Upload the PDF to Slack (or Drive) for review.

**Outputs**
- **Markdown plan** with sections (Summary, Timeline, Marketing, Ops, Pricing, Risks, Next Actions).  
- **Compact JSON** for automation (campaigns, budget, dates, actions).  
- **PDF** file for stakeholders.

## **How to set up**
1. **Add credentials**
   - OpenAI (or your LLM provider) for all agents.
   - Google (Drive/Docs) to create the document and export PDF.
   - Slack (optional) to upload/share the PDF.
2. **Map nodes (suggested)**
   - **When clicking ‘Execute workflow’** → **Edit Fields** (form with: `company`, `products`, `audience`, `start_date`, `end_date`, `channels`, `constraints`, `metrics`).
   - **CEO Agent** (AI Tool Node) → calls **Marketing Agent**, **Operations Agent**, **Finance Agent** (AI Tool Nodes).
   - **Configure metadata** (doc title from company + window).
   - **Create document file** (Google Docs API) with CEO Markdown.
   - **Convert to PDF** (export).
   - **Upload a file** (Slack) to share.
3. **Prompts (drop-in)**
   - **CEO (system)**: orchestrate 3 tools; request concise JSON+Markdown; merge & resolve; output sections + JSON.
   - **Marketing / Operations / Finance (system)**: each returns a small JSON per its scope (campaigns/calendar; staffing/steps/risks; discounts/budget/targets).
4. **Test** — Run once; verify the PDF and Slack message.

## **Requirements**
- n8n (current version with **AI Tool Node**).  
- LLM credentials (e.g., OpenAI).  
- Google credentials for Docs/Drive (to create & export).  
- Optional Slack bot token for file uploads.

## **How to customize the workflow**
- **Swap roles**: Replace departments (e.g., Product, Legal, Support) or add more tool agents.
- **Change outputs**: Export to **DOCX/HTML/Notion**; add a cover page; attach brand styles.
- **Approval step**: Insert **Slack “Send & Wait”** before PDF generation for review/edits.
- **Data grounding**: Add RAG (Sheets/DB/Docs) so agents cite inventory, pricing, or past campaign KPIs.
- **Automation JSON**: Extend the schema to match your CRM/PM tool and push `next_actions` into Jira/Asana.
- **Scheduling**: Replace manual trigger with a **cron** (weekly/monthly planning).
- **Localization**: Add a Translation agent or set language via input field.
- **Guardrails**: Add length limits, cost caps (max tokens), and validation on agent JSON.

## 🔗 Nodes Used

HTTP Request, Slack, Google Drive, AI Agent, OpenAI Chat Model, AI Agent Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
