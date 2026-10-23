# 📈 Scan GDELT news spikes with Gemini and log analysis to Sheets and Slack

> ⚡ **14 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs daily to query the GDELT News API for a chosen theme, detects unusual one-day news-volume spikes, uses Google Gemini to generate a market-impact analysis for a sector and watchlist tickers, logs the results to Google Sheets, and posts an alert to Slack.

## How it works
1. Runs every day at the configured hour using a schedule trigger.
2. Builds a GDELT query for the configured theme, sector, and watchlist tickers, then requests a 1-day news timeline from the GDELT Doc API.
3. Calculates the latest news-volume value, computes a 7-day baseline from prior timeline points, and flags the event if the spike exceeds the 50% threshold.
4. For detected spikes, assigns a severity level (LOW/MEDIUM/HIGH) and classifies the event category based on theme keywords.
5. Sends the event metrics to Google Gemini to produce a JSON analysis including an event summary, narrative, sector impact, ticker-by-ticker impacts, market implication, and disclaimer.
6. Appends the combined spike metrics and Gemini analysis to a Google Sheets log for historical tracking.
7. Posts a formatted Slack message with the spike details and AI analysis to the selected channel.

## Setup
1. Add a Google Gemini (PaLM/AI Studio) API credential and select the Gemini model you want to use.
2. Connect Google Sheets credentials, and set the target spreadsheet/document ID and sheet tab, ensuring the columns used by the workflow exist (or allow n8n to create them).
3. Connect Slack credentials and choose the channel where the alert should be posted.
4. Update the monitored theme, sector, and ticker list (and optionally the spike threshold in code) to match what you want to track.

## Additional info
## Add-ons

The current workflow already combines scheduled monitoring, GDELT data collection, statistical spike detection, event classification, Gemini analysis, Google Sheets logging, and Slack alerting. The following are potential extensions that can be added to expand its usage:

### Email Alerts

Add an email notification after event analysis so important alerts can also be delivered through email.

### Multiple Themes

Run multiple themes through the workflow instead of monitoring only one configured theme.

For example, separate monitoring could be created for different sectors or event categories.

### Additional Data Sources

Add other news or market-data sources alongside GDELT to provide additional information before the Gemini analysis stage.

### Historical Trend Analysis

Store historical results and compare current event activity against longer-term historical patterns.

### Database Storage

Replace or supplement Google Sheets with a database for larger-scale event history and querying.

### Advanced Alert Rules

Add conditions based on:

- Severity
- Spike percentage
- Event type
- Specific ticker impact
- Sector impact

This can help reduce unnecessary notifications.

### Dashboard Integration

Connect the stored event data to a reporting or dashboard system to visualize event trends over time.

### Multi-Channel Notifications

Add additional notification channels so different teams can receive alerts through their preferred communication system.

*These are extension ideas only. They are not part of the current workflow JSON.*


## Use Case Examples

### 1. Semiconductor Export Monitoring

The current workflow configuration monitors:

```text
Theme: semiconductor export
Sector: Semiconductors
Tickers: NVDA, AMD, TSM, INTC, AVGO
```

It can detect a significant increase in news activity around semiconductor exports and use Gemini to assess the potential impact on the configured watchlist.

### 2. Energy Event Monitoring

The event classification logic supports themes containing `oil` or `energy`.

A suitable configured theme can therefore be used to identify news spikes related to energy events and classify them as:

```text
ENERGY
```

### 3. Supply Chain Monitoring

Themes containing `shipping` or `supply` are classified as:

```text
SUPPLY CHAIN
```

This can be used to monitor unusual news activity around supply-chain-related themes.

### 4. Sector-Specific Market Intelligence

A team can configure a theme and sector together with a watchlist of relevant tickers. When a significant news spike occurs, Gemini can provide a structured assessment of how the event may affect the selected sector and individual tickers.

### 5. Automated Global Event Alerts

The workflow can be used as a scheduled monitoring system where users do not need to manually check news volume every day. Significant spikes are processed automatically, logged to Google Sheets, and delivered through Slack.

> These are examples based on the capabilities and classification logic present in the workflow. There can be more use cases depending on how the theme, sector, ticker list, and downstream integrations are configured.


## Troubleshooting Guide

| Issue                                         | Possible Cause                                                                                     | Solution                                                                                                |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Workflow does not start automatically         | The schedule trigger is not configured as expected or the workflow is inactive                     | Check **Daily Event Scan Trigger** and make sure the workflow is activated                              |
| GDELT request fails                           | The GDELT HTTP Request configuration is incorrect or the API does not return the expected response | Check the **Fetch GDELT News Timeline** URL, query parameters, and returned data                        |
| `Not enough timeline data`                    | The GDELT response contains fewer than two timeline entries                                        | Verify the GDELT response and the selected theme                                                        |
| Spike is always `false`                       | The calculated increase is below the 50% threshold                                                 | Review the news volume and adjust `spikeThreshold` if required                                          |
| Event does not continue after spike detection | `spikeDetected` is not `true`                                                                      | Check the calculation in **Calculate News Volume Spike** and the condition in **Check Spike Threshold** |
| Event category is `OTHER`                     | The theme does not contain any configured category keywords                                        | Update the theme or extend the logic in **Classify Event Category**                                     |
| Gemini returns an empty response              | Gemini did not return content                                                                      | Check the Gemini credential, model configuration, and node execution                                    |
| Gemini response cannot be parsed              | Gemini returned content that is not valid JSON                                                     | Check the Gemini prompt and ensure the requested response follows the defined JSON structure            |
| Google Sheets logging fails                   | Google Sheets credentials or destination configuration is incorrect                                | Check the credentials, spreadsheet, worksheet, and column mapping                                       |
| Slack alert is not delivered                  | Slack credentials or destination channel configuration is incorrect                                | Check the Slack credential and channel configuration                                                    |
| Ticker analysis is missing                    | The watchlist data is not available in the expected format                                         | Check the `tickers` configuration and the data passed into the Gemini node                              |
| Historical results are not appearing          | The Google Sheets node cannot append the record                                                    | Check the Google Sheets node execution and column mappings                                              |


## Need Help?

Setting up an n8n workflow may require more than importing the workflow JSON. API credentials, business rules, data mappings, integrations, notification channels and custom automation requirements may need to be configured based on your environment. **WeblineIndia can help you design, customize and implement n8n automation workflows based on your business requirements.**

For more information about our n8n automation services, expertise, workflow development and related solutions, visit: [Everything in n8n Automation | Offshore Workflow Experts](https://www.weblineindia.com/everything-in/n8n/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
