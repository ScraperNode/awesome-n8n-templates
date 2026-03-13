# 🎣 Research business leads with Perplexity AI & save to Google Sheets using OpenAI

> ⚡ **810 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

Automatically research new leads in your target area, structure the results with AI, and append them into Google Sheets — all orchestrated in n8n.

---

## ✅ What this template does
- Uses **Perplexity** to research businesses (coffee shops in this example) with company name + email  
- Cleans and structures the output into proper JSON using **OpenAI**  
- Appends the new leads directly into **Google Sheets**, skipping duplicates  

&gt; **Trigger:** Manual — “Start Workflow”

---

## 👤 Who’s it for
- **Sales & marketing teams** who need to prospect local businesses  
- **Agencies** running outreach campaigns  
- **Freelancers** and consultants looking to automate lead research  

---

## ⚙️ How it works
1. **Set Location** → define your target area (e.g., *Hershey PA*)  
2. **Get Current Leads** → pull existing data from your Google Sheet to avoid duplicates  
3. **Research Leads** → query Perplexity for 20 businesses, excluding already-scraped ones  
4. **Write JSON** → OpenAI converts Perplexity output into structured Company/Email arrays  
5. **Split & Merge** → align Companies with Emails row-by-row  
6. **Send Leads to Google Sheets** → append or update leads in your sheet  

---

## 🛠️ Setup instructions
Follow these sticky-note setup steps (already included in the workflow):

### 1) Connect Google Sheets (OAuth2)
1. In **n8n → Credentials → New → Google Sheets (OAuth2)**  
2. Sign in with your Google account and grant access  
3. In the Google Sheets node, select your **Spreadsheet** and **Worksheet**  

Example sheet:  
https://docs.google.com/spreadsheets/d/1MnaU8hSi8PleDNVcNnyJ5CgmDYJSUTsr7X5HIwa-MLk/edit#gid=0  

---

### 2) Connect Perplexity (API Key)
1. Sign in at https://www.perplexity.ai/account  
2. Generate an API key: https://docs.perplexity.ai/guides/getting-started  
3. In **n8n → Credentials → New → Perplexity API**, paste your key  

---

### 3) Connect OpenAI (API Key)
1. In **n8n → Credentials → New → OpenAI API**  
2. Paste your **OpenAI API key**  
3. In the **OpenAI Chat Model** node, select your credential and a **vision-capable model** (e.g., `gpt-4o-mini`, `gpt-4o`)  

---

## 🔧 Requirements
- A free **Google account**  
- An **OpenAI API key** (https://platform.openai.com)  
- A **Perplexity API key** (https://docs.perplexity.ai)  
- n8n self-hosted or cloud instance  

---

## 🎨 How to customize
- Change the **Search Area** in the `Set Location` node  
- Modify the **Perplexity system prompt** to target different business types (e.g., gyms, salons, restaurants)  
- Expand the Google Sheet schema to include more fields (phone, website, etc.)  

---

## 📬 Contact  
Need help customizing this (e.g., filtering by campaign, sending reports by email, or formatting your Google Sheet)?  

- 📧 **robert@ynteractive.com**  
- 🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
- 🌐 **[ynteractive.com](https://ynteractive.com)**

## 🔗 Nodes Used

Google Sheets, AI Agent, OpenAI Chat Model, Structured Output Parser, Perplexity

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
