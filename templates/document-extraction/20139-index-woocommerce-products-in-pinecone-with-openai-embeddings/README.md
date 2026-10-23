# 🔬 Index WooCommerce products in Pinecone with OpenAI embeddings

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs on a manual or daily schedule to sync WooCommerce products into Pinecone by fetching changed items, enriching them with variations and reviews, generating OpenAI embeddings, and tracking indexed products in an n8n Data Table for deduplication and deletion handling.

## How it works
1. Runs on a manual trigger or every day at 03:00 to start a WooCommerce-to-Pinecone sync.
2. Fetches a paginated list of all published WooCommerce products (ID and modified date) and loads previously indexed entries from an n8n Data Table.
3. Compares WooCommerce products to the Data Table to select a limited batch of new or changed products, then retrieves full product details for that batch in one WooCommerce API request.
4. Processes each product one by one, fetching variations for variable products and retrieving up to 10 WooCommerce reviews per product.
5. Builds a clean text representation of the product (details, variants, and selected reviews) and deletes any existing Pinecone vectors for the same product fileId to prevent duplicates.
6. Splits the text into chunks, generates OpenAI embeddings, and inserts the vectors into a Pinecone index under the configured namespace.
7. Upserts the product’s latest modified date into the n8n Data Table and also removes Pinecone vectors and table entries for products that no longer exist in WooCommerce.

## Setup
1. Add WooCommerce API credentials with access to the REST API and set your store base URL in the workflow’s settings values.
2. Add a Pinecone API credential, create or choose a Pinecone index, and fill in the index name, index host, and namespace used for storage.
3. Add an OpenAI API credential for the embeddings step.
4. Create an n8n Data Table named `indexed_wc_products_v8` (or update the workflow to your table name) to store productId and dateModified for deduplication.
5. Review and adjust the schedule (cron) and the `productBatchSize` setting to control how many products each run processes.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Embeddings OpenAI, Recursive Character Text Splitter, Pinecone Vector Store, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
