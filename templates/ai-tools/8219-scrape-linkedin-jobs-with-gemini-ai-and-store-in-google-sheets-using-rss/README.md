# 🎯 Scrape LinkedIn jobs with Gemini AI and store in Google Sheets using RSS

> ⚡ **2,127 views** · 🎯 [AI Summarization & Classification](../)

## Description

### What Problem Does it Solve
This workflow automates the process of finding and collecting job postings from LinkedIn, eliminating the need for manual job searching. It’s designed to save time and ensure you don’t miss out on new opportunities by automatically populating a spreadsheet with key job details.

### Key Features
- **Automated Data Collection:** The workflow pulls job posts from a LinkedIn search via an RSS feed.

- **Intelligent Data Extraction:** It scrapes the full job description and uses AI to summarize the key benefits and job responsibilities into a concise format.

- **Centralized Database:** All collected and processed information is automatically saved to a Google Sheet, providing a single source of truth for your job search.
### How It Works
The workflow starts when manually triggered. It reads the job posts from a given RSS feed, processing each one individually. For each job, it fetches the full webpage content to extract structured data. This data is then cleaned and passed to an AI model, which generates a brief summary of the job and its benefits. Finally, a new row is either added or updated in a Google Sheet with all the collected details, including the job title, company name, and AI-generated summary.

### Configuration & Customization
This workflow is highly customizable to fit your specific needs.

- **RSS Feed:** To get started, you'll need to provide the RSS feed URL for your desired LinkedIn job search. We can help you set this up.

- **AI Model:** The workflow uses Google Gemini by default, but it can be adjusted to work with other AI platforms.

- **Data Destination:** The output is configured to a Google Sheet, but it can easily be changed to a different platform like Notion or a CRM.

- **AI Prompting:** The AI's instructions are customizable, so you can tailor the output to extract different information or match a specific tone.

If you need any help [Get In Touch](https://www.linkedin.com/in/abdallaelshikh0/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
