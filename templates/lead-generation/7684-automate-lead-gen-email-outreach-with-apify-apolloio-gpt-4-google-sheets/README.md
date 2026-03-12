# 🎣 Automate lead gen & email outreach with Apify, Apollo.io, GPT-4 & Google Sheets

> ⚡ **885 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Disclaimer: 
Community nodes are used, and template can only be used on self-hosted n8n instances.


![workflow image lead gen.PNG](fileId:2193)


## This n8n template from [Intuz](https://www.intuz.com/) provides a complete solution to automate your entire B2B lead generation pipeline, from discovering recently funded companies to drafting hyper-personalized outreach emails with AI.


## Who's this workflow for?
- Sales Development Representatives (SDRs)
- Business Development Teams
- Growth Hackers
- Startup Founders
- Marketing Agencies


## How it works
**1. Scrape Funded Companies:** The workflow begins by using Apify to scrape a target list of recently funded companies directly from a Crunchbase search.

**2. Enrich with Apollo.io:** It takes each company and uses the Apollo.io API to find key decision-makers (like VPs, Directors) and enrich their contact information, including finding their email addresses.

**3. Populate Google Sheets:** All the gathered lead data—company name, contact name, title, email, LinkedIn URL, etc.—is neatly organized and added to a Google Sheet.

**4. AI-Personalized Email Crafting:** The workflow sends the lead's information to OpenAI (GPT-4) with a highly specialized prompt, instructing it to write a concise, impactful, and hyper-personalized "first touch" cold email.

**5. Update Lead List with Email Content:** Finally, the unique, AI-generated email is saved back into the Google Sheet alongside the corresponding lead's information, making it ready for you to send.


## Pre-conditions and Requirements
Before you can successfully execute this workflow, you must have the following accounts, credentials, and assets in place.

**1. n8n Instance:**
You need an active n8n instance (self-hosted).

**2. Apify Account & Crunchbase Access:**
- Apify Account: A registered account on Apify.
- Crunchbase Account: An active, logged-in Crunchbase account (a paid subscription is recommended for accessing detailed search filters).

**3. Apollo.io API:**
You need an Apollo.io plan that includes API access. You can generate the API from settings. 

**4. Google Sheet:**
Create a new Google Sheet to store your leads. The workflow is configured for two tabs: one for raw data ("HealthCare" in the template) and one for email generation ("Company sheet").

**5. OpenAI Account:**
An account with OpenAI with API access and billing set up.


## Setup Instructions
**1. Apify Connection:**
- Connect your Apify account in the Run an Actor node.
- You'll need an apify scrapper, [here's the link](https://console.apify.com/actors/BBfgvSNWcySEk1jQO/input)
- In the Custom Body field, update the search.url with your target Crunchbase discovery URL and provide a valid cookie for authentication.

**2. Apollo.io Connection:**
- Connect your Apollo.io account using HTTP Header Authentication in the three Apollo nodes.
- You will need to provide your API key.

**3. Google Sheets Connection:**
- Connect your Google Sheets account.
- Create a spreadsheet and update the Document ID and Sheet Name in the three Google Sheets nodes to match yours. Ensure your sheet columns are set up to receive the data.

**4. OpenAI Connection:**
- Connect your OpenAI account in the Message a model node. The prompt is pre-engineered for high-quality output, but you can tailor it to better fit your specific value proposition.

**5. Activate Workflow:**
- Click "Execute workflow" to run the automation manually and watch your AI-powered lead list build itself.


## Customization Guide
This workflow is a powerful template. To adapt it to your specific business needs, you should review and modify the following nodes.

**1. Changing Your Target Companies (The Source)**
- Node: Run an Actor
- What to change: The search.url parameter inside the customBody.
- How to do it:
1. Go to Crunchbase and perform a search for your ideal companies (e.g., filter by different funding rounds, industry, location, keywords, etc.).
2. Copy the URL from your browser's address bar after the search results have loaded.
3. Paste this new URL as the value for "search.url" in the node.
4. You can also adjust "count": 10 to pull more or fewer companies per run. Be mindful of Apify and Apollo credit usage.

**2. Defining Your Ideal Contact Persona**
- Node: Apollo - Get User
- What to change: The person_seniorities and person_titles arrays in the jsonBody.
- How to do it:
**1. Seniority:** Modify the person_seniorities list to match who you sell to. Examples: ["c_level", "founder"] or ["manager", "contributor"].
**2. Job Titles:** This is crucial. Replace the existing list of titles ("engineering", "technology", etc.) with keywords relevant to your target buyer. For example, if you sell to marketing teams, you might use: ["marketing", "demand generation", "growth", "content", "brand"].

**3. Configuring Your Google Sheet Destination**
- Nodes: Append or update row in sheet and Update row in sheet
- What to change: The documentId and sheetName.
- How to do it:
1. Open your Google Sheet.
2. The documentId is the long string of characters in the URL between /d/ and /edit. Copy and paste it into the "Document ID" field in both nodes.
3. The sheetName (or Sheet ID/gid) needs to be set for your specific tabs. Make sure the sheet names/IDs in the nodes match the tabs in your document.
4. Column Mapping: If you change the column names in your Google Sheet, you must update the column mapping inside these nodes to ensure the data is written to the correct place.

**4. Tailoring the AI Email Generation**
- Node: Message a model (OpenAI)
- What to change: The prompt, the model, and the input variables.
- How to do it:
1. The Prompt: This is the heart of your outreach. Read the entire prompt carefully and edit it to reflect your company's value proposition, tone of voice, and specific call-to-action.
2. Value Proposition: Change the line "We help them cut that specific infrastructure spend..." to match what your product does. Use a powerful, single data point if you have one.
3. Call-to-Action (CTA): Modify the final question ("Curious if infra efficiency is on your roadmap...") to something that fits your sales process.
4. Tone: Adjust the initial instructions (e.g., "Your tone is that of a peer...") if you want a different style.
- The Model: The workflow uses gpt-4.1. You can switch to a different model like gpt-4o (potentially better/faster) or gpt-3.5-turbo (much cheaper, but lower quality) depending on your budget and needs.
- Input Variables: The prompt uses {{ $json['Company Name'] }}, {{ $json['Person Designation'] }}, and {{ $json.Industry }}. If you want to add more personalization (e.g., based on a company's funding amount), you would first need to ensure that data is passed to this node, then add the new variable (e.g., {{ $json['Funding Amount'] }}) into the prompt.



## Connect with us
- Website: https://www.intuz.com/n8n-workflow-automation-templates
- Email: getstarted@intuz.com
- LinkedIn: https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz


## For Custom Workflow Automation
Click here- [Get Started](https://www.intuz.com/get-started)

## 🔗 Nodes Used

Google Sheets, HTTP Request, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
