# 💬 Automate LinkedIn contact requests & icebreaker with Unipile and Google sheets

> ⚡ **1,036 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Automate your LinkedIn Contact Requests and send them an Icebreaker

**Disclaimer: this workflow only works on self-hosted instances due to the file system usage.**

## Who is this for?
This n8n template is designed for professionals, recruiters, and marketers who must automate LinkedIn data population and contact request processes. It is particularly useful for those looking to streamline their outreach efforts and manage LinkedIn connections more efficiently.

## What problem is this workflow solving? / Use Case
The workflow addresses the challenge of manually managing LinkedIn connections and sending contact requests. By automating these tasks, users can save time, reduce errors, and ensure consistent follow-ups with potential clients, partners, or candidates.

## What this workflow does
This template automates the process of populating LinkedIn data and sending contact requests. After the connection request has been accepted, it sends a predefined "icebreaker". **Please note that you are limited to 150 invitations per week from a free LinkedIn account, but you can set up to 10 accounts for $55 / month**. 



## Setup
1. **You will have to create an account at Unipile**. You can use this link to create it: [Create your account](https://www.unipile.com/?utm_source=partner&utm_campaign=pollup_data)
2. **Import the Template**: Import the provided template into your n8n instance.
3. **Make a copy of the Google sheet into your Google account**. you can find a template [here](https://docs.google.com/spreadsheets/d/17D1Y-S-4C6iVHZAzlfe-rRvR1prezeLkfCgTfheBxUA/edit?gid=0#gid=0)
4. **Set Up**: Follow the instructions inside the workflow to create and configure the Workflow as needed.
5. **Test the Workflow**: Create a LinkedIn user and run the workflow to ensure it populates data and sends contact requests correctly.
## How to customize this workflow to your needs
- **Customize Contact Messages**: Personalize the contact request or Icebreaker messages to increase engagement.
- **Integrate with Other Tools**: Add additional nodes to integrate with CRM systems or other marketing tools for enhanced functionality.
- **Monitor and Optimize**: Regularly review the workflow's performance and make adjustments to improve efficiency and effectiveness.


By following this setup and customization guide, users can leverage this n8n template to enhance their LinkedIn outreach and connection management processes.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Execute Sub-workflow, Execute Workflow Trigger, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
