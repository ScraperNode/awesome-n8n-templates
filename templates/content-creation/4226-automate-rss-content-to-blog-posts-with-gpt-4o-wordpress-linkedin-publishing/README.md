# 🎬 Automate RSS content to blog posts with GPT-4o, WordPress & LinkedIn publishing

> ⚡ **1,940 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Automated Blog Post Review and Multi-Platform Publishing Workflow with RSS Feeds
![RSS.png](fileId:1344)
## Description
This workflow automates the process of generating, reviewing, and publishing blog posts across multiple platforms, now enhanced with support for RSS Feeds as a content source.
It streamlines the management of blog posts by fetching content from RSS Feeds, formatting, storing, reviewing, templating, and publishing to platforms like LinkedIn and WordPress.
The workflow is split into three key flows:  
- **Initial Flow**: Fetches content from RSS Feeds, prepares and stores blog post data, sends a review email with approval/rejection links. 
- **Approval Flow**: Handles review actions via a webhook to update the status in Google Sheets.  
- **Status Update Flow**: Monitors status changes and publishes approved posts.  

**Target Audience** 
- Content creators, bloggers, and digital marketers. 
- Teams managing multi-platform content publishing.  
- Users familiar with n8n, Google Sheets, LinkedIn, and RSS Feeds.  

## Problem Solved

Manually managing blog posts, especially when sourcing content from RSS Feeds, can be time-consuming and error-prone 
This workflow addresses:  
- **Content Sourcing**: Fetches blog posts from RSS Feeds for automated processing  
- **Content Formatting**: Automatically formats and stores blog posts. 
- **Review Process**: Simplifies approval with email notifications and webhook triggers.  
- **Multi-Platform Publishing**: Publishes to LinkedIn, WordPress and optionally Medium) with delays to avoid rate limits  
- **Status Tracking**: Tracks approval and publishing status in Google Sheets. 

## Setup Instructions

### Prerequisites 
- **n8n Instance**: Ensure you have an active n8n instance  
- **RSS Feed URL**: Identify an RSS Feed URL (e.g., a blog’s feed like `https://example.com/feed`)  
- **Google Sheets**: Create a spreadsheet with columns: `Title`, `Blogpost`, `Publication Date`, `Keywords`, `Status`, `Published`, `Featured Image`, `articleUrl`, `Rendered Blog`. 
  - Sheet Name: `Posts Initial`  
  - Add a dropdown for `Status`: `Pending, Approved, Rejected`.  
- **Gmail Account**: For sending review and notification emails.  
- **LinkedIn Account**: For publishing posts (OAuth credentials needed).  
- **Optional**: WordPress.com or Medium account for additional publishing.  

### Customization Guidance 
Below is a detailed breakdown of each flow and node, including setup instructions.  

#### 🔹 Initial Flow: Fetch from RSS Feeds, Prepare, and Send for Review.

**Purpose**: Fetches blog posts from an RSS Feed, formats them, extracts images, stores data, and sends a review email.  

1. **Fetch from RSS Feed**  
   - **Type**: RSS Feed  
   - **Purpose**: Retrieves blog posts from an RSS Feed  
   - **Configuration**:  
     - **URL**: `https://example.com/feed` (replace with your RSS Feed URL)  
     - **Limit**: 1 (or adjust based on your needs)  
   - **Setup**: Ensure the RSS Feed URL is valid and accessible; test the node to verify it fetches posts  

2. **Set Fields**  
   - **Type**: Set  
   - **Purpose**: Maps RSS Feed data to blog post fields   
   - **Setup**: Adjust field mappings based on your RSS Feed’s structure  

3. **Format Blog Post for Storage**  
   - **Type**: Code  
   - **Purpose**: Cleans up the blog post content.  
4. **Extract Featured Image**  
   - **Type**: Code  
   - **Purpose**: Extracts or generates a featured image URL.  
   - **Setup**: Ensure `originalHtml` contains image data; otherwise, it uses a placeholder.  

5. **Store Blog Posts Initial**  
   - **Type**: Google Sheets  
   - **Purpose**: Stores initial blog post data  
   - **Setup**: Ensure Google Sheets credentials are set up and the spreadsheet has the required columns.  

6. **Set Fields for Email**  
   - **Type**: Set  
   - **Purpose**: Prepares fields for the review email.  
   - **Setup**: Replace `https://your-n8n-instance` with your n8n instance URL.  

7. **Prepare Email HTML**  
   - **Type**: Code  
   - **Purpose**: Generates HTML email content with conditional image display  
   - **Setup**: No additional configuration needed  
8. **Notify for Review (Gmail)**  
   - **Type**: Gmail  
   - **Purpose**: Sends a review email with approval/rejection links  
  
#### 🔹 Approval Flow: Handle Review Actions

