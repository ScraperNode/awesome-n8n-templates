# 📱 Automate Instagram comment responses with Google Sheets & CRM tracking

> ⚡ **1,565 views** · 📱 [Social Media & Email Marketing](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## 🎯 Overview
This n8n workflow template automates the process of monitoring Instagram comments and sending predefined responses based on specific comment keywords. It integrates Instagram's Graph API with Google Sheets to manage comment responses and maintains an interaction log for customer relationship management (CRM) purposes.

## 🔧 Workflow Components
The workflow consists of **9 main nodes** organized into two primary sections:

### 📡 Section 1: Webhook Verification
- ✅ **Get Verification** (Webhook node)
- 🔄 **Respond to Verification Message** (Respond to Webhook node)

### 🤖 Section 2: Auto Comment Response
- 📬 **Insta Update** (Webhook node)
- ❓ **Check if update is of comment?** (Switch node)
- 👤 **Comment if of other user** (If node)
- 📊 **Comment List** (Google Sheets node)
- 💬 **Send Message for Comment** (HTTP Request node)
- 📝 **Add Interaction in Sheet (CRM)** (Google Sheets node)

## 🛠️ Prerequisites and Setup Requirements

### 1. 🔵 Meta/Facebook Developer Setup

#### 📱 Create Facebook App
&gt; 📋 **Action Items:**
&gt; - [ ] Navigate to [Facebook Developers](https://developers.facebook.com/)
&gt; - [ ] Click "Create App" and select "Business" type
&gt; - [ ] Configure the following products:
&gt;   - ✅ Instagram Graph API
&gt;   - ✅ Facebook Login for Business  
&gt;   - ✅ Webhooks

#### 🔐 Required Permissions

Configure the following permissions in your Meta app:
| `instagram_basic` | 📖 Read Instagram account profile info and media
| `instagram_manage_comments` | 💬 Create, delete, and manage comments
| `instagram_manage_messages` | 📤 Send and receive Instagram messages 
| `pages_show_list` | 📄 Access connected Facebook pages

#### 🎫 Access Token Generation
&gt; ⚠️ **Important Setup:**+
&gt; - [ ] Use Facebook's Graph API Explorer
&gt; - [ ] Generate a User Access Token with required permissions
&gt; - [ ] ⚡ **Important**: Tokens expire periodically and need refreshing

### 2. 🌐 Webhook Configuration

#### 🔗 Setup Webhook URL
&gt; 📌 **Configuration Checklist:**
&gt; - [ ] In Meta App Dashboard, navigate to **Products → Webhooks**
&gt; - [ ] Subscribe to **Instagram** object
&gt; - [ ] Configure webhook URL: `your-n8n-domain/webhook/instagram`
&gt; - [ ] Set verification token (use "test" or create secure token)
&gt; - [ ] Select webhook fields:
&gt;   - ✅ **comments** - For comment notifications
&gt;   - ✅ **messages** - For DM notifications (if needed)

#### ✅ Webhook Verification Process
The workflow handles Meta's webhook verification automatically:
- 📡 Meta sends GET request with `hub.challenge` parameter
- 🔄 Workflow responds with the challenge value to confirm subscription

### 3. 📊 Google Sheets Setup

Example - https://docs.google.com/spreadsheets/d/1ONPKJZOpQTSxbasVcCB7oBjbZcCyAm9gZ-UNPoXM21A/edit?usp=sharing 

#### 📋 Create Response Management Sheet
Set up a Google Sheets document with the following structure:

**📝 Sheet 1 - Comment Responses:**
| Column | Description | Example |
|--------|-------------|---------|
| 💬 Comment | Trigger keywords | `"auto", "info", "help"` |
| 📝 Message | Corresponding response message | `"Thanks for your comment! We'll get back to you soon."` |

**📈 Sheet 2 - Interaction Log:**
| Column | Description | Purpose |
|--------|-------------|---------|
| ⏰ Time | Timestamp of interaction | Track when interactions occur |
| 🆔 User Id | Instagram user ID | Identify unique users |
| 👤 Username | Instagram username | Human-readable identification |
| 📝 Note | Additional notes or error messages | Debugging and analytics |

---

## 🔧 Built By - akash@codescale.tech

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
