# 📊 Generate competitive deal strategies in Salesforce with Google Sheets and Gemini

> ⚡ **6 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow triggers on Salesforce opportunity creation or updates, pulls recent account opportunity history and competitor intel from Google Sheets, uses Google Gemini to generate competitive analysis and a counter-strategy, calculates a competitive risk score, updates the Salesforce opportunity with notes and status, and emails the results via Gmail.

## How it works
1. Triggers when a Salesforce opportunity is created or updated, then processes each opportunity in turn.
2. Loads the full opportunity details from Salesforce and continues only if a primary competitor is set and the opportunity has not already been marked as “Analysis Complete.”
3. Queries Salesforce for the account’s last 10 opportunities and fetches matching competitor intelligence from a Google Sheets “Competitive Intelligence Database.”
4. Summarizes the account’s win/loss history and compiles the current deal details, competitor intel, and historical context into a single AI input payload.
5. Uses Google Gemini to analyze the current active deal’s competitive factors and generate an actionable counter-strategy and next-step plan.
6. Calculates a competitive risk score based on deal size, sales stage, competitor name, and prior win/loss signals, then formats strategy notes and status.
7. Updates the Salesforce opportunity’s competitive strategy and intelligence status fields and sends a Gmail notification email to the sales team.

## Setup
1. Connect Salesforce credentials and ensure your Opportunity object has the custom fields Primary_Competitor__c, Competitive_Strategy_Notes__c, and Competitor_Intelligence_Status__c.
2. Connect Google Sheets credentials and update the spreadsheet document ID, sheet name, and column mappings used to look up competitor intel by “Competitor Name.”
3. Connect Google Gemini (API key/credentials) and confirm the selected model is available in your environment.
4. Connect Gmail credentials and set the recipient(s) and any sender/permission requirements for sending notification emails.
5. Adjust the risk-scoring rules (deal thresholds, sales stages, and competitor list) to match your sales process and competitive landscape.

## Additional info
## How To Customize Nodes

### AI Prompts

- Modify prompts in:
  - `Competitive Analysis (Current Deal)`
  - `Counter Strategy Generator`
- Customize tone, depth, or output format

### Google Sheets Mapping

- Add more columns (pricing, strengths, weaknesses)
- Update mapping in `AI Input Payload`

### Risk Logic

- Edit scoring logic in `Competitive Risk Score` node
- Add/remove conditions or adjust scoring weights

### Email Content

- Customize subject and message in `Send Analysis Email`


## Add-Ons (Enhancements)

- Slack or Microsoft Teams notifications
- Dashboard integration (Power BI / Tableau)
- Auto-create follow-up tasks in Salesforce
- Add win/loss prediction model
- Multi-competitor comparison logic
- Store analysis logs in database


## Use Case Examples

1. **Enterprise Deal Strategy**
   - Analyze million-dollar deals and prepare executive-level strategy

2. **Competitive Sales Enablement**
   - Equip reps with real-time talking points before meetings

3. **Account-Based Selling**
   - Use historical account insights to improve win probability

4. **Pipeline Risk Monitoring**
   - Identify high-risk deals early and escalate

5. **Sales Coaching**
   - Help junior reps with structured AI-generated guidance

There can be many more use cases depending on your business needs.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|---------------|----------|
| Workflow not triggering | Salesforce trigger not configured | Check OAuth connection and trigger setup |
| No analysis generated | Competitor field empty | Ensure `Primary_Competitor__c` is filled |
| Workflow skips opportunity | Already marked as "Analysis Complete" | Reset field or modify IF condition |
| Missing competitor data | Google Sheets mismatch | Ensure competitor name matches exactly |
| Email not sent | Recipient not configured | Add email in Gmail node |
| AI output empty | API or prompt issue | Verify Gemini API credentials and prompts |
| Incorrect risk score | Logic mismatch | Review code node conditions |
| Salesforce update fails | Missing custom fields | Create required fields in Salesforce |


## Need Help?

If you need assistance with:

- Setting up this workflow in your environment  
- Customizing AI prompts or risk scoring  
- Extending with add-ons (Slack, dashboards, alerts)  
- [Building intelligent automation workflows](https://www.weblineindia.com/process-automation-solutions.html) 

Feel free to reach out to **WeblineIndia**, our [n8n workflow developers](https://www.weblineglobal.com/hire/n8n-developers/) can help you implement, customize and scale automation tailored to your business needs.

## 🔗 Nodes Used

Google Sheets, Salesforce, Gmail, Salesforce Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
