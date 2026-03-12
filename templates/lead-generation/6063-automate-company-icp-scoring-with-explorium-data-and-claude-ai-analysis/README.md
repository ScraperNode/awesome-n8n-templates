# 🎣 Automate company ICP scoring with Explorium data and Claude AI analysis

> ⚡ **463 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# 🧠 ICP Scoring Agent (n8n + Explorium + LLM)

This workflow automates Ideal Customer Profile (ICP) scoring for any company using a combination of Explorium data and an LLM-driven evaluation framework.

---

## 🔧 How It Works

1. **Input**: Company name is submitted via form.
2. **Data Enrichment**: Explorium's MCP Server is used to fetch firmographic, hiring, and tech data about the company.
3. **Scoring Logic**: An AI agent (LLM) applies a 3-pillar framework to assess and score the company.
4. **Output**: A structured JSON or Google Doc summary is generated using the AgentGeeks formatter.

---

## 📊 Scoring System (100 points total)

| Pillar                        | Max Points |
|------------------------------|------------|
| Strategic Fit                | 40         |
| AI / Tech Readiness          | 40         |
| Engagement & Reachability    | 20         |

### 🧠 Scoring Criteria

- **Strategic Fit**: Industry, size, use case, buyer roles
- **Tech Readiness**: AI maturity, hiring trends, stack visibility
- **Reachability**: Geography, contactability, data quality

---

## 🎯 Verdict Scale

- 🟩 **90–100**: Ideal ICP  
- ✅ **70–89**: Good Fit  
- 🟨 **40–69**: Medium Fit  
- ❌ **&lt; 40**: Poor Fit

---

## 📦 Workflow Components

- **Trigger**: Form submission via webhook
- **MCP Client**: Pulls enriched company data via Explorium's MCP API
- **AI Agent**: Uses Anthropic Claude (or other LLM) to calculate scores
- **Output**: Results are posted to a structured endpoint (e.g. Google Doc or JSON API)

---

## 🧰 Dependencies

- [n8n](https://n8n.io/) (self-hosted or cloud)
- Explorium MCP credentials and access
- LLM API (e.g., Anthropic Claude, OpenAI, etc.)
- Optional: AgentGeeks formatter or similar doc generator

---

## 💼 Use Case

This ICP scoring system is designed for GTM and sales teams to:

- Automate lead prioritization
- Qualify accounts before outbounding
- Sync ICP data into CRMs, routing systems, or reporting layers

---

## 📈 Example Output in Google Doc

```json
{
  "company": "Acme Inc.",
  "score": 87,
  "verdict": "Good Fit",
  "pillars": {
    "strategic_fit": 35,
    "tech_readiness": 37,
    "reachability": 15
  },
  "summary": "Acme Inc. is a mid-sized SaaS company with strong AI hiring activity and a buyer profile aligned to enterprise IT. Moderate reachability via firmographic signals."
}

## 🔗 Nodes Used

HTTP Request, AI Agent, Anthropic Chat Model, n8n Form Trigger, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
