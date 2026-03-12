# 📱 Auto-post LinkedIn updates from spreadsheet topics using GPT-4o

> ⚡ **618 views** · 📱 [Social Media & Email Marketing](../)

## Description

## How it works: ##
This workflow automates the entire LinkedIn content distribution process — from AI-powered post creation to auto-posting on both personal LinkedIn profiles and LinkedIn groups, using GPT-4o and Google Sheets as the content source and control panel.

1. Auto-generates professional LinkedIn posts from spreadsheet topics using GPT-4o.
2. Posts to your LinkedIn profile and multiple groups.
3. Updates status to avoid duplicate posting.
4. Fully customizable and reusable with your spreadsheet.

## Set up Steps
1. Create and Upload the Spreadsheet
	1. Name it: Linkedin Post
	2. Sheet1 (for post topics): Columns: ID | Linkedin Post Title | Status
	3. Add post titles under Linkedin Post Title
	4. Set Status to Pending
	5. Create new sheet name as "Groups" (for group distribution): Column: GroupIds
	6. Add LinkedIn Group IDs, one per row

2. Connect Google Sheets Nodes
	1. Connect your Google account to these nodes:
		1. Linkedin Post topic (Reads post topics)
		2. Get group id (Reads LinkedIn groups)
		3. Update Status (Writes back the status after posting)

3. Configure GPT-4o (OpenAI)
	1. Add your OpenAI API key in the Linkedin Post creator node
	2. This node will generate high-quality content from your topic titles

4. Connect LinkedIn Account
	1. Add your LinkedIn credentials in the Linkedin user detail node
	2. Ensure appropriate permissions to post on profile and groups

5. Activate the Workflow : Once live, the workflow will:
	1. Monitor the Google Sheet for Pending posts.
	2. Generate content via GPT-4o.
	3. Post to:
		1. Your LinkedIn Profile
		2. Each LinkedIn Group listed in the Groups sheet
	4. Update the post Status to Posted

## Customization Tips ##
Want to personalize this template?
1. Change AI tone or style in the OpenAI node prompt
2. Add a scheduler node if you'd like to post at fixed intervals
3. Use a Slack or Telegram approval step before posting
4. Integrate analytics tools to track post performance

## Suggested Sticky Notes for Workflow ##

| Node or Section        | Sticky Note Content                                                         |
| ---------------------- | --------------------------------------------------------------------------- |
| `Linkedin Post topic`  | Reads the topic titles and statuses from Sheet1                          |
| `OpenAI (GPT-4o)`      | Generates content using topic title — you can modify the tone/prompt here |
| `Linkedin user detail` | Your personal LinkedIn credentials — required to post                     |
| `Group loop`           | Iterates through LinkedIn Group IDs and posts the content                |
| `Update Status`        | Updates spreadsheet so the topic isn't re-posted                         |

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Sheets Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
