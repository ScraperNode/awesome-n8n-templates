# 📱 Automatically create Facebook ads from Google Sheets

> ⚡ **3,466 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Who is this for?

This template is designed for **Marketing Managers**, **Performance Marketers**, and **Ad Ops professionals** who want to automate Facebook ad creation using structured data in **Google Sheets**. It’s ideal for teams running multiple creatives or testing ad variations without having to manually use Meta Ads Manager.

&gt; ⚠️ **Important Note:**  
This is **not a plug-and-play** workflow. It requires:
- A configured **Facebook Business account**
- A valid **Facebook App**, **Page**, and **Ad Account**
- **Access tokens** and the correct Facebook Graph API credentials
- A **basic understanding of the Meta API and JSON** to tweak ad set parameters like demographics, optimization goals, or sales objectives

Additionally, launching Facebook ads will incur **real advertising costs**, so this template is best suited for users willing to make a time investment to set things up properly and test responsibly. Expect to spend time customizing targeting and budget strategies based on your campaign needs.

## What problem does this solve?

Manually uploading creatives, setting up ad sets, and creating ads in Meta’s Ad Manager is time-consuming, repetitive, and error-prone—especially at scale. This workflow eliminates the manual work by pulling data from Google Sheets and using it to automatically:

- Generate Facebook Ad Sets
- Upload creative images
- Build and launch Ad Creatives and Ads
- Update your source spreadsheet with generated Ad IDs
![Screenshot 20250406 at 10.25.58.png](fileId:1083)
## What this workflow does

Using a trigger from a **Google Sheets row update**, this workflow:

1. **Reads ad parameters** (like message, render URL, and campaign info) from a Google Sheet  
2. **Generates ad set configuration** dynamically using variables in an “Edit Fields” node  
3. **Creates a Facebook Ad Set** via the Graph API  
4. **Fetches the ad image** from a render URL  
5. **Uploads the image** to Facebook Ads Library  
6. **Creates the Ad Creative** using the uploaded image and dynamic text  
7. **Launches the Ad** using the generated Ad Set and Creative  
8. **Updates the same Google Sheet** with the generated Ad ID and status

All configuration fields like `campaign_id`, `act_id`, `pixel_id`, age ranges, interest targeting, and call-to-action links are defined up front in a single **Edit Fields** node, making the template easy to maintain or extend.

#### **Google Sheet Structure**
| Hooks | Render URL | Generate Ad | Ad ID |
|-------|------------|-------------|-------|
| Static ad text (e.g., “Visit us at...”) | Link to the creative asset (image) | Status: `generate`, `generated`, or `error` | Populated by the workflow with the created Facebook Ad ID |

- **Hooks**: This is the primary ad copy. It will be used as the main text for the static ad.
- **Render URL**: Direct link to the media asset (image or video) for the ad.
- **Generate Ad**: Dropdown or text value that controls workflow execution:
  - `generate` — workflow will attempt to create the ad
  - `generated` — already processed
  - `error` — error occurred during generation
- **Ad ID**: The Meta Ad ID will be written here once the ad is successfully created.

## Setup

1. Copy this [Google Sheet template](https://docs.google.com/spreadsheets/d/1RNRd87p7DL4G3j6F4xSD2jlLQc9wnqHnVfq1R42k9Uc/edit?gid=0#gid=0) and populate it with your data
2. Create a Facebook App and retrieve the access credentials for the **Facebook Graph API**
3. In n8n:
   - Connect your Google Sheets and Facebook Graph API accounts
   - Update the `Edit Fields` node with your actual `ad account ID`, `page ID`, `campaign ID`, `pixel ID`, and destination `link`
   - Deploy the workflow

This workflow runs every time the `generate ad` column in your sheet is updated.

## How to customize this workflow to your needs

- Modify the `Edit Fields` node to adjust ad set parameters like targeting, budget strategy, CTA type, and more
- Expand interest-based targeting using more interest objects in the array
- Add extra Google Sheet columns and map them to Facebook ad fields (e.g. different messages, URLs, creative assets)
- Add logic to pause or duplicate ads based on performance

## 🔗 Nodes Used

Google Sheets, HTTP Request, Facebook Graph API, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
