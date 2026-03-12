# 🔬 Automate google analytics reporting

> ⚡ **17,952 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Automate Google Analytics Reporting with n8n

This n8n workflow collects, processes, and formats Google Analytics data into a comprehensive HTML report. The report is segmented into three primary categories: Engagement Stats, Search Results, and Country Views. The formatted report can be emailed or saved as a document, and the workflow includes error handling and logging for better debugging.

## Overview

### Purpose

To automate the extraction, processing, and presentation of Google Analytics data in a visually appealing and structured format for easier insights and decision-making.

### Features

- **Data Parsing**: Individual parsers process raw Google Analytics data for different time periods and categories.
- **Data Aggregation**: Combines parsed data into a single structured JSON object.
- **HTML Report Generation**: Formats the aggregated data into an HTML table with color-coded segments for better readability.
- **Email or Document Output**: The formatted report can be emailed or saved as a Google Doc (will need additional setup).
- **Error Handling**: Includes checks for missing data and detailed error messages for debugging.

## Workflow Steps

1. **Data Fetching**:

   - Six separate Google Analytics data pulls:
     - Page Engagement Stats (This Week and Prior Week)
     - Google Search Results (This Week and Prior Week)
     - Country Views (This Week and Prior Week)

2. **Data Parsing**:

   - Each data pull is processed using a dedicated parser node to generate a URL-safe string.
   - Example nodes:
     - `Parse - Get Page Engagement This Week`
     - `Parse - Country Views Prior Week`

3. **Data Aggregation**:

   - Aggregates parsed data into a structured JSON object using the `Aggregate Data` node.
   - Ensures consistency and handles missing or malformed data.

4. **HTML Report Generation**:

   - Creates a formatted HTML report with color-coded tables for each segment:
     - **Engagement Stats**: Green
     - **Search Results**: Blue
     - **Country Views**: Orange
   - Includes headers and neatly formatted tables for each data set.

5. **Output**:

   - The report can be sent via email using the Gmail API or saved to Google Docs.
   - Example nodes:
     - `Gmail` node for email delivery.
     - `Google Docs` node for saving the report as a document.

## Requirements

### Prerequisites

- **Google Cloud Setup**:
  - Enable Google Analytics API.
  - Enable Gmail API (if using email output).
  - Generate OAuth credentials for API access.
- **n8n Installation**:
  - Self-hosted n8n instance with required nodes (Gmail, Google Docs, etc.).
  - [Free Cloud-based n8n account]( https://n8n.partnerlinks.io/alexk1919).

### Environment Variables

- Ensure API credentials and tokens are set up in the n8n environment.
- Update the respective nodes with client ID, client secret, and access tokens.

## Configuration

### Google Analytics

- Configure the `Get Report` nodes with the appropriate property ID and metrics.
- Ensure correct date ranges are selected for each node.

### Formatting Node

- The `Format Data` node processes aggregated data and generates the HTML content.
- Customize the HTML styling and segment colors as needed.

### Email Node

- Configure the Gmail node with OAuth credentials.
- Set the recipient email address and subject line dynamically.

## Error Handling

### Common Issues

1. **Authentication Errors**:

   - Ensure OAuth credentials are correct.
   - Verify that the APIs are enabled in the Google Cloud Console.

2. **Empty Data**:

   - Check the raw data from Google Analytics.
   - Validate the property ID and query parameters in the `Get Report` nodes.

3. **Parsing Errors**:

   - Ensure the parser nodes are correctly configured and match the expected input format.

### Debugging

- Use debug logs in each node to identify data flow issues.
- Add error-handling nodes to capture and log issues during execution.

## Example Usage

1. **Run the Workflow**
   - Trigger the workflow to fetch, process, and format Google Analytics data.
2. **Verify Output**
   - Check the formatted HTML output in the debug logs.
   - Ensure the email or Google Doc contains the correctly formatted report.

## Future Enhancements

- Add support for additional metrics or dimensions.
- Integrate with Slack for notifications.
- Enable scheduling for automated reports.
- Add a visual dashboard for real-time analytics.

---

## 🔗 Nodes Used

Gmail, Google Analytics, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
