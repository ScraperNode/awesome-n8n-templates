# 🎬 Generate SEO blog drafts from Google Sheets to WordPress with OpenAI

> ⚡ **244 views** · 🎬 [Content Creation & Video](../)

## Description

## Description

Generate **SEO-friendly WordPress blog drafts** from a **Google Sheets queue** using **OpenAI**. This workflow writes full **HTML blog content**, selects a relevant **Pexels featured image** with a second AI Agent, uploads the image to **WordPress**, creates the post as a **draft**, routes posts to the correct WordPress site, updates the sheet with the **draft/post URL**, logs failures, and sends a **Gmail completion email**.

## What This Workflow Does

This workflow automates the blog draft creation process from **Google Sheets to WordPress**.

It can:

- Read pending blog requests from **Google Sheets**
- Process only rows where `done` is unchecked, empty, or set to false
- Generate **SEO-friendly blog drafts** with **OpenAI**
- Create a **WordPress-ready HTML article** with H2/H3 headings, paragraphs, lists, and internal links
- Generate a blog title, SEO meta title, SEO meta description, URL slug, primary keyword, and image search query
- Search **Pexels** for relevant landscape images
- Use a second **AI Agent** to choose the most suitable featured image
- Generate natural image alt text
- Store selected image details back into **Google Sheets**
- Upload the selected image to the **WordPress media library**
- Create the WordPress post as a **draft**
- Set the uploaded image as the **featured image**
- Route posts to the correct WordPress site based on the `website` column
- Update the sheet with the **WordPress draft/post URL** and mark the row as complete
- Log failures, empty runs, and completion events with timestamps
- Send a **Gmail completion email** after all rows are processed

## Who Is This For?

This workflow is useful for:

- **SEO agencies** producing blog drafts for multiple client websites
- **Content teams** managing a publishing queue in Google Sheets
- **WordPress site managers** who want to reduce manual content uploading
- **Freelancers** who prepare draft posts for client review
- Businesses that want **AI-assisted content drafts** without auto-publishing

## How It Works

1. A **Schedule Trigger** runs the workflow daily at 8am by default. You can also run it manually for testing.
2. The workflow reads rows from the **Google Sheets template**.
3. It filters for rows that are not completed yet.
4. For each pending row, the **SEO Blog AI Agent** generates a structured blog draft based on the website, language, word count, keyword, meta fields, and target URL.
5. The workflow searches **Pexels** using the AI-generated image search query.
6. The **Image AI Agent** reviews the Pexels results and selects the best featured image for the article.
7. Image URL, alt text, photographer name, and Pexels URL are written back into Google Sheets.
8. The image is downloaded and uploaded to the correct **WordPress** site.
9. The workflow creates the WordPress blog post as a **draft**.
10. The uploaded image is set as the **featured image**.
11. The workflow updates the row with the WordPress draft/post URL and marks it as done.
12. Errors are logged to the **Logs** sheet, and the workflow continues with the next row where possible.
13. After all rows are processed, **Gmail** sends a completion email.

## Setup Guide

1. Copy the Google Sheets template: [Click Here](https://docs.google.com/spreadsheets/d/1ybJrjB6vnHmLUqWLYPXC7CKwcZ6UeoJKjqfrEDivujE/copy)
2. Connect your **Google Sheets** credential in all Google Sheets nodes.
3. For Google Sheets nodes starting with `Log`, select the `Logs` sheet.
4. For the other Google Sheets nodes, select the `Automation` sheet.
5. Connect your **OpenAI** credential in the Blog Article Model and Image Model nodes.
6. Add your **Pexels API key** to the Pexels HTTP Request node using Header Auth.
7. Connect your **Gmail** account and set the email recipient in the Gmail node.
8. Create a **WordPress Application Password** for each WordPress site.
9. Configure the WordPress and HTTP Request credentials for each site.
10. Update the `Map to WordPress Site` Switch node so each domain routes to the correct WordPress node group.
11. Add one test row in Google Sheets.
12. Run the workflow manually and confirm that the post appears as a **draft** in WordPress.
13. Activate the workflow when testing is complete.

## Multi-Site WordPress Setup

The workflow supports **multiple WordPress sites** by routing each row based on the `website` column.

The template includes sample routing for two websites. To add another WordPress site:

1. Duplicate the WordPress node group.
2. Add the new WordPress credentials.
3. Add a new routing rule in the `Map to WordPress Site` node.
4. Match the new rule to the domain used in the Google Sheet.
5. Connect the new Switch output to the duplicated WordPress node group.
6. Connect the error outputs to the existing error logging path.

## Customization Ideas

You can customize this workflow to:

- Change the default schedule
- Adjust the OpenAI model
- Modify the blog writing prompt
- Change the article structure or tone
- Add more internal links
- Add category or tag assignment in WordPress
- Connect Yoast, Rank Math, or custom fields for SEO metadata
- Add Slack, Discord, or email error alerts
- Publish automatically after approval
- Add a human approval step before WordPress draft creation

## Important Notes

- This workflow creates WordPress posts as **drafts**. It does **not publish posts automatically**.
- The generated content should be reviewed before publishing.
- SEO meta title and meta description are generated in the AI output, but you may need to add extra nodes if you want to write them into a specific WordPress SEO plugin.
- Each WordPress site needs its own credentials and routing rule.
- Make sure your Pexels usage follows Pexels terms and your own content policy.
- Do not hardcode API keys, passwords, or tokens inside HTTP request URLs or request bodies. Use **n8n credentials** instead.

## Integrations

**Google Sheets** · **OpenAI (ChatGPT)** · **Pexels API** · **WordPress REST API** · **Gmail**

## 🔗 Nodes Used

Google Sheets, HTTP Request, Wordpress, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
