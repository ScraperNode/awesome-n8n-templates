# 📱 Social media content generator and publisher | X, Linkedin

> ⚡ **22,477 views** · 📱 [Social Media & Email Marketing](../)

## Description

# Generate and Publish AI Content to LinkedIn and X (Twitter) with n8n

## Overview
This **n8n workflow** automates the generation and publishing of AI-powered social media content across **LinkedIn** and **X (formerly Twitter)**. By leveraging AI, this workflow helps social media managers, marketers, and content creators streamline their posting process.

### Who is this for?
- Social media managers
- Content creators
- Digital marketers
- Businesses looking to automate content generation

## Features
- **AI-powered content creation** tailored for LinkedIn and X (Twitter)
- **Automated publishing** to both platforms
- **Structured output parsing** to ensure consistency
- **OAuth2 authentication** for secure posting
- **Merge and confirmation steps** to track successful postings

## Setup Instructions
### Prerequisites
Before using this workflow, ensure you have:
- An **n8n instance** set up
- API credentials for:
  - **Google Gemini AI** (for content generation)
  - **X Developer Account** with OAuth2 authentication
  - **LinkedIn Developer Account** with OAuth2 authentication
- A form submission service integrated with n8n

## Workflow Breakdown

### **1. Trigger: Form Submission**
- A user submits a form containing the **post title**.
- The form is secured with **Basic Authentication**.
- The submitted title is passed to the AI Agent.

### **2. AI Content Generation**
- The **Google Gemini Chat Model** processes the title and generates:
  - **LinkedIn post content**
  - **Twitter (X) post content**
  - **Hashtags**
  - **Call-to-action (LinkedIn)**
  - **Character limit check (Twitter)**

### **3. Parsing AI Output**
- A structured output parser converts the AI-generated content into a **JSON format**.
- Ensures correct formatting for LinkedIn and Twitter (X).

### **4. Publishing to Social Media**
#### **X (Twitter) Posting**
- Extracts the **Twitter post** from the AI output.
- Publishes it via an **OAuth2-authenticated** X (Twitter) account.

#### **LinkedIn Posting**
- Extracts the **LinkedIn post** from the AI output.
- Publishes it via an **OAuth2-authenticated** LinkedIn account.

### **5. Merging Post Results**
- Merges the response data from both **LinkedIn** and **Twitter** after publishing.

### **6. Confirmation Step**
- Displays a **final confirmation form** once the posts are successfully published.

## Benefits
- **Save time** by automating content creation and publishing.
- **Ensure consistency** across platforms with structured AI-generated posts.
- **Secure authentication** using OAuth2 for LinkedIn and Twitter.
- **Increase engagement** with AI-optimized hashtags and CTAs.

This workflow enables seamless **social media automation**, helping professionals post engaging AI-powered content effortlessly. 🚀
```

## 🔗 Nodes Used

X (Formerly Twitter), LinkedIn, AI Agent, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
