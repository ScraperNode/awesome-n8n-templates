# 🎣 Automate HubSpot to Salesforce lead creation with Explorium AI enrichment

> ⚡ **758 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Automatically enrich prospect data from HubSpot using Explorium and create leads in Salesforce

This n8n workflow streamlines the process of enriching prospect information by automatically pulling data from HubSpot, processing it through Explorium's AI-powered tools, and creating new leads in Salesforce with enhanced prospect details.

## Credentials Required

To use this workflow, set up the following credentials in your n8n environment:

### HubSpot
- **Type**: App Token (or OAuth2 for broader compatibility)
- **Used for**: triggering on new contacts, fetching contact data

### Explorium API
- **Type**: Generic Header Auth
- **Header**: Authorization
- **Value**: Bearer YOUR_API_KEY

[Get explorium api key](https://developers.explorium.ai/reference/getting_your_api_key)


### Salesforce
- **Type**: OAuth2 or Username/Password
- **Used for**: creating new lead records

Go to Settings → Credentials, create these three credentials, and assign them in the respective nodes before running the workflow.

## Workflow Overview

### Node 1: HubSpot Trigger
This node listens for real-time events from the connected HubSpot account. Once triggered, the node passes metadata about the event to the next step in the flow.

### Node 2: HubSpot
This node fetches contact details from HubSpot after the trigger event.

- **Credential**: Connected using a HubSpot App Token
- **Resource**: Contact
- **Operation**: Get Contact
- **Return All**: Disabled

This node retrieves the full contact details needed for further processing and enrichment.

### Node 3: Match prospect
This node sends each contact's data to Explorium's AI-powered prospect matching API in real time.

- **Method**: POST
- **Endpoint**: https://api.explorium.ai/v1/prospects/match
- **Authentication**: Generic Header Auth (using a configured credential)
- **Headers**: Content-Type: application/json

The request body is dynamically built from contact data, typically including: full_name, company_name, email, phone_number, linkedin. These fields are matched against Explorium's intelligence graph to return enriched or validated profiles.

**Response Output**: total_matches, matched_prospects, and a prospect_id. Each response is used downstream to enrich, validate, or create lead information.

### Node 4: Filter
This node filters the output from the Match prospect step to ensure that only valid, matched results continue in the flow. Only records that contain at least one matched prospect with a non-null prospect_id are passed forward.

**Status**: Currently deactivated (as shown by the "Deactivate" label)

### Node 5: Extract Prospect IDs from Matched Results
This node extracts all valid prospect_id values from previously matched prospects and compiles them into a flat array. It loops over all matched items, extracts each prospect_id from the matched_prospects array and returns a single object with an array of all prospect_ids.

### Node 6: Explorium Enrich Contacts Information
This node performs bulk enrichment of contacts by querying Explorium with a list of matched prospect_ids.

**Node Configuration:**
- **Method**: POST
- **Endpoint**: https://api.explorium.ai/v1/prospects/contacts_information/bulk_enrich
- **Authentication**: Header Auth (using saved credentials)
- **Headers**: "Content-Type": "application/json", "Accept": "application/json"

Returns enriched contact information, such as:
- **emails**: professional/personal email addresses
- **phone_numbers**: mobile and work numbers
- **professions_email**, **professional_email_status**, **mobile_phone**

### Node 7: Explorium Enrich Profiles
This additional enrichment node provides supplementary contact data enhancement, running in parallel with the primary enrichment process.

### Node 8: Merge
This node combines multiple data streams from the parallel enrichment processes into a single output, allowing you to consolidate data from different Explorium enrichment endpoints. The "combine" setting indicates it will merge the incoming data streams rather than overwriting them.

### Node 9: Code - flatten
This custom code node processes and transforms the merged enrichment data before creating the Salesforce lead. It can be used to:
- Flatten nested data structures
- Format data according to Salesforce field requirements
- Apply business logic or data validation
- Map Explorium fields to Salesforce lead properties
- Handle data type conversions

### Node 10: Salesforce
This final node creates new leads in Salesforce using the enriched data returned by Explorium.

- **Credential**: Salesforce OAuth2 or Username/Password
- **Resource**: Lead
- **Operation**: Create Lead

The node creates new lead records with enriched information including contact details, company information, and professional data obtained through the Explorium enrichment process.

## Workflow Flow Summary

1. **Trigger**: HubSpot webhook triggers on new/updated contacts
2. **Fetch**: Retrieve contact details from HubSpot
3. **Match**: Find prospect matches using Explorium
4. **Filter**: Keep only successfully matched prospects (currently deactivated)
5. **Extract**: Compile prospect IDs for bulk enrichment
6. **Enrich**: Parallel enrichment of contact information through multiple Explorium endpoints
7. **Merge**: Combine enrichment results
8. **Transform**: Flatten and prepare data for Salesforce (Code node)
9. **Create**: Create new lead records in Salesforce

This workflow ensures comprehensive data enrichment while maintaining data quality and providing a seamless integration between HubSpot prospect data and Salesforce lead creation. The parallel enrichment structure maximizes data collection efficiency before creating high-quality leads in your CRM system.

## 🔗 Nodes Used

HubSpot, HubSpot Trigger, Salesforce, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
