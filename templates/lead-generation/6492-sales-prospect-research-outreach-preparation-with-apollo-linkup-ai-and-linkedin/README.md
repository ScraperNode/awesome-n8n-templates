# 🎣 Sales prospect research & outreach preparation with Apollo, Linkup AI, and LinkedIn

> ⚡ **1,402 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This template transforms your sales and outreach process by automating deep, personalized research on any contact. Go beyond simple data enrichment; this workflow acts as an AI research assistant. Starting with just a name and company, it finds the person's professional profile, analyzes it through the lens of *your* specific business offering, and returns actionable insights to prepare for the perfect outreach.

Stop spending hours manually researching prospects. With this template, you get a synthesized report in seconds, highlighting a contact's potential pain points and exactly how your solution can provide value, setting the stage for more meaningful and effective conversations.


## **Who is this for?**

* **Sales Development & Business Development Reps (SDRs/BDRs):** Drastically cut down on research time and increase the quality and personalization of your outreach efforts.
* **Account Executives:** Prepare for meetings with a deep, relevant understanding of a prospect's background and potential needs.
* **Founders & Solopreneurs:** Handle your own sales and lead generation efficiently by automating the research phase.
* **Marketing Teams:** Power your Account-Based Marketing (ABM) campaigns with tailored insights for key accounts.


## **What problem does this solve?**

* **Eliminates time-consuming manual research:** Automates the entire process of finding a person, reading their profile, and connecting the dots back to your business.
* **Prevents generic outreach:** Provides you with specific, synthesized talking points, moving you beyond "I saw your profile on LinkedIn" to a message that shows you've done your homework.
* **Solves "writer's block":** Delivers a clear summary of a prospect's potential challenges and how you can help, making it much easier to start writing a compelling message.
* **Creates actionable intelligence, not just data:** Instead of just returning a list of job titles and skills, it synthesizes that information into strategic summaries ready to be used.


## **How it works**

1.  **Input contact details:** The workflow is triggered by a form where you enter the first name, last name, and company of the person you want to research.
2.  **Find the person with Apollo:** The workflow uses the **Apollo.io API** to find the contact's professional data, including their verified LinkedIn profile URL.
3.  **Define your business context:** This is the "smart" part. The workflow injects information you provide about *your* offering and the typical pain points your customers face.
4.  **Analyze profile with Linkup:** Using the **Linkup API**, the workflow reads the person's public LinkedIn profile. Crucially, it analyzes the profile *through the lens of your business context*.
5.  **Get synthesized insights:** Linkup's AI returns three structured summaries: a general overview of the person, their potential pain points relative to your business, and a concise explanation of how your offering could bring them value.
6.  **Consolidate results:** The final node gathers all the enriched data and AI-generated summaries into a single, clean output, ready for your CRM or next action.

## **Setup**

1.  **Define your business context (Critical Step):** This is the most important part. In the **Define our business context** node, fill in the two fields:
    * `Area for which the prospect could experience pain points`: Describe the general problems your customers face.
    * `My offering`: Briefly describe your product or service. This context is what makes the AI analysis relevant to you.
2.  **Connect your accounts:**
    * **Apollo:** Add your Apollo API key to the **Enrich contact with Apollo** HTTP node.
    * **Linkup:** Add your Linkup API key to the **Find Linkedin profile information with Linkup** HTTP node. Their free plan offers €5 of credits, enough for ~1,000 runs.
3.  **Activate the workflow:** Toggle the workflow to "Active". You can now run it by filling out the form trigger!


## **Taking it further**

* **Automate CRM enrichment:** Connect the final **Consolidate results** node to a **HubSpot**, **Attio**, or **Salesforce** node to automatically save these rich insights to your contact records.
* **Generate AI-powered outreach:** Add an **OpenAI** node after this workflow to take the synthesized insights and generate a first draft of a personalized outreach email or LinkedIn message.
* **Process leads in bulk:** Replace the **Form Trigger** with a **Google Sheets** or **Airtable** trigger to run this enrichment process for an entire list of new leads automatically.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
