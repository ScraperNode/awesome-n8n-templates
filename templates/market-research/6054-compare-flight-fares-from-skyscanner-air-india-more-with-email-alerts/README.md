# 📊 Compare flight fares from Skyscanner, Air India & more with email alerts

> ⚡ **841 views** · 📊 [Market Research & Insights](../)

## Description

This guide walks you through setting up an automated workflow that compares live flight fares across multiple booking platforms (e.g., Skyscanner, Akasa Air, Air India, IndiGo) using API calls, sorts the results by price, and sends the best deals via email. Ready to automate your flight fare comparison process? Let’s get started!

## What’s the Goal?
- Automatically fetch and compare live flight fares from multiple platforms using scheduled triggers.
- Aggregate and sort fare data to identify the best deals.
- Send the comparison results via email for review or action.
- Enable 24/7 fare monitoring with seamless integration.
By the end, you’ll have a self-running system that delivers the cheapest flight options effortlessly.

## Why Does It Matter?
Manual flight fare comparison is time-consuming and often misses the best deals. Here’s why this workflow is a game-changer:
- **Zero Human Error**: Automated data fetching and sorting ensure accuracy.
- **Time-Saving Automation**: Instantly compare fares across platforms, boosting efficiency.
- **24/7 Availability**: Monitor fares anytime without manual effort.
- **Cost Optimization**: Focus on securing the best deals rather than searching manually.
Think of it as your tireless flight fare assistant that always finds the best prices.

## How It Works
Here’s the step-by-step magic behind the automation:

#### Step 1: Trigger the Workflow
- **Set Schedule Node**: Triggers the workflow at a predefined schedule to check flight fares automatically.
- Captures the timing for regular fare updates.

##### Step 2: Process Input Data
- **Set Input Data Node**: Sets the input parameters (e.g., origin, destination, departure date, return date) for flight searches.
- Prepares the data to be sent to various APIs.

##### Step 3: Fetch Flight Data
- **Skyscanner API Node**: Retrieves live flight fare data from Skyscanner using its API endpoint.
- **Akasa Air API Node**: Fetches live flight fare data from Akasa Air using its API endpoint.
- **Air India API Node**: Collects flight fare data directly from Air India’s API.
- **IndiGo API Node**: Gathers flight fare data from IndiGo’s API.

##### Step 4: Merge API Results
- **Merge API Data Node**: Combines the flight data from Skyscanner and Akasa Air into a single dataset.
- **Merge Both API Data Node**: Merges the data from Air India and IndiGo with the previous dataset.
- **Merge All API Results Node**: Consolidates all API data into one unified result for further processing.

##### Step 5: Analyze and Sort
- **Compare Data and Sorting Price Node**: Compares all flight fares and sorts them by price to highlight the best deals.

##### Step 6: Send Results
- **Send Response via Email Node**: Sends the sorted flight fare comparison results to the user via email for review or action.

## How to Use the Workflow?
Importing this workflow in n8n is a straightforward process that allows you to use this pre-built solution to save time. Below is a step-by-step guide to importing the Flight Fare Comparison Workflow in n8n.

### Steps to Import a Workflow in n8n

1. **Obtain the Workflow JSON**
   - **Source the Workflow**: The workflow is shared as a JSON file or code snippet (provided earlier or exported from another n8n instance).
   - **Format**: Ensure you have the workflow in JSON format, either as a file (e.g., workflow.json) or copied text.

2. **Access the n8n Workflow Editor**
   - **Log in to n8n**: Open your n8n instance (via n8n Cloud or self-hosted).
   - **Navigate to Workflows**: Go to the Workflows tab in the n8n dashboard.
   - **Open a New Workflow**: Click Add Workflow to create a blank workflow.

3. **Import the Workflow**
   - **Option 1: Import via JSON Code (Clipboard)**:
     - In the n8n editor, click the three dots (⋯) in the top-right corner to open the menu.
     - Select Import from Clipboard.
     - Paste the JSON code (provided earlier) into the text box.
     - Click Import to load the workflow.
   - **Option 2: Import via JSON File**:
     - In the n8n editor, click the three dots (⋯) in the top-right corner.
     - Select Import from File.
     - Choose the .json file from your computer.
     - Click Open to import the workflow.

## Setup Notes
- **API Credentials**: Configure each API node (Skyscanner, Akasa Air, Air India, IndiGo) with the respective API keys and endpoints. Check the API provider’s documentation for details.
- **Email Integration**: Authorize the Send Response via Email node with your email service (e.g., Gmail SMTP settings or an email API like SendGrid).
- **Input Customization**: Adjust the Set Input Data node to include specific origin/destination pairs and date ranges as needed.
- **Schedule Configuration**: Set the desired frequency in the Set Schedule node (e.g., daily at 9 AM IST).

## Example Input
Send a POST request to the workflow (if integrated with a webhook) with:
```json
{
  "origin": "DEL",
  "destination": "BOM",
  "departureDate": "2025-08-01",
  "returnDate": "2025-08-07"
}
```

## Optimization Tips
- **Error Handling**: Add IF nodes to manage API failures or rate limits.
- **Rate Limits**: Include a Wait node if APIs have strict limits.
- **Data Logging**: Add a node (e.g., Google Sheets) to log all comparisons for future analysis.

This workflow transforms flight fare comparison into an automated, efficient process, delivering the best deals directly to your inbox!

## 🔗 Nodes Used

Send Email, Function, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
