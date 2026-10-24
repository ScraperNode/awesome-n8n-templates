# 🔬 Assess contract risk from Google Drive with Groq, Salesforce and Slack

> ⚡ **21 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow monitors a Google Drive folder for new PDF contracts, extracts and cleans the text, uses Groq-hosted LLMs to extract clauses and assess risk, then writes the final risk summary to a Salesforce custom object and posts a notification to Slack.

## How it works
1. Triggers when a new file is created in a specific Google Drive folder.
2. Checks that the new file is a PDF, then downloads it and derives a contract name from the filename.
3. Extracts text from the PDF, normalizes whitespace, and splits the contract into smaller chunks.
4. Uses a Groq LLM to extract and classify key clauses from each chunk and parses the model output into structured JSON.
5. Sends the extracted clauses to a Groq LLM to assign risk levels, identify issues, and recommend improvements, then generates an overall risk report (overall risk, summary, top risks, and recommendations).
6. Searches Salesforce for an existing Contract_AI__c record by contract name, creates one if missing, and updates the record with the final report fields.
7. Posts a Slack message to the selected channel with the overall risk level, summary, and the top risk and recommendation.

## Setup
1. Connect your Google Drive credentials and set the folder ID to watch for incoming contract PDFs.
2. Add Groq credentials (or equivalent supported configuration) for the three LLM steps used for clause extraction, risk analysis, and final report generation.
3. Connect Salesforce credentials and ensure the Contract_AI__c custom object and fields (Risk_Level_c__c, Summary__c, Top_Risks__c, Recommendations__c) exist and match the workflow mappings.
4. Connect Slack credentials and select the channel where the risk summary should be posted.
5. Verify the Salesforce search query and update field mappings (especially the contract name used for lookup) to match your naming conventions.

## Additional info
## How To Customize Nodes

* **Adjusting Chunk Size**: If you are using an AI model with a massive context window, you can double-click the "Split Contract into Chunks" Code node and change the `chunkSize` variable from `3000` to a higher number. 
* **Targeting Specific Clauses**: In the "Extract Contract Clauses" Agent node, you can edit the System Message under options. Add or remove clause categories you care about (e.g., add "Data Privacy" or "Service Level Agreements").
* **Customizing the Slack Message**: Open the Slack node and modify the "Text" parameter to include mentions (like `@channel` or specific user IDs) or format the text using Slack's markdown.
* **Mapping Different CRM Fields**: If you use standard Salesforce objects (like Opportunities or standard Contracts) instead of a custom object, just alter the Salesforce nodes to target your preferred object and map the AI output JSON to your specific fields.


## Add‑ons 

Here are a few ways you can extend this workflow:

* **Human-in-the-Loop Validation**: Send an interactive Slack message with "Approve" or "Reject" buttons before the data is pushed to Salesforce.
* **Email Summary**: Add a Gmail or Outlook node at the end to email the final risk report directly to the legal department.
* **Support for Word Documents**: Add an IF node after the trigger to check if the file is `.docx`. If it is, use a cloud conversion tool node to turn it into text alongside the PDF route.
* **Cloud Storage Archive**: Add a node to move the processed PDF from an "Inbox" Drive folder to a "Processed Contracts" folder once the workflow completes successfully.


## Use Case Examples

1. **Vendor Agreement Vetting**: Automatically scan incoming software subscriptions or supplier contracts for hidden auto-renewal clauses or high-risk indemnities.
2. **NDA Risk Screening**: Ensure non-disclosure agreements match your company's standard terms and don't contain unusually long confidentiality periods.
3. **Sales Contract Review**: Allow sales reps to drop drafted contracts into a Drive folder and automatically get a Slack message confirming if the terms meet the legal baseline before sending to clients.
4. **Employment Agreement Checks**: Scan HR documents to ensure required clauses (like IP assignment or dispute resolution) are present and properly worded.
5. **Lease Agreement Audits**: Extract and log payment terms, liability shifts, and termination windows for commercial real estate leases directly into your CRM. 

There are many more such use cases of this workflow across finance, operations, and compliance departments!


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **Workflow isn't triggering when a file is uploaded** | The Drive folder ID is wrong, or the file isn't a PDF. | Double-check the selected folder in the Google Drive Trigger node. Ensure the uploaded file extension is exactly `.pdf`. |
| **"Invalid JSON from OpenAI/Groq" Error in Code Nodes** | The AI model returned extra conversational text instead of raw JSON data. | The parsing code nodes already try to strip markdown. If it still fails, try swapping the Groq model to a more rigid one (like Llama 3 70B) or adjust the prompt to strictly forbid conversational text. |
| **Salesforce Node throws a missing field error** | The `Contract_AI__c` object or its custom fields do not exist in your Salesforce org. | Log into Salesforce, go to Object Manager, and ensure the object and exact custom field API names (like `Risk_Level_c__c`) match the node mapping. |
| **Slack message doesn't send** | The Slack bot doesn't have permission to post in the channel. | Ensure your n8n Slack app is invited to the `#general` channel, or change the destination to a channel the bot is explicitly added to. |


## Need Help?

Setting up AI agents, custom Salesforce objects and text chunking can sometimes be tricky depending on your specific business rules and document structures. 

If you need a helping hand to set up this workflow, customize the Add-Ons or build similar advanced AI workflows tailored to your exact business processes, feel free to reach out! 

Our [n8n workflow developers at **WeblineIndia**](https://www.weblineindia.com/hire-n8n-developers/) are available for expert assistance in bringing your business process automation goals to life.

## 🔗 Nodes Used

Slack, Google Drive, Salesforce, Google Drive Trigger, AI Agent, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
