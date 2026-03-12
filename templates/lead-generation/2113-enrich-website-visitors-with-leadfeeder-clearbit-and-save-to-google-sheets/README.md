# 🎣 Enrich website visitors with Leadfeeder & Clearbit and save to Google Sheets

> ⚡ **1,380 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Use Case
When trying to maximize your outreach, website visitors are often an overlooked source of qualified new leads. This workflow allows your to track and enrich new website visitors and saves them to a Google Sheet once they meet a pre-defined criteria.
# What this workflow does
This workflow fires once a day and gets all your leads saved in Leadfeeder. It then takes the leads that meet a pre-defined engagement criteria, e.g. that they visited your site 3 times, and enriches them additionally with Clearbit. From there it filters the leads again by a criteria on the company, e.g. a minimum employee count, and saves matching leads into a Google Sheet document.
# Setup
1. Add your **Leedfeeder** credentials. The name should be `Authorization` and the value `Token token=yourapitoken`. You can find your token via **Settings -&gt; Personal -&gt; API-Token**
2. Add your **Google Sheet** credentials
3. Save the **Leedfeeder** account names you want to use in the `Setup` node
4. Copy the [Google Sheets Template](https://docs.google.com/spreadsheets/d/1a2gfBjZZpN0jiD7apR8fPplRp2aPHVy2_5lp4Yzp778/edit?usp=sharing) and add its URL to the `Setup` node
# How to adjust this to your needs
- Adjust and/or remove the engagement and company criteria
- Add more ways to enrich a company
# Potential ideas to enhance the use of this workflow
- Automatically reach out to users that meet the criteria / that get added to the sheet
- Create a workflow that finds the right employee in companies that are identified by this workflow

## 🔗 Nodes Used

Google Sheets, HTTP Request, Clearbit, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
