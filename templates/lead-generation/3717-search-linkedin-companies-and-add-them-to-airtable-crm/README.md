# 🎣 Search LinkedIn companies and add them to Airtable CRM

> ⚡ **4,421 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Search LinkedIn companies and add them to Airtable CRM

### Who is this for?
This template is ideal for sales teams, business development professionals, and marketers looking to build a robust prospect database without manual LinkedIn research. Perfect for agencies, consultants, and B2B companies targeting specific business profiles.

### What problem does this workflow solve?
Manually researching companies on LinkedIn and adding them to your CRM is time-consuming and error-prone. This automation eliminates the tedious process of finding, qualifying, and importing prospects into your database.

### What this workflow does
This workflow automatically searches for companies on LinkedIn based on your criteria (keywords, size, location), retrieves detailed information about each company, filters them based on quality indicators (follower count and website availability), and adds new companies to your Airtable CRM while preventing duplicates.

### Setup
1. Create a Ghost Genius API account and get your API key
2. Configure HTTP Request nodes with Header Auth credentials (Name: "Authorization", Value: "Bearer your_api_key")
3. Create an Airtable base named "CRM" with columns: name, website, LinkedIn, id, etc.
4. Set up your Airtable credentials following n8n documentation
5. Add your company search selection criteria to the “Set Variables” node.

### How to customize this workflow
- Modify search parameters in the "Set Variables" node to target different industries, locations, or company sizes
- Adjust the follower count threshold in the "Filter Valid Companies" node based on your qualification criteria
- Customize the Airtable fields mapping in the "Add Company to CRM" node to match your database structure
- Add notification nodes (Slack, Email) to alert you when new companies are added

## 🔗 Nodes Used

Airtable, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
