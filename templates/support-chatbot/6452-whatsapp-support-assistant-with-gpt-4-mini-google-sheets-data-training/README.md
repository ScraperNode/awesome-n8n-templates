# 💬 WhatsApp support assistant with GPT-4 Mini & Google Sheets data training

> ⚡ **110 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# WhatsApp AI HelpDesk – Smart SupportBot Using Trained Data & WasenderAPI

## Overview

This n8n workflow enables automated AI-driven support replies via your personal WhatsApp number using WasenderAPI.com. The bot intelligently responds to user messages based on trained data stored in Google Sheets, helping you avoid the high cost of WhatsApp Business API.

---

## What It Does

- Reads real-time data from a connected Google Sheet  
- Sends AI-generated responses based on predefined training data  
- Automatically applies rate limits to avoid account blocking  
- Updates each contact's support status after responding  

---

## Who’s It For

This workflow is ideal for:

- Freelancers and small businesses offering support through WhatsApp  
- Customer service teams seeking to automate common queries  
- Entrepreneurs looking to deploy a cost-effective support assistant  
- SaaS founders managing WhatsApp inquiries without expensive API costs  

---

## Prerequisites

Make sure the following components are ready:

- An active WhatsApp account (Personal or Business)  
- WasenderAPI subscription (around $6/month)  
- OpenAI API access (around $20/month)  
- n8n instance (self-hosted or cloud)  
- Google Sheets API connected to n8n  
- A training sheet like this sample:  
  https://docs.google.com/spreadsheets/d/1Ui4TzzI-Gq-bsEsrZELwW1Kyddw0IU9L1wxlHikktqw/edit?usp=sharing  

---

## Setup Instructions

### 1. Connect WasenderAPI

- Add your WhatsApp session to WasenderAPI  
- In n8n, create a Webhook node  
- Copy the webhook URL and paste it into your WasenderAPI session settings  

### 2. Connect OpenAI

- Add an OpenAI node in n8n  
- Authenticate using your OpenAI credentials  
- Configure the prompt to reference the data from your Google Sheet  

### 3. Connect Google Sheets

- Add a Google Sheets node  
- Authenticate using your Google account  
- Select the appropriate Spreadsheet and Worksheet  
- Format your sheet similarly to the sample template above  

---

## How to Customize the Workflow

To tailor the workflow to your business needs:

- **Update the training data** in your Google Sheet to include your own FAQs, product info, or customer scripts  
- **Adjust prompt instructions** in the OpenAI node to change the tone, style, or behavior of the response  
- **Add filtering logic** using IF or SWITCH nodes to categorize and route different types of messages  
- **Integrate CRM or ticketing systems** via additional HTTP or database nodes  
- **Set custom response delay** or batching using WAIT or LIMIT nodes to control the load  

---


## Support & Community

Need help setting up or customizing the workflow? Reach out here:

- WhatsApp: [Chat with Support](https://wa.me/8801322827799)  
- Discord: [Join SpaGreen Server](https://discord.gg/SsCChWEP)  
- Facebook Group: [SpaGreen Community](https://www.facebook.com/groups/spagreenbd)  
- Website: [SpaGreen Creative](https://spagreen.net)  
- Envato: [SpaGreen Portfolio](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
