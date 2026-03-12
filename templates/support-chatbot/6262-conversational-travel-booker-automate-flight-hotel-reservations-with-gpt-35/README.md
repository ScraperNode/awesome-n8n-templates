# 💬 Conversational travel booker: Automate flight & hotel reservations with GPT-3.5

> ⚡ **3,351 views** · 💬 [Support Chatbots](../)

## Description

This guide walks you through setting up an AI-driven workflow to automate flight and hotel reservation processes using a conversational travel booking system. The workflow accepts booking requests, processes them via APIs, and sends confirmations, enabling a seamless travel booking experience.

## What’s the Goal?
- Automatically accept and process booking requests for flights and hotels via HTTP POST.
- Use AI to understand natural language requests and route them to appropriate data processors.
- Search for flights and hotels using external APIs and process booking confirmations.
- Send confirmation emails and return structured booking data to users.
- Enable an automated system for efficient travel reservations.

By the end, you’ll have a self-running system that handles travel bookings effortlessly.

## Why Does It Matter?
Manual booking processes are time-consuming and prone to errors. This workflow offers:
- **Zero Human Error**: AI ensures accurate request parsing and booking processing.
- **Time-Saving Automation**: Automates the entire booking lifecycle, boosting efficiency.
- **Seamless Confirmation**: Sends automated emails and responses without manual intervention.
- **Enhanced User Experience**: Provides a conversational interface for bookings.
Think of it as your reliable travel booking assistant that keeps the process smooth and efficient.

## How It Works
Here’s the step-by-step flow of the automation:

### Step 1: Trigger the Workflow
- **Webhook Trigger**: Accepts incoming booking requests via HTTP POST, initiating the workflow.

### Step 2: Parse the Request
- **AI Request Parser**: Uses AI to understand natural language booking requests (e.g., flight or hotel) and extracts relevant details.

### Step 3: Route Booking Type
- **Booking Type Router**: Determines whether the request is for a flight or hotel and routes it to the respective data processor.

### Step 4: Process Flight Data
- **Flight Data Processor**: Handles flight-specific data and prepares it for the search API.

### Step 5: Search Flight API
- **Flight Search API**: Searches for available flights based on parameters (e.g., https://api.aviationstack.com) and returns results.

### Step 6: Process Hotel Data
- **Hotel Data Processor**: Handles hotel-specific data and prepares it for the search API.

### Step 7: Search Hotel API
- **Hotel Search API**: Searches for available hotels based on parameters (e.g., https://api.booking.com) and returns results.

### Step 8: Process Flight Booking
- **Flight Booking Processor**: Processes flight bookings and generates confirmation details.

### Step 9: Process Hotel Booking
- **Hotel Booking Processor**: Processes hotel bookings and generates confirmation details.

### Step 10: Generate Confirmation Message
- **Confirmation Message Generator**: Creates structured confirmation messages for the user.

### Step 11: Send Confirmation Email
- **Send Confirmation Email**: Sends booking confirmation via email to the user.

### Step 12: Send Response
- **Send Response**: Returns structured booking data to the user, completing the workflow.

## How to Use the Workflow?
Importing the workflow in n8n is a straightforward process. Follow these steps to import the Conversational Travel Booker workflow:

1. **Download the Workflow**: Obtain the workflow file (e.g., JSON export from n8n).
2. **Open n8n**: Log in to your n8n instance.
3. **Import Workflow**: Navigate to the workflows section, click "Import," and upload the workflow file.
4. **Configure Nodes**: Adjust settings (e.g., API keys, webhook URLs) as needed.
5. **Execute Workflow**: Test and activate the workflow to start processing bookings.

## Requirements
- n8n account and instance setup.
- Access to flight and hotel search APIs (e.g., Aviationstack, Booking.com).
- Email service integration for sending confirmations.
- Webhook URL for receiving booking requests.

## Customizing this Workflow
- Modify the **AI Request Parser** to handle additional languages or booking types.
- Update API endpoints in **Flight Search API** and **Hotel Search API** nodes to match your preferred providers.
- Adjust the **Send Confirmation Email** node to include custom email templates or additional recipients.
- Schedule the **Webhook Trigger** to align with your business hours or demand peaks.

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
