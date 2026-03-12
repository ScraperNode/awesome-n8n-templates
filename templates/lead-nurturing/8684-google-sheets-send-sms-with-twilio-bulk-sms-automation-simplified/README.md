# 💬 Google Sheets send SMS with Twilio - bulk SMS automation simplified!

> ⚡ **981 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Video Introduction
[![Video Walkthrough](https://vasarmilan-public.s3.us-east-1.amazonaws.com/blog_thumbnails/thumbnail_recLaUBEJDCFxly1n.jpg)](https://youtu.be/6QKbzoWMaXE)

#### Want to automate your inbox or need a custom workflow? [📞 Book a Call](https://smoothwork.ai/book-a-call/) | [💬 DM me on Linkedin](https://www.linkedin.com/in/mil%C3%A1n-v%C3%A1s%C3%A1rhelyi-3a9985123/)

---

## Overview

This workflow automates sending personalized SMS messages directly from a Google Sheet using Twilio. Simply update a row's status to "To send" and the workflow automatically sends the text message, then updates the status to "Success" or "Error" based on delivery results. Perfect for event reminders, bulk notifications, appointment confirmations, or any scenario where you need to send customized messages to multiple recipients.

## Key Features

- **Simple trigger mechanism**: Change the status column to "To send" to queue messages
- **Personalization support**: Use `[First Name]` and `[Last Name]` placeholders in message templates
- **Automatic status tracking**: The workflow updates your spreadsheet with delivery results
- **Error handling**: Failed deliveries are clearly marked, making it easy to identify issues like invalid phone numbers
- **Runs every minute**: The workflow polls your sheet continuously when active

## Setup Instructions

### Step 1: Copy the Template Spreadsheet

Make a copy of the [Google Sheets template](https://docs.google.com/spreadsheets/d/1DGhQ2YLeQ5boLYPMK4nUF8SIOJmDDqvtyleSz5IpJEc/edit?usp=sharing) by going to *File → Make a copy*. You must use your own copy so the workflow has permission to update status values.

### Step 2: Connect Your Accounts

1. **Google Sheets**: Add your Google account credentials to the 'Monitor Google Sheet for SMS Queue' trigger node
2. **Twilio**: Sign up for a free Twilio account (trial works for testing). From your Twilio dashboard, get your Account SID, Auth Token, and Twilio phone number, then add these credentials to the 'Send SMS via Twilio' node

### Step 3: Configure the Workflow

In the **Config** node, update:
- `sheet_url`: Paste the URL of your copied Google Sheet
- `from_number`: Enter your Twilio phone number (include country code, e.g., +1234567890)

### Step 4: Activate and Test

Activate the workflow using the toggle in the top right corner. Add a row to your sheet with the required information (ID, First Name, Phone Number, Message Template) and set the Status to "To send". Within one minute, the workflow will process the message and update the status accordingly.

## 🔗 Nodes Used

Google Sheets, Twilio, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
