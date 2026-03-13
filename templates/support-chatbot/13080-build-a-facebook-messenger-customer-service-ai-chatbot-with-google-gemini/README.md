# 💬 Build a Facebook Messenger customer service AI chatbot with Google Gemini

> ⚡ **733 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# 🤖 Build a customer service AI chatbot for Facebook Messenger with Google Gemini

---

## 📌 Overview
A streamlined Facebook Messenger chatbot powered by AI with conversation memory.  
This is a **simplified version** designed for quick deployment, learning, and testing — **not suitable for production environments**.

**Base workflows:**
- [Smart message batching AI-powered Facebook Messenger chatbot use Data Table](https://n8n.io/workflows/9192)  
- [Smart human takeover & auto pause AI-powered Facebook Messenger chatbot](https://n8n.io/workflows/11920)  

---

## 🎯 What This Workflow Does

✅ **Core Features:**
- Receives messages from Facebook Messenger via webhook  
- Processes user messages with Google Gemini AI  
- Maintains conversation context using Simple Memory node  
- Automatically responds with AI-generated replies  
- Handles webhook verification for Facebook setup  
- Send image or video to customer through Facebook Messenger

🔹 **Simplified Approach:**
- **Memory**: Simple Memory node (10-message window)  
- **Format**: Cleans text, strips markdown, truncates &gt;1900 chars  
- **Response**: Single message delivery  

⚠️ **Limitations & Trade-offs:**
1. **No Smart Batching** → fragmented user messages cause spam-like replies  
2. **No Human Takeover Detection** → bot continues even when admin joins  
3. **Basic Memory Management** → no persistence, not reliable in production  
4. **Basic Text Formatting** → strips markdown, truncates brutally, no smart splitting  

---

## 🚀 When to Upgrade
Upgrade to full workflows when you need:  
- Production deployment with reliability & persistence  
- Analytics & tracking (query history, reports)  
- Professional formatting (bold, italic, lists, code blocks)  
- Handling long messages (&gt;2000 chars)  
- Smart batching for fragmented inputs  
- Human handoff detection  
- Full conversation persistence  

**Key upgrades available:**
- [Smart message batching workflow](https://n8n.io/workflows/9192)  
- [Smart human takeover workflow](https://n8n.io/workflows/11920)  

---

## ⚙️ Setup Requirements

### Facebook Setup
1. Create Facebook App at [developers.facebook.com](https://developers.facebook.com/)  
2. Add Messenger product  
3. Configure webhook:  
   - URL: `https://your-domain.com/webhook/your-path`  
   - Verify token: secure string  
   - Subscribe to: `messages`, `messaging_postbacks`  
4. Generate Page Access Token  
5. Copy token to "Set Context" node  

### n8n Setup
1. Import workflow  
2. Edit "Set Context" node → update `page_access_token`  
3. Configure "Gemini Flash" node credentials  
4. Deploy workflow (must be publicly accessible)  

---

## 🔄 How It Works
```
User Message → Facebook Webhook → Validation
    ↓
Set Context (extract user_id, message, token)
    ↓
Mark Seen → Show Typing
    ↓
AI Agent (Gemini + 10-message memory)
    ↓
Format Output (remove markdown, truncate)
    ↓
Send Response via Facebook API
```

---

## 🏗️ Architecture Overview

### Section 1: Webhook & Initial Processing
- Facebook Webhook: handles GET (verification) & POST (messages)  
- Confirm Webhook: returns challenge / acknowledges receipt  
- Filters text messages only  
- Blocks echo messages from bot itself  

### Section 2: AI Processing with Memory
- Set Context: extracts user_id, message, token  
- Seen & Typing: user feedback  
- Conversation Memory: 10-message window, per-user isolation  
- Process Merged Message: AI Agent with Jenix persona  
- Gemini Flash: Google’s AI model for response generation  

### Section 3: Format & Delivery
- Cuts replies &gt;2000 chars, strips markdown  
- Sends text via Facebook Graph API  

---

## 🎨 Customisation Guide
- **Bot Personality**: edit system prompt in "Process Merged Message" node  
- **Memory**: adjust `contextWindowLength` (default 10), change `sessionKey` if needed  
- **AI Model**: replace Gemini Flash with OpenAI, Anthropic Claude, or other LLMs  

---

## 📌 Important Notes
⚠️ **Production Warning**: testing only, memory lost on n8n restart in queue mode  
📊 **No Analytics**: no history storage, no reporting  
🔧 **Format Limitations**: responses ≤1800 chars, markdown stripped, no complex formatting  

---

## 🛠️ Troubleshooting
- **Bot not responding** → check token, webhook accessibility, event subscriptions  
- **Memory not working** → verify session key, ensure not in queue mode, restart workflow  
- **Messages truncated** → adjust system prompt for conciseness, reduce response length  

---

## 📜 License & Credits
Created by: **Nguyễn Thiệu Toàn (Jay Nguyen)**  
- Email: **me@nguyenthieutoan.com**
- Website: [nguyenthieutoan.com](https://nguyenthieutoan.com)  
- n8n Creator: [n8n.io/creators/nguyenthieutoan](https://n8n.io/creators/nguyenthieutoan)  
- Company: [GenStaff](https://genstaff.net)

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Simple Memory, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
