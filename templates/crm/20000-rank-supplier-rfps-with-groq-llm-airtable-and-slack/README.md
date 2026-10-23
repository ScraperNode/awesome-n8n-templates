# 🤝 Rank supplier RFPs with Groq LLM, Airtable and Slack

> ⚡ **287 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow pulls pending supplier RFP responses from Airtable, uses Groq-hosted LLM analysis to score ESG and supply risk, calculates a strategy-weighted total score using price and lead time, ranks suppliers into a leaderboard, updates Airtable, and posts the results to Slack.

## How it works
1. Starts manually and reads the active strategic priority from an Airtable “Global Settings” base.
2. Selects the matching evaluation rubric (for example Balanced, ESG_Focus, Cost_Reduction, or Speed_to_Market) and uses it as the system prompt for the LLM.
3. Searches Airtable for supplier submissions in the “Pending records” view and processes them in batches.
4. For each supplier, sends their ESG practices and risk mitigation text to a Groq LLM and parses the response into a strict JSON schema with ESG and Risk scores plus one-sentence rationales.
5. Combines AI scores with Airtable fields (total bid price and lead time) to compute a final weighted score based on the active strategic priority.
6. Sorts all processed suppliers by final score, assigns a rank number, updates each supplier record in Airtable (scores, rationale, total score, rank, and status), and posts the final leaderboard to Slack.

## Setup
1. Create and connect Airtable credentials, then set the Base/Table/View IDs for the Global Settings lookup and the supplier responses table/view used to fetch pending records.
2. Ensure your Airtable supplier table includes fields for Supplier Name, Total Bid Price, Lead Time (Days), ESG Practices, Risk Mitigation Strategy, Processing Status, plus output fields like Total Score, ESG_Score, Risk_Score, ESG Rationale, BatchRank, and Priority Applied.
3. Add a Groq API credential for the LLM call and choose the model you want to use.
4. Add Slack credentials and configure the Slack node to post to your target channel, then activate the workflow and run it from the manual trigger to test end-to-end.

## Additional info
## How To Customize Nodes

* **Customize Evaluation Rubrics:** Open the *Prompts* node. You can easily edit the text definitions for `ESG_Focus` or `Cost_Reduction` to enforce stricter scoring rules for your specific industry (e.g., demanding ISO certifications).
* **Adjust Mathematical Weights:** Open the *Calculate Weighted Score* code node. Locate the `weights` object and change the decimal multipliers (e.g., `price: 0.6`, `leadTime: 0.1`) to perfectly align with your internal business math.
* **Change the AI Model:** Open the *Groq LLM Engine* node and select a different language model if you require faster processing or different reasoning capabilities.


## Add‑ons

* **Webhook or Schedule Trigger:** Replace the *Manual Trigger* node with a *Schedule Trigger* to run this evaluation automatically every Friday at 5 PM.
* **Email Stakeholders:** Add a Gmail or Outlook node after the Slack node to email a beautifully formatted HTML version of the leaderboard to executives.
* **Rejection Automation:** Add an IF node to detect low-scoring suppliers and automatically trigger a polite rejection email via a Gmail node.


## Use Case Examples

While currently configured for Supplier RFP Ranking, this workflow can be easily adapted for:

1. **Job Applicant Screening:** Reading resume text and scoring candidates based on experience, culture fit, and salary expectations.
2. **Marketing Agency Vetting:** Evaluating external agencies based on retainer fees, portfolio quality, and SLA response times.
3. **Software Tool Selection:** Ranking new SaaS platforms based on cost, security compliance, and onboarding speed.
4. **Contractor Bidding (Construction):** Scoring local construction firms based on safety records, material costs, and timeline estimates.
5. **Real Estate Investment Analysis:** Ranking potential commercial properties based on price, risk factors, and ESG compliance.
*(Note: With minor tweaks to the database query and AI prompts, there can be many more such use cases for this workflow!)*


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| --- | --- | --- |
| **Airtable node fails to fetch data** | Incorrect Base or Table ID, or expired API Token. | Verify that the Airtable IDs exactly match your workspace and refresh your Personal Access Token[cite: 2]. |
| **AI Node throws a JSON Schema error** | The LLM failed to output the strict JSON required. | Open the *Groq LLM Engine* and switch to a more robust model, or slightly adjust the system prompt for clarity[cite: 2]. |
| **Code Node throws an undefined error** | Missing columns in Airtable. | Ensure your Airtable view has columns exactly named `Total Bid Price` and `Lead Time (Days)` as expected by the code[cite: 2]. |
| **Slack notification is not sending** | Invalid Slack Channel ID. | Open the *Broadcast Final Leaderboard* node and ensure the `channelId` matches your workspace channel[cite: 2]. |


## Need Help?

Building and optimizing advanced AI automations with dynamic mathematical matrices can sometimes be tricky! If you need a helping hand to set up this workflow, configure Airtable databases, customize the AI prompts or build powerful Add-Ons tailored to your specific business needs, we are here for you.

We encourage you to contact **WeblineIndia** for expert assistance with this workflow or to help you design similar custom automation processes for your organization.

## 🔗 Nodes Used

Airtable, Slack, Basic LLM Chain, Structured Output Parser, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
