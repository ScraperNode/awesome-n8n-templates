# 💬 Social media analysis and automated email generation

> ⚡ **30,047 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Social Media Analysis and Automated Email Generation

&gt; by Thomas Vie [Thomas@pollup.net](mailto:thomas\@pollup.net)

### **Who is this for?**
This template is ideal for marketers, lead generation specialists, and business professionals seeking to analyze social media profiles of potential leads and automate personalized email outreach efficiently.


### **What problem is this workflow solving?**
Manually analyzing social media profiles and crafting personalized emails can be time-consuming and prone to errors. This workflow streamlines the process by integrating social media APIs with AI to generate tailored communication, saving time and increasing outreach effectiveness.

### **What this workflow does:**
1. **Google Sheets Integration:** Start with a Google Sheet containing lead information such as LinkedIn URL, Twitter handle, name, and email.
2. **Social Media Data Extraction:** Automatically fetch profile and activity data from Twitter and LinkedIn using RapidAPI integrations.
3. **AI-Powered Content Generation:** Use OpenAI's Chat Model to analyze the extracted data and generate personalized email subject lines and cover letters.
4. **Automated Email Dispatch:** Send the generated email directly to the lead, with a copy sent to yourself for tracking purposes.
5. **Progress Tracking:** Update the Google Sheet to indicate completed actions.

#### **Setup:**
1. **Google Sheets:**
   - Create a sheet with the columns: LinkedIn URL, name, Twitter handle, email, and a "done" column for tracking.
   - Populate the sheet with your leads.

2. **RapidAPI Accounts:**
   - Sign up for RapidAPI and subscribe to the Twitter and LinkedIn API plans.
   - Configure API authentication keys in the workflow.

3. **AI Configuration:**
   - Connect OpenAI Chat Model with your API key for text generation.

4. **Email Integration:**
   - Add your email credentials or service (SMTP or third-party service like Gmail) for sending automated emails.

#### **How to customize this workflow to your needs:**
- **Modify the AI Prompt:** Adapt the prompt in the AI node to better align with your tone, style, or specific messaging framework.
- **Expand Data Fields:** Add additional data fields in Google Sheets if you require further personalization.
- **API Limits:** Adjust API configurations to fit your usage limits or upgrade to higher tiers for increased data scraping capabilities.
- **Personalize Email Templates:** Tweak email formats to suit different audiences or use cases.
- **Extend Functionality:** Integrate additional social media platforms or CRM tools as needed.

By implementing this workflow, you’ll save time on repetitive tasks and create more effective lead generation strategies.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Google Sheets Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
