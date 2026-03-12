# 🎣 Scrape verified decision-maker emails from Google with GPT-4.1 and Apify

> ⚡ **8 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Description

This workflow automatically discovers **decision-maker email addresses** from Google search results using AI.

Starting from a search query, it scrapes organic Google results, extracts company domains, infers likely decision-makers, generates realistic executive email patterns, validates deliverability, and stores only verified emails in Google Sheets.

The workflow is designed to reduce manual research while producing structured, outbound-ready contact data that can be reused across sales, partnerships, recruiting, and research workflows.

---

## How it works

1. **Trigger**  
   The workflow starts manually or via a webhook with a Google search query.

2. **Google Search Scraping**  
   An Apify node collects organic Google search results for the query.

3. **Result Processing**  
   Each result is processed individually to extract the company name and website domain.

4. **Decision-Maker Inference**  
   An AI model analyzes the company context and identifies likely decision-makers (for example founders, executives, partners, or directors).

5. **Email Pattern Generation**  
   AI generates realistic executive email address candidates based on the company domain.

6. **Inbox Filtering**  
   Generic role-based inboxes (such as info@, support@, or sales@) are removed.

7. **Email Validation**  
   An email validation API checks deliverability and filters out invalid addresses.

8. **Data Structuring**  
   Results are normalized into structured fields for consistent storage.

9. **Storage**  
   Verified emails and company details are logged in Google Sheets.

---

## Set up steps

1. **Apify**  
   - Create an Apify account  
   - Generate an API token  
   - Select a Google Search scraping actor  

2. **OpenAI**  
   - Create an OpenAI account  
   - Generate an API key  

3. **Email validation service**  
   - Create an account with your preferred email validation provider  
   - Generate an API key  

4. **Google Sheets**  
   - Create a spreadsheet for storing results  
   - Configure Google Sheets credentials in n8n  

5. **Configure the workflow**  
   - Update the search query input  
   - Add API keys to the relevant nodes  
   - Select the target Google Sheet  

6. **Run the workflow**  
   - Execute the workflow manually or via webhook  

---

## Output

Each processed result produces:

- Company name  
- Website domain  
- Decision-maker email address  
- Email validation status  
- Source search query  

---

## Requirements

- Apify account  
- OpenAI API key  
- Email validation API key  
- Google Sheets credentials  

---

## Author

**Hyrum Hurst**  
AI Automation Engineer at QuarterSmart  
📧 hyrum@quartersmart.com

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
