# 🔧 N8N advanced URL parsing and shortening workflow - Switchy.io integration

> ⚡ **1,450 views** · 🔧 [Miscellaneous](../)

## Description

[![Video Overview of template  Advanced URL Parsing and Shortening Workflow - Switchy.io Integration](https://img.youtube.com/vi/c7yCZhmMjtI/maxresdefault.jpg)](https://youtu.be/c7yCZhmMjtI)

## Overview

This N8N workflow facilitates advanced URL parsing and shortening, incorporating metadata extraction, OpenGraph tag handling, and integration with Switchy API for link management. It employs various nodes for URL processing, metadata extraction, and creation or updating of shortened links with enriched metadata.

![Screenshot of template  Advanced URL Parsing and Shortening Workflow - Switchy.io Integration](https://live.staticflickr.com/65535/53646661632_fe2acba561_o.png)

## Features

- **URL Metadata Extraction:** Parses URLs to extract metadata such as titles, descriptions, images, and favicons.
- **OpenGraph API Integration:** Utilizes OpenGraph API for detailed metadata retrieval.
- **Switchy API Integration:** Manages shortened links via the Switchy API.
- **GitHub API Integration:** Uses GitHub for hosting images related to the URLs.
- **Screenshot Capabilities:** Captures screenshots of web pages as part of metadata.
- **API Authorization and Configuration:** Manages API keys and configurations for external service integration.

## Workflow Structure

1. **Split In Batches:** Processes URLs in batches.
2. **API Auth:** Configures API authorization.
3. **URL Processing Nodes:** Extract metadata using various nodes like Get Headers, OpenGraph API, and Meta tags Scraper.
4. **Conditional Nodes:** Include IF OpenGraph Invalid and If - Enable ScreenShots for logic handling.
5. **Data Aggregation:** Uses nodes like Method 1 - META for final metadata aggregation.
6. **Switchy API:** Handles link creation and updating.
7. **GitHub Integration:** Hosts screenshots and images on a personal GitHub repository.
8. **Final Output:** Provides the shortened URL after processing.

## API Stack

| API                         | Description                                     |
|---------------------------------|-------------------------------------------------|
| `switchy`                | For creating and updating shortened links.      |
| `opengraph`             | To retrieve URL metadata using OpenGraph tags.  |
| `dub.sh`                    | Used for scraping meta tags from web pages.     |
| `microlink`              | Captures screenshots of web pages.              |
| `pxl.to`                    | Alternative service for capturing screenshots.  |
| `favicone`                  | Retrieves favicons for given URLs.              |
| `github`                    | Hosts images and screenshots on GitHub repo.    |
| `statically`             | Used for CDN services and image hosting.        |
| _Other APIs_                    | _Additional APIs used for various purposes._    |

## GitHub Repository Setup

To use this workflow, ensure your GitHub API is linked for hosting images. Set up a repository where the workflow can upload screenshots and other related images. This repository will be referenced in the workflow nodes where images are handled.

## Configuration

Before running the workflow, set up the necessary API keys and configurations in the **API Auth** node. Adjust batch size and other parameters as needed.

## Error Handling

The workflow includes nodes like **Stop and Error** for robust error handling, post an issue and mention the creator using [N8N community](https://community.n8n.io).

## Contributions

This workflow is open for community contributions. Enhancements and improvements are welcome.

## 🔗 Nodes Used

GitHub, HTTP Request, Stop and Error, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
