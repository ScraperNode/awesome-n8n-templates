# 📊 Export Google PageSpeed Insights data to CSV for multiple URLs

> ⚡ **132 views** · 📊 [Market Research & Insights](../)

## Description

## Bulk Google PageSpeed Insights to CSV

This workflow accepts up to 10 URLs via chat input, executes the Google PageSpeed Insights API, and outputs a CSV file containing page performance metrics for SEO audits.

## Execution Steps

* **Parse & Normalise URLs:** Intercepts text input, parses the string into an array, filters valid URLs using Regex, appends HTTPS, removes duplicates, and restricts the output to 10 URLs.
* **Early Exit Check:** Validates if any URLs remain after filtering. If zero, it returns an error message to the chat.
* **Reachability Check:** Executes an HTTP HEAD request for each valid URL. URLs returning a non-200 status code are isolated.
* **Respond to Chat:** Notifies the user via chat of any URLs that failed the reachability check.
* **Loop & PageSpeed API:** Iterates through reachable URLs. Sends HTTP GET requests to the Google PageSpeed Insights API (`v5/runPagespeed`) using the mobile strategy. Includes a 10-second wait node between requests to manage rate limits.
* **Extract PageSpeed Data:** Parses the JSON response to extract Core Web Vitals and resource metrics. Maps data points including Largest Contentful Paint, First Contentful Paint, Cumulative Layout Shift, Speed Index, Total Page Size, HTML/CSS/JS file sizes, and savings opportunities.
* **Convert to File:** Compiles the structured data into a CSV format.
* **Upload to Uguu:** Sends the CSV file via HTTP POST to `uguu.se` for temporary hosting.
* **Final Chat:** Extracts the file URL and returns the download link to the user.

## Limitations

* Batch processing is restricted to a maximum of 10 URLs per execution.
* The Google PageSpeed API request is set with a 90,000ms timeout.
* Output files are hosted on a temporary public server (`uguu.se`).

## 🔗 Nodes Used

HTTP Request, Convert to File, Chat Trigger, Chat

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
