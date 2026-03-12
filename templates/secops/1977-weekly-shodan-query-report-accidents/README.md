# 🔒 Weekly Shodan query - report accidents

> ⚡ **14,399 views** · 🔒 [SecOps & Security Automation](../)

## Description

This n8n workflow, which runs every Monday at 5:00 AM, initiates a comprehensive process to monitor and analyze network security by scrutinizing IP addresses and their associated ports. It begins by fetching a list of watched IP addresses and expected ports through an HTTP request. Each IP address is then processed in a sequential loop.

For every IP, the workflow sends a GET request to Shodan, a renowned search engine for internet-connected devices, to gather detailed information about the IP. It then extracts the data field from Shodan's response, converting it into an array. This array contains information on all ports Shodan has data for regarding the IP.

A filter node compares the ports returned from Shodan with the expected list obtained initially. If a port doesn't match the expected list, it is retained for further processing; otherwise, it's filtered out. For each such unexpected port, the workflow assembles data including the IP, hostnames from Shodan, the unexpected port number, service description, and detailed data from Shodan like HTTP status code, date, time, and headers.

This collected data is then formatted into an HTML table, which is subsequently converted into Markdown format. Finally, the workflow generates an alert in TheHive, a popular security incident response platform. This alert contains details like the title indicating unexpected ports for the specific IP, a description comprising the Markdown table with Shodan data, medium severity, current date and time, tags, Traffic Light Protocol (TLP) set to Amber, a new status, type as 'Unexpected open port', the source as n8n, a unique source reference combining the IP with the current Unix time, and enabling follow and JSON parameters options. This comprehensive workflow thus aids in the proactive monitoring and management of network security.

## 🔗 Nodes Used

HTTP Request, TheHive, Markdown, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
