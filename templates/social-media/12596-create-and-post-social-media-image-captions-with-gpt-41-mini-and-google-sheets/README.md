# 📱 Create and post social media image captions with GPT-4.1-mini and Google Sheets

> ⚡ **780 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Social Media Posting Automation with Image and Caption

## How it works
This AI-powered workflow streamlines your social media posting process, transforming hours of manual caption writing, image uploading, and scheduling into a fully automated system. You define the topic and image once, and the workflow handles caption generation, review, approval, and posting to your selected platforms.

### Automated Flow

1. **Generate Caption**  
   Trigger the workflow manually and set your post topic and image URL in the Set node. The AI (GPT-4.1-mini) generates a high-quality, engaging social media caption tailored to your audience, platform, and content goals.

2. **Store in Google Sheet**  
   The generated caption, along with your image URL and post metadata, is automatically appended to your Google Sheet. This creates a central location to review and manage all your social media content.

3. **Review and Approve**  
   You review the generated caption in the sheet, make any edits if needed, and update the status to **Approved**. You can also select the platform(s) where you want to post.

4. **Automatic Posting**  
   Once the status is updated to Approved, the next workflow is triggered automatically. It posts your caption and image to the selected social media platform(s) without any further manual effort.

**The result?**  
A seamless, end-to-end social media posting process where captions are AI-generated, stored, reviewed, and posted automatically. Focus on strategy and engagement instead of repetitive manual posting.

---

## Setup Steps
**Setup time:** ~10–15 minutes  
**What you’ll need:** OpenAI API key, Google account, access to your social media platform(s)

1. **Connect Your Google Account**
   - Click on the Google Sheets node in your workflow.  
   - Select the Credential dropdown and choose **+ Create New Credential**.  
   - Authenticate your Google account and grant the necessary permissions.

2. **Initialize Your Spreadsheet**
   - Run the workflow once by clicking the play button on the start node.  
   - This will automatically create a Google Sheet with all the required columns for caption tracking and approval.

3. **Add Your OpenAI API Key**
   - Navigate to the AI Agent node.  
   - Click the Credential dropdown and select **+ Create New Credential**.  
   - Paste your OpenAI API key and save.  
   - Get your API key from [platform.openai.com/api-keys](https://platform.openai.com/api-keys).

4. **Set Post Topic and Image**
   - Update the title in the Set node with the topic you want to post.  
   - Add the image URL associated with your post.

5. **Review Captions and Approve**
   - Open your Google Sheet, review the generated captions, and update the status to **Approved**.  
   - Select the platform(s) where the post should go live.

6. **Go Live**
   - Once the status is updated, the workflow will automatically post your content to the selected social media platform(s).  
   - Sit back and watch your AI-generated captions and images go live automatically.

**Ready to automate your social media?** Activate your workflow and start posting smarter today! 🚀💡✅

## 🔗 Nodes Used

Google Sheets, HTTP Request, Facebook Graph API, X (Formerly Twitter), LinkedIn, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
