# 🔬 Sync WooCommerce products, blog, and Google Drive files to Pinecone with OpenAI

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow keeps a Pinecone knowledge base in sync with WooCommerce products and reviews, WordPress pages/posts, and files from a Google Drive folder by generating OpenAI embeddings, chunking content, and tracking sync state in an n8n Data Table.

## How it works
1. Runs on a manual trigger, daily schedules (blog at 4:00 AM and products at 5:00 AM), a Google Drive new-file trigger, or a WooCommerce webhook for product events.
2. Validates required settings (store URL, Pinecone index details, embedding model/dimensions, chunking, and trigger-specific values like Drive folder ID or webhook secret) and routes execution to the matching lane.
3. For WooCommerce product batch sync, fetches all published products, selects new/changed ones using the `pinecone_sync_state` table, removes vectors for unpublished/deleted products, and loads each product’s variations and latest reviews.
4. For WooCommerce webhook events, verifies the WooCommerce HMAC signature, resolves the canonical product ID, deletes vectors for deleted/unpublished products, or fetches the product plus variations/reviews for updates.
5. For WordPress blog sync, inventories published pages and posts via the WordPress REST API with pagination, removes vectors for deleted items, and fetches full content for new/changed entries.
6. For Google Drive sync, lists files in a target folder, skips temp/unchanged files, extracts text per file type (Docs/Sheets/PDF with OCR fallback/Excel/images via OpenAI Vision/DOCX/PPTX/TXT), and removes vectors for files no longer present.
7. Formats each item into clean text plus metadata, deletes old Pinecone vectors for the same fileId, splits the text into chunks, creates OpenAI embeddings, writes chunks to Pinecone, and upserts the item’s last modified timestamp into `pinecone_sync_state`.

## Setup
1. Add credentials for WooCommerce, Pinecone, OpenAI, Google Drive (OAuth2), and Gmail (for unsupported-format notifications).
2. Create a Pinecone index and set its name, host, and namespace in the Settings node, ensuring the index dimension matches `embeddingDimensions` (default 1536 for `text-embedding-3-small`).
3. Create an n8n Data Table named `pinecone_sync_state` with columns `itemId`, `indexedAt`, and `dateModified`.
4. Update the Settings node with your WooCommerce base URL and currency, Google Drive folder ID, admin email, chunking limits, per-run caps, and the WooCommerce webhook secret.
5. Configure the Google Drive trigger to watch the same folder ID used in Settings, and create WooCommerce webhooks (product created/updated/deleted) pointing to this workflow’s production webhook URL ending in `/webhook/woo-product-events`.

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, WooCommerce, Gmail, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
