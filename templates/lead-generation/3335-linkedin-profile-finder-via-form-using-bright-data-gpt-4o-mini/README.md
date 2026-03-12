# 🎣 LinkedIn profile finder via form using Bright Data & GPT-4o-mini

> ⚡ **7,925 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

![image.png](fileId:1059)

This n8n workflow template automates the process of finding LinkedIn profiles for a person based on their name, and company. It scrapes Google search results via [Bright Data](https://get.brightdata.com/ar8wlq0xkpv5), parses the results with GPT-4o-mini, and delivers a personalized follow-up email with insights and suggested outreach steps.

🚀 What It Does
- Accepts a user-submitted form with a person’s full name, and company.
- Performs a Google search using Bright Data to find LinkedIn profiles and company data.
- Uses GPT-4o-mini to parse HTML results and identify matching profiles.
- Filters and selects the most relevant LinkedIn entry.
- Analyzes the data to generate a buyer persona and follow-up strategy.
- Sends a styled email with insights and outreach steps.

🛠️ Step-by-Step Setup
1. Deploy the form trigger to accept person data (name, position, company).
2. Build a Google search query from user input.
3. Scrape search results using Bright Data.
4. Extract HTML content using the HTML node.
5. Use GPT-4o-mini to parse LinkedIn entries and company insights.
6. Filter for matches based on user input.
7. Merge relevant data and generate personalized outreach content.
8. Send email to a predefined address.
9. Show a final confirmation message to the user.

🧠 How It Works: Workflow Overview
- **Trigger:** `When User Completes Form`
- **Search:** `Edit Url LinkedIn`, `Get LinkedIn Entry on Google`, `Extract Body and Title`, `Parse Google Results`
- **Matching:** `Extract Parsed Results`, `Filter`, `Limit`, `IF LinkedIn Profile is Found?`
- **Fallback:** `Form Not Found` if no match
- **Company Lookup:** `Edit Company Search`, `Get Company on Google`, `Parse Results`, `Split Out`
- **Content Generation:** `Merge`, `Create a Followup for Company and Person`
- **Email Delivery:** `Send Email`, `Form Email Sent`

📨 Final Output
An HTML-styled email (using Tailwind CSS) with:
- Matched LinkedIn profile
- Company insights
- Persona-based outreach strategy

🔐 Credentials Used
- **BrightData account** for scraping Google search results
- **OpenAI account** for GPT-4o-mini-powered parsing and content generation
- **SMTP account** for sending follow-up emails

❓Questions?
Template and node created by [Miquel Colomer](https://www.linkedin.com/in/miquelcolomersalas/) and [n8nhackers](https://n8nhackers.com).  

Need help customizing or deploying? [Contact](support@n8nhackers.com) us for consulting and support.

## 🔗 Nodes Used

Send Email, Filter, n8n Form Trigger, OpenAI, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
