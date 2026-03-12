# 📁 Automatic Notion database backup to Google Drive with Telegram notifications

> ⚡ **159 views** · 📁 [File Management](../)

## Description

## 🔍 Workflow Overview

## What This Workflow Does

This workflow automatically saves copies of all your Notion databases to Google Drive. It's like creating a safety backup of your important Notion information, similar to saving important documents in a filing cabinet.

**Target Audience:** Anyone who uses Notion and wants to protect their data by creating automatic backups to Google Drive.


---

## Prerequisites (What You Need Before Starting)

### Required Accounts
1. **Notion Account** - Where your databases are stored
2. **Google Account** - For Google Drive storage
3. **Telegram Account** - To receive backup notifications (free messaging app)

### Required Software
- **n8n Community Edition v2.0.0** installed on your computer or server
- **Web browser** (Chrome, Firefox, Safari, or Edge)


---


## Step-by-Step Configuration Guide

### PART 1: Setting Up Notion Access

#### Step 1: Create a Notion Integration
#### Step 2: Share Your Databases with the integration

---

### PART 2: Setting Up Google Drive Access

#### Step 1: Create a Google Drive Folder
#### Step 2: Connect Google Drive to n8n

---

### PART 3: Setting Up Telegram Notifications

#### Step 1: Create a Telegram Bot
#### Step 2: Get Your Chat ID
#### Step 3: Connect Telegram to n8n

---

### PART 4: Installing the Workflow in n8n

#### Step 1: Import the Workflow
#### Step 2: Configure Credentials
1. **For Notion nodes** (Get All Databases, Get Database Pages)
2. **For Google Drive nodes** (Create Backup Folder, Upload Backup File, etc.)
3. **For Telegram node** (Send Telegram Notification)

#### Step 3: Configure the Workflow Settings

---

### PART 5: Testing Your Workflow

#### Step 1: Run a Test
#### Step 2: Verify the Backup
#### If Something Goes Wrong
- **Red X marks on nodes**: Check that all credentials are properly connected
- **"Not found" errors**: Make sure you shared your Notion databases with the integration
- **No Telegram message**: Verify your Chat ID is correct
- **No files in Google Drive**: Check your Folder ID is correct

## 🔗 Nodes Used

Telegram, Google Drive, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
