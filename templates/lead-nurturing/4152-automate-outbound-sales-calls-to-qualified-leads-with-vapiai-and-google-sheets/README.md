# 💬 Automate outbound sales calls to qualified leads with VAPI.ai and Google Sheets

> ⚡ **1,840 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

This workflow automates outbound calls to qualified leads using VAPI.ai and Google Sheets. Here's how it works and how to set it up.

How It Works

Read Leads: The workflow starts by reading leads from a Google Sheet where the "AI call status" is marked as "NO"
Batch Processing: Leads are processed one at a time (batch size = 1) to ensure proper sequencing
Variable Setup: Extracts the phone number and row number from each lead record
Trigger VAPI Call: Makes an API call to VAPI.ai to initiate an AI-powered outbound call
Update Status: Marks the lead as "YES" in the Google Sheet after the call is triggered to prevent duplicate calls
Detailed Setup Guide

Prerequisites

n8n instance (self-hosted or cloud)
Google Sheets account with OAuth2 credentials
VAPI.ai account with API access
Step 1: Google Sheets Setup

Create a Google Sheet with your leads data
Ensure you have these columns (adjust if needed):
Phone number (column E in the current setup)
AI call status (column F in the current setup)
Mark all leads you want to call with "NO" in the status column
Step 2: Google Sheets Credentials

In n8n, go to Credentials &gt; Add New
Select "Google Sheets OAuth2 API"
Follow the prompts to authenticate with your Google account
Name it (e.g., "Google Sheets account 3" as in the example)
Step 3: VAPI.ai Setup

Get your VAPI.ai API credentials
In n8n, go to Credentials &gt; Add New
Select "HTTP Header Auth"
Add your VAPI authorization header (typically "Bearer YOUR_API_KEY")
Name it (e.g., "Header Auth account 4" as in the example)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
