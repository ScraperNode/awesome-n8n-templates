# 📱 Auto-post platform-optimized content to X and Threads with late API and Google Sheets

> ⚡ **3,093 views** · 📱 [Social Media & Email Marketing](../)

## Description

X (Twitter) and Threads (by Meta) both have different maximum character lengths.

## Different X and Threads Content Auto Poster  
### This n8n template demonstrates how to post different content optimized for X (Twitter) and Meta Threads using the Late API.  

You can use it for any niche. For example: posting AI news to X and Threads.  

**Possible use cases:**  
- Schedule your posts to X and Threads.  
- Use this workflow as a content calendar and automated posting system.  
- Apply it across different content niches.  

### How it works  
- The automation runs according to the time defined in the Schedule Trigger node.  
- Content is pulled from Google Sheets.  
- Any URL is shortened using your preferred short URL API.  
- Images are uploaded to Late’s server first.  
- Content for X is posted in Step 2. The workflow checks that the content length is under 280 characters.  
- Content for Threads is posted in Step 3. The workflow checks that the content length is under 500 characters.  
- Posts on X are published as threaded posts, while on Threads they are single posts.  
- Once posted, the Google Sheets content database is updated.  

### Requirements  
- Google OAuth credentials with the Google Sheets API enabled  
- Bitly account and access token (or OAuth)  
- GetLate API connected to your X and Threads accounts  

---

## HOW TO USE  

**STEP 1**  
1. Adjust the settings in the Schedule Trigger node to define when the workflow runs.  
2. Open this [Google Sheets template](https://docs.google.com/spreadsheets/d/1CtpVHtzu_y9KoELS7Cee3BDivtRN2zVg-Uuy7uZD4ko/edit?usp=sharing), then go to **File → Make a copy**, and update the settings in the Get Topic node.  
3. Get your Bitly OAuth or Access Token [here](https://app.bitly.com/settings/api) and add the credentials in the Short Link node.  
4. Get your API key from [getlate.dev](https://getlate.dev/) and add the credentials in the Upload IMG node.  

**STEP 2**  
1. Add your Late credentials to the Post Twitter node.  
2. Get your Twitter account ID from Late, and update it in the JSON Body section of the Post Twitter node.  

**STEP 3**  
1. Add your Late credentials to the Post Threads node.  
2. Get your Threads account ID from Late, and update it in the JSON Body section of the Post Threads node.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Bitly, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
