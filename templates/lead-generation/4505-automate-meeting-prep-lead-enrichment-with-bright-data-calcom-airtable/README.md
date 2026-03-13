# 🎣 Automate meeting prep & lead enrichment with Bright Data, Cal.com & Airtable

> ⚡ **649 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow makes it easier to prepare for meetings and calls by researching your lead right before the call and creates a high-level meeting prep that is sent to your email. This removes the extra steps needed by teams to learn their leads, research, and prepare for the upcoming calls.


## How does it work

This workflow starts when We Capture the webhook from cal.com for new bookings.

Ensure you have a field on the form to collect LinkedIn posts. This can be optional or mandatory depending on your preferences.

When a new event is booked, we will add the leads to an Airtable CRM for appointments and new bookings. This table will contain all the items and items needed to enrich and maintain your CRM.

If the lead has linkedin then we do research on LinkedIn for their content and posts and perform a lead enrichment to get as much info as we can about the leads and create a new meeting prep.

## What you need
1. Bright data API
2. Cal.com account/calendar. Other calendars can be used too for this eg calendly, Google Calendar, etc with a few tweaks
3. CRM - This can be anything not just airtable


## Setting it up
1. Create/update your calendar to allow collecting users LinkedIn profiles/bios
2. Add a new webhook to and subscribe to the desired events like below
![image.png](fileId:1420)


3. Map the fields from the webhook to match your CRM. If you have no CRM make a copy of this [Airtable CRM](https://airtable.com/appiSZ70ow7uVxv7t/shrvmFKqRYGX6iUZY) and map the fields to your account. We will be using the Base and table ID to make the mapping easier
4.  Setup your Bright Data API and select the data source as linkedin for the scraping
5. You can edit more data on the bio as needed 
6. Update this info to the CRM under the table lead enrichment and map accordingly
7. You can update the prompt on the AI models or work with them as is. 
8. Update the Gmail node to send the meeting preps to you and finally update the CRM with the generated  Meeting prep

This automated process can save your team a couple of minutes each day otherwise spent on other client fulfillment items.

If you would like to learn more about n8n templates like this, feel free to reach out via [Linkedin](https://www.linkedin.com/in/zacharia-kimotho/) 

Happy productivity!!

## 🔗 Nodes Used

Airtable, Webhook, Gmail, Markdown, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
