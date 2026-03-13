# 💬 Cold email outreach personalized by business with Gmail, Google Sheet and Gemini

> ⚡ **131 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## AI-Powered Personalized Cold Email Outreach System
**Categories:** Lead Generation, Business Automation, AI

This workflow automates personalized cold email outreach by fetching lead data from a **Google Sheet**, using an **AI Agent** (e.g., GPT-5) to analyze the prospect's business website, crafting a tailored message, and sending it via **Gmail**. It updates the sheet to track who has been contacted, creating a completely automated and intelligent outreach system.

---
### Benefits
* **Hyper-Personalized Outreach** - Generates unique email copy for each lead by analyzing their specific business website.
* **Automated & Efficient** - Runs automatically on a schedule, saving hours of manual lead research and email writing.
* **Seamless Integration** - Connects directly to **Google Sheets** and **Gmail** for a smooth, end-to-end process.
* **Flexible & Customizable** - The **AI Agent's** prompt can be easily adjusted to change the email tone, focus, and call-to-action.
* **Clear Tracking** - Updates the lead's status in your spreadsheet to prevent duplicate outreach and maintain a clean record.

### How It Works

1.  **Scheduled Trigger**: The workflow is activated at a pre-set time using the **Schedule Trigger** node.
2.  **Lead Ingestion**: It pulls leads from a designated **Google Sheet** where the `Outreach Status` is marked as `Pending`.
3.  **AI Analysis & Email Crafting**:
    * The **AI Agent** node reads the lead's website and other data.
    * It uses an advanced prompt to act as an email specialist, crafting a unique, value-driven email pitch tailored to the prospect.
4.  **Email Dispatch**: The workflow sends the personalized email to the prospect's address using the **Gmail** node.
5.  **Status Update**: It updates the `Outreach Status` in the **Google Sheet** from `Pending` to `Sent` for the processed lead.

---

### Requirements
* **n8n**: A deployed instance of n8n.
* **Google Sheets**: A Google account with a designated spreadsheet for your leads.
* **Gmail**: A Google account for sending emails.
* **AI/LLM service**: A credential for an AI service like **Google Gemini** or **OpenAI**.

---

### How to Use

1.  **Set up your spreadsheet**: Ensure your Google Sheet has the required columns: `Title`, `Website`, `Email`, `Industry`, and `Outreach Status`. Mark leads you want to process as `Pending`.
2.  **Configure the workflow**:
    * Authenticate your **Google Sheets**, **Gmail**, and **AI/LLM** accounts.
    * Open the **Edit Fields** node to add your name and company for the email signature.
3.  **Customize & Run**: Adjust the prompt in the **AI Agent** node to refine the email's style and set the **Schedule Trigger** to your preferred time. The workflow will begin automatically sending emails.

### Business Use Cases
* **Sales Teams** - Generate hyper-personalized cold emails at scale to close more deals.
* **Marketing Agencies** - Offer AI-driven outreach services to clients to boost their lead generation efforts.
* **Recruiters** - Send tailored emails to passive candidates by referencing their professional profiles.
* **SaaS Companies** - Target potential customers with highly relevant email pitches that address their specific business needs.
* **Startups** - Efficiently validate product ideas or find early adopters by reaching out to a targeted audience.

### Revenue Potential
This system can completely revolutionize your sales and marketing efforts:

* **High conversion rates** due to personalized and relevant outreach can help you win clients of $5000+.
* **Reduced manual effort** allows you to focus on high-value tasks.
* **Scalable** to handle thousands of leads with minimal per-email cost.
* Perfect for agencies offering **"Done-For-You"** AI-powered outreach services.

**Difficulty Level:** Intermediate
**Estimated Setup Time:** 20 min
**Monthly Operating Cost:** Low (variable based on AI usage)

### Advanced Optimizations
* **Enrichment**: Add a step to automatically enrich your leads with company data before the AI personalization step.
* **A/B Testing**: Create multiple versions of the **AI Agent** prompt to test different messaging styles and optimize for conversion.
* **Follow-up Sequence**: Extend the workflow to automatically send a follow-up email if the prospect doesn't reply within a certain number of days.

***



### Google Sheet Template

You can copy [this sample Google Sheet](https://docs.google.com/spreadsheets/d/1JTeh0spxEzeZCvE7nT-lqDCpf6Awr7KH9Etst08WdIY/) to get started.



**Need a lead generation pipeline to feed this workflow?** Check out [this n8n workflow](https://n8n.io/workflows/7406-automate-google-maps-lead-generation-with-free-email-enrichment-to-google-sheets/) that automates Google Maps lead generation without any paid tools.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
