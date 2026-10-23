# 🎣 Score inbound B2B leads with OpenAI GPT-5.4 using Tally and Google Sheets

> ⚡ **65 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Description

This workflow automatically scores B2B leads by fetching and analyzing real company website data. It helps marketing and sales teams qualify inbound leads without manually researching each company.

## Overview

A marketing employee submits a company name, LinkedIn URL, website URL, and scoring criteria through a Tally form. The workflow fetches the company's actual homepage, strips it to readable text, and runs it through a chain of three AI agents: one to normalize the input, one to extract intelligence from the real website content (tech stack, industry, company size signals), and one to score the lead against the submitted criteria. The scored, enriched lead is logged to a Google Sheet with a grade and recommended next action for the sales rep.

## Tools Used

- **n8n**: The automation platform that orchestrates the workflow.
- **Tally**: Free form builder used as the input layer where marketing employees submit companies to research. Create forms at [tally.so](https://tally.so).
- **OpenAI (GPT-5.4)**: Powers three chained AI agents for data normalization, website content analysis, and lead scoring.
- **Google Sheets**: Logs every scored lead with timestamp, company details, tech stack, score, grade, reasoning, and recommended action.

## How it works

1. A marketing employee fills out a Tally form with the company name, LinkedIn URL, website URL, and which scoring criteria matter (company size, industry fit, tech stack, geography, funding stage, hiring signals).
2. The Tally Trigger fires and sends the raw submission to Agent 1, which normalizes the payload into clean structured fields.
3. An HTTP Request node fetches the company's homepage HTML directly.
4. A Code node strips the HTML down to plain readable text (removes scripts, styles, navigation, footers) and truncates to 6,000 characters.
5. Agent 2 reads the actual homepage content and extracts structured intelligence: what the company does, their tech stack, company size signals, industry, and signals relevant to the buyer's criteria.
6. Agent 3 scores the lead 1-10 against the submitted criteria using the real website intelligence, assigns a grade (A-D), and writes a recommended action for the sales rep.
7. The enriched lead is appended to a Google Sheet.

## How to Install

1. **Import the Workflow**: Download the .json file and import it into your n8n instance.
2. **Configure Tally**: Add your Tally API key in n8n credentials (get it from Tally &gt; Settings &gt; Integrations &gt; API). Select your Tally form in the Tally Trigger dropdown.
3. **Configure OpenAI**: Add your OpenAI API key in n8n credentials.
4. **Configure Google Sheets**: Add Google Sheets OAuth2 credentials.
5. **Create a Tally Form**: Create a lead scoring form in Tally with these fields:
   - Company Name (short text)
   - LinkedIn URL (URL field)
   - Company Website URL (URL field)
   - Scoring Criteria (checkboxes: Company Size, Industry Fit, Tech Stack Match, Geography, Funding Stage, Hiring Signals)
   - Additional Notes (long text, optional)
6. **Set Up Google Sheets**: Create a spreadsheet with a tab named exactly `leads` and these column headers in Row 1 (all lowercase, copy-paste ready):

   | timestamp | company | website_url | linkedin_url | criteria | company_summary | tech_stack | score | grade | reasoning | recommended_action |
   |-----------|---------|-------------|--------------|----------|-----------------|------------|-------|-------|-----------|--------------------|

7. **Connect the Sheet**: Paste your spreadsheet ID into the Append Lead to Sheet node.
8. **Test**: Submit a test entry through your Tally form to verify data flows through all stages.

## Use Cases

- **Sales Teams**: Qualify inbound leads instantly instead of spending 15 minutes researching each company manually.
- **SDRs and BDRs**: Prioritize outreach by grade. Focus on A-leads first, batch-reject D-leads.
- **Marketing Ops**: Score MQLs at the point of capture before they enter the CRM.
- **Partnership Teams**: Evaluate potential partner companies against tech stack and industry fit criteria.
- **Agency New Business**: Screen prospect companies submitted by account managers before investing in a pitch.

## Notes

- The HTTP Request fetches the company homepage with a 15-second timeout. If a site blocks the request, the workflow continues with whatever data is available.
- Homepage text is truncated to 6,000 characters to keep AI costs predictable.
- GPT-5.4 costs approximately $2.50 per million input tokens and $15 per million output tokens. A typical lead scoring run uses 3 API calls, costing approximately $0.02-0.05 per lead depending on homepage size.
- To adjust scoring thresholds or add your own criteria weighting, edit the Score the Lead agent's system prompt.
- The workflow scores against whatever criteria the user submits in the Tally form, so different team members can use different criteria without editing the workflow.
- Tally's checkbox question type maps well to scoring criteria — each checked option arrives as a separate value in the API payload, making it easy for the AI to evaluate against specific dimensions.

## Connect with Me

- Website: https://www.nofluff.online
- YouTube: https://www.youtube.com/@YaronBeen/videos
- LinkedIn: https://www.linkedin.com/in/yaronbeen/

#n8n #automation #tally #openai #gpt5 #leadscoring #b2bsales #salesautomation #googlesheets #leadsqualification #aileadscoring #marketingautomation #n8nworkflow #workflow #nocode #salespipeline #prospecting #leadenrichment #techstack #tallyforms #inboundleads

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
