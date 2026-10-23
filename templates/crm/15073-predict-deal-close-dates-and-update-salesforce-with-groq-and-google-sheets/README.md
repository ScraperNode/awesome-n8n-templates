# 🤝 Predict deal close dates and update Salesforce with Groq and Google Sheets

> ⚡ **28 views** · 🤝 [CRM & Sales Operations](../)

## Description

# AI-Powered Smart Deal Close Prediction and Salesforce CRM Auto-Update Workflow

This workflow acts as an automated, intelligent sales operations assistant. It continuously monitors your Salesforce account for newly updated opportunities, compares them against your historical win data and uses a powerful AI (Groq Llama-3) to predict realistic close dates and win probabilities. If the AI is highly confident in its prediction, it automatically updates the deal in Salesforce. If the AI is uncertain, it emails a manager to review the deal manually. Everything is neatly logged in a Google Spreadsheet for easy tracking.


### Quick Implementation Steps

1. **Connect Credentials:** Authenticate your Salesforce, Groq, Gmail and Google Sheets accounts within your [n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi).
2. **Prepare the Audit Sheet:** Create a new Google Sheet and copy its Document ID into the two Google Sheets nodes.
3. **Set the Schedule:** Adjust the Schedule Trigger to run at your preferred interval (default is optimized for frequent checks).
4. **Activate:** Turn on the workflow and watch your pipeline automatically clean itself.


## What It Does

First, the workflow wakes up on a set schedule and looks for two things in Salesforce: a small batch of your recently won deals (to understand what success looks like) and any open opportunities that were modified recently. It filters these to ensure it only spends time on active deals that actually have a dollar amount attached to them. 

Next, it acts like a data scientist. It grabs the recent task history for each deal and calculates custom metrics—like how fast the deal is moving, how long it has been open and a "Risk Score" based on user engagement. All this data is packaged up and securely sent to a Groq LLM agent. The AI acts as a seasoned sales strategist, weighing these factors to predict a realistic timeline and the actual chance of winning the deal.

Finally, the workflow makes a smart decision based on the AI's confidence score. If the AI is 70% or more confident in its assessment, it goes straight into Salesforce and updates the target close date to keep your pipeline accurate. If the confidence is lower, it sends a formatted email via Gmail to alert a sales manager that a deal needs human attention. Regardless of the path taken, every single prediction and action is logged into a Google Sheet for your RevOps team to review.


## Who It's For

* **Sales Managers & Directors** 

Who want an unbiased, data-driven view of when deals will actually close, rather than relying on gut feelings.

* **Revenue Operations (RevOps)** 

Who need accurate pipeline data and want to automate the tedious process of "pipeline scrubbing."

* **CRM Administrators** 

Who want to reduce the administrative burden on sales reps by automatically updating stagnant close dates.


## Requirements to use this workflow

To use this workflow, you will need [n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi) with the following active accounts:

* **Salesforce:** With API access enabled to read opportunities and tasks and update opportunities.
* **Groq:** An API key to access the Llama-3.3-70b AI model.
* **Gmail:** To send the low-confidence alerts.
* **Google Workspace / Sheets:** To maintain the automated audit logs.


## How It Works & Set Up

### 1. App Authentication

Before doing anything, ensure you have added your credentials for Salesforce (OAuth2), Groq (API Key), Gmail (OAuth2) and Google Sheets (OAuth2) in your n8n environment.

### 2. Configure the Google Sheet

You need a destination for the audit logs. Create a new Google Sheet and ensure it has the following exact column headers in the first row:

* `timestamp`
* `opportunity_id`
* `opportunity_name`
* `stage_name`
* `current_amount`
* `risk_score`
* `risk_label`
* `predicted_close_date`
* `predicted_win_probability`
* `confidence_score`
* `reasoning`
* `next_best_action`
* `action_taken`
* `status`

Open both Google Sheets nodes ("Log Auto-Update Success" and "Log Pending Review") and replace the Document ID with the ID of your newly created sheet.

### 3. Timing and Lookback Setup

