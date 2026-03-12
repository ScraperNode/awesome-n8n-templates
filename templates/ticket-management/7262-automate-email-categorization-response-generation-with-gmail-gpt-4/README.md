# 🎫 Automate email categorization & response generation with Gmail & GPT-4

> ⚡ **1,278 views** · 🎫 [Ticket Management & Triage](../)

## Description

# Gmail AI Email Manager - Setup Guide

## 🎯 Workflow Overview

This workflow will create an intelligent Gmail email manager that can:
- Monitor incoming emails via webhook
- Analyze email content using AI
- Categorize emails automatically
- Generate smart responses
- Take actions based on email content
- Send notifications for important emails

## 📋 Pre-Setup Checklist

Before we build the workflow, let me gather the necessary information and validate our approach.

### Phase 1: Discovery & Planning
- [ ] Search for Gmail nodes
- [ ] Find AI analysis nodes
- [ ] Identify webhook trigger options
- [ ] Check notification nodes

### Phase 2: Configuration Requirements
- [ ] Gmail API credentials
- [ ] AI service (OpenAI/Claude) API key
- [ ] Webhook URL setup
- [ ] Email classification rules

## 🔧 Setup Instructions

### Step 1: Gmail API Setup
1. Go to Google Cloud Console
2. Create new project or select existing
3. Enable Gmail API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `https://your-n8n-instance.com/rest/oauth2-credential/callback`

### Step 2: AI Service Setup
Choose one of the following:
- **OpenAI**: Get API key from platform.openai.com
- **Claude**: Get API key from console.anthropic.com
- **Local AI**: Set up Ollama or similar

### Step 3: n8n Credentials
1. Gmail OAuth2: Add client ID, secret, and scopes
2. AI Service: Add API key
3. Webhook: Configure webhook URL

# Gmail AI Email Manager - Setup Guide

## 🔧 Quick Setup Checklist

### 1. Google Cloud Console
- [ ] Enable Gmail API
- [ ] Create OAuth2 credentials  
- [ ] Add redirect URI: `https://your-n8n.com/rest/oauth2-credential/callback`
- [ ] Set up Gmail push notifications with Pub/Sub

### 2. API Keys
- [ ] Get OpenAI API key from platform.openai.com
- [ ] Create Google Sheets for logging (optional)

### 3. n8n Credentials
- [ ] **Gmail OAuth2**: Client ID, Secret, Scopes: `gmail.readonly,gmail.modify,gmail.compose`
- [ ] **OpenAI API**: Your API key

### 4. Gmail Labels (Create these)
- [ ] URGENT (red) 
- [ ] IMPORTANT (orange)
- [ ] PROMOTIONAL (purple)
- [ ] PERSONAL (green) 
- [ ] WORK (blue)
- [ ] SPAM (gray)

### 5. Update Workflow Values
- [ ] High Priority Alert: Change notification email
- [ ] Spreadsheet Log: Update sheet ID (if using)
- [ ] Webhook: Copy URL after saving workflow

### 6. Test
- [ ] Save & activate workflow
- [ ] Send test email to Gmail
- [ ] Check execution log
- [ ] Verify auto-categorization works

**That's it! Your AI email manager is ready! 🚀**

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
