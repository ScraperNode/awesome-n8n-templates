# 🔬 AI based data analysis, data visualization and data report with Ada.im

> ⚡ **4,697 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How it works:

This template demonstrates how to build a low-code, AI-powered data analysis workflow in n8n. It enables you to connect to various data sources (such as MySQL, Google Sheets, or local files), process and analyze structured data, and generate natural language insights and visualizations using external AI APIs.

## Key Features:

* Flexible data source selection (MySQL, Google Sheets, Excel/CSV, etc.)

* AI-driven data analysis, interpretation, and visualization via HTTP Request nodes

* Automated email delivery of analysis results (Gmail node)

* Step-by-step sticky notes for credential setup and workflow customization

## Step-by-step:
1. **Apply for an API Key**

You can easily create and manage your API Key in the [ADA official website](https://ada.im/home?ada_data_=&utm_source=n8n&utm_medium=landingpage&utm_infeluncer=landingpage&utm_campain=landingpage&utm_content=landingpage) - API. To begin with, You need to register for an ADA account.

Once on the homepage, click the bottom left corner to access the API management dashboard.

![apply_apikey_1.png](https://d1551jsgrpwivo.cloudfront.net/apply_apikey_1.png)

Here, you can create new APIs and set the credit consumption limit for each API. A single account can create up to 10 APIs.

![apply_apikey_2.png](https://d1551jsgrpwivo.cloudfront.net/apply_apikey_2.png)

After successful creation, you can copy the API Key to set credentials. You can also view the credit consumption of each API and manage your APIs.

![apply_apikey_3.png](https://d1551jsgrpwivo.cloudfront.net/apply_apikey_3.png)

2. **Set credentials**

In HTTP nodes(DataAnalysis, DataInterpretation, and DataVisualization) select Authentication → Generic Credential Type
![set_credentials_1.png](https://d1551jsgrpwivo.cloudfront.net/set_credentials_1.png)

Choose Header Auth → Create new credential
![set_credentials_2.png](https://d1551jsgrpwivo.cloudfront.net/set_credentials_2.png)

Name the header Authorization, which must be exactly 'Authorization', and fill in the previously applied API key
![set_credentials_3.png](https://d1551jsgrpwivo.cloudfront.net/set_credentials_3.png)

3. **Data Source**:

The workflow starts by extracting structured data from your chosen source (e.g., database, spreadsheet, or file).

4. **AI Skills**:

Data is sent to external AI APIs for analysis, interpretation, and visualization, based on your configured queries.

5. **Result Processing**:

The AI-generated results are converted to HTML or Markdown as needed.

6. **Output**:

The final report or visualization is sent via email. You can easily adapt this step to other output channels.

## API Keys Required:

* [Ada API Key](https://ada.im/home?ada_data_=&utm_source=n8n&utm_medium=landingpage&utm_infeluncer=landingpage&utm_campain=landingpage&utm_content=landingpage): For AI data analysis

* Gmail OAuth2: For sending emails (if using Gmail node)

* (Optional) Data source credentials: For MySQL, Google Sheets, etc.

## 🔗 Nodes Used

Google Sheets, HTTP Request, MySQL, Gmail, Markdown, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
