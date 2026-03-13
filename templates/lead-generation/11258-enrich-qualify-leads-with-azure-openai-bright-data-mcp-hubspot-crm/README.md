# 🎣 Enrich & qualify leads with Azure OpenAI, Bright Data MCP & HubSpot CRM

> ⚡ **147 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

## 🧠 AI Lead Enricher & Qualifier using Bright Data MCP and Hubspot

This workflow automatically enriches inbound leads, evaluates their business fit, updates HubSpot, and alerts the team only when a lead meets qualification criteria. It eliminates manual research and scoring while keeping CRM data clean and complete.

---

### 🏗️ What this automation does

| Step | Component | Purpose |
|------|----------|---------|
| 1 | **Form Trigger** | Captures a new lead’s Name + Email |
| 2 | **AI Lead Enricher Agent** | Uses Azure OpenAI + Bright Data MCP to search the public web and fill missing contact + company details |
| 3 | **Structured Output Parser** | Ensures AI returns clean JSON in a strict schema |
| 4 | **Lead Scoring Agent** | Calculates a numeric **Fit Score (0–100)** based on ICP match |
| 5 | **IF Logic** | Routes the lead based on Fit Score threshold (&gt; 70 = qualified) |
| 6 | **HubSpot Actions** | Updates/creates Contact & Company with enriched properties |
| 7 | **Slack Notification** | Sends high-quality leads to the team instantly |

---

### 🧩 Data Enriched by AI
The enrichment agent populates the following fields **only if validated with high confidence**:

#### Contact
- Job title  
- LinkedIn profile  
- Country  

#### Company
- Company name  
- LinkedIn company page  
- Industry  
- Number of employees  
- Annual revenue  
- Description  
- Headquarters (country & city)  
- Funding raised  

If reliable data is not found → field stays `""` (no hallucination, no guessing).

---

### 🎯 Lead Qualification Strategy
The Fit Score (0–100) evaluates how aligned the lead is with a:
&gt; **B2B automation / AI / RevOps agency targeting SaaS and tech companies**

Score increases for:
- SaaS / tech / B2B service industries
- Mid-size or high-growth teams
- High-responsibility job titles (Founder, COO, Head of Ops, RevOps, CTO)
- Funding raised or traction signals

---

### 🔔 Resulting CRM + Team Workflow

| Fit Score | CRM Update | Slack Notification |
|----------|------------|--------------------|
| `&gt;` (qualified) | Contact + Company updated | **YES — sales alert sent** |
| `≤ 70` (not qualified) | Contact + Company updated | No notification |

This ensures:
- CRM always stays enriched and structured
- Sales only sees high-potential leads
- No lead is ever dropped or ignored

---

### 🌟 Why this automation is powerful
✔ 0 manual research  
✔ 0 manual lead scoring  
✔ Real-time alerts for high-value leads  
✔ Eliminates poor data quality in HubSpot  
✔ Works instantly on every form submission

---

### 🔧 Ideal use cases
- Agencies generating inbound leads
- SaaS companies with SDR teams
- RevOps teams improving CRM hygiene
- Lead qualification before booking calls

---

### 📌 Key Integrations
- **Azure OpenAI**
- **Bright Data MCP**
- **HubSpot (Contacts & Companies)**
- **Slack**
- **n8n Form Trigger**

---

This workflow can run **fully autonomously** or be extended with:
- Calendly auto-booking for qualified leads
- Sales sequence automation
- CRM lifecycle stage updates
- Forecasting dashboards

## 🔗 Nodes Used

Slack, HubSpot, AI Agent, Structured Output Parser, n8n Form Trigger, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
