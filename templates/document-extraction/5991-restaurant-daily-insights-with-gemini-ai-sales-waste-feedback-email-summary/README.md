# 🔬 Restaurant daily insights with Gemini AI - sales, waste & feedback email summary

> ⚡ **991 views** · 🔬 [Document Extraction & Analysis](../)

## Description

In this guide, we’ll walk you through setting up an AI-driven workflow that automatically fetches daily sales, food waste, and customer feedback data from Google Sheets, generates actionable insights using AI, merges them into a comprehensive report, and sends it as an email draft. Ready to automate your restaurant’s daily insights? Let’s dive in!

## What’s the Goal?
- Automatically retrieve daily sales data, food waste records, and customer feedback from Google Sheets.
- Use AI to analyze data and generate insights, including top performers, waste reduction recommendations, and feedback summaries.
- Merge the insights into a structured daily report.
- Send the report as an AI-generated email draft for review or sending.
- Enable scheduled automation for daily insights delivery.

By the end, you’ll have a self-running system that delivers daily restaurant insights effortlessly.

## Why Does It Matter?
Manual data analysis and reporting are time-consuming and error-prone. Here’s why this workflow is a game-changer:

- **Zero Human Error**: AI ensures accurate and consistent insights.
- **Time-Saving Automation**: Instantly process data and draft reports, boosting efficiency.
- **Scheduled Delivery**: Receive insights daily without manual effort.
- **Actionable Insights**: Empower your team with data-driven decisions.
Think of it as your tireless data analyst that keeps your restaurant informed.

## How It Works
Here’s the step-by-step magic behind the automation:

### Step 1: Trigger the Workflow
- Initiate the workflow daily using the Daily Report Scheduler node (e.g., every day at a set time).

### Step 2: Fetch Daily Sales Data
- Retrieve sales data from the Google Sheet using the Fetch Daily Sales Data node.

### Step 3: Fetch Daily Food Waste Records
- Retrieve food waste data from the Google Sheet using the Fetch Daily Food Waste Records node.

### Step 4: Fetch Customer Feedback
- Retrieve customer feedback from the Google Sheet using the Fetch Customer Feedback node.

### Step 5: Normalize Sales Records
- Process and standardize sales data for AI analysis.

### Step 6: Normalize Waste Data
- Process and standardize food waste data for AI analysis.

### Step 7: Normalize Feedback Data
- Process and standardize customer feedback data for AI analysis.

### Step 8: AI Sales Insights Generator
- Use AI (e.g., Google Chat Model) to analyze sales data, identify top performers, and provide recommendations.

### Step 9: AI Waste Reduction Insights Generator
- Use AI to analyze waste data and suggest reduction strategies.

### Step 10: AI Feedback Summary
- Use AI to summarize customer feedback and identify common themes.

### Step 11: Format Sales Output
- Structure the sales insights into a readable format.

### Step 12: Format Waste Output
- Structure the waste reduction insights into a readable format.

### Step 13: Format Feedback AI Output
- Structure the feedback summary into a readable format.

### Step 14: Merge & Create Email
- Combine all formatted insights into a single daily report email draft.

### Step 15: Prepare Email Content
- Finalize the email content for sending.

### Step 16: Send Daily Report
- Send the AI-generated daily summary email via Gmail.

## How to Use the Workflow?
Importing a workflow in n8n is a straightforward process that allows you to use pre-built workflows to save time. Below is a step-by-step guide to importing the Restaurant Daily Insights Automation workflow in n8n.

### Steps to Import a Workflow in n8n

1. **Obtain the Workflow JSON**
   - **Source the Workflow**: Workflows are shared as JSON files or code snippets, e.g., from the n8n community, a colleague, or exported from another n8n instance.
   - **Format**: Ensure you have the workflow in JSON format, either as a file (e.g., workflow.json) or copied text.

2. **Access the n8n Workflow Editor**
   - Log in to n8n (via n8n Cloud or self-hosted instance).
   - Navigate to the Workflows tab in the n8n dashboard.
   - Click Add Workflow to create a blank workflow.

3. **Import the Workflow**
   - **Option 1: Import via JSON Code (Clipboard)**:
     - Click the three dots (⋯) in the top-right corner to open the menu.
     - Select Import from Clipboard.
     - Paste the JSON code into the text box.
     - Click Import to load the workflow.
   - **Option 2: Import via JSON File**:
     - Click the three dots (⋯) in the top-right corner.
     - Select Import from File.
     - Choose the .json file from your computer.
     - Click Open to import.

### Setup Notes
- **Google Sheet Columns**:
  - **Sales Data Sheet**: `Date`, `Item Name`, `Quantity Sold`, `Revenue`, `Cost`, `Profit`.
  - **Food Waste Records Sheet**: `Date`, `Item Name`, `Waste Quantity`, `Reason`, `Timestamp`.
  - **Customer Feedback Sheet**: `Date`, `Customer Name`, `Feedback Text`, `Rating`, `Timestamp`.
- **Google Sheets Credentials**: Configure OAuth2 settings in the fetch nodes with your Google Sheet ID and credentials.
- **AI Models**: Set up the AI nodes (e.g., Google Chat Model) with appropriate API credentials.
- **Gmail Integration**: Authorize the Send Daily Report node with Gmail API credentials to send emails.
- **Scheduling**: Adjust the Daily Report Scheduler node to your preferred time (e.g., daily at 9 AM).

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, AI Agent, Google Gemini Chat Model, Think Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
