# 📱 Generate AI-powered weekly email newsletters from WordPress with Gemini

> ⚡ **825 views** · 📱 [Social Media & Email Marketing](../)

## Description

## WordPress Weekly Newsletter Generator


**Overview:**
This automation automatically converts your latest WordPress posts into beautifully formatted email newsletters using AI, then sends them to your subscriber list every Friday.

**What it does:**
- Fetches your latest WordPress posts from the past week every Friday at 10 AM
- Filters posts to ensure there's content to include
- AI creates an engaging newsletter with compelling subject line and HTML content
- Parses the AI response to extract subject and content
- Sends formatted HTML email newsletter to your subscriber list

**Setup Required:**
1. **WordPress Connection**
   - Configure WordPress credentials in the "Fetch Recent Posts" node
   - Enter your WordPress site URL, username, and password/app password

2. **Email SMTP Setup**
   - Set up SMTP credentials (Gmail, SendGrid, Mailgun, etc.) in the "Send Newsletter" node
   - Replace `newsletter@yoursite.com` with your actual sender email
   - Replace subscriber emails in "To Email" field with your actual subscriber list
   - Configure reply-to address for professional appearance

3. **AI Configuration**
   - Set up Google Gemini API credentials
   - Connect the Gemini model to the "AI Newsletter Creator" node

4. **Customization Options**
   - Newsletter Schedule: Modify schedule trigger (default: Friday 10 AM)
   - Post Count: Adjust number of posts to include (default: 5 from past week)
   - Content Style: Modify AI system message for different newsletter tones
   - Email Design: Customize HTML template and styling in AI prompt

5. **Testing**
   - Run workflow manually to test all connections
   - Send test newsletter to yourself first
   - Verify HTML formatting appears correctly in email clients

**Features:**
- Automatic weekly scheduling
- AI-generated compelling subject lines
- HTML email formatting with proper structure
- Post filtering to avoid empty newsletters
- Professional email headers and reply-to setup
- Batch processing of multiple recent posts

**Customization:**
- Change newsletter frequency (daily, bi-weekly, monthly)
- Adjust AI prompts for different writing styles
- Modify email template design
- Add custom intro/outro messages
- Include featured images from posts

**Need Help?**
For [n8n coaching or one-on-one consultation](mailto:david@daexai.com)

## 🔗 Nodes Used

Send Email, Wordpress, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
