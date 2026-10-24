# ⚒️ Monitor ride surge events and analyze ride errors with Sheets, Slack and Gemini

> ⚡ **7 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow pulls ride events and error records from Google Sheets, detects surge pricing and long waits, and notifies via Slack. For error records, it uses Google Gemini with real-time traffic and weather API lookups to diagnose the issue and send recommended actions to Slack.

## How it works
1. Runs manually and reads ride records from a Google Sheets spreadsheet.
2. Processes the rows one by one with a short delay and routes each record based on whether its type is an event or an error.
3. For event records, checks if the ride price is more than 1.5× the normal price and the wait time is over 10 minutes.
4. If surge conditions are met, sends a surge and delay notification to Slack and records a surge-alert log entry.
5. If surge conditions are not met, records a normal “no alert needed” log entry.
6. For error records, structures the ride and error context and asks Google Gemini to generate an incident summary, probable cause, and recommended actions, calling traffic and weather APIs as needed.
7. Parses the Gemini response into JSON and posts the formatted error report to Slack.

## Setup
1. Connect Google Sheets OAuth credentials and set the correct spreadsheet and sheet tab in the Google Sheets node.
2. Connect Slack OAuth2 credentials and set the target Slack user/channel for both Slack message steps.
3. Connect a Google Gemini (Google PaLM) API credential and select the model to use for diagnosis.
4. Provide valid API keys and endpoints for the traffic and weather HTTP request tools (and replace the sample keys in the query parameters).
5. Ensure your Google Sheet includes the fields used by the workflow (for example: type, city, user_id, ride_price, normal_price, wait_time, pickup_location, drop_location, error_message, details, traffic fields, and weather fields).

## Additional info
## How To Customize Nodes  

You can customize this workflow easily:  

- Change surge thresholds in IF Node  
- Modify Slack messages for better user communication  
- Adjust AI prompt for different analysis style  
- Add new fields in Google Sheets for more insights  
- Change API providers if needed  


## Add-ons  

You can extend this workflow with:  

- SMS or Email notifications  
- Database logging (MongoDB / MySQL)  
- Dashboard integration (Power BI / Tableau)  
- Predictive surge forecasting using AI  
- Driver availability tracking  
- Real-time map visualization  


## Use Case Examples  

1. Detect surge pricing in busy cities and notify users instantly  
2. Identify traffic-related ride delays and provide insights  
3. Analyze ride errors and suggest corrective actions  
4. Monitor overall ride performance for business optimization  
5. Improve customer experience by proactive alerts  

There can be many more use cases depending on business needs and system integrations.


## Troubleshooting Guide  

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| No data fetched from Google Sheets | Incorrect credentials or sheet ID | Verify API credentials and sheet configuration |
| Slack message not sent | Invalid Slack OAuth setup | Reconnect Slack API and check permissions |
| AI response not generated | Gemini API issue or prompt error | Check API key and prompt formatting |
| Traffic/Weather data missing | API key invalid or wrong parameters | Verify API keys and query parameters |
| JSON parsing fails | AI response format incorrect | Ensure Gemini output is strictly JSON |
| Workflow not triggering | Trigger not configured properly | Check Manual/Cron/Webhook trigger |


## Need Help  

If you need help setting up, customizing or extending this workflow, we’re here to support you.  

You can reach out to **WeblineIndia** for:  

- Workflow setup assistance  
- Custom automation development  
- AI-based system integration  
- Business process optimization  

Contact WeblineIndia today to [build powerful automation workflows](https://www.weblineindia.com/process-automation-solutions.html) tailored to your business needs.

## 🔗 Nodes Used

Google Sheets, Slack, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
