# 🎬 Generate and approve SEO content with OpenAI, Airtable, Slack, and WordPress

> ⚡ **35 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs on schedules to generate blog and social content from Airtable ideas using OpenAI, routes drafts to Slack for approval, publishes approved content to WordPress, Twitter/X, and LinkedIn, and regenerates rejected drafts for re-approval.

## How it works
1. Runs on an hourly schedule and searches Airtable for records in the Content table with Status set to idea.
2. Marks each idea as processing, validates the Topic length, and uses OpenAI (GPT-4o) to generate a 1200+ word SEO blog post.
3. Uses OpenAI to turn the blog into a 10-tweet thread and a LinkedIn post, then generates a social media image with OpenAI image generation.
4. Updates the Airtable record with the generated draft content, sets Status to pending_approval, and sends a Slack message with approve/reject links that resumes the workflow via a webhook.
5. If approved, updates Airtable Status to approved, and a separate hourly check publishes approved items to WordPress, Twitter/X, and LinkedIn in parallel before marking the record as published.
6. If rejected, a separate hourly check fetches rejected items, uses OpenAI to improve and regenerate the content, saves the updated draft back to Airtable as pending_approval, and requests re-approval in Slack.
7. If any OpenAI step errors, sends the error details to a Slack alert channel and continues processing the next record.

## Setup
1. Create an Airtable base/table (e.g. “Content System” → “Content”) with fields for Topic, Status (idea, processing, pending_approval, approved, rejected, published), Blog, Twitter, LinkedIn, ImageURL, Approved, and Version, and update the Base ID/Table ID in the Airtable nodes.
2. Add credentials in n8n for Airtable, OpenAI, Slack, WordPress, Twitter/X (OAuth2), and LinkedIn, then select them in the corresponding nodes.
3. Set the Slack channels/channel IDs for approval requests, publish notifications, and AI failure alerts, and ensure your n8n instance has a public URL so the Wait webhook resume links work.
4. Configure your WordPress connection and verify the publishing nodes (site, authentication, and any required fields like post status) match your WordPress setup.
5. Adjust the three schedules (idea generation run, approved-content publishing check, and rejected-content regeneration check) to your desired cadence.

## Additional info
## How To Customize Nodes

- **AI Prompts**  
  Modify OpenAI nodes to adjust tone, style, or format of content.

- **Airtable Fields**  
  Add more fields like SEO keywords, categories, or campaign tags.

- **Slack Messages**  
  Customize approval messages with richer formatting or additional metadata.

- **Publishing Nodes**  
  Enable/disable specific platforms based on your needs.

- **Validation Logic**  
  Adjust “If” nodes to enforce stricter content validation rules.

- **Retry & Error Handling**  
  Extend error nodes to log failures in Airtable or send detailed alerts.


## Add-ons (Enhancements)

- Add email notifications for approvals  
- Integrate Google Drive to store generated images  
- Add analytics tracking (UTM links, clicks)  
- Connect to CMS platforms beyond WordPress  
- Implement RAG (Retrieval-Augmented Generation) for better content quality  
- Add version history tracking in Airtable  


## Use Case Examples

- Automated blog + social media content pipeline  
- AI-assisted marketing campaign creation  
- Content approval workflows for teams  
- Multi-platform publishing automation  
- Content regeneration and optimization loop  

There can be many more use cases depending on how you extend and customize this workflow.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|---------------|---------|
| Blog not generated | OpenAI API error or invalid input | Check API key, prompt, and input data |
| Workflow stuck at Wait node | Slack webhook not triggered | Verify approval links and webhook URLs |
| Duplicate processing | Record not marked as processing | Ensure “Mark Processing” node runs correctly |
| Content not publishing | API credentials issue | Reconnect WordPress/Twitter/LinkedIn accounts |
| Regeneration not triggered | Status not set to rejected | Check Airtable status update logic |
| Slack message not sent | गलत Slack config | Reconfigure Slack credentials and channel |


## Need Help?

If you need help setting up this workflow, customizing nodes or building advanced add-ons, our [n8n workflow development team](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** is happy to assist.

We can help you:

- Deploy and configure this workflow end-to-end  
- Optimize performance and reduce node complexity  
- Add advanced AI features (RAG, personalization, analytics)  
- Build fully custom automation workflows tailored to your business  

Feel free to reach out and take your automation to the next level.

## 🔗 Nodes Used

Airtable, Cron, Slack, Wordpress, X (Formerly Twitter), LinkedIn

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
