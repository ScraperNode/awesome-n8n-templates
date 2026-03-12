# 📱 Amazon affiliate links to Mastodon with AI descriptions & Shlink tracking

> ⚡ **1,746 views** · 📱 [Social Media & Email Marketing](../)

## Description

This n8n workflow automates posting Amazon affiliate products to Mastodon — complete with image upload, description, and a shortened tracking URL using Shlink.

![Bildschirmfoto 20250614 um 19.36.42.png](fileId:1515)

🔧 How it works

    Input Source: The workflow starts by reading from a connected Google Sheet that contains:

1. SHlink (Shortlink)
2. Amazon Link
3. Description (Optional)
4. PicURL
5. Send /NO or YES

A Send column (used as a flag to check if the row was already posted)

![Bildschirmfoto 20250614 um 19.37.42.png](fileId:1514)

Image Upload: It fetches the product image via HTTP and uploads it directly to a Mastodon instance via the /media API endpoint.

URL Shortening (Shlink): The original Amazon URL is shortened using your self-hosted or cloud-hosted Shlink instance to enable click tracking and better presentation.

Text Generation: A two-line promotional text is automatically generated using a Language Model (LLM), based on the product description.

Posting to Mastodon: The post is then published on Mastodon with:

      1. The image
      2. The generated text
      3. The shortened Shlink URL

Row Update: Once published, the Send column in the Google Sheet is updated to "YES" to prevent duplicates.

Requirements

    ✅ Shlink – Required for shortening and tracking Amazon URLs

    ✅ Google Sheet – Used as a product queue and post 

    ✅ Google Sheet Example https://link.unixweb.home64.de/w7VqY

    ✅ Mastodon account – OAuth2 credentials with write scope

    ✅ Product image URL – Must be valid and accessible

    ✅ n8n credentials – Set up for Google Sheets, Mastodon, and optionally OpenRouter or other LLM providers

This workflow is ideal for content creators, affiliate marketers, and automation fans who want to save time and optimize reach across the Fediverse.

#affiliate #amazon #mastodon #advertisment

## 🔗 Nodes Used

Google Sheets, HTTP Request, Basic LLM Chain, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
