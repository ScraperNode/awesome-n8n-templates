# 📊 Track BlueSky post engagement metrics in Google Sheets automatically

> ⚡ **6 views** · 📊 [Market Research & Insights](../)

## Description

This workflow automatically syncs engagement metrics (Likes, Reposts, Replies) from BlueSky back to your content calendar in Google Sheets. It ensures your reporting is always up to date without manual data entry.

## Who is this for
Great for social media managers, agencies, and creators who need to report on content performance or analyze which post topics are driving the most engagement.

## What it does
The workflow uses a smart "Active Window" strategy to save API calls and ensure stability:
* **Fetch:** Pulls rows from your Google Sheet that are marked as "Posted."
* **Smart Filter:** Only processes posts published in the last 14 days (catching viral spikes while ignoring old archived content).
* **Safe Updates:** Queries the BlueSky API for the latest stats. If a post has been deleted, it handles the error gracefully instead of breaking the workflow.
* **Sync:** Updates the `Like Count`, `Repost Count`, and `Reply Count` columns in your sheet.

## How to set up
1. **Google Sheet:** Ensure your sheet has these columns: `Post Link`, `Posted At`, `Like Count`, `Repost Count`, `Reply Count`.
   * *(A sample Google Sheet link is provided inside the workflow notes)*.
2. **Credentials:** Enter your BlueSky Handle and App Password in the "Configuration" node.
3. **Select Sheet:** In both the "Get row(s)" and "Update row" nodes, select your specific Google Sheet.
4. **Schedule:** Set the trigger to run once daily (e.g., at 9 AM).

## 🚀 The BlueSky Growth Suite
This workflow is part of a 3-part automation suite designed to help you grow on BlueSky:
* **Part 1: Post Scheduler** (Manage content from Google Sheets)
* **Part 2: Analytics Tracker** (This template)
* **Part 3: Lead Magnet Bot** (Auto-DM users who reply to your posts)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
