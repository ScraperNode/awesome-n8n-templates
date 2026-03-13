# 💬 Automate real estate marketing with Llama AI, VAPI calls & Gmail campaigns

> ⚡ **1,813 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.

## Description

This automated n8n workflow streamlines real estate marketing by combining voice campaigns and email outreach with AI-powered lead generation. The system monitors real estate offers, generates personalized promotional content using AI, creates targeted email campaigns, and manages lead follow-up through automated voice calls and CRM integration.

## **Good to Know**

* Integrates voice campaign automation with email marketing for multi-channel outreach
* Uses Llama 3.2 AI model for generating personalized promotional content
* Automatically syncs lead data with CRM systems for comprehensive tracking
* Includes delay mechanisms to ensure proper data synchronization
* Supports both email and voice-based lead nurturing strategies

## **How It Works**

* **Watch Real Estate Offer** - Monitors incoming real estate listings and opportunities to trigger marketing campaigns
* **Get Client Contact List** - Fetches targeted client information and contact details from CRM or database systems
* **Generate Promo Content with Llama** - Uses AI to create personalized marketing content based on property details and client preferences
* **Trigger Voice Campaign via VAPI** - Initiates automated voice calls to prospects using personalized messaging
* **Create Personalized Email Template** - Generates custom HTML email templates with property information and promotional content
* **Email Promo to Clients (Gmail)** - Sends targeted email campaigns to segmented client lists through Gmail integration
* **Delay to Sync Data** - Ensures proper data synchronization between systems before processing leads
* **Receive Lead Data from VAPI** - Captures lead information and responses from voice campaign interactions
* **Save Lead to CRM Sheet** - Logs all lead data and campaign results to spreadsheet for tracking and analysis
* **Send Acknowledgment to VAPI** - Confirms successful lead processing and maintains system synchronization

## **How to Use**

* Import workflow into n8n
* Configure VAPI credentials for voice campaign automation
* Set up Gmail API for email marketing integration
* Connect CRM or Google Sheets for lead management
* Configure Llama 3.2 AI model access
* Test with sample real estate data
* Monitor campaign performance and lead conversion rates

## **Requirements**

* VAPI account for voice campaigns
* Gmail API credentials
* Llama 3.2 AI model access
* Google Sheets or CRM integration
* Real estate data source

## **Customizing This Workflow**

* Adjust AI prompts for different property types or market segments
* Modify email templates for various campaign styles
* Configure voice campaign scripts based on target audience
* Set up custom lead scoring and qualification criteria
* Integrate additional CRM systems or marketing platforms

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Google Sheets Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
