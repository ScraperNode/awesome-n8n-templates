# 💬 Automate LinkedIn requests & icebreaker with Browserflow and Google sheets

> ⚡ **664 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

**Disclaimer: As this workflow uses a Community node, it is available only to  self-hosted installation of n8n**

## Who is this for?
This n8n template is designed for professionals, recruiters, and marketers who need to automate LinkedIn data population and contact request processes. It is particularly useful for those looking to streamline their outreach efforts and manage LinkedIn connections more efficiently.
## What problem is this workflow solving? / Use Case
The workflow addresses the challenge of manually managing LinkedIn connections and sending contact requests followed by an AI generated ice-breaker. By automating these tasks, users can save time, reduce errors, and ensure consistent follow-ups with potential clients, partners, or candidates. 
## What this workflow does:
This template extract LinkedIn adresses from a google sheet, check if they already are connected to you, and send them a contact request if hey are not. Then it sends to them an AI generated Ice breaker messages, which take into account the personal and company posts, and your company description, to find common points of interest. 
You can contact up to 50 persons for free. 
## Setup
1. Copy [this](https://docs.google.com/spreadsheets/d/1-0vwEAPDU4XWYZtlALOv4CIMXh7NPAXaY7Hde-ZAPJ4/edit?usp=sharing) google sheet to your Google account

2. Enter your data in "Set your Data Here":
    - Google sheet URL: Paste here the URL of your google sheet
    - Your activity: Define here what your company is about (used to match your activity with the users activity)
    - Your name: Enter your name (used to sign your mail)
    - Your company: Enter here your company name
    - Your email: Used to send your email
    - Maxitems: The number of maximum posts to download from LinkedIn

3. Set an account on Rapid API, you are allowed for free to 50 credits (5$ for 500) and most of the calls cost 1 credit. 
4. Setup an account at Browserflow You will benefit from a 7 days free trial. And then you will have to pay $17.95. With this account you'll be able to send 1920 connection invites and 3204 messages. 

5. Install n8n-nodes-browserflow from your n8n Settings &gt; Community Nodes. (it means for now that you'll need a self-hosted installation of n8n). and paste the API key you copied earlier as a credential.
   
6. Execute it regularly to check if your connections have accepted your connection request.
## How to customize this workflow to your needs
- **Customize Contact Messages**: Personalize the AI agent prompt that generates the icebreaker
- **Integrate with Other Tools**: Add additional nodes to integrate with CRM systems or other marketing tools for enhanced functionality.
- **Monitor and Optimize**: Regularly review the workflow's performance and make adjustments to improve efficiency and effectiveness.

By following this setup and customization guide, users can leverage this n8n template to enhance their LinkedIn outreach and connection management processes.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Execute Sub-workflow, Execute Workflow Trigger, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
