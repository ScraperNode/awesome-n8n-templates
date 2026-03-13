# 🎣 Enrich CRM contact data with LinkedIn profiles using GPT & multi-CRM support

> ⚡ **1,091 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![crm_enricment_n8n.png](fileId:1342)

**⚠️ DISCLAIMER:** This workflow uses the AnySite LinkedIn community node, which is only available on self-hosted n8n instances. It will not work on n8n.cloud.

## Overview
This n8n workflow automates the enrichment of CRM contact data with professional insights from LinkedIn profiles. The workflow integrates with both Pipedrive and HubSpot CRMs, finding LinkedIn profiles that match your contacts and updating your CRM with valuable information about their professional background and recent activities.

## Key Features
- **Multi-CRM Support**: Works with both Pipedrive and HubSpot
- **AI-Powered Data Enrichment**: Uses an advanced AI agent to analyze and summarize professional information
- **Automated Triggers**: Activates when new contacts are added or when enrichment is requested
- **Comprehensive Profile Analysis**: Captures LinkedIn profile summaries and post activity

## How It Works

### Triggers
The workflow activates in three scenarios:
1. When a new contact is created in CRM
2. When a contact is updated in CRM with an enrichment flag

### LinkedIn Data Collection Process
1. **Email Lookup**: First tries to find the LinkedIn profile using the contact's email
2. **Advanced Search**: If email lookup fails, uses name and company details to find potential matches
3. **Profile Analysis**: Collects comprehensive profile information
4. **Post Analysis**: Gathers and analyzes the contact's recent LinkedIn activity

### CRM Updates
The workflow updates your CRM with:
- LinkedIn profile URL
- Professional summary (skills, experience, background)
- Analysis of recent LinkedIn posts and activity

## Setup Instructions

### Requirements
1. Self-hosted n8n instance with the HDW LinkedIn community node installed
2. API access to OpenAI (for GPT-4o)
3. Pipedrive and/or HubSpot account
4. AnySite API key [https://AnySite.io](https://AnySite.io)


### Installation Steps
1. **Install the HDW LinkedIn Node**:
   ```
   npm install n8n-nodes-hdw
   ```
   - Follow the detailed instructions at: [https://www.npmjs.com/package/n8n-nodes-hdw](https://www.npmjs.com/package/n8n-nodes-hdw)

2. **Configure Credentials**:
   - **OpenAI**: Add your OpenAI API key
   - **Pipedrive**: Connect your Pipedrive account (if using)
   - **HubSpot**: Connect your HubSpot account (if using)
   - **AnySite LinkedIn**: Add your API key from [https://AnySite.io](https://AnySite.io)

3. **CRM Custom Fields Setup**:
   
   **For Pipedrive:**
   - Go to Settings → Data Fields → Contact Fields → + Add Field
   - Create the following custom fields:
     - **LinkedIn Profile**: Field type - Large text
     - **Profile Summary**: Field type - Large text  
     - **LinkedIn Posts Summary**: Field type - Large text
     - **Need Enrichment**: Field type - Single option (Yes/No)
   
   Detailed instructions for creating custom fields in Pipedrive: 
   [https://support.pipedrive.com/en/article/custom-fields](https://support.pipedrive.com/en/article/custom-fields)
   
   **For HubSpot:**
   - Go to Settings → Properties → Create property
   - Create the following properties for Contact object:
     - **linkedin_url**: Field type - Single-line text
     - **profile_summary**: Field type - Multi-line text
     - **linkedin_posts_summary**: Field type - Multi-line text
     - **need_enrichment**: Field type - Checkbox (Boolean)
   
   Detailed instructions for creating properties in HubSpot:
   [https://knowledge.hubspot.com/properties/create-and-edit-properties](https://knowledge.hubspot.com/properties/create-and-edit-properties)

4. **Import the Workflow**:
   - Import the "HDW_CRM_Enrichment.json" file into your n8n instance

5. **Activate Webhooks**:
   - Enable the webhook triggers for your CRM to ensure the workflow activates correctly

## Customization Options

### AI Agent Prompts
You can modify the system prompts in the "Data Enrichment AI Agent" nodes to:
- Change the focus of profile analysis
- Adjust the tone and detail level of summaries
- Customize what information is extracted from posts

### CRM Field Mapping
The workflow is pre-configured to update specific custom fields in Pipedrive and HubSpot. Update the field/property mappings in:
- "Update data in Pipedrive" nodes
- "Update data in HubSpot" node

## Troubleshooting

### Common Issues
- **LinkedIn Profile Not Found**: Check if the contact's email is their work email; consider adjusting the search parameters
- **Webhook Not Triggering**: Verify webhook configuration in your CRM
- **Missing Custom Fields**: Ensure all required custom fields are created in your CRM with correct names

### Rate Limits
- Be aware of LinkedIn API rate limits (managed by AnySite LinkedIn node)
- Consider implementing delays if processing large batches of contacts

## Best Practices
- Use enrichment flags to selectively update contacts rather than enriching all contacts
- Review and clean contact data in your CRM before enrichment
- Periodically review the AI-generated summaries to ensure quality and relevance

## 🔗 Nodes Used

Pipedrive Trigger, HubSpot, HubSpot Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
