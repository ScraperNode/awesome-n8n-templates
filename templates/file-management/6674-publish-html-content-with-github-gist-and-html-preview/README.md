# 📁 Publish HTML content with GitHub Gist and HTML preview

> ⚡ **176 views** · 📁 [File Management](../)

## Description

## 📌 Who’s it for

This subworkflow is designed for **developers, AI engineers, or automation builders who generate dynamic HTML content in their workflows** (e.g. reports, dashboards, emails) and want a simple way to host and share it via a clean URL, without spinning up infrastructure or uploading to a CMS.

It’s **especially useful when combined with AI agents that generate HTML** content as part of a larger automated pipeline.

## ⚙️ What it does

This subworkflow:

1. Accepts raw HTML content as input.
2. Creates a new **GitHub Gist** with that content.
3. Returns the shareable Gist URL, which can then be sent via Slack, Telegram, email, etc.

The result is a lightweight, fast, and free way to publish AI-generated HTML (such as reports, articles, or formatted data outputs) to the web.

## 🛠️ How to set it up

1. Add this subworkflow to any parent workflow where HTML is generated.
2. Pass in a string of valid HTML via the `html` input parameter.
3. Configure the GitHub credentials in the HTTP node using an [access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with `gist` scope.

## ✅ Requirements

- GitHub account and personal access token with `gist` permissions

## 🔧 How to customize

- Change the filename (`report.html`) if your use case needs a different format or extension.
- Add metadata to the Gist (e.g., description, tags).

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
