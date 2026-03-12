# 📱 Schedule social media posts from Google Sheets to Twitter & Instagram

> ⚡ **1,483 views** · 📱 [Social Media & Email Marketing](../)

## Description

# Social Media Auto-Poster (Google Sheets → Twitter & Instagram)

This workflow automatically:
1. Pulls rows marked as `Pending` from a Google Sheet.
2. Generates a formatted Instagram caption and HTML preview.
3. Converts the HTML into an image via HCTI.io.
4. Posts the content:
   - As a tweet (text only) to Twitter (X).
   - As a post (image + caption) to Instagram via the Facebook Graph API.
5. Marks the row in Google Sheets as `Posted` with a timestamp.

It runs **every 5 hours** (configurable via the `Schedule Trigger`).

---

## Requirements

- **Google Sheets API Credentials** connected in n8n.
- **HCTI.io account** (HTML → Image API).
- **Twitter (X) OAuth1 credentials**.
- **Facebook/Instagram Graph API** access token (for the business account/page).
- A Google Sheet with at least these columns:
  - `RowID`
  - `Caption`
  - `Desc`
  - `Hashtags`
  - `Status`

Set `Status` to `Pending` for any row you want posted.

---

## Setup

1. Import the JSON workflow (`My_workflow.json`) into your n8n instance.
2. Link all credentials (replace placeholders with your own API keys and tokens).
3. Update the Google Sheet ID and Sheet Name inside the `Get row(s) in sheet` and `Update Status Posted` nodes.
4. (Optional) Adjust the posting interval in the `Schedule Trigger` node.

---

## How It Works

1. **Trigger**: Runs every 5 hours.
2. **Fetch Rows**: Reads Google Sheets for rows with `Status = Pending`.
3. **Caption Generation**: Combines `Desc` + `Hashtags` into `final_caption`.
4. **HTML → Image**: Converts caption to a styled 1080x1080 post.
5. **Social Posting**:
   - Posts the caption to Twitter (text only).
   - Uploads the image + caption to Instagram.
6. **Update Status**: Marks the row as `Posted on [timestamp]`.

---

## Notes

- Facebook/Instagram tokens **expire**; refresh or use long-lived tokens.
- HCTI.io may require a paid plan for high volumes.
- Works best with a **business Instagram account linked to a Facebook Page**.

---

## License

This workflow can be reused and adapted freely under the MIT license.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Facebook Graph API, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
