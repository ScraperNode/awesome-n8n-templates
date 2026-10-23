# 🎣 Enrich and deduplicate Slack-uploaded companies in HubSpot with Coresignal

> ⚡ **11 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow automates the full company enrichment pipeline: Simply import CSV company lists to Slack and save time on enrichment and CRM maintenance. It processes uploaded files, extracts company domains, checks for existing records in HubSpot, and uses conditional logic with user approval to decide which companies to enrich. The result is a clean, enriched CRM dataset without duplicates and context rich company profiles. Ideal for B2B sales, marketing, and RevOps teams.

## How It Works
1. A file is uploaded to a Slack channel.
The workflow downloads and extracts company data from the file.
2. Company domains are inserted into a temporary data table.
3. HubSpot is queried to identify existing companies (duplicates).
4. If duplicates are found, the user is asked via Slack whether to enrich them.
5. Approved companies are enriched using Coresignal multi-source data.
6. Existing companies are updated, and new companies are created in HubSpot.
7. A summary of results (created, updated, skipped) is posted to Slack.

## Tools used
|Tool / Node|What it does in the workflow|Free / credentials needed?|
|-|-|-|
|Slack Trigger|Waits for a file to be uploaded in a Slack channel and sends file metadata|Slack app configuration required|
|Slack Get File|Fetches the file download URL|Slack app configuration required|
|Slack Message|Notifies user that workflow has started|Slack app configuration required|
|HTTP Request|Downloads the file from Slack|Slack credentials required|
|Extract from File|Parses CSV/Excel data|No credentials required|
|Data Table (insert)|Stores company domains|No credentials required|
|HubSpot Search Company|Checks for duplicates in HubSpot|HubSpot credentials required|
|IF Node|Determines if company exists|No credentials required|
|Slack Send & Wait|Asks user whether to enrich duplicates|Slack app configuration required|
|Merge Node|Combines approval results|No credentials required|
|Data Table (delete/get)|Manages temporary dataset|No credentials required|
|Coresignal Enrich Company|Fetches company enrichment data|Coresignal API key required|
|Code Node|Maps domains to HubSpot company IDs|No credentials required|
|HubSpot Update Company|Updates existing companies|HubSpot credentials required|
|HubSpot Create Company|Creates new companies|HubSpot credentials required|
|Summarize Node|Counts number of companies (created, updated, skipped) throughout the workflow|No credentials required|
|Merge Node (final)|Combines all summary results into one output|No credentials required|
|Slack Message (final)|Sends summary of results to Slack channel|Slack app configuration required|

## How to Set Up

**1. Slack Trigger** - listen for the file_share event on your chosen channel. Select the channel by ID, connect your Slack API credential, and ensure your Slack app has permissions to read files and post messages.
**2. Notify Slack on file download** - send an informational message to the channel confirming processing has started. Use ephemeral mode if the message should only be visible to the triggering user.
**3. Download & setch file contents** - use a Slack node (resource: file, operation: get) to download the file using the trigger's file_id. Follow this with an HTTP Request node using your Slack credentials to fetch the private download URL - set responseFormat to file to retrieve a binary buffer.
**4. Extract & stage data** - parse the file with an Extract from File node (supports CSV, Excel, and other tabular formats). Before inserting, use a Data Table node (deleteRows) to clear any existing rows matching the current domain, then insert the fresh data with insertRows. Use the same Data Table ID for both operations.
**5. Search HubSpot by domain** - use a HubSpot node (searchByDomain) with the expression ={{ $json.Website }} and returnAll enabled to check whether the company already exists. Connect via OAuth2.
**6. Branch: existing vs. new company** - use an IF node to check whether a HubSpot company ID was returned. The true branch handles updates and duplicates; the false branch handles creation.
**7. Slack approval for duplicates** - for duplicate companies, use a sendAndWait Slack node with approvalType: double to ask the user whether to proceed with enrichment. Follow with an IF node - if declined, delete or skip the rows.
**8. Enrich via Coresignal** - use the Coresignal node (resource: company, operation: enrich) with the company website expression. Configure your Coresignal API key in credentials.
**9. Map fields with a code node** - run custom JavaScript to transform the Coresignal response into HubSpot-ready fields -  calculate annual revenue, extract headquarters location, and build a description string.
**10. Create or update in HubSpot** -
* new company: HubSpot node (create) - map name, revenue, city, country, and description.
* Existing company: HubSpot node (update) - provide the companyId from the search result and map the same enriched fields.

**11. Summarize & report** - use Summarize nodes to count created, updated, and duplicate records. Merge the totals and post a summary message to the Slack channel.
**12. Error handling** - on HTTP Request and HubSpot nodes, configure retries and backoff under the Options tab. Enable continueOnFail where appropriate to prevent one failed record from stopping the workflow. Use Slack nodes to alert on critical failures.

## Customization Options
* You can easily adapt this workflow to:
Support additional file formats or columns
* Enrich only specific companies based on filters
* Map additional Coresignal fields into HubSpot
* Route enriched data to other tools (CRM, database, BI tools)
* Automate lead scoring, segmentation or outreach after enrichment
* Add validation rules before creating companies

## Why Use This Workflow?
* Automates bulk enrichment from simply uploading CSV list to slack
* Prevents duplicate company records in HubSpot
* Adds human approval step for better control
* Keeps CRM data clean and standardized
* Saves hours of manual data entry and research
* Scales easily for sales ops and RevOps teams

### Limitations
* Recommended batch size: **300–500** companies per run
* Requires correct domain formatting in input data
* Slack approval step introduces manual dependency for duplicates

## Need help or want to customize this?

Reach out directly: artur@coresignal.com 
Follow for more on linkedin: https://www.linkedin.com/in/artur-mulagalijev/

## 🔗 Nodes Used

HTTP Request, Slack, HubSpot, Extract from File, Summarize, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
