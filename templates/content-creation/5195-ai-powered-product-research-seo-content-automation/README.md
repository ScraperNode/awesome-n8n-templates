# 🎬 AI-powered product research & SEO content automation

> ⚡ **14,095 views** · 🎬 [Content Creation & Video](../)

## Description

## AI-Powered Product Research & SEO Content Automation

Skip the guesswork and manual effort — this n8n flow automates the entire process of researching your product's online competition and generating high-quality SEO content. Whether you're launching a new product or optimizing existing listings, this workflow leverages **real-time web data** and **AI-driven copywriting** to deliver:

- 📈 Search-optimized metadata (Title, Description, Keywords)  
- 🛍️ Engaging product descriptions tailored for marketing  
- 📊 Auto-organized output ready for use in your content or e-commerce platform

All of this happens with just one product title input!

---

### 🧠 How It Works
• User submits a product title via a form.  
• The workflow uses Google Custom Search to gather real-time competitor content based on that title.  
• Titles, snippets, and keywords are extracted from the search results.  
• This information is sent to a language model (Google Gemini via LangChain) to generate:  
   - SEO-optimized metadata (Title, Description, Keywords)  
   - A compelling product description tailored for marketing  
• The AI-generated content is then parsed and organized into two categories: SEO data and product content.  
• The structured output is saved automatically into a connected Google Sheet for easy access or further automation.

---

### 🛠️ What Problems Does This Solve?
Manual competitor research and writing SEO content from scratch can be:
- **Time-consuming**
- **Inconsistent in quality**
- **Not optimized for search engines**
- **Hard to scale for multiple products**

This workflow **automates** the entire research + writing + structuring process.

---

### ✅ Key Benefits
- **Instant Content Creation**: Generate polished SEO content in seconds.  
- **Competitor-Aware**: Pulls in real-time data from the web for relevant, market-aligned content.  
- **Scalable**: Easily repeat the process for multiple product titles with minimal effort.  
- **Data Centralization**: Stores everything in Google Sheets—great for collaboration or syncing with other tools.  
- **Customizable**: Easily extend or modify the workflow to include translations, publishing, or social media automation.

---

### ⚙️ Set-Up Steps
• Connect Google Custom Search API with a valid API key and search engine ID (CX).  
• Connect and configure Google Gemini or LangChain with access credentials.  
• Provide access to a Google Sheet with columns for storing SEO and product data.  
• Estimated setup time: ~15–25 minutes depending on API access and sheet setup.  

---

## 🚀 Let’s Get You Started with Automating Your LinkedIn Posts!

Create your **free n8n account** and set up the workflow in just a few minutes using the link below:

👉 [Start Automating with n8n](https://n8n.partnerlinks.io/7fuarh1e6dz5)

Save time, stay consistent, and grow your LinkedIn presence effortlessly!

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, Basic LLM Chain, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
