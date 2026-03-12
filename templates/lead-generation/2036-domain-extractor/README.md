# 🎣 Domain extractor

> ⚡ **3,084 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This node is designed to cleanse URLs and extract their domain names efficiently. 

It effectively handles a wide range of URL formats, including those with unconventional or complex top-level domains (TLDs), such as 'co.uk'.

You can also use it to extract the domain from an email. The node will also check if the domain is from a free email provider (gmail.com / outlook.com...etc) or not.

### How It Works
The node analyzes the provided URL, removing any unnecessary elements.

It then identifies and extracts the domain name, ensuring compatibility with a diverse array of TLDs.

The node utilizes an extensive list of TLDs to guarantee accurate domain extraction for virtually any URL. 

To view the complete list of supported top-level domains, please visit: [TLD List on GitHub](https://github.com/publicsuffix/list)


### How to use it
Call this workflow using the "execute workflow" node

You can pass either an email variable or a url variable. 

For email, the node also detect free mail provider such as Yahoo / Google...etc

## 🔗 Nodes Used

Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
