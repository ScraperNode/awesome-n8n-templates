# 🎣 Qualify and email literary agents with GPT‑4.1, Gmail and Google Sheets

> ⚡ **72 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Inspiration & Notes

This workflow was born out of a very real problem.

While writing a book, I found the process of discovering suitable literary agents and managing outreach to be manual, and surprisingly difficult to scale. Researching agents, checking submission rules, personalizing emails, tracking submissions, and staying organized quickly became a full-time job on its own.

So instead of doing it manually, I automated it.

I built this entire workflow in **3 days** — and the goal of publishing it is to show that you can do the same. With the right structure and intent, complex sales and marketing workflows don’t have to take months to build.

---

## Contact & Collaboration

If you have questions, business inquiries, or would like help setting up automation workflows, feel free to reach out:

📩 **malcolm95authoring@gmail.com**

I genuinely enjoy designing workflows and automation systems, especially when they support meaningful projects. I work primarily from interest and impact rather than purely financial motivation.

Whether I take on a project for **FREE** or paid for the following reasons:

- I **LOVE** setting up workflows and automation.
- I work for **meaningfulness**, not for money.
- **I may do the work for free**, depending on how meaningful the project is. If the problem statement matters, the motivation follows.
- **It also depends on the value I bring to the table** -- If I can contribute significant value through system design, I’m more inclined to get involved.

If you’re building something thoughtful and need help automating it, I’m always happy to have a conversation. Enjoy~!

---

# 0. Overview
Automates the end-to-end literary agent outreach pipeline, from data ingestion and eligibility filtering to deep agent research, personalized email generation, submission tracking, and analytics.


## Architecture

The system is organized into four logical domains:
The system is modular and is divided into four domains:

--&gt; Data Engineering
--&gt; Marketing & Research
--&gt; Sales (Outreach)
--&gt; Data Analysis


Each domain operates independently and passes structured data downstream.

---

## 1. Data Engineering

**Purpose:**  
Ingest and normalize agent data from multiple sources into a single source of truth.

**Inputs**
- Google BigQuery
- Azure Blob Storage
- AWS S3
- Google Sheets
- (Optional) HTTP sources

**Key Steps**
- Scheduled ingestion trigger
- Merge and normalize heterogeneous data formats (CSV, tables)
- Deduplication and validation
- AI-assisted enrichment for missing metadata
- Append-only writes to a central Google Sheet

**Output**
- Clean, normalized agent records ready for eligibility evaluation

---

## 2. Marketing & Research

**Purpose:**  
Decide *who* to contact and *how* to personalize outreach.

### Eligibility Evaluation
An AI agent evaluates each record against strict rules:
- Email submissions enabled
- Not QueryTracker-only or QueryManager-only
- Genre fit (e.g. Memoir, Spiritual, Self-help, Psychology, Relationships, Family)

**Outputs**
- `send_email` (boolean)
- `reason` (auditable explanation)

### Deep Research
For eligible agents only:
- Public research from agency sites, interviews, Manuscript Wish List, and LinkedIn (if public)
- Extracts:
  - Professional background
  - Editorial interests
  - Genres represented
  - Notable clients/books (if publicly listed)
  - Public statements
  - Source-backed personalization angles

**Strict Rule:**  
All claims must be explicitly cited; no inference or hallucination is allowed.

---

## 3. Sales (Outreach)

**Purpose:**  
Execute personalized email outreach and maintain clean submission tracking.

**Steps**
- AI generates agent-specific email copy
- Copy is normalized for tone and clarity
- Email is sent (e.g. Gmail)
- Submission metadata is logged:
  - `Submission Completed`
  - `Submission Timestamp`
  - Channel used

**Result**
- Consistent, traceable outreach with CRM-style hygiene

---

## 4. Data Analysis

**Purpose:**  
Measure pipeline health and outreach effectiveness.

**Features**
- Append-only decision and submission logs
- QuickChart visualizations for fast validation (e.g. TRUE vs FALSE completion rates)
- Optional integration with:
  - Power BI
  - Google Analytics 4

**Supports**
- Completion rate analysis
- Funnel tracking
- Source/platform performance
- Decision auditing

---

## Design Principles

- **Separation of concerns** (ingestion ≠ decision ≠ outreach ≠ analytics)
- **AI with hard guardrails** (strict schemas, source-only facts)
- **Append-only logging** (analytics-safe, debuggable)
- **Modular & extensible** (plug-and-play data sources)
- **Human-readable + machine-usable outputs**

---

## Constraints & Notes

- Only public, professional information is used
- No private or speculative data
- HTTP scraping avoided unless necessary
- Power BI Embedded is not required
- Workflow designed and implemented end-to-end in ~3 days

---

## Use Cases

### Marketing
- Audience discovery
- Agent segmentation
- Personalization at scale
- Campaign readiness
- Funnel automation

### Sales
- Lead qualification
- Deduplication
- Outreach execution
- Status tracking
- Pipeline hygiene

---

## Tech Stack

- **Automation:** n8n
- **AI:** OpenAI (GPT)
- **Scripting:** JavaScript
- **Data Stores:** Google Sheets
- **Email:** Gmail
- **Visualization:** QuickChart
- **BI (optional):** Power BI, Google Analytics 4
- **Cloud Sources:** AWS S3, Azure Blob, BigQuery

---

## Status

This workflow is production-ready, modular, and designed for extension into other sales or marketing domains beyond literary outreach.

---

## 🔗 Nodes Used

Google Sheets, HTTP Request, AWS S3, Gmail, Google Analytics, Google BigQuery

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
