# 🎣 AI-driven lead management and inquiry automation with ERPNext & n8n

> ⚡ **6,479 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

#### **Overview**
This workflow template automates lead management and customer inquiry processing by integrating ERPNext, AI agents, and email notifications. It streamlines the process of capturing leads, analyzing inquiries, and generating actionable responses. The workflow uses ERPNext to capture inquiries, analyzes them with AI, and notifies the appropriate team or individual, all while maintaining a professional approach.

---

### **What This Template Does**
1. **ERPNext Webhook Integration:**
   - Captures leads and inquiries through ERPNext webhooks.
   - Triggers the workflow when a new lead is created.

2. **AI-Powered Inquiry Analysis:**
   - Uses AI to extract key details from lead notes (e.g., customer name, organization, inquiry summary).
   - Classifies inquiries as valid or invalid based on relevance to products, services, or solutions.

3. **Contact Assignment:**
   - Matches inquiries to the appropriate contact(s) using a Google Sheets database or ERPNext contact information.
   - Handles multiple contacts if required.

4. **Email Notifications:**
   - Generates professional email notifications for valid inquiries.
   - Sends emails to the appropriate contact(s) with inquiry details and action steps.

5. **Invalid Lead Handling:**
   - Identifies invalid inquiries (e.g., unrelated to products or services) and flags them for follow-up or dismissal.

6. **Custom Email Formatting:**
   - Converts plain text into professionally formatted HTML emails.
   - Ensures that communication is clear, concise, and visually appealing.

---

### **How It Works**

#### **Step 1: Capture Lead Data**
- **Webhook in ERPNext:**
  - Create a webhook in ERPNext for the "Lead" DocType.
  - Set the trigger to `on_insert` to capture new leads in real-time.

- **Lead Details:**
  - The workflow fetches lead details, including notes, contact information, and the source of the lead.

#### **Step 2: Validate and Analyze Inquiry**
- **AI Agent for Analysis:**
  - An AI agent analyzes the lead notes to extract key details and classify the inquiry as valid or invalid.
  - The analysis includes checking the relevance of the inquiry to products, services, or solutions offered by the company.

- **Invalid Leads:**
  - If the inquiry is invalid, the workflow flags it and stops further processing.

#### **Step 3: Assign Contact(s)**
- **Google Sheets Integration:**
  - Uses a Google Sheets database to map products, services, or solutions to responsible contacts.
  - Ensures that inquiries are directed to the right person or team.

- **Multiple Contacts:**
  - Handles cases where multiple contacts are responsible for a particular product or service.

#### **Step 4: Generate and Send Email Notifications**
- **AI-Generated Emails:**
  - The workflow generates a professional email summarizing the inquiry.
  - Emails include details like customer name, organization, inquiry summary, and action steps.

- **Custom HTML Formatting:**
  - Emails are converted to HTML for a polished and professional appearance.

- **Send Notifications:**
  - Sends email notifications through Microsoft Outlook or another configured email client.
  - Optionally, notifies via WhatsApp or SMS for urgent inquiries.

#### **Step 5: Post-Inquiry Actions**
- **ERPNext Record Updates:**
  - Updates the lead record in ERPNext with relevant details, including inquiry status and contact information.

---

### **Setup Instructions**

#### **Prerequisites**
1. **ERPNext:**
   - A configured ERPNext instance with lead data and a webhook for the "Lead" DocType.
2. **Google Sheets:**
   - A sheet mapping products, services, or solutions to responsible contacts.
3. **AI Integration:**
   - Credentials for OpenAI or other supported AI platforms.
4. **Email Client:**
   - Credentials for Microsoft Outlook or another email client.

---

### **Step-by-Step Setup**
1. **ERPNext Configuration:**
   - Create a webhook for the "Lead" DocType in ERPNext.
   - Test the webhook with sample data to ensure proper integration.

2. **Workflow Import:**
   - Import the workflow template into n8n.
   - Configure nodes with your API credentials for ERPNext, Google Sheets, and AI tools.

3. **Google Sheets Integration:**
   - Prepare a Google Sheet with columns for product, service, or solution and the responsible contact(s).
   - Link the sheet to the workflow.

4. **AI Agent Configuration:**
   - Customize the AI agent’s prompts to align with your business’s products and services.
   - Adjust criteria for valid and invalid inquiries as needed.

5. **Email Setup:**
   - Configure the email client node with your email service credentials.
   - Customize the email template for your organization.

6. **Testing:**
   - Run the workflow with sample leads to validate the entire process.
   - Check email notifications, contact assignments, and record updates in ERPNext.

---

### **Dos and Don’ts**

#### **Dos:**
- **Test Thoroughly:** Test the workflow with various scenarios before deploying in production.
- **Secure Credentials:** Keep API and email credentials secure to avoid unauthorized access.
- **Customize Prompts:** Tailor AI prompts to match your business needs and language style.
- **Use Professional Email Templates:** Ensure emails are clear and well-formatted.

#### **Don’ts:**
- **Skip Validation:** Always validate inquiry data to avoid sending irrelevant notifications.
- **Overload the Workflow:** Avoid adding unnecessary nodes that can slow down processing.
- **Ignore Errors:** Monitor logs and address errors promptly for a smooth workflow.

---

### **Resources**
### [GET n8n Now](https://www.udemy.com/course/mastering-n8n-ai-agents-api-automation-webhooks-no-code/?referralCode=0309FD70BE2D72630C09)  

### [N8N COURSE](https://www.udemy.com/course/mastering-n8n-ai-agents-api-automation-webhooks-no-code/?referralCode=0309FD70BE2D72630C09)  
### [n8n Book](https://lms.syncbricks.com/books/n8n/)  

- **YouTube Tutorial:**  
  Watch the full step-by-step tutorial on setting up this workflow:  
  [SyncBricks YouTube Channel](https://youtube.com/@syncbricks)

- **Courses and Training:**  
  Learn more about ERPNext and AI automation through my comprehensive courses:  
  [SyncBricks LMS](http://lms.syncbricks.com)

- **Support and Contact:**  
  - **Email:** amjid@amjidali.com  
  - **Website:** [SyncBricks](https://syncbricks.com)  
  - **LinkedIn:** [Amjid Ali](https://linkedin.com/in/amjidali)

## 🔗 Nodes Used

HTTP Request, Webhook, Microsoft Outlook, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
