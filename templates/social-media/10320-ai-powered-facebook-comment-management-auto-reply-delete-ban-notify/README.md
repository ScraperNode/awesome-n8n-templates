# 📱 AI-powered Facebook comment management: Auto-reply, delete, ban & notify

> ⚡ **239 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Who is this for?
This n8n workflow is designed for Facebook Page administrators, social media managers, and community moderators who want to automate comment management on their Facebook Pages. It's perfect for businesses with high comment volume, content creators, and marketing teams who need to maintain a positive community environment without manually reviewing every comment. The workflow automatically filters and responds to positive/supportive comments while handling negative ones appropriately.

## What this Workflow Does
This n8n workflow monitors Facebook Page comments, classifies them using  OpenAI, automatically responds to positive and supportive comments, and handles negative comments by deleting them and tracking repeat offenders. It can ban users who repeatedly post negative content and maintains a record of all interactions in Google Sheets.

## Key Features
- **Automated Comment Monitoring**: Fetches posts and comments from a Facebook Page
- **AI-Powered Classification**: Uses OpenAI to classify comments into positive, supportive, or negative categories
- **Intelligent Response Generation**: Creates human-like replies in the same language as the original comment (English or Bangla)
- **Negative Comment Management**: Deletes negative comments and tracks them in Google Sheets
- **User Banning System**: Automatically bans users who repeatedly post negative content
- **Admin Reply Detection**: Only processes comments that haven't already received admin replies
- **Comprehensive Logging**: Records all comment interactions in Google Sheets for analysis

## Requirements
- Facebook Page access with Graph API credentials
- OpenAI API credentials for comment classification
- Google Sheets account for logging comment data
- n8n instance (self-hosted or cloud)
- Facebook Page ID (configured as 47104xxxxx69097 in the workflow)

## Google Sheet Column Structure
- **A Google Sheet formatted like this** ➤ [sample](https://docs.google.com/spreadsheets/d/1VAlVxQ4QnT64a8Fq0QM3wRPsOiqCkTbNQfvxLFFULGk/edit?gid=0#gid=0)

## Workflow Components
### 1. Post Retrieval Section
- **Start**: Manual trigger to begin the workflow
- **Get 0-100 Posts from Page**: Fetches up to 100 recent posts
- **Split All Posts**: Breaks each post into individual items
- **Loop Over Posts**: Iterates through each post for further processing

### 2. Comment Processing Section
- **Get Individual Post Comments**: Retrieves comments for each post
- **Check Comment**: Verifies the presence of comments
- **Split All Comments**: Splits retrieved comments into individual items
- **Loop Over Comments**: Iterates through comments one by one
- **Get Any Reply in Comment**: Checks if the comment has admin replies
- **Check Reply**: Confirms presence or absence of replies

### 3. Admin Reply Detection
- **Edit Fields**: Extracts relevant data from comments
- **Separatamento Without Admin Reply**: Filters out comments that haven't received admin replies
- **Check Comment1**: Validates if such comments exist
- **Split Out Without Admin Reply Comments**: Prepares these comments for AI classification

### 4. Comment Classification (via OpenAI)
- **Loop Over Items2**: Loops through comments without admin replies
- **Replay Comment Data**: Uses OpenAI to classify comments

### 5. Response Generation
- **Switch**: Routes comments based on classification
- **Positive Replay**: Generates a friendly, human-like reply for positive comments
- **Support Replay**: Generates a warm, appreciative reply for supportive comments
- **Reply to Comment**: Posts the AI-generated reply on Facebook

### 6. Negative Comment Handling
- **Delete Comment**: Removes negative comments from Facebook
- **Append Row in Sheet**: Logs comment details in Google Sheets
- **Get Row in Sheet**: Retrieves user history from the sheet
- **Code in JavaScript**: Counts how many negative comments the user has posted
- **If**: Checks if user has more than 1 negative comment
- **Banned User**: Executes a Facebook ban on repeat offenders
- **Update Row in Sheet**: Updates the user's status to `banned` in Google Sheets

### 7. Optional Features
- **Facebook Graph API**: Sends warning messages to users with negative comments

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Facebook Graph API, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
