# 🔬 Financial reporting AI: concise SEC 10-K/10-Q briefs via OpenRouter + Perplexity

> ⚡ **97 views** · 🔬 [Document Extraction & Analysis](../)

## Description

![Screenshot 20250915 at 11.37.26.png](fileId:2631)

**Why skim 10-K/10-Q by hand when AI can extract what matters in minutes?**

### Who is this for?

Sales engineers, solution architects, founders, product/strategy teams, analysts, and BD reps who need fast, consistent briefs on public companies—plus a mapping to a chosen vendor’s solutions.

### Use case

- **Problem:** SEC filings are dense. Manually summarizing financials, spotting initiatives, and aligning them to a vendor’s offerings is slow, error-prone, and often missed by busy teams.
- **Use Case:** An n8n workflow that takes a company name / URL / ticker, analyzes the latest 10-Q/10-K with Perplexity “Deep Research” (via OpenRouter), extracts a concise financial overview and top 4–5 initiatives (tech, cost, revenue), then maps them to one vendor’s solutions (e.g., Microsoft, Google, T-Mobile) and outputs a clean brief.

### What this workflow does

1. **Trigger:** “When chat message received” (or webhook) accepts name / URL / ticker + target vendor.

2. **AI Agent:**

	- Chat Model (OpenRouter) orchestrates the prompt and formatting.

	- Tool: Perplexity Deep Research performs retrieval over the latest 10-K/10-Q and recent references.

3. **Output:** Creates a Google Drive document from the generated text (title, summary, initiatives, vendor-solution matches, suggested contacts).

- **(Optional)** Append a row to Google Sheets for tracking companies, initiatives, and match scores.

### Prerequisites

- n8n (Cloud or self-hosted).

- Credentials in n8n:

	- OpenRouter API key (with access to Perplexity’s Deep Research model).

	- Google Drive (and Google Sheets, if you add the sheet step).

### Setup

- Import the workflow JSON into n8n.

- Open Credentials → connect OpenRouter and Google Drive.

- In the AI Agent node:

	-	Set Chat Model to your OpenRouter model.

	- Set Tool to Perplexity’s Deep Research endpoint.

	-	Paste the provided prompt that(example):

###### Summarize the key financial highlights and list the key strategic initiatives from Office Depot's most recent quarterly report. The company's URL is https://www.officedepot.com and its stock symbol is ODP.

###### After gathering this information, compare Office Depot's initiatives with the solutions offered by T-Mobile for Business (URL: https://www.t-mobile.com/business, stock symbol: TMUS). Finally, provide specific recommendations on T-Mobile solutions that can help Office Depot achieve its initiatives. 

###### Explain how each recommended solution would help. Present the final response with clear headings for each section.


###  How to customize it for your needs

- **Ticker/Name disambiguation:** Add a guardrail step that confirms the exchange + CIK before analysis.

- **EDGAR fetch (advanced):** Pull the exact 10-K/10-Q document/link and pass it to the model for grounded citations.

- **Multi-vendor mapping:** Loop over a list (e.g., Microsoft, Google Cloud, AWS) and produce a comparison table.

- **Contact enrichment:** Add your preferred enrichment step to suggest roles (IT, Network, Data, Finance).

- **Scoring:** Compute initiative ↔ solution fit scores and prioritize must-explore actions.

- **Alerts:** Send the brief to Slack/Telegram/Email for your team.

### Troubleshooting

- Wrong company matched? Add a pre-check that resolves ticker → legal name and require confirmation.

- Generic web summary? Tighten the prompt: “Use the latest 10-Q/10-K; cite sections; list initiatives with evidence.”

- Empty Drive file? Verify the AI Agent’s {{$json}} mappings flow into the Drive node’s content.



- No citations? Require bullet-level references; if missing, loop once with a “citations-only” follow-up prompt.

### Why Use This Template?

Turn hours of filing review into a repeatable, shareable brief. You’ll get:

- A clean financial snapshot,

- The company’s top initiatives,

- A vendor-aligned solution map you can act on immediately—great for prospecting, QBRs, and strategic planning.

### Expected Outcome:
![Screenshot 20250908 at 12.34.15.png](fileId:2324)


### Need Assistance?

For setup guidance, customization, or business inquiries,
Email: phoenixaiagentsolutions@gmail.com

## 🔗 Nodes Used

HTTP Request, Markdown, AI Agent, Chat Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
