# 📊 Automate startup research & profiling with Extruct AI to Google Sheets

> ⚡ **888 views** · 📊 [Market Research & Insights](../)

## Description

**Who’s it for:**  
Investors, analysts, and startup enthusiasts who need a complete overview of startups, including industry, product, funding, and leadership information.

**How it works / What it does:**  
Enter a startup’s name into the form, and the workflow will automatically collect and organize details such as the company’s industry, product, investors, and key decision-makers. All this information is neatly updated in your Google Sheet, making it easy to track and compare startups.

**How to set up:**  
1. Sign up for Extruct at [www.extruct.ai/](https://www.extruct.ai/?utm_source=n8n_workflows&utm_medium=referral&utm_campaign=n8n_startup_overview).  
2. Open the Extruct table template, copy the table ID from the URL, and save it.  
3. Copy the Google Sheets template to your own Drive.  
4. Paste the table ID into the variables node in your n8n flow.  
5. Set up Bearer authentication in each HTTP Request node using your Extruct API token.  
6. In the Google Sheets node, paste your template link and connect your Google account.  
7. Run the flow once to reveal the mapping fields, then match each field to the correct column.  
8. Activate the flow and add startups via the form.

**Requirements:**  
- Extruct account and API token  
- Extruct table template  
- Google account with Google Sheets

**How to customize the workflow:**  
Add new columns in both the Extruct table and your Google Sheet, then map them in the Google Sheets node to track additional startup data.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
