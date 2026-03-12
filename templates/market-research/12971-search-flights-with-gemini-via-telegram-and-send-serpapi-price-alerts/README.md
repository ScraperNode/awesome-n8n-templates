# 📊 Search flights with Gemini via Telegram and send SerpAPI price alerts

> ⚡ **306 views** · 📊 [Market Research & Insights](../)

## Description

## 📖 Overview

A **comprehensive flight price monitoring and AI assistant solution** built entirely in n8n. Combines automated price tracking with intelligent conversational flight search via Telegram.

![bananapromaster1769268600948.png](fileId:4084)

**Perfect for:**
- ✈️ Tracking flight prices to favorite destinations
- 💰 Getting alerts when prices drop below threshold
- 🗓️ Planning trips with AI-powered flight searches
- 🌍 Finding best deals across airlines
- 📱 Managing travel plans through Telegram chat

**Requirements:** n8n v1.123.0+ or v2.0.0+  SerpAPI key (500 free/month), Google Gemini API, Telegram bot token

---

## ⚡ What's in the Box

### **Two Powerful Workflows**

| Workflow | Function | Trigger |
|----------|----------|---------|
| **🔔 Automated Monitoring** | Tracks specific routes, alerts on price drops | Schedule (every 7 days) |
| **💬 AI Flight Assistant** | Interactive search with natural language | Telegram messages |

**Key Capabilities:**
- 🎯 Set price thresholds and get instant alerts
- 🤖 Ask questions in natural language (Vietnamese/English)
- 🧠 AI remembers conversation context
- 📊 Compares prices across airlines
- ⚡ Real-time search results from Google Flights

---

## 🎯 Key Features

- **📅 Scheduled Price Checks**: Automatic monitoring every 7 days (customizable)
- **💡 Smart AI Assistant**: Understands "find cheapest flight to Bangkok next weekend"
- **🔔 Instant Alerts**: Telegram notifications when prices drop
- **🧠 Context-Aware**: AI remembers your preferences and previous searches
- **🌐 Multi-Language**: Handles Vietnamese and English seamlessly
- **📱 Mobile-Ready**: Full control via Telegram chat interface

![bananapromaster1769268551494.png](fileId:4083)
**Technical Highlights**: SerpAPI integration for real-time prices, Google Gemini Flash for AI responses, session-based conversation memory, Telegram HTML formatting, automatic date calculations (+5 days for returns)

---

## 🏗️ How It Works

```
### Workflow 1: Automated Monitoring
Schedule Trigger → Configure Route → Search Flights → Extract Best Price  
                                                            ↓  
                                        Price &lt; Threshold? → Send Alert  

### Workflow 2: AI Assistant
Telegram Message → AI Agent → Flight Search Tools → Format Response  
                      ↓              ↓                      ↓  
                 Understand     Round-trip/One-way      Telegram HTML  
                 Context        Auto +5 days return      Send to user  
```

---

## 🛠️ Setup Guide

### Step 1: API Credentials
Get SerpAPI key (https://serpapi.com), Google Gemini API (https://aistudio.google.com/app/apikey), Telegram bot token (@BotFather)

### Step 2: Configure Monitoring
Edit Fields node: Set departure/arrival codes, price threshold, Telegram ID

### Step 3: AI Assistant Setup
Link Gemini model to AI Agent, connect flight search tools, activate memory

### Step 4: Activate & Test
Enable workflow, send test message to bot, verify alerts

---

## 💡 Usage Examples

**Automated Alert:**
```
✈️ CHEAPEST TICKET
Price: 2,450,000 VND
Airline: Vietjet Air
Time: 06:00 → 08:00
```

**AI Chat:**
- "Find round-trip tickets Hanoi to Bangkok tomorrow"
- "What's the cheapest flight to Nha Trang next weekend?"
- "Search one-way Da Nang to Singapore on March 15"

---

## 👤 About the Author

**Nguyen Thieu Toan (Nguyễn Thiệu Toàn / Jay Nguyen)**

*AI Automation Specialist | n8n Workflow Expert*

**Contact:**
- 🌐 [nguyenthieutoan.com](https://nguyenthieutoan.com)
- 📘 [Facebook](https://www.facebook.com/nguyenthieutoan)
- 💼 [LinkedIn](https://www.linkedin.com/in/nguyenthieutoan)
- 📧 Email: [me@nguyenthieutoan.com](mailto:me@nguyenthieutoan.com)
- [More Nguyen Thieu Toan's n8n Template](https://n8n.io/creators/nguyenthieutoan)

**GenStaff Company**: [genstaff.net](https://genstaff.net)

---

## 📄 License

- Free for commercial/personal use. 
- **Keep author attribution when sharing.**
---

**Ready to never miss a flight deal again? Import this workflow and start tracking prices today! 🚀**

## 🔗 Nodes Used

Telegram, Telegram Trigger, Schedule Trigger, Filter, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
