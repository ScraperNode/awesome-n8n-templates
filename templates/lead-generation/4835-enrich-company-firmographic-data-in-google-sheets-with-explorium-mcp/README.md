# 🎣 Enrich company firmographic data in Google Sheets with Explorium MCP

> ⚡ **1,361 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Google Sheets Company Enrichment with Explorium MCP

# Template

Download the following json file and import it to a new n8n workflow:

[google\_sheets\_enrichment.json](https://drive.usercontent.google.com/u/0/uc?id=1SxlqU2hVn41e0XTjPx12Ryrx_yil3TUq\&export=download)

![](https://files.readme.io/47bf118229ab009f2b78df40f3c1cac4d0a965d5a01b12ec1b3cd4d34f1c466e-image.png)

# Overview

This n8n workflow template enables automatic enrichment of company information in your Google Sheets. When you add a new company or update existing company details (name or website), the workflow automatically fetches additional business intelligence data using Explorium MCP and updates your sheet with:

* Business ID
* NAICS industry code
* Number of employees (range)
* Annual revenue (range)

# Key Features

* **Automatic Triggering**: Monitors your Google Sheet for new rows or updates to company name/website fields
* **Smart Processing**: Only processes new or modified rows, not the entire sheet
* **Data Validation**: Ensures both company name and website are present before processing
* **Error Handling**: Processes each row individually to prevent one failure from affecting others
* **Powered by AI**: Uses Claude Sonnet 4 with Explorium MCP for intelligent data enrichment

# Prerequisites

Before setting up this workflow, ensure you have:

1. **n8n instance** (self-hosted or cloud)
2. **Google account** with access to Google Sheets
3. **Anthropic API key** for Claude
4. ***Explorium MCP API key***

<br />

# Installation & Setup

## Step 1: Import the Workflow

1. Create a new workflow.
2. Download the workflow JSON from above.
3. In your n8n instance, go to **Workflows** → **Add Workflow** → **Import from File**
4. Select the JSON file and click **Import**

## Step 2: Create Google Sheet

1. Create a new google sheet (or make a copy of this [template](https://docs.google.com/spreadsheets/d/14PypuKFWkMftiCtPrekpbav63tEGmgGgUP3cDwv7wXE/edit?usp=sharing))
2. Your Google Sheet must have the following columns (exact names):

* `name` - Company name
* `website` - Company website URL
* `business_id` - Will be populated by the workflow
* `naics` - Will be populated by the workflow
* `number_of_employees_range` - Will be populated by the workflow
* `yearly_revenue_range` - Will be populated by the workflow

<br />

## Step 3: Configure Google Sheets Credentials

You'll need to set up two Google credentials:

#### Google Sheets Trigger Credentials:

1. Click on the **Google Sheets Trigger** node
2. Under Credentials, click **Create New**
3. If working on n8n Cloud, Click the 'Sign in with Google' button

   ![](https://files.readme.io/200aac6aa2ac8e4d671f50d8d6c2186e4c571449ec57610d5209a036c968caf1-image.png)

4. Grant permissions to read and monitor your Google Sheets
5. If working on n8n Instance, Follow the OAuth2 authentication process [here](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic/#finish-your-n8n-credential)
6. Fill the Client ID and Client Secret fields

![](https://files.readme.io/789e2e7e6f7921533ac90c703b4307f90d6b913b187632b61f2f0957687739c7-image.png)

#### Google Sheets Update Credentials:

1. Click on the **Update Company Row** node
2. Under Credentials, select the same credentials or create new ones (The same you did above)
3. Ensure permissions include write access to your sheets

## Step 4: Configure Anthropic Credentials

1. Click on the **Anthropic Chat Model** node
2. Under Credentials, click **Create New**
3. Enter your Anthropic API key

![](https://files.readme.io/d5647de529ef23690408c6633136648999496c573dfac31e135868f2d1e3e30e-image.png)

4. Save the credentials

## Step 5: Configure Explorium MCP Credentials

1. Click on the **MCP Client** node
2. Under Credentials, click **Create New** (Header Auth)
3. Fill the Name field with `api_key`
4. Fill the Value field with your Explorium API Key

![](https://files.readme.io/8b89ad77232f806faab6590caca7dacc7a673f61ba10275f75e5bfec202fdbd5-image.png)

4. Save the credentials

## Step 6: Link Your Google Sheet

1. In the **Google Sheets Trigger** node:

   * Select your Google Sheet from the dropdown
   * Select the worksheet (usually "Sheet1")

   ![](https://files.readme.io/a8b6a167d9bc140714c7bdd08af5c08597f0a58af73231d239a46c95410cf051-image.png)

2. In the **Update Company Row** node:
   * Select the same Google Sheet and worksheet
   * Ensure the matching column is set to `row_number`

   ![](https://files.readme.io/10bfafaaa3572bc805d5482d038348d41bced7b03bf94c8f04a377218d7dcaa3-image.png)

## Step 7: Activate the Workflow

1. Click the **Active** toggle in the top right to activate the workflow
2. The workflow will now monitor your sheet every minute for changes

# How It Works

## Workflow Process Flow

1. **Google Sheets Trigger**: Polls your sheet every minute for new rows or changes to name/website fields
2. **Filter Valid Rows**: Validates that both company name and website are present
3. **Loop Over Items**: Processes each company individually
4. **AI Agent**: Uses Explorium MCP to:
   * Find the company's business ID
   * Retrieve firmographic data (revenue, employees, NAICS code)
5. **Format Output**: Structures the data for Google Sheets
6. **Update Company Row**: Writes the enriched data back to the original row

## Trigger Behavior

* **First Activation**: May process all existing rows to establish a baseline
* **Ongoing Operation**: Only processes new rows or rows where name/website fields change
* **Polling Frequency**: Checks for changes every minute

# Usage

## Adding New Companies

1. Add a new row to your Google Sheet
2. Fill in the `name` and `website` columns
3. Within 1 minute, the workflow will automatically:
   * Detect the new row
   * Enrich the company data
   * Update the remaining columns

## Updating Existing Companies

1. Modify the `name` or `website` field of an existing row
2. The workflow will re-process that row with the updated information
3. All enrichment data will be refreshed

## Monitoring Executions

1. In n8n, go to **Executions** to see workflow runs
2. Each execution shows:
   * Which rows were processed
   * Success/failure status
   * Detailed logs for troubleshooting

# Troubleshooting

## Common Issues

**All rows are processed instead of just new/updated ones**

* Ensure the workflow is **activated**, not just run manually
* Manual test runs will process all rows
* First activation may process all rows once

**No data is returned for a company**

* Verify the company name and website are correct
* Check if the company exists in Explorium's database
* Some smaller or newer companies may not have data available

**Workflow isn't triggering**

* Confirm the workflow is activated (Active toggle is ON)
* Check that changes are made to the `name` or `website` columns
* Verify Google Sheets credentials have proper permissions

**Authentication errors**

* Re-authenticate Google Sheets credentials
* Verify Anthropic API key is valid and has credits
* Check Explorium Bearer token is correct and active

## Error Handling

The workflow processes each row individually, so if one company fails to enrich:

* Other rows will still be processed
* The failed row will retain its original data
* Check the execution logs for specific error details

# Best Practices

1. **Data Quality**: Ensure company names and websites are accurate for best results
2. **Website Format**: Include full URLs ([https://example.com](https://example.com)) rather than just domain names
3. **Batch Processing**: The workflow handles multiple updates efficiently, so you can add several companies at once
4. **Regular Monitoring**: Periodically check execution logs to ensure smooth operation

# API Limits & Considerations

* **Google Sheets API**: Subject to Google's API quotas
* **Anthropic API**: Each enrichment uses Claude Sonnet 4 tokens
* **Explorium MCP**: Rate limits may apply based on your subscription

# Support

For issues specific to:

* **n8n platform**: Consult n8n documentation or community
* **Google Sheets integration**: Check n8n's Google Sheets node documentation
* **Explorium MCP**: Contact Explorium support for API-related issues
* **Anthropic/Claude**: Refer to Anthropic's documentation for API issues

# Example Use Cases

1. **Sales Prospecting**: Automatically enrich lead lists with company size and revenue data
2. **Market Research**: Build comprehensive databases of companies in specific industries
3. **Competitive Analysis**: Track and monitor competitor information
4. **Investment Research**: Gather firmographic data for potential investment targets

## 🔗 Nodes Used

Google Sheets, Google Sheets Trigger, AI Agent, Anthropic Chat Model, Structured Output Parser, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
