# 🔬 Extract client meeting insights from Google Sheets with Groq and Gmail

> ⚡ **21 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Client Meeting Notes → AI Extraction using n8n, OpenAI & Google Sheets

This workflow automatically processes meeting notes stored in Google Sheets, extracts key insights like action items, follow-ups and risks using AI and stores the results in an output sheet. It also sends a summary email and marks records as processed to avoid duplication.


### Quick Start Guide

1. [Login to your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi)
2. Connect Google Sheets (input + output)
3. Add OpenAI or Groq credentials
4. Ensure "Processed" column exists
5. Configure email node
6. Run workflow


## What It Does

This workflow automates the entire lifecycle of meeting note processing. It fetches raw notes from Google Sheets, filters only unprocessed entries and prepares them for AI analysis.

Using an AI model, it extracts structured insights such as action items, follow-ups and risks. These insights are then formatted into readable text and stored in a separate output sheet.

Finally, the workflow updates the original record as processed and sends a summary email, ensuring efficient communication and eliminating manual effort.


## Who It's For

- Project Managers  
- Business Analysts  
- Operations Teams  
- Startup Founders  
- Anyone handling frequent meetings  


## Requirements

- [n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi)
- Google Sheets account  
- OpenAI or Groq API key  
- Gmail account (for email notifications)  


## How It Works & Setup Guide

### Step 1: Trigger

Manual trigger starts the workflow.

### Step 2: Fetch Data

Google Sheets node retrieves meeting notes.

### Step 3: Filter Records

IF node checks if "Processed" field is empty.

### Step 4: Prepare Data

Set node formats notes into `raw_notes`.

### Step 5: AI Extraction

AI Agent extracts:

- Action Items
- Follow-ups
- Risks

### Step 6: Format Output

Code node converts JSON into readable text.

### Step 7: Mark Processed

Updates original sheet with "Yes".

### Step 8: Store Results

Appends extracted data into output sheet.

### Step 9: Send Email

Gmail node sends summary email.


## Customize Nodes

- Modify AI prompt to extract more fields  
- Change email format/content  
- Add additional fields in output sheet  
- Adjust filtering logic  


## Add-ons

- Slack/Teams notifications  
- Auto-trigger using webhook  
- Dashboard integration  
- Priority tagging  


## Use Cases

1. Client meeting tracking  
2. Internal team updates  
3. Sales call summaries  
4. Project review documentation  
5. Risk tracking systems  

More use cases can be built using this workflow.


## Troubleshooting

| Issue | Cause | Solution |
|------|------|---------|
| No data processed | "Processed" already filled | Clear field |
| AI output invalid | Wrong prompt | Fix JSON format |
| Email not sent | Gmail auth issue | Reconnect account |
| Data not stored | Mapping error | Check fields |


## Need Help?

If you need help setting up or customizing this workflow, feel free to reach out to our [n8n developers](https://www.weblineindia.com/hire-n8n-developers/) at [WeblineIndia for expert assistance](https://www.weblineindia.com/contact-us.html).

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
