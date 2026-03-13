# 📱 Update Twitter banner using HTTP request

> ⚡ **951 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.

## Description

This workflow demonstrates the use of the HTTP Request node to upload binary files for form-data-multipart type. This example workflow updates the Twitter banner.

![workflow-screenshot](fileId:570)

**HTTP Request node:** This node fetches an image from Unsplash. Replace this node with any other node to fetch the image file.

**HTTP Request1 node:** This node uploads the Twitter Profile Banner. The Twitter API requires OAuth 1.0 authentication. Follow the Twitter documentation to learn how to configure the authentication.

## 🔗 Nodes Used

HTTP Request, Start

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
