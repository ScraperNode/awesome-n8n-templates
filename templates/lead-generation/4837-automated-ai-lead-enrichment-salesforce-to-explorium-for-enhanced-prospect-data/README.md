# 🎣 Automated AI lead enrichment: Salesforce to Explorium for enhanced prospect data

> ⚡ **1,610 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Salesforce Lead Enrichment with Explorium

# Template

Download the following json file and import it to a new n8n workflow:

[salesforce\_workflow.json](https://raw.githubusercontent.com/explorium-ai/integrations-templates/main/n8n/automated-ai-lead-enrichment-salesforce-to-explorium-for-enhanced-prospect-data.json)

![Automated AI Lead Enrichment_ Salesforce to Explorium for Enhanced Prospect Data.png](fileId:2629)



# Overview

This n8n workflow monitors your Salesforce instance for new leads and automatically enriches them with missing contact information. When a lead is created, the workflow:

1. Detects the new lead via Salesforce trigger
2. Matches the lead against Explorium's database using name and company
3. Enriches the lead with professional email addresses and phone numbers
4. Updates the Salesforce lead record with the discovered contact information

This automation ensures your sales team always has the most up-to-date contact information for new leads, improving reach rates and accelerating the sales process.

# Key Features

* **Real-time Processing**: Triggers automatically when new leads are created in Salesforce
* **Intelligent Matching**: Uses lead name and company to find the correct person in Explorium's database
* **Contact Enrichment**: Adds professional emails, mobile phones, and office phone numbers
* **Batch Processing**: Efficiently handles multiple leads to optimize API usage
* **Error Handling**: Continues processing other leads even if some fail to match
* **Selective Updates**: Only updates leads that successfully match in Explorium

# Prerequisites

Before setting up this workflow, ensure you have:

1. **n8n instance** (self-hosted or cloud)
2. **Salesforce account** with:
   * OAuth2 API access enabled
   * Lead object permissions (read/write)
   * API usage limits available
3. **Explorium API credentials** (Bearer token) - [Get explorium api key](https://developers.explorium.ai/reference/getting_your_api_key)
4. Basic understanding of Salesforce lead management

# Salesforce Requirements

## Required Lead Fields

The workflow expects these standard Salesforce lead fields:

* `FirstName` - Lead's first name
* `LastName` - Lead's last name
* `Company` - Company name
* `Email` - Will be populated/updated by the workflow
* `Phone` - Will be populated/updated by the workflow
* `MobilePhone` - Will be populated/updated by the workflow

## API Permissions

Your Salesforce integration user needs:

* Read access to Lead object
* Write access to Lead object fields (Email, Phone, MobilePhone)
* API enabled on the user profile
* Sufficient API calls remaining in your org limits

# Installation & Setup

## Step 1: Import the Workflow

1. Copy the workflow JSON from the template
2. In n8n: Navigate to **Workflows** → **Add Workflow** → **Import from File**
3. Paste the JSON and click **Import**

## Step 2: Configure Salesforce OAuth2 Credentials

1. Click on the **Salesforce Trigger** node
2. Under Credentials, click **Create New**
3. Follow the OAuth2 flow:
   * **Client ID**: From your Salesforce Connected App
   * **Client Secret**: From your Salesforce Connected App
   * **Callback URL**: Copy from n8n and add to your Connected App
4. Authorize the connection
5. Save the credentials as "Salesforce account connection"

**Note**: Use the same credentials for all Salesforce nodes in the workflow.

## Step 3: Configure Explorium API Credentials

1. Click on the **Match\_prospect** node
2. Under Credentials, click **Create New** (HTTP Header Auth)
3. Configure the header:
   * **Name**: `Authorization`
   * **Value**: `Bearer YOUR_EXPLORIUM_API_TOKEN`
4. Save as "Header Auth account"
5. Apply the same credentials to the **Explorium Enrich Contacts Information** node

## Step 4: Verify Node Settings

1. **Salesforce Trigger**:
   * Trigger On: `Lead Created`
   * Poll Time: Every minute (adjust based on your needs)

2. **Salesforce Get Leads**:
   * Operation: `Get All`
   * Condition: `CreatedDate = TODAY` (fetches today's leads)
   * Limit: 20 (adjust based on volume)

3. **Loop Over Items**:
   * Batch Size: 6 (optimal for API rate limits)

## Step 5: Activate the Workflow

1. Save the workflow
2. Toggle the **Active** switch to ON
3. The workflow will now monitor for new leads every minute

## Detailed Node Descriptions

1. **Salesforce Trigger**: Polls Salesforce every minute for new leads
2. **Get Today's Leads**: Retrieves all leads created today to ensure none are missed
3. **Loop Over Items**: Processes leads in batches of 6 for efficiency
4. **Match Prospect**: Searches Explorium for matching person using name + company
5. **Filter**: Checks if a valid match was found
6. **Extract Prospect IDs**: Collects all matched prospect IDs
7. **Enrich Contacts**: Fetches detailed contact information from Explorium
8. **Merge**: Combines original lead data with enrichment results
9. **Split Out**: Separates individual enriched records
10. **Update Lead**: Updates Salesforce with new contact information

## Data Mapping

The workflow maps Explorium data to Salesforce fields as follows:

| Explorium Field     | Salesforce Field | Fallback Logic                    |
| ------------------- | ---------------- | --------------------------------- |
| `emails[0].address` | Email            | Falls back to `professions_email` |
| `mobile_phone`      | MobilePhone      | Falls back to `phone_numbers[1]`  |
| `phone_numbers[0]`  | Phone            | Falls back to `mobile_phone`      |

# Usage & Monitoring

## Automatic Operation

Once activated, the workflow runs automatically:

1. Checks for new leads every minute
2. Processes any leads created since the last check
3. Updates leads with discovered contact information
4. Continues running until deactivated

## Manual Testing

To test the workflow manually:

1. Create a test lead in Salesforce
2. Click "Execute Workflow" in n8n
3. Monitor the execution to see each step
4. Verify the lead was updated in Salesforce

## Monitoring Executions

Track workflow performance:

1. Go to **Executions** in n8n
2. Filter by this workflow
3. Review successful and failed executions
4. Check logs for any errors or issues

# Troubleshooting

## Common Issues

**No leads are being processed**

* Verify the workflow is activated
* Check Salesforce API limits haven't been exceeded
* Ensure new leads have FirstName, LastName, and Company populated
* Confirm OAuth connection is still valid

**Leads not matching in Explorium**

* Verify company names are accurate (not abbreviations)
* Check that first and last names are properly formatted
* Some individuals may not be in Explorium's database
* Try testing with known companies/contacts

**Contact information not updating**

* Check Salesforce field-level security
* Verify the integration user has edit permissions
* Ensure Email, Phone, and MobilePhone fields are writeable
* Check for validation rules blocking updates

**Authentication errors**

* Salesforce: Re-authorize OAuth connection
* Explorium: Verify Bearer token is valid and not expired
* Check API quotas haven't been exceeded

## Error Handling

The workflow includes built-in error handling:

* Failed matches don't stop other leads from processing
* Each batch is processed independently
* Failed executions are logged for review
* Partial successes are possible (some leads updated, others skipped)

# Best Practices

## Data Quality

1. **Ensure complete lead data**: FirstName, LastName, and Company should be populated
2. **Use full company names**: "Microsoft Corporation" matches better than "MSFT"
3. **Standardize data entry**: Consistent formatting improves match rates

## Performance Optimization

1. **Adjust batch size**: Lower if hitting API limits, higher for efficiency
2. **Modify polling frequency**: Every minute for high volume, less frequent for lower volume
3. **Set appropriate limits**: Balance between processing speed and API usage

## Compliance & Privacy

1. **Data permissions**: Ensure you have rights to enrich lead data
2. **GDPR compliance**: Consider privacy regulations in your region
3. **Data retention**: Follow your organization's data policies
4. **Audit trail**: Monitor who has access to enriched data

# Customization Options

## Extend the Enrichment

Add more Explorium enrichment by:

1. Adding firmographic data (company size, revenue)
2. Including technographic information
3. Appending social media profiles
4. Adding job title and department verification

## Modify Trigger Conditions

Change when enrichment occurs:

* Trigger on lead updates (not just creation)
* Add specific lead source filters
* Process only leads from certain campaigns
* Include lead score thresholds

## Add Notifications

Enhance with alerts:

* Email sales reps when leads are enriched
* Send Slack notifications for high-value matches
* Create tasks for leads that couldn't be enriched
* Log enrichment metrics to dashboards

# API Considerations

## Salesforce Limits

* API calls: Each execution uses \~4 Salesforce API calls
* Polling frequency: Consider your daily API limit
* Batch processing: Reduces API usage vs. individual processing

## Explorium Limits

* Match API: One call per batch of leads
* Enrichment API: One call per batch of matched prospects
* Rate limits: Respect your plan's requests per minute

# Integration Architecture

This workflow can be part of a larger lead management system:

1. **Lead Capture** → **This Workflow** → **Lead Scoring** → **Assignment**
2. Can trigger additional workflows based on enrichment results
3. Compatible with existing Salesforce automation (Process Builder, Flows)
4. Works alongside other enrichment tools

# Security Considerations

* **Credentials**: Stored securely in n8n's credential system
* **Data transmission**: Uses HTTPS for all API calls
* **Access control**: Limit who can modify the workflow
* **Audit logging**: All executions are logged with details

# Support Resources

For assistance with:

* **n8n issues**: Consult n8n documentation or community forum
* **Salesforce integration**: Reference Salesforce API documentation
* **Explorium API**: Contact Explorium support for API questions
* **Workflow logic**: Review execution logs for debugging

## 🔗 Nodes Used

Salesforce, Filter, Salesforce Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
