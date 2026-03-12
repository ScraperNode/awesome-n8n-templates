# 🎬 Generate authentic product reviews with OpenAI for WooCommerce

> ⚡ **993 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow automatically generates natural product comments using AI and posts them to your WooCommerce store. It helps boost engagement and makes product pages look more active and authentic.

## How It Works

Fetches all products from your WooCommerce store.

Builds an AI prompt based on each product’s name and description.

Uses OpenAI to generate a short, human-like comment (neutral, positive, negative, or questioning).

Assigns a random reviewer name and email.

Posts the comment back to WooCommerce as a product review.

### Requirements

1. n8n version: 1.49.0 or later (recommended).
2. Active OpenAI API key.
3. WooCommerce installed and REST API enabled.
4. WordPress API credentials (Consumer Key & Consumer Secret).

### Setup Instructions

Import this workflow into n8n.

Add your credentials in n8n &gt; Credentials:

OpenAI API (API key).

WooCommerce API (consumer key & secret).

Replace the sample URL https://example.com with your own WordPress/WooCommerce site URL.

Execute manually or schedule it to run periodically.

### Categories

AI & Machine Learning

WooCommerce

WordPress

Marketing

Engagement

#### Tags

ai, openai, woocommerce, comments, automation, reviews, n8n

&gt; Note: AI-generated comments should be reviewed periodically to ensure they align with your store’s policies and brand voice.

## 🔗 Nodes Used

HTTP Request, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
