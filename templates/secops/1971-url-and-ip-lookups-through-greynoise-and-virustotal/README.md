# 🔒 URL and IP lookups through Greynoise and VirusTotal

> ⚡ **9,811 views** · 🔒 [SecOps & Security Automation](../)

## Description

This n8n workflow serves as a powerful cybersecurity and threat intelligence tool to look up URLs or IP addresses through industry standard threat intelligence vendors. It starts with either a form submission or a webhook trigger, allowing users to input data, URLs or IPs that require analysis. The workflow then splits into two paths depending on whether the input data is an IP or URL. If an IP was given, it sets the ip variable to the IP; however if a URL was given the workflow will perform a DNS lookup using Google Public DNS and sets the ip variable based on the results from Google.

The workflow then checks the obtained IP addresses against GreyNoise services, with one branch utilizing GreyNoise RIOT IP Lookup to assess IP reputation and association with known benign services, and the other using GreyNoise IP Context to evaluate potential threats. The results from both GreyNoise services are merged to create a comprehensive analysis which includes the IP, classification (benign, malicious, or unknown), IP location, tags to identify activity or malware, category, and trust level. 

In parallel, a VirusTotal scan is initiated for the URL/IP to identify if it is malicious. A 5-second wait ensures proper processing, and the workflow subsequently polls the scan result to determine when the analysis is complete. The workflow then summarizes the analysis including the overall security vendor analysis results, blockList analysis, OpenPhish analysis, the URL, and the IP.

Finally, the workflow combines the summarized intelligence from both GreyNoise and VirusTotal to provide a thorough analysis of the URL/IP. This summarized intelligence can then be emailed to the user that filled out the form via Gmail or it can be sent to the user via a Slack message.

Setting up this workflow may require proper configuration of the form submission or webhook trigger, and ensuring that the GreyNoise and VirusTotal API credentials are correctly integrated. Users should also consider the potential volume of data and API rate limits, as excessive requests could lead to issues. Proper documentation and validation of input data are crucial to ensure accurate and meaningful results in the final report.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Gmail, Filter, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
