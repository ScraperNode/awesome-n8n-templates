# 🔬 Google Maps reviews to Google Sheets sync using SerpApi

> ⚡ **658 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Sync Google Maps Reviews to Google Sheets for Any Google Maps Query

### How it works

This workflow accepts any query you might run on actual Google Maps to search for places. The search happens through [SerpApi's Google Maps API](https://serpapi.com/google-maps-api).

Once the workflow receives place results from Google Maps, it loops through each place fetching reviews using [SerpApi's Google Maps Reviews API](https://serpapi.com/google-maps-api). By default, the workflow will be limited to fetch up to 50 reviews per place. This can be customized in the 'Set Review Limit' node}.

The first page of reviews for a place will only return 8 reviews. All subsequent pages will return up to 20 reviews.

The fetched reviews are sent to a connected Google Sheet.

### How to use

1. Create a free SerpApi account here: https://serpapi.com/
1. Add SerpApi credentials to n8n. Your SerpApi API key is here: https://serpapi.com/manage-api-key
1. Connect your Google Sheets accounts to n8n. Help available here: https://n8n.io/integrations/google-sheets/
1. Create a Google Sheet with these column headers: `name`, `iso_date`, `rating`, `snippet`
1. Connect your Google Sheet in the 'Append Reviews' Google Sheet node
1. Update the Search Query in the 'Search Google Maps' node to set your own query
1. (Optional) Update the review limit from the default 50 in the 'Set Review Limit' node. Set it to a very high number (e.g. 50000) to get all possible reviews.
1. Hit 'Test Workflow' to manually trigger the workflow.

### Limitations

Can only retrieve the top 20 results from Google Maps. It won't paginate to get more results. The workflow could be extended to support Google Maps Pagination.

### Warning

Each request to SerpApi consumes 1 search credit. Be mindful of how many search credits your account has before requesting more reviews than your account supports.

As an example, if a Google Maps query returns 20 results and you fetch the default limit of 50 reviews per page, this will use up to 61 SerpApi search credits.

### Documentation

[Google Maps API](https://serpapi.com/google-maps-api)
[Google Maps Reviews API](https://serpapi.com/google-maps-reviews-api)
[SerpApi n8n Node Intro Guide](https://serpapi.com/blog/boost-your-n8n-workflows-with-serpapis-verified-node/)

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
