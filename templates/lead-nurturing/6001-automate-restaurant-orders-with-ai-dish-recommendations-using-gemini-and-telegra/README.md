# 💬 Automate restaurant orders with AI dish recommendations using Gemini and Telegram

> ⚡ **2,291 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

In this guide, we’ll walk you through setting up a smart workflow that triggers on new restaurant orders, extracts and formats customer and dish details from Google Sheets, uses Gemini AI to recommend dishes or offers, and sends suggestions via Telegram. Ready to automate your order processing and enhance customer experience? Let’s dive in!

## What’s the Goal?
- Automatically trigger the workflow when a new order is placed.
- Extract and format customer information and order details from Google Sheets.
- Use Gemini AI to analyze orders and recommend dishes or offers.
- Send personalized suggestions to customers via Telegram.
- Enable real-time order processing and customer engagement.

By the end, you’ll have a smart system that processes orders and suggests items effortlessly.

## Why Does It Matter?
Manual order processing and suggestion generation are inefficient and miss opportunities. Here’s why this workflow is a game changer:

- **Real-Time Efficiency**: Instantly process orders and suggest items.
- **Personalized Engagement**: AI-driven suggestions enhance customer satisfaction.
- **Time-Saving Automation**: Reduce manual effort in order management.
- **Improved Sales**: Targeted recommendations can boost order value.
Think of it as your intelligent assistant for orders and customer delight.

## How It Works
Here’s the step-by-step magic behind the automation:

### Step 1: New Order Trigger
- Trigger the workflow when a new order is detected (e.g., via a form submission).

### Step 2: Extract & Format Order
- Extract and format dish ordering details from the customer order details sheet for further processing.

### Step 3: Save Customer Info
- Save customer information (e.g., ID, name, mobile number) from the customer details sheet.

### Step 4: Save Dish Info
- Save dish details (e.g., name, quantity, price) from the customer order details sheet.

### Step 5: Prepare Dish Details for AI
- Prepare the dish details for AI analysis to generate recommendations.

### Step 6: Clean Data for Input to Improve AI Understanding
- Clean and structure the data to enhance AI comprehension.

### Step 7: Use Gemini AI to Recommend Dishes or Offers
- Utilize Gemini AI (via Google Chat Model and Think Tool) to recommend dishes or offers based on order data.

### Step 8: Format AI Suggestions
- Format the AI-generated suggestions into a Telegram-friendly message.

### Step 9: Send Suggestions via Telegram
- Send the formatted suggestions directly to the customer via Telegram.

## How to Use the Workflow?
Importing a workflow in n8n is a straightforward process that allows you to use pre-built workflows to save time. Below is a step-by-step guide to importing the Smart Restaurant Order & Suggestion System workflow in n8n.

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
  - **Customer Details Sheet**: `Customer id`, `Customer name`, `Customer mobile number` (e.g., `CUST-JW4Z8Y`, `ajay`, `9898989898`; `CUST-VEITPW`, `akash`, `9898976898`).
  - **Customer Order Details Sheet**: `Customer id`, `Dish name`, `Dish quantity`, `Per unit price`, `Actual price` (e.g., `CUST-JW4Z8Y`, `Tandoori Chicken`, `1`, `250`, `250`; `CUST-VEITPW`, `Masala Dosa`, `1`, `150`, `150`).
- **Google Sheets Credentials**: Configure OAuth2 settings in the extract and save nodes with your Google Sheet ID and credentials.
- **Gemini AI**: Set up the Gemini AI node with Google Chat Model and Think Tool credentials.
- **Telegram Integration**: Authorize the Send Suggestions node with Telegram API credentials and the customer’s chat ID or mobile number.
- **Trigger Setup**: Configure the New Order Trigger node to detect new orders (e.g., via form or webhook).

## 🔗 Nodes Used

Google Sheets, Telegram, AI Agent, n8n Form Trigger, Google Gemini Chat Model, Think Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
