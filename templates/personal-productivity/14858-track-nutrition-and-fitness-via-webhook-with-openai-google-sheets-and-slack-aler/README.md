# ⚡ Track nutrition and fitness via webhook with OpenAI, Google Sheets and Slack alerts

> ⚡ **153 views** · ⚡ [Personal Productivity](../)

## Description

# AI Nutrition Tracker with Webhook, OpenAI, Google Sheets & Slack Alerts

This workflow is an AI-powered nutrition and fitness tracking system built in **n8n**. It receives user input via webhook, analyzes food or activity using AI, updates daily calorie and protein intake in Google Sheets and sends alerts via Slack when limits or risks are detected. It also resets daily metrics automatically using a scheduled trigger.


### Quick Start Guide (Fast Implementation)

1. **Connect** your Google Sheets account with required columns.
2. **Configure** OpenAI API credentials.
3. **Set up** Slack integration for alerts.
4. **Deploy** the Webhook node for receiving user input.
5. **Enable** the Schedule Trigger for daily reset.
6. **Test** by sending a sample message (food/activity) to the webhook.


## What It Does

This workflow automates real-time nutrition tracking by processing user input such as food consumption or physical activities. When a user sends a message through a webhook, the system fetches their profile data from Google Sheets and validates their existence before continuing.

The input is then analyzed using an **AI model** that classifies it as food or activity. Based on this classification, it estimates calories, protein intake, calories burned and identifies potential health risks. The processed data is combined with existing user metrics to maintain an updated daily summary.

Additionally, the workflow monitors calorie thresholds and risk patterns. If a user exceeds their daily calorie target or shows unhealthy behavior patterns, alerts are sent to **Slack**. A scheduled process resets all users’ daily metrics, ensuring accurate tracking for each new day.


## Who’s It For

* Fitness app developers
* Health and wellness platforms
* Personal trainers and nutritionists
* Automation engineers building health tracking systems
* Businesses managing user diet and activity tracking


## Requirements to Use This Workflow

* **n8n instance** (self-hosted or cloud)
* **Google Sheets account** with a structured sheet
* **OpenAI API credentials**
* **Slack workspace** with API access
* Basic understanding of webhook usage


### Required Google Sheets Columns:
* `Name`
* `Phone` (used as unique identifier)
* `Goal`
* `Daily_Calorie_Target`
* `Consumed_Calories`
* `Protein`
* `Last_Meal`
* `Status`
* `Risk_Count`


## How It Works & How To Set Up

### Step 1: Configure Webhook

* **Node:** Receive User Input
* Set webhook path (e.g., `/diet-input`)
* This endpoint will receive user messages (food/activity input).

### Step 2: Connect Google Sheets

* **Node:** Fetch User Data
* Map `Phone` column with incoming webhook data (`body.phone`).
* Ensure correct **Sheet ID** and **Sheet Name**.

### Step 3: Validate User

* **Node:** Validate User Exists
* Ensures only valid users are processed.

### Step 4: Configure AI Analysis

* **Node:** AI Nutrition Analyzer  
  Uses OpenAI model to:
    * Detect input type (**FOOD / ACTIVITY**)
    * Estimate calories & protein
    * Detect risks
    * Generate suggestions and replies
* **Node:** AI Model (GPT)
    * Ensure OpenAI credentials are properly connected.

### Step 5: Process Data

* **Node:** Process Nutrition Data  
  Updates: **Total calories**, **Protein intake** and **Risk count**.
* Handles both food intake and activity adjustments.

### Step 6: Monitor Thresholds

* **Node:** Check Calorie Threshold
* Sends Slack alert if calorie limit is exceeded.

### Step 7: Risk Detection

* **Node:** Check Health Risk: Sends alert if any risk is detected.
* **Node:** Check Critical Risk: Sends critical alert if risk count &gt;= 3.

### Step 8: Respond to User

* **Node:** Send API Response  
  Returns: AI-generated reply, calories consumed and daily total.

### Step 9: Update User Data

* **Node:** Update User Data
* Writes updated metrics back to Google Sheets.

### Step 10: Daily Reset Automation

* **Node:** Daily Reset Trigger
* **Node:** Fetch All Users → Reset Daily Stats  
  Resets: Calories = 0, Protein = 0, Risk Count = 0, Status = `NEW_DAY`.


## How To Customize Nodes

* **AI Prompt (AI Nutrition Analyzer):** Modify calorie logic, risk definitions or add new dietary rules.
* **Calorie Threshold:** Change comparison logic based on different fitness goals.
* **Slack Messages:** Customize alert messages and formatting.
* **Google Sheets Mapping:** Add more fields like carbs, fats or water intake.
* **Webhook Input Structure:** Adjust input format if integrating with mobile apps or chatbots.


## Add-ons (Extend Functionality)

* Add **WhatsApp/SMS** notifications for user alerts.
* Integrate with mobile apps for real-time tracking.
* Add **meal history logging**.
* Include weekly/monthly analytics dashboards.
* Add AI meal recommendations based on user goals.
* Integrate **wearable data** (steps, workouts).


## Use Case Examples

* **Fitness App Backend:** Automatically track user diet and activity in real time.
* **Personal Trainer Dashboard:** Monitor client calorie intake and risks.
* **Corporate Wellness Programs:** Track employee health metrics and send alerts.
* **Diet Coaching Automation:** Provide AI-based suggestions and feedback.
* **Health Monitoring Systems:** Detect unhealthy patterns and escalate alerts.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **Webhook not receiving data** | Incorrect webhook URL | Verify webhook path and method |
| **User not found** | Phone mismatch in Sheets | Ensure phone format matches input |
| **AI response parsing fails** | Invalid JSON from AI | Adjust prompt to enforce strict JSON |
| **Slack alerts not sent** | Incorrect Slack credentials | Reconnect Slack API |
| **Data not updating in Sheets** | Column mapping issue | Verify matching column (Phone) |
| **Calories not updating** | Parsing or logic issue | Check code node calculations |
| **Daily reset not working** | Schedule trigger configuration | Verify interval settings |


## Need Help?

If you need assistance setting up this workflow, customizing AI logic or building advanced automation features, our [n8n development team](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** is here to help.

**We specialize in:**

* n8n workflow automation
* AI-powered business solutions
* Custom integrations and scaling systems

📩 [**Reach out to WeblineIndia**](https://www.weblineindia.com/contact-us.html) to accelerate your automation journey and build powerful, production-ready workflows tailored to your needs.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
