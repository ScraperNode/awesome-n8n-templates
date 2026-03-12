# 📱 Automate cross-posting from Telegram to Facebook with Airtop Browser Automation

> ⚡ **355 views** · 📱 [Social Media & Email Marketing](../)

## Description

![Post Facebook.png](fileId:2211)
## Overview
This template allows you to **automatically post messages from Telegram directly to Facebook** using **Airtop no-code browser automation**.  
It is designed for creators, social media managers, and businesses that want to streamline their cross-posting workflow without coding.

## Why this is valuable
Manually copying messages from Telegram to Facebook can be time-consuming and error-prone. With this automation:
- Every Telegram message you send to your bot can instantly appear on Facebook.  
- You save time, reduce repetitive manual work, and ensure consistent messaging across platforms.  
- Perfect for **community managers, marketing teams, and content creators** who want to grow their Facebook presence while engaging Telegram followers.

## How it works
1. A **Telegram Trigger** listens for incoming messages to your bot.  
2. **Airtop** starts a browser session and opens Facebook.  
3. The bot **clicks into the composer**, types your Telegram message, and presses **Publish**.  
4. (Optional) It can also tag followers or add extra text.  
5. Finally, Telegram sends you a **confirmation**: “✅ Facebook: post published.”

## Setup
- Connect your **Telegram Bot** credentials.  
- Add your **Airtop API key/account**.  
- On first run, log in to Facebook inside Airtop (it will reuse the session later).  

## Customization
- Change selectors or text if your Facebook interface differs.  
- Add more automation steps (like attaching images, tagging pages, or posting into groups).  
- Adjust **Wait** nodes if your connection is slower.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
