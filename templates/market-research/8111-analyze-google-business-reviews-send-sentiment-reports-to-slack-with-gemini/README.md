# 📊 Analyze Google Business Reviews & send sentiment reports to Slack with Gemini

> ⚡ **1,497 views** · 📊 [Market Research & Insights](../)

## Description

# ⭐ Google Review Sentiment Analysis & Slack Notification Workflow  

This workflow automates the process of collecting **Google Business Profile reviews** 🏪, analyzing customer sentiment with **Google Gemini** 🤖✨, and sending structured reports to **Slack** 💬.  

---

## 🔑 Key Advantages  
- 📥 Fetches Google Business Profile reviews for a given business and time period  
- 🧠 Runs sentiment analysis using Gemini AI  
- 📊 Consolidates comments, ratings, and trends into a **JSON-based summary**  
- 🧩 Restructures results into **Slack Block Kit** format for easy readability  
- 🚀 Sends automated sentiment reports directly to a Slack channel  

---

## ⚙️ Set Up Essentials You’ll Need  
- 🔑 Google Business Profile **API access** with project approval  
- ✅ Enabled **Google Business Profile API** service  
- 🔐 **Gemini API credentials**  
- 💬 **Slack workspace & channel** for receiving reports  

---

## 🚀 How to Get Started  
1. 🔧 Configure your **Google Business Profile API** and enable access  
2. 👤 Set the **owner name** and 📍 **location** to fetch reviews  
3. ⏳ Define the **review time period** using the *Set Time Period* node  
4. 🔗 Connect your **Slack account** and select a channel for notifications  
5. 🕒 Deploy and let the workflow run on schedule for **automated insights**  

---

## 🔗 Nodes Used

Slack, Schedule Trigger, Filter, AI Agent, Google Gemini Chat Model, Sentiment Analysis

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
