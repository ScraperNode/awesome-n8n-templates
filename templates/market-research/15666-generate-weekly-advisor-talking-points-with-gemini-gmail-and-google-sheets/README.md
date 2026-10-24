# 📊 Generate weekly advisor talking points with Gemini, Gmail and Google Sheets

> ⚡ **32 views** · 📊 [Market Research & Insights](../)

## Description

# Weekly “Talking Points” Generator for Advisors

This workflow automatically generates a weekly financial advisory briefing every Monday at 8 AM. It fetches live market data (SPY), collects top financial news, uses Google Gemini AI to generate client-ready talking points and sends a formatted email via Gmail. It also logs all data into Google Sheets for tracking and analysis.

### Quick Implementation Steps

1. Add your **Alpha Vantage API key** in the market data node  
2. Add your **NewsAPI key** in the news node  
3. Connect your **Google Gemini API credentials**  
4. Connect your **Gmail account (OAuth2)**  
5. Connect your **Google Sheets account**  
6. In **Set All Variables node**, enter:
   - Advisor Email (receiver email)
   - Advisor Name
   - Firm Name  
7. [Activate the workflow  ](https://n8n.partnerlinks.io/om1efg2qgvwi)


## What It Does

This workflow automates the creation of weekly financial talking points for advisors. Every Monday morning, it collects real-time SPY (S&P 500 ETF) market data and the latest financial news headlines. These inputs are combined and processed to ensure only valid and clean data is used.

The cleaned data is then sent to Google Gemini AI, which generates structured advisor-ready talking points along with simple client-friendly analogies. These insights help advisors communicate market trends effectively to clients.

Finally, the workflow formats the output into a professional email and sends it via Gmail. At the same time, all key data including market values, headlines and AI-generated output is stored in Google Sheets for record-keeping and analysis.


## Who It's For

- Financial Advisors  
- Wealth Managers  
- Investment Consultants  
- Portfolio Managers  
- Fintech Teams building advisory tools  
- Anyone who needs automated weekly market insights  


## Requirements to Use This Workflow

To run this workflow, you will need:

- [n8n account (self-hosted or cloud)](https://n8n.partnerlinks.io/om1efg2qgvwi)
- Alpha Vantage API Key (for market data)
- NewsAPI Key (for financial news)
- Google Gemini API credentials
- Gmail OAuth2 connection
- Google Sheets account
- A valid receiver email (advisor email)


## Step-by-Step Setup Guide

### 1. Schedule Trigger

- The workflow starts automatically **every Monday at 8 AM**

### 2. Fetch Market Data

- Node: **Fetch SPY Market Data (Alpha Vantage)**
- Add your **Alpha Vantage API key**
- It retrieves:
  - Price
  - Change %
  - High / Low
  - Volume

### 3. Fetch Financial News

- Node: **Fetch Top 5 Financial News Headlines**
- Add your **NewsAPI key**
- It retrieves the **latest 5 news headlines**

### 4. Merge Data

- Node: **Merge Market and News Data**
- Combines both API responses into one dataset

### 5. Configure Variables (IMPORTANT)

- Node: **Set All Variables – Edit Here to Reconfigure**

Update the following:
- `advisorEmail` → Enter receiver email ID  
- `advisorName` → Your name  
- `firmName` → Your company name  

This node also prepares:
- Market values
- News headlines
- AI prompt

### 6. Clean & Prepare Data (Code Node)

- Node: **Clean & Prepare Market Data**

What it does (simple explanation):

- Removes empty or invalid news headlines  
- Ensures at least one fallback headline exists  
- Checks if SPY price is valid  
- Combines headlines into a readable format  

### 7. Validate Data

- Node: **Validate Data Before AI**
- Ensures important data (like SPY price) is available  
- If invalid → workflow stops  

### 8. Generate AI Output

- Node: **Generate Weekly Briefing with Gemini**
- Uses Gemini model to generate:
  - 5 talking points
  - 2 client-friendly analogies  

### 9. Validate AI Output

- Node: **Check – Did Gemini Return a Valid Response**
- If empty → workflow stops  
- If valid → continues  

### 10. Format Output

- Node: **Format AI Response as Clean HTML**
- Converts AI text into email-friendly HTML format  

### 11. Send Email

- Node: **Send Weekly Briefing Email via Gmail**
- Sends formatted briefing to advisor email  

### 12. Log Data in Google Sheets

- Node: **Log Weekly Briefing to Sheet**

#### Setup Google Sheets:

1. Create a new Google Sheet  
2. Add columns:
   - Date  
   - Advisor Name  
   - Firm Name  
   - SPY Price  
   - SPY Change %  
   - SPY Day High  
   - SPY Day Low  
   - SPY Volume  
   - Top Headline  
   - All Headlines  
   - Full AI Output  
   - Email Status  
   - Execution Time  

3. Connect your Google Sheets account in n8n  
4. Select the sheet and map fields (already configured)


## How To Customize Nodes

- **Change Market Symbol**
  - Modify `symbol=SPY` in Alpha Vantage node  

- **Change News Topic**
  - Update `q=regulation` in NewsAPI node  

- **Modify AI Output Style**
  - Edit prompt inside **Set Variables node**  

- **Change Email Format**
  - Customize HTML in Gmail node  

- **Adjust Schedule**
  - Change trigger timing (daily, weekly, etc.)  


## Add-ons (Extend the Workflow)

- Add **Slack or WhatsApp notifications**  
- Store logs in **database instead of Sheets**  
- Add **multiple advisors (loop emails)**  
- Include **more market indices (NASDAQ, Dow Jones)**  
- Add **PDF report generation**  
- Add **dashboard visualization (Power BI / Looker Studio)**  


## Use Case Examples

1. Weekly client briefing preparation for advisors  
2. Internal market update emails for financial firms  
3. Automated newsletter generation  
4. Portfolio review preparation support  
5. Content generation for financial blogs  

There can be many more use cases depending on how you customize this workflow.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| No email received | Advisor email not set | Enter valid email in Set Variables node |
| Empty AI response | Gemini API issue | Check API key and model connection |
| No market data | Invalid Alpha Vantage API key | Verify API key |
| No news headlines | NewsAPI issue or limit reached | Check API key and quota |
| Workflow stops early | Validation failed | Ensure SPY data is available |
| Google Sheets not updating | गलत mapping or credentials issue | Reconnect and verify column mapping |
| Email formatting issue | HTML formatting error | Check Format node |


## Need Help?

If you need help setting up, customizing or scaling this workflow, feel free to reach out.

Whether it's:
- Adding advanced automation  
- Integrating with CRM systems  
- Building custom AI workflows  
- Scaling for enterprise use  

[n8n automation developers at **WeblineIndia**](https://www.weblineindia.com/hire-n8n-developers/) can help you build powerful automation solutions tailored to your business needs.

[Get in touch for expert assistance and custom workflow development](https://www.weblineindia.com/contact-us.html).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