**Purpose**: Updates the blog post status based on approval/rejection  

1. **Webhook Trigger**  
   - **Type**: Webhook  
   - **Purpose**: Triggers on approval/rejection link clicks  
   - **Configuration**:  
     - **HTTP Method**: GET  
     - **Path**: `approve-post`  
     - **Response Code**: 200  
     - **Response Data**: `{"message": "Status updated"}`  
   - **Setup**: Ensure the webhook URL matches the one in **Set Fields for Email**  

2. **Find Row to Update**  
   - **Type**: Google Sheets  
   - **Purpose**: Retrieves all rows to find the matching blog post  
3. **Filter Row by Title**  
   - **Type**: Code  
   - **Purpose**: Filters the row matching the blog post title  
 
   - **Setup**: No additional configuration needed  

4. **Update Status on Approval**  
   - **Type**: Google Sheets  
   - **Purpose**: Updates the status to `Approved` or `Rejected` 

#### 🔹 Status Update Flow: Publish Approved Posts

**Purpose**: Monitors status changes and publishes approved posts  

1. **Google Sheets Trigger (Fetch Row)**  
   - **Type**: Google Sheets Trigger  
   - **Purpose**: Triggers when a row’s status is updated  
   - **Configuration**:  
     - **Event**: Update  
     - **Sheet Name**: `Posts Initial`  
     - **Output Fields**: `title`, `status`, `published`, `featuredImage`, `articleUrl`  
   - **Setup**: Ensure Google Sheets credentials are set up  

2. **Router (Check Status)**  
   - **Type**: Router  
   - **Purpose**: Routes based on status and published state  
   - **Configuration**:  
     - **Route 1**: Approved and Not Published  
       - **Condition**: `status` equals `Approved` AND `published` equals `NO`  
     - **Route 2**: Rejected  
       - **Condition**: `status` equals `Rejected`  
     - **Route 3**: Pending  
       - **Condition**: `status` equals `Pending`  
   - **Setup**: No additional configuration needed  

3. **Apply Blog Template**    

4. **Store Blog Posts Final** 
   - **Type**: Google Sheets  
   - **Purpose**: Stores the final HTML content  
   - **Configuration**:  
     - **Operation**: Update Row   
   - **Setup**: Ensure the `Rendered Blog` column exists  

5. **Loop Over Blog Posts**   
   - **Type**: Split in Batches  
   - **Purpose**: Processes each blog post individually  
   - **Configuration**: Default settings  
   - **Setup**: No additional configuration needed  

6. **Delay Between Posts**
   - **Type**: Wait  
   - **Purpose**: Adds a delay to avoid rate limits  
   - **Configuration**:  
     - **Wait Type**: Delay  
     - **Amount**: 1 second  
   - **Setup**: Adjust delay as needed for LinkedIn rate limits  

7. **Publish to LinkedIn** 
   - **Type**: LinkedIn  
   - **Purpose**: Publishes the blog post to LinkedIn  
   - **Configuration**:  
     - **Operation**: Share Post  
     - **Author**: `urn:li:person:YOUR_PERSONAL_URN`   
   - **Setup**: Set up LinkedIn OAuth credentials and replace `YOUR_PERSONAL_URN` with your LinkedIn URN  

8. **Update Published State**  
   - **Type**: Google Sheets  
   - **Purpose**: Updates the published status  
   - **Configuration**:  
     - **Operation**: Update Row  
 
   - **Setup**: Ensure the `Published` column exists  

9. **Notify Team** 
   - **Type**: Gmail  
   - **Purpose**: Notifies the team of successful publishing  
   - **Configuration**:  
  
       The blog post "{{ $json.title }}" has been successfully published
   
   - **Setup**: Set up Gmail credentials; replace `[Link]` with the LinkedIn URL if captured  

10. **Notify Rejection (Gmail)** (Route 2)  
    - **Type**: Gmail  
    - **Purpose**: Notifies on rejection  
   
        The blog post "{{ $json.title }}" has been rejected
        Suggestions: Rewrite with more engaging content, adjust keywords, or verify facts
        Please update the status in Google Sheets if you wish to revise and resubmit
       
    - **Setup**: Set up Gmail credentials  

11. **Wait for Status Update** (Route 3)  
    - **Type**: Wait  
    - **Purpose**: Delays for status recheck  
    - **Configuration**:  
      - **Wait Type**: Delay  
      - **Duration**: `24h`  
    - **Setup**: Adjust delay as needed  

##  Conclusion

- This workflow streamlines blog post management with RSS Feeds, making it ideal 
for busy content creators and teams.
 - Customize it by adding more platforms adjusting delays, or enhancing notifications.
 - Share your feedback in the n8n community to help others benefit from this automation.

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, RSS Read, Webhook, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
