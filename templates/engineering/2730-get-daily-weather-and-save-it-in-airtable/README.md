# ⚒️ Get daily weather and save it in Airtable

> ⚡ **1,249 views** · ⚒️ [Engineering](../)

## Description

This smart automation workflow created by the [AI development team](https://www.weblineindia.com/hire-ai-developers.html) at WeblineIndia, helps with the daily collection and storage of weather data. Using the OpenWeatherMap API and Airtable, this solution gathers vital weather details such as temperature, humidity, and wind speed. The automation ensures daily updates, creating a dependable historical record of weather patterns for future reference and analysis.

## Steps:

### Set Schedule Trigger
Configure a Cron node to trigger the workflow daily, for example, at 7 AM.

### Fetch Weather Data (HTTP Request)

- Use the HTTP Request node to retrieve weather data from the OpenWeatherMap API.
- Include your API key and query parameters (e.g., q=London, unit=metric) to specify the city and desired units.

### Parse Weather Data

Utilize a JSON Parse node to extract key weather details, such as temperature, humidity, and wind speed, from the API response.

### Store Data in Airtable

Use the Airtable node to insert the parsed data into the designated Airtable table. Ensure proper mapping of fields like temperature, humidity, and wind speed.

### Save and Execute

Save the workflow and activate it to ensure weather data is fetched and stored automatically every day.

## Outcome
This robust solution, developed by WeblineIndia, reliably collects and archives daily weather data, providing businesses and individuals with an accessible record of weather trends for analysis and decision-making.

## About WeblineIndia
We specialize in creating [custom automation solutions](https://www.weblineindia.com/process-automation-solutions.html) and innovative software workflows to help businesses streamline operations and achieve efficiency. This weather data fetcher is just one example of our expertise in delivering value through technology.

## 🔗 Nodes Used

Airtable, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
