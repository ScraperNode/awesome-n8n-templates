# 📱 Schedule food photo sharing to Pinterest with GPT-3.5 captions and Google Sheets

> ⚡ **1,963 views** · 📱 [Social Media & Email Marketing](../)

## Description

In this guide, we’ll walk you through setting up an AI-driven workflow that automatically processes highly-rated food photos from a Google Sheet, generates AI-powered captions, shares them to Pinterest, and updates the sheet to reflect the posts. Ready to automate your food photo sharing? Let’s dive in!

## What’s the Goal?
- Automatically detect and process highly-rated food photos (4 stars or above) from a Google Sheet.
- Use AI to generate engaging and relevant captions.
- Share the photos with captions to Pinterest via the Pinterest API.
- Update the Google Sheet to mark photos as posted.
- Enable scheduled automation for consistent posting.

By the end, you’ll have a self-running system that shares your best food photos effortlessly.

## Why Does It Matter?
Manual photo sharing is time-consuming and inconsistent. Here’s why this workflow is a game changer:

- **Zero Human Error**: AI ensures consistent captions and posting accuracy.
- **Time-Saving Automation**: Automatically handle photo sharing, boosting efficiency.
- **Scheduled Posting**: Maintain a regular presence on Pinterest without manual effort.
- **Focus on Creativity**: Free your team from repetitive posting tasks.
Think of it as your tireless social media assistant that keeps your Pinterest feed vibrant.

## How It Works
Here’s the step-by-step magic behind the automation:

### Step 1: Trigger the Workflow
- Detect new photos to post using the Daily Post Scheduler node (e.g., once daily).
- Initiate the workflow at a scheduled time to check for new food photos.

### Step 2: Fetch Food Photos from Sheet
- Retrieve rows from the Google Sheet that contain food photo metadata like image URLs, ratings, and status.

### Step 3: Filter 4+ Star Dishes
- Filter only those food entries with high ratings (4 stars or above) and unposted status.

### Step 4: AI Caption Generator
- Use AI (e.g., GPT/OpenAI) to create engaging and relevant captions for selected food photos.

### Step 5: Upload to Pinterest
- Automatically post the food photo with the generated caption to Pinterest via the Pinterest API.

### Step 6: Mark as Posted in Sheet
- Update the Google Sheet to reflect that the photo has been successfully shared.

## How to Use the Workflow?
Importing a workflow in n8n is a straightforward process that allows you to use pre-built workflows to save time. Below is a step-by-step guide to importing the Automated Food Photo Sharing workflow in n8n.

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
- **Google Sheet Columns**: Ensure your Google Sheet includes the following columns: `Image URL`, `Rating` (numeric, e.g., 1-5), `Feedback` (text), `Pin Title`, `Pin Description`, `Destination URL`, `Board ID`, and `Status` (e.g., "Pending" or "Posted").
- **Google Sheets Credentials**: Configure OAuth2 settings in the Fetch Food Photos node with your Google Sheet ID and credentials.
- **AI Model**: Set up the AI Caption Generator node with OpenAI credentials (e.g., API key).
- **Pinterest API**: Authorize the Upload to Pinterest node with Pinterest API credentials (e.g., Bearer Token) and obtain the Board ID.
- **Scheduling**: Adjust the Daily Post Scheduler node to your preferred posting time (e.g., daily at 9 AM).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