The workflow uses a "Set Lookback Timeframe" node to only grab deals modified in the last 5 minutes. If you change your "Run Schedule" to run every hour, you must also update the code in the "Set Lookback Timeframe" node to look back 60 minutes instead of 5, so you don't miss any deals.

### 4. Review the AI Prompt

Open the "AI Deal Timeline Predictor" LangChain node. Review the System Message. If your company has specific sales stages or unique risk factors, you can type them directly into the prompt to make the AI's predictions even smarter for your specific business.


## How To Customize Nodes

* **Adjusting the Confidence Threshold**

Open the `check confidence score` If node. It is currently set to `70`. If you want the AI to be more aggressive with automatic updates, lower this number. If you want more manual reviews, raise it to `80` or `90`.

* **Modifying Risk Calculations**

The `Calculate Deal Risk & Velocity` Code node contains JavaScript that assigns risk based on how long a deal has been open and how many tasks are associated with it. You can tweak the numbers in this code to better fit your typical sales cycle length.

* **Changing the Alert System**

If you don't use Gmail, you can easily delete the Gmail node and replace it with a Slack or Microsoft Teams node to send the review alerts directly to a sales channel.


## Add‑ons 

You can easily extend this workflow to do even more:

* **Push AI Advice to CRM** 

Add another Salesforce update node to push the AI's `next_best_action` directly into a custom field on the Opportunity, giving the sales rep instant coaching.

* **Urgent SMS Alerts**

Connect a Twilio node alongside the Gmail node to text the VP of Sales if a massive deal (e.g., over $100k) receives a high risk score.

* **Bi-Weekly Summary**

Create a separate simple workflow that reads the Google Sheet every Friday and emails a summary of all AI predictions to the executive team.


## Use Case Examples

1. **Automated Pipeline Scrubbing** 

Automatically push out the close dates of neglected deals to the next quarter, ensuring the current quarter's forecast remains mathematically realistic without nagging sales reps.

2. **Early Warning System for Stalled Deals**

Instantly alert managers when a high-value opportunity shows a sudden drop in engagement or task activity, allowing leadership to step in before the deal is lost.

3. **Data-Driven Sales Coaching**

Use the AI's generated reasoning and recommended next steps to help junior account executives figure out how to unblock a complex negotiation.

4. **Historical Win-Rate Benchmarking**

Compare the current active pipeline against what actually won in the past, giving RevOps a clear picture of whether the current pipeline quality is better or worse than the previous quarter.

5. **Enforcing CRM Hygiene**

Identify and flag opportunities that have a 90% probability but haven't had a single phone call or email logged in three weeks.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **Workflow isn't processing any deals** | Schedule and lookback timeframes don't match or no deals were modified recently. | Ensure the minutes in the Schedule node match the mathematical subtraction in the "Set Lookback Timeframe" node. |
| **"Invalid JSON returned from AI" error** | The LLM ignored instructions and added extra conversational text (like "Here is your data:"). | The workflow already has a "Parse AI Output" cleanup node. If it still fails, adjust the Groq prompt to strictly enforce JSON-only responses. |
| **Google Sheets node fails to write data** | The Google Sheet ID is missing or the column headers in your sheet do not perfectly match the node. | Verify the Document ID. Ensure the headers in your Sheet exactly match the 14 fields listed in the setup instructions above. |
| **Salesforce API Limit errors** | Fetching too much data too frequently. | Increase the interval on your Schedule trigger (e.g., run every 30 minutes instead of 5) to reduce API calls. |
| **AI Close Dates are completely wrong** | The AI lacks context about your specific average sales cycle length. | Edit the AI's System Message prompt to tell it your average sales cycle (e.g., "Our standard enterprise deal takes 90 days to close"). |


## Need Help?

Building dynamic, AI-driven automation workflows can transform your business, but getting the data logic perfectly tuned sometimes requires an expert touch. If you need help setting up this workflow, customizing the custom JavaScript risk scoring, integrating it with a different CRM or building more advanced automation solutions tailored to your unique operations, we are here for you. 

Reach out to our [n8n workflow developers](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** to get expert assistance and start maximizing the value of your business process automations today!

## 🔗 Nodes Used

Google Sheets, Salesforce, Gmail, Schedule Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
