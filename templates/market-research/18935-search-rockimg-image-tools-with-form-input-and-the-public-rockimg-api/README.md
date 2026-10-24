# 📊 Search ROCKIMG image tools with form input and the public ROCKIMG API

> ⚡ **4 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow provides a simple search form that queries the public ROCKIMG tools catalog API (www.rockimg.com) by keyword, language, and result limit, then returns a list of matching image tools with each tool’s name, URL, and description.

## How it works
1. Receives a form submission containing a keyword plus optional language and limit values.
2. Sends a GET request to the ROCKIMG public tools API (https://www.rockimg.com/api/tools) with the submitted query parameters.
3. Checks whether the API response indicates success.
4. If successful, splits the returned tools list into individual items and outputs each tool’s name, URL, description, and source website.
5. If unsuccessful, returns an error message indicating the API returned no results and includes the ROCKIMG website link.

## Setup
1. Copy the form trigger URL from n8n and share it with users who should submit searches.
2. Customize the form fields (keyword, language dropdown, limit) and default values if you want different options.
3. Optionally update the ROCKIMG API base URL if you want to target a localized endpoint (for example, /zh-cn/api/tools).

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
