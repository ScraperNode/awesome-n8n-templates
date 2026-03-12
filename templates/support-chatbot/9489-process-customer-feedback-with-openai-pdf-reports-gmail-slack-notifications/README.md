# 💬 Process customer feedback with OpenAI, PDF reports, Gmail & Slack notifications

> ⚡ **292 views** · 💬 [Support Chatbots](../)

## Description

# AI-Powered Feedback Automation with PDF Reports & Team Notifications

**Transform customer feedback into actionable insights automatically with AI analysis, professional PDF reports, personalized emails, and real-time team notifications.**

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Configuration](#configuration)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Overview

**AI-Powered Feedback Automation** is a complete, production-ready n8n workflow that automatically processes customer feedback submissions with artificial intelligence, generates beautiful branded PDF reports, sends personalized email responses, logs data for analytics, and notifies your team in real-time.

### What Problem Does This Solve?

Manual feedback processing is time-consuming and inconsistent. This workflow eliminates all manual work by:
- **Automatically analyzing** sentiment and extracting key insights using OpenAI
- **Generating professional** PDF reports with custom branding
- **Sending personalized** thank-you emails to customers
- **Logging everything** to Google Sheets for analytics and reporting
- **Notifying your team** instantly via Slack with actionable summaries

### Perfect For

- **Product Teams** - Collect and analyze user feedback systematically
- **Educational Institutions** - Process student/parent feedback efficiently
- **Customer Support** - Track customer satisfaction and sentiment trends
- **E-commerce** - Manage product reviews and customer suggestions
- **Healthcare** - Collect patient feedback and satisfaction scores
- **Event Management** - Gather attendee feedback post-event
- **Consulting Firms** - Streamline client feedback collection

---

## Features

### AI-Powered Analysis
- **Sentiment Classification** - Automatically categorizes feedback as Positive, Neutral, or Negative
- **Key Highlights Extraction** - Identifies the most important points from customer comments
- **Actionable Recommendations** - AI generates specific suggestions based on feedback
- **Executive Summaries** - Creates concise 2-3 sentence overviews of each submission

### Professional Report Generation
- **Beautiful PDF Reports** - Branded, professional documents with custom styling
- **Visual Elements** - Star ratings, color-coded sentiment badges, organized sections
- **Responsive Design** - Mobile-friendly and print-optimized layouts
- **30-Day Hosting** - PDF reports automatically hosted with expiration dates

### Automated Email Communications
- **Personalized Messages** - Thank-you emails customized with customer name and feedback
- **PDF Attachments** - Direct download links to full feedback reports
- **Sentiment Indicators** - Color-coded visual feedback summaries
- **Professional Templates** - Modern, responsive email designs

### Data Logging & Analytics
- **Google Sheets Integration** - Automatic logging of all feedback submissions
- **Complete Audit Trail** - Tracks submission IDs, timestamps, and processing status
- **Analytics Ready** - Structured data perfect for dashboards and trend analysis
- **Historical Records** - Permanent storage of all feedback data

### Team Notifications
- **Slack Integration** - Real-time alerts to team channels
- **Rich Formatting** - Structured messages with highlights and action items
- **Direct Links** - Quick access to full PDF reports from Slack
- **Thread Discussions** - Enable team conversations around feedback

### Robust Error Handling
- **Email Validation** - Automatically checks and handles invalid email addresses
- **Fallback Mechanisms** - Continues workflow even if email sending fails
- **Data Cleaning** - Sanitizes and normalizes all input data
- **Graceful Degradation** - AI parsing failures handled with intelligent fallbacks

---

## Demo

### Workflow Overview
```
User Submits Feedback
        ↓
  Data Cleaning & Validation
        ↓
  AI Sentiment Analysis (OpenAI)
        ↓
  HTML Report Generation
        ↓
  PDF Conversion
        ↓
  Email Validation ─┬─ Valid → Send Email
                    └─ Invalid → Skip
        ↓
  Log to Google Sheets
        ↓
  Notify Team (Slack)
        ↓
  Webhook Response
```

### Sample Input
```json
{
  "name": "Sarah Johnson",
  "email": "sarah@example.com",
  "rating": 4,
  "comments": "Great product! Delivery was a bit slow but customer service was helpful.",
  "suggestions": "Improve shipping speed and tracking updates."
}
```

### Sample Output
- ✅ AI Analysis: "Positive" sentiment with 3 key highlights
- ✅ PDF Report: Professional 2-page document with branding
- ✅ Email Sent: Personalized thank-you message delivered
- ✅ Data Logged: New row added to Google Sheet
- ✅ Team Notified: Slack message with summary posted
- ✅ Webhook Response: 200 OK with submission details

---

## Prerequisites

### Required Services & Accounts

1. **n8n Instance** (v0.220.0 or higher)
   - Self-hosted or n8n Cloud
   - [Installation Guide](https://docs.n8n.io/hosting/)

2. **OpenAI Account**
   - API key with GPT-3.5-turbo or GPT-4 access
   - [Sign Up](https://platform.openai.com/signup)

3. **Google Account** (Gmail + Google Sheets)
   - OAuth2 setup for Gmail API
   - OAuth2 setup for Google Sheets API
   - [Setup Guide](https://docs.n8n.io/integrations/builtin/credentials/google/)

4. **Slack Workspace**
   - Admin access to create apps or OAuth
   - Bot token with `chat:write` and `channels:read` scopes
   - [Create Slack App](https://api.slack.com/apps)

5. **HTML to PDF API Service**
   - GET at: [PDFMunk](https://pdfmunk.com)
   - API key required

6. **VerifiEmail API**
   - GET at: [VerfiEmail](https://verifi.email)
   - API key required
---

## Quick Start

### 1. Import Template

**Option A: Import via URL**
```bash
Copy the workflow JSON URL and paste in n8n:
Settings → Import from URL → [Paste URL]
```

**Option B: Import via File**
1. Download `workflow.json`
2. In n8n: Workflows → Import from File
3. Select the downloaded JSON file
4. Click "Import"

### 2. Configure Credentials (5 minutes)

Navigate to: **Settings → Credentials** and add:

- ✅ **OpenAI API** - Add API key from OpenAI dashboard
- ✅ **Gmail OAuth2** - Connect and authorize your Gmail account
- ✅ **Google Sheets OAuth2** - Use same Google account
- ✅ **Slack OAuth2** - Install app to workspace and authorize
- ✅ **HTML to PDF API** - Add API key from your PDF service
- ✅ **VerifiEmail API** - Add API key from VerifiEmail dashboard

### 3. Create Google Sheet (2 minutes)

Create a new Google Sheet named **"Feedback Log"** with these column headers:

```
Submission ID | Timestamp | Name | Email | Rating | Sentiment | Comments | Suggestions | AI Summary | PDF URL | PDF Available Until | Email Sent
```

### 4. Configure Workflow (3 minutes)

1. Open the imported workflow
2. Click **"Log Feedback Data"** node
3. Select your "Feedback Log" spreadsheet
4. Click **"Notify Team"** node
5. Select your Slack channel (e.g., #feedback)

### 5. Test & Activate (5 minutes)

1. Execute the **"Webhook"** node to get test URL
2. Send test POST request (see test data below)
3. Verify all nodes execute successfully
4. Check email, Google Sheet, and Slack
5. Click **"Active"** toggle to enable workflow

**Total Setup Time: ~15-20 minutes**

---

## Configuration

### Webhook Configuration

The workflow receives feedback via POST webhook:

**URL Format:**
```
https://your-n8n-domain.com/webhook/feedback-submission
```

**Expected Payload:**
```json
{
  "name": "string (required)",
  "email": "string (optional, validated)",
  "rating": "integer 1-5 (required)",
  "comments": "string (optional)",
  "suggestions": "string (optional)"
}
```
---

## Usage

### Testing the Workflow

**Using Postman/Insomnia:**

1. Create new POST request
2. URL: `https://your-n8n-domain.com/webhook/feedback-submission`
3. Headers: `Content-Type: application/json`
4. Body (raw JSON):

```json
{
  "name": "Test User",
  "email": "your-email@example.com",
  "rating": 5,
  "comments": "This is a test feedback submission. Everything works great!",
  "suggestions": "Maybe add more features in the future."
}
```

5. Send request
6. Expected response (200 OK):

```json
{
  "success": true,
  "message": "Thank you for your feedback! We've sent you a detailed report via email.",
  "data": {
    "submissionId": "FB-1234567890123-abc123xyz",
    "name": "Test User",
    "email": "your-email@example.com",
    "rating": "5",
    "sentiment": "Positive",
    "emailSent": "true",
    "reportUrl": "https://generated-pdf-url.com/report.pdf",
    "reportAvailableUntil": "2025-11-10"
  }
}
```

**Using cURL:**

```bash
curl -X POST https://your-n8n-domain.com/webhook/feedback-submission \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Sarah Johnson",
    "email": "sarah@example.com",
    "rating": 4,
    "comments": "Great product! Delivery was a bit slow but customer service was helpful.",
    "suggestions": "Improve shipping speed and tracking updates."
  }'
```

### Monitoring & Maintenance

**Daily:**
- Check Slack for new feedback notifications
- Review Google Sheet for any anomalies

**Weekly:**
- Verify workflow execution success rate
- Check OpenAI API usage and costs
- Review sentiment trends in Google Sheet

**Monthly:**
- Analyze feedback patterns and trends
- Update AI prompts if needed
- Check PDF service usage limits
- Review and optimize workflow performance

### Best Practices

1. **Rate Limiting**
   - Monitor for spam submissions
   - Add rate limiting to webhook if needed
   - Use n8n's built-in throttling

2. **Data Privacy**
   - Ensure GDPR/privacy compliance
   - Add data retention policies
   - Implement data deletion workflow

3. **Error Handling**
   - Set up error notifications
   - Create error logging workflow
   - Monitor execution failures

4. **Performance**
   - Keep Google Sheet under 50,000 rows
   - Archive old data quarterly
   - Use database for high volume (1000+/month)

---

## Troubleshooting

### Common Issues

#### Issue 1: Webhook Not Receiving Data

**Symptoms:**
- Webhook node shows no executions
- Forms submit but nothing happens

**Solutions:**
1. ✅ Verify workflow is **Active** (toggle at top right)
2. ✅ Check webhook URL is correct in form
3. ✅ Test webhook with Postman/cURL first
4. ✅ Check n8n logs for errors: Settings → Log Streaming
5. ✅ Verify firewall/network allows incoming webhooks

#### Issue 2: OpenAI Node Fails

**Symptoms:**
- Error: "API key invalid"
- Error: "Insufficient credits"
- Node times out

**Solutions:**
1. ✅ Verify API key is correct and active
2. ✅ Check OpenAI account has sufficient credits
3. ✅ Check API usage limits: [platform.openai.com/usage](https://platform.openai.com/usage)
4. ✅ Increase node timeout in workflow settings
5. ✅ Try with shorter feedback text

#### Issue 3: PDF Not Generating

**Symptoms:**
- "PDF generation failed" error
- Empty PDF URL
- 404 when accessing PDF

**Solutions:**
1. ✅ Verify PDF API key is valid
2. ✅ Check API service status
3. ✅ Verify HTML content is valid (test in browser)
4. ✅ Check API usage limits/quota
5. ✅ Try alternative PDF service

#### Issue 4: Email Not Sending

**Symptoms:**
- Gmail node shows error
- Email doesn't arrive
- "Permission denied" error

**Solutions:**
1. ✅ Re-authenticate Gmail OAuth2 credential
2. ✅ Check email address is valid
3. ✅ Check spam/junk folder
4. ✅ Verify Gmail API is enabled in Google Console
5. ✅ Check daily sending limits not exceeded
6. ✅ Test with different email address

#### Issue 5: Google Sheets Not Updating

**Symptoms:**
- No new rows added
- "Spreadsheet not found" error
- Permission errors

**Solutions:**
1. ✅ Verify spreadsheet ID is correct
2. ✅ Check sheet name matches exactly (case-sensitive)
3. ✅ Verify column headers match exactly
4. ✅ Re-authenticate Google Sheets credential
5. ✅ Check spreadsheet isn't protected/locked
6. ✅ Verify spreadsheet isn't full (limit: 10M cells)

#### Issue 6: Slack Not Posting

**Symptoms:**
- Slack node fails
- Message doesn't appear in channel
- "Channel not found" error

**Solutions:**
1. ✅ Verify bot is invited to channel: `/invite @BotName`
2. ✅ Check bot has `chat:write` permission
3. ✅ Re-authenticate Slack credential
4. ✅ Verify channel ID is correct
5. ✅ Check Slack workspace isn't on free plan limits
6. ✅ Test with different channel

### Debugging Tips

1. **Enable Debug Mode**
   - Settings → Executions → Save execution progress
   - Watch each node execute step-by-step

2. **Check Execution Logs**
   - Click on failed node
   - View "Input" and "Output" tabs
   - Check error messages

3. **Test Nodes Individually**
   - Click "Execute Node" on each node
   - Verify output before proceeding

4. **Use Browser Console**
   - Open Developer Tools (F12)
   - Check for JavaScript errors
   - Monitor network requests

5. **Enable Verbose Logging**
   ```bash
   # For self-hosted n8n
   N8N_LOG_LEVEL=debug npm start
   ```

---

## 📄 License

This template is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
