# 🔬 Predict restaurant food waste with Gemini AI and Google Sheets reporting

> ⚡ **904 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This automated n8n workflow performs daily forecasting of sales and raw material needs for a restaurant. By analyzing historical data and predicting future usage with AI, businesses can minimize food waste, optimize inventory, and improve operational efficiency. The forecast is stored in Google Sheets and sent via email for easy review by staff and management.

## **What is AI Forecast Generator?**
The AI Forecast Generator is a machine learning component that analyzes historical sales data, weather patterns, and seasonal trends to predict future food demand and recommend optimal inventory levels to minimize waste.

## **Good to Know**
* AI forecasting accuracy improves over time with more historical data
* Weather and seasonal factors significantly impact food demand predictions
* Google Sheets access must be properly authorized to avoid data sync issues
* Email notifications help ensure timely review of daily forecasts
* The system works with two main data sources: historical food wastage data and predicted low-waste food requirements

## **How It Works**
1. **Daily Trigger** - Initiates the workflow every day to perform food waste prediction
2. **Fetch Historical Sales Data** - Reads past food usage & sales data from Google Sheets to understand trends
3. **Format Data for AI Forecasting** - Cleans and organizes raw data into a structured format for AI processing
4. **AI Forecast Generator** - Uses Gemini AI to forecast food demand and recommend waste reduction strategies
5. **Clean & Structure AI Output** - Parses AI response into structured and actionable format for reporting
6. **Log Forecast to Google Sheets** - Stores AI-generated forecast back into Google Sheets for historical tracking
7. **Create Email Summary** - Creates a concise, human-friendly summary of the forecast findings
8. **Send Email Forecast Report** - Delivers the forecast report via email to decision makers and management

## **Data Sources**
The workflow utilizes two Google Sheets:

1. **Food Wastage Data Sheet** - Contains historical data with columns:
   - Date (date)
   - Food Item (text)
   - Quantity Wasted (number)
   - Cost Impact (currency)
   - Category (text)
   - Reason for Waste (text)

2. **Predicted Food Data Sheet** - Contains AI predictions with columns:
   - Date (date)
   - Food Item (text)
   - Predicted Demand (number)
   - Recommended Order Quantity (number)
   - Waste Risk Level (text)
   - Optimization Notes (text)

## **How to Use**
* Import the workflow into n8n
* Configure Google Sheets API access and authorize the application
* Set up email credentials for forecast report delivery
* Create the two required Google Sheets with the specified column structures
* Configure the AI model credentials (Gemini API key)
* Test with sample historical data to verify predictions and email delivery
* Adjust forecasting parameters based on your restaurant's specific needs
* Monitor and refine the system based on actual vs. predicted results

## **Requirements**
1. Google Sheets API access
2. Email service credentials (Gmail, SMTP, etc.)
3. AI model API credentials (Gemini AI)
4. Historical food wastage data for initial training

## **Customizing This Workflow**
Modify the AI Forecast Generator prompts to focus on specific food categories, seasonal adjustments, or local market conditions. Adjust the email summary format to match your restaurant's reporting preferences and add additional data sources like supplier information or menu planning data.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, AI Agent, Google Gemini Chat Model, Think Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
