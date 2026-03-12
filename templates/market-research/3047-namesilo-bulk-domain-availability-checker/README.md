# 📊 Namesilo bulk domain availability checker

> ⚡ **1,235 views** · 📊 [Market Research & Insights](../)

## Description

## Introduction
The namesilo Bulk Domain Availability workflow is a powerful automation solution designed to check the registration status of multiple domains simultaneously using the Namesilo API. 

This workflow efficiently processes large lists of domains by splitting them into manageable batches, adhering to API rate limits, and compiling the results into a convenient Excel spreadsheet. 

It eliminates the tedious process of manually checking domains one by one, saving significant time for domain investors, web developers, and digital marketers. The workflow is particularly valuable during brainstorming sessions for new projects, when conducting domain portfolio audits, or when preparing domain acquisition strategies. 

By automating the domain availability check process, users can quickly identify available domains for registration without the hassle of navigating through multiple web interfaces.

## Who is this for?
This workflow is ideal for:
- Domain investors and flippers who need to check multiple domains quickly
- Web developers and agencies evaluating domain options for client projects
- Digital marketers researching domain availability for campaigns
- Business owners exploring domain options for new ventures
- IT professionals managing domain portfolios

Users should have basic familiarity with n8n workflow concepts and a Namesilo account to obtain an API key. No coding knowledge is required, though understanding of domain name systems would be beneficial.

## What problem is this workflow solving?
Checking domain availability one-by-one is a time-consuming and tedious process, especially when dealing with dozens or hundreds of potential domains. This workflow solves several key challenges:

1. **Manual Inefficiency**: Eliminates the need to individually search for each domain through registrar websites.
2. **Rate Limiting**: Handles API rate limits automatically with built-in waiting periods.
3. **Data Organization**: Compiles availability results into a structured Excel file rather than scattered notes or multiple browser tabs.
4. **Bulk Processing**: Processes up to 200 domains per batch, with the ability to handle unlimited domains across multiple batches.
5. **Time Management**: Frees up valuable time that would otherwise be spent on repetitive manual checks.

## What this workflow does
### Overview
The workflow takes a list of domains, processes them in batches of up to 200 domains per request (to comply with API limitations), checks their availability using the Namesilo API, and compiles the results into an Excel spreadsheet showing which domains are available for registration and which are already taken.

### Process
1. **Input Setup**: The workflow begins with a manual trigger and uses the "Set Data" node to collect the list of domains to check and your Namesilo API key.
2. **Domain Processing**: The "Convert & Split Domains" node transforms the input list into batches of up to 200 domains to comply with API limitations.
3. **Batch Processing**: The workflow loops through each batch of domains.
4. **API Integration**: For each batch, the "Namesilo Requests" node sends a request to the Namesilo API to check domain availability.
5. **Data Parsing**: The "Parse Data" node processes the API response, extracting information about which domains are available and which are taken.
6. **Rate Limit Management**: A 5-minute wait period is enforced between batches to respect Namesilo's API rate limits.
7. **Data Compilation**: The "Merge Results" node combines all the availability data.
8. **Output Generation**: Finally, the "Convert to Excel" node creates an Excel file with two columns: Domain and Availability (showing "Available" or "Unavailable" for each domain).

## Setup
1. **Import the workflow**: Download the workflow JSON file and import it into your n8n instance.
2. **Get Namesilo API key**: Create a free account at Namesilo and obtain your API key from https://www.namesilo.com/account/api-manager
3. **Configure the workflow**:
   - Open the "Set Data" node
   - Enter your Namesilo API key in the "Namesilo API Key" field
   - Enter your list of domains (one per line) in the "Domains" field
4. **Save and activate**: Save the workflow and run it using the manual trigger.

## How to customize this workflow to your needs
- **Modify domain input format**: You can adjust the code in the "Convert & Split Domains" node if your domain list comes in a different format.
- **Change batch size**: If needed, you can modify the batch size (currently set to 200) in the "Convert & Split Domains" node to accommodate different API limitations.
- **Adjust wait time**: If you have a premium API account with different rate limits, you can modify the wait time in the "Wait" node.
- **Enhance output format**: Customize the "Convert to Excel" node to add additional columns or formatting to the output file.
- **Add domain filtering**: You could add a node before the API request to filter domains based on specific criteria (length, keywords, TLDs).
- **Integrate with other services**: Connect this workflow to domain registrars to automatically register available domains that meet your criteria.

## 🔗 Nodes Used

HTTP Request, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
