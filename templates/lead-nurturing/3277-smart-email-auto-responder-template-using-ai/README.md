# 💬 Smart email auto-responder template using AI

> ⚡ **15,614 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# Smart Email Auto-Responder with AI Classification  
## Automatically Categorize and Reply to Emails using LangChain + Google Gemini + Gmail + SMTP + Brevo
 
This n8n workflow is designed to intelligently manage incoming emails and automatically send personalized responses based on the content. It classifies emails using LangChain's Text Classifier, sends HTML responses depending on the category, and updates Gmail and Brevo CRM accordingly.

---

## Key Features  

**Triggers and Classifies Emails**  
- Listens for new Gmail messages every hour  
- Uses AI-based classification to identify the type of inquiry For Example:  
  - Guest Post  
  - YouTube Review  
  - Udemy Course Inquiry

**Responds Automatically**  
- Sends professional HTML replies customized for each type  
- Uses SMTP to deliver emails from your domain  

**Enhances Workflow with Automation**  
- Marks processed emails as read  
- Applies Gmail labels  
- Adds sender to Brevo contact list  

**Optional AI Chat Integration**  
- Uses Google Gemini (PaLM 2) to enhance classification or summarization  

---

## Tools & Integrations Required  

1. Gmail account (OAuth2)
2. LangChain (Text Classifier node)
3. Google Gemini API account
4. SMTP credentials (e.g., Gmail SMTP, Brevo, etc.)
5. Brevo/Sendinblue account and API key

---

## Step-by-Step Node Guide  

### 1. Gmail Trigger  
Polls Gmail every hour for new emails.  
Filters out internal addresses (e.g., `@syncbricks.com`).  
Avoids replying to already-responded emails (`Re:` subject filter).

### 2. LangChain Text Classifier  
Uses AI to categorize the content of the email based on pre-defined categories:  
- **Guest Post**  
- **Youtube**  
- **Udemy Courses**

### 3. Google Gemini (PaLM) Chat Model *(Optional)*  
Provides additional AI support to enhance classification accuracy.  
Can be used to summarize or enrich the context if needed.

### 4. Email Send Nodes  
Each response category has a separate SMTP node with a custom HTML email:
- **Guest Post Inquiry**  
- **YouTube Video Inquiry**  
- **Udemy Course Inquiry**

### 5. Gmail: Mark as Read  
Marks the email so it isn’t processed again.

### 6. Gmail: Apply Label  
Adds a label (e.g., `Handled by Bot`) for organization.

### 7. Brevo: Create/Update Contact  
Saves the sender to your CRM for future communication or marketing.

---

## Email Templates Included

### Guest Post Template  
Includes pricing, website list, submission guidelines, and payment instructions.

### YouTube Review Template  
Includes package pricing, review samples, video thumbnails, and inquiry instructions.  
  
### [Step by Step Tutorial](https://youtu.be/OAu6tOwubgE)

### [GET n8n Now](https://www.udemy.com/course/mastering-n8n-ai-agents-api-automation-webhooks-no-code/?referralCode=0309FD70BE2D72630C09)  

### [N8N COURSE](https://www.udemy.com/course/mastering-n8n-ai-agents-api-automation-webhooks-no-code/?referralCode=0309FD70BE2D72630C09)  
### [n8n Book](https://lms.syncbricks.com/books/n8n/)  
 
 

More courses:  
[http://lms.syncbricks.com](http://lms.syncbricks.com)

YouTube Channel:  
[https://youtube.com/@syncbricks](https://youtube.com/@syncbricks)

---

## How to Use

1. Import the template into your n8n instance.
2. Configure your Gmail OAuth2 and SMTP credentials.
3. Set up your LangChain Text Classifier and Google Gemini API credentials.
4. Update label ID in the Gmail node and ensure all custom fields like `from.value[0].name` match your use case.
5. Run the workflow and watch it respond intelligently to new inquiries.

---

## Best Practices

- Always test with mock emails first.
- Keep the Google Gemini node optional if you want to reduce cost/API calls.
- Use Gmail filters to auto-label certain types of emails.
- Monitor your Brevo contacts to track new leads.

---

## Attribution & Support

**Developed by Amjid Ali**  
This template took extensive time and effort to build. If you find it useful, please consider supporting my work.

**Buy My Book:**  
[Mastering n8n on Amazon](https://www.amazon.com/dp/B0F23GYCFW)

**Full Courses & Tutorials:**  
[http://lms.syncbricks.com](http://lms.syncbricks.com)

**Follow Me Online:**  
LinkedIn: [https://linkedin.com/in/amjidali](https://linkedin.com/in/amjidali)  
Website: [https://amjidali.com](https://amjidali.com)  
YouTube: [https://youtube.com/@syncbricks](https://youtube.com/@syncbricks)

## 🔗 Nodes Used

Send Email, Gmail, Brevo, Gmail Trigger, Google Gemini Chat Model, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
