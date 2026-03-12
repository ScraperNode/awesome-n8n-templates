# 📱 Automate follower resource distribution on BlueSky with keyword-triggered DMs

> ⚡ **33 views** · 📱 [Social Media & Email Marketing](../)

## Description

This workflow acts as an automated engagement bot. It sends a Direct Message (DM) with a link or resource to any follower who replies to your post with a specific target keyword.

## Who is this for
Ideal for creators and community managers who want to distribute resources (PDFs, links, invites) to their audience automatically without manually messaging each person.

## What it does
It scans your notifications for new replies and applies a strict filter to ensure only the right people get messaged:
* **Targeted:** It only monitors replies on the specific post you choose.
* **Keyword Match:** Checks if the user's reply contains your specific trigger word (e.g., "Send").
* **Follower Check:** Verifies if the user is following you (if not, it skips them).
* **Delivery:** Opens a chat conversation and sends your pre-set message.
* **Engagement:** Automatically "Likes" the user's reply to confirm receipt.
* **Anti-Spam:** Remembers processed replies so it never messages the same user twice for the same interaction.

## How to set up
1. **Configuration:** Open the first node ("Configuration") and enter:
   * **BlueSky Credentials:** Your Handle and App Password.
   * **Target Post URL:** The full link to the specific BlueSky post you want to monitor.
   * **Trigger Keyword:** The word users must type (e.g., "Template").
   * **DM Message:** The actual text/link to send them.
2. **Activate:** Turn the workflow on. It runs every 30 minutes to batch-process new replies.

## 🚀 The BlueSky Growth Suite
This workflow is part of a 3-part automation suite designed to help you grow on BlueSky:
* **Part 1: Post Scheduler** (Manage content from Google Sheets)
* **Part 2: Analytics Tracker** (Track likes/reposts back to Sheets)
* **Part 3: Auto-DM Bot** (This template)

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
