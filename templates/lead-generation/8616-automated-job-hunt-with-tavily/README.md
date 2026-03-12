# 🎣 Automated job hunt with Tavily

> ⚡ **803 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Automated Job Hunt with Tavily — Setup & Run Guide

### What this template does?

Automatically searches for recent job postings (example: “Software Engineering Intern”), extracts structured details from each posting using an AI agent + Tavily, bundles results, and emails a single weekly digest. 

Estimated setup time: ~30 minutes

#### 1. Required credentials

Before you import or run the workflow, create/configure these credentials in your n8n instance:

**OpenAI (Chat model)** — used by the OpenAI Chat Model and Message a model nodes. Add an OpenAI credential (name it e.g. OpenAi account) and paste your [OpenAi API key](https://platform.openai.com/api-keys).

**Tavily API** — used by the Search in Tavily node. Add a Tavily credential (name it e.g. Tavily account) and add your [Tavily API key](https://app.tavily.com/home).

**Gmail (OAuth2)** — used by the Send a message node to deliver the digest email.
Configure Gmail OAuth2 credential and select it for the Gmail node (e.g. Gmail account.

#### 2. Node-by-node configuration (what to check/change)

**Schedule Trigger**

Node name: Schedule Trigger

Configure interval: daily or weekly (example: weekly, trigger at 08:00).

Note: This is the workflow start. Adjust to your preferred cadence.

**AI Agent**

Node name: AI Agent

Important: First step — set the agent’s prompt / system message.

**Search in Tavily (Tavily Tool node)**

Node name: Tavily

Query: user-editable field (example default: Roles posted this week for Software Engineering)

Advice: keep query under 400 chars; change to target role/location keywords.

Options recommended:

Search Depth: advanced (optional, better extraction)

Max Results: 15

Time Range: week (limit to past week)

Include Raw Content: true (fetch full page content for better extraction)

Include Domains: indeed.com, glassdoor.com,linkedin.com — prioritize trusted sources

**Edit Fields / Set (bundle)**

Node name: Edit Fields (Set)

Purpose: Collect the agent output into one field (e.g., $json.output or Response) for downstream processing.

**Message a Model (OpenAI formatting step)**

Node name: Message a model

Uses OpenAI (the openAiApi credential).

This node can be used to reformat or normalize the agent output into consistent blocks if needed. Use the same system rules you used for the agent (the prompt/system message earlier). You can also leave this minimal if the agent already outputs structured blocks.

**Code Node (Parsing & structuring)**

Node name: Code

Purpose: Split the agent/LLM text into separate job postings and extract fields with regex.

**Aggregate Node**

Node name: Aggregate

Mode: aggregateAllItemData (this combines all parsed postings into a single data array so the Gmail node can loop over them)

**Gmail node (Send a message)**

Node name: Send a message

sendTo: set to recipient(s) (e.g., your inbox)

subject: e.g. New Jobs for this week!

emailType: text (or html if you build HTML content)

message (body): use the expression that loops through data and formats every posting.

#### 3. How to test (quick steps)

Set credentials in n8n (OpenAI, Tavily, Gmail).

Run the Schedule Trigger manually (use the “Execute Workflow” or manually trigger nodes).

Inspect the Search in Tavily node output — confirm it returns results.

Inspect the AI Agent and Message a model outputs — ensure formatted postings are produced and separated by --- END JOB POSTING ---.

Run the Code node — confirm it returns structured items with posting_number, job_title, requirements[], etc.

Check Aggregate output: you should see a single item with data array.

In Gmail node, run a test send — confirm the email receives one combined message with all postings.

#### 4. Troubleshooting tips

Gmail body shows [Array: …]: Avoid dragging the array raw — use the expression that maps data to formatted strings.

Code node split error: Occurs when raw is undefined. Ensure previous node returns message.content or adjust to use $input.all() and join contents safely.

Missing fields after parsing: Check LLM/agent output labels match the Code node’s regex (e.g., Job Title:). If labels differ, update regex or LLM formatting.

#### 5. Customization ideas

Filter by location or remote-only roles, or add keyword filters (seniority, stack).

Send results to Google Sheets or Slack instead of/in addition to Gmail.

Add an LLM summarization step to create a 1-line highlight per posting.

## 🔗 Nodes Used

Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, Simple Memory, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
