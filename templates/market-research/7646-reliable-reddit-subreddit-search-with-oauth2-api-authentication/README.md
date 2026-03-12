# 📊 Reliable Reddit subreddit search with OAuth2 API authentication

> ⚡ **358 views** · 📊 [Market Research & Insights](../)

## Description

## Since the **Get Many Subreddit** node often blocks requests because Reddit requires proper authentication headers, this workflow provides a reliable alternative. It uses the **Reddit OAuth2 API** through the HTTP Request node, processes the results, and outputs cleaned subreddit data.

If you are using Get Many subreddit node and you are getting this **error: *n8n You've been blocked by network security.To continue, log in to your Reddit account or use your developer token***

Usecase: This is especially useful if you want to search multiple subreddits programmatically and apply filtering for members, descriptions, and categories.



## How It Works

1. **Trigger Input**

   * The workflow is designed to be called by another workflow using the **Execute Workflow Trigger** node.
   * Input is passed in JSON format with parameters:

     ```json
     {
       "Query": "RealEstateTechnology",
       "min_members": 0,
       "max_members": 20000,
       "limit": 50
     }
     ```

2. **Fetch Subreddits**

   * The **HTTP Request (Reddit OAuth2)** node queries the Reddit API (`/subreddits/search`) with the given keyword and limit.
   * Because it uses OAuth2 credentials, the request is properly authenticated and accepted by Reddit.

3. **Process Results**

   * **Split Out**: Iterates over each subreddit entry (`data.children`).
   * **Edit Fields**: Extracts the following fields for clarity:

     * Subreddit URL
     * Description
     * 18+ flag
     * Member count
   * **Aggregate**: Recombines the processed data into a structured output array.

4. **Output**

   * Returns a cleaned dataset with only the relevant subreddit details.(Saves token if Attached to an AI Agent)



## How to Use

1. Import this workflow into **n8n**.
2. In your main workflow, replace the **Get Many Subreddit** node with an **Execute Workflow** node and select this workflow.
3. Pass in the required query parameters (`Query`, `min_members`, `max_members`, `limit`).
4. Run your main workflow — results will now come through authenticated API requests without being blocked.

---

## Requirements

* **Reddit OAuth2 API Credentials** (must be set up in n8n under *Credentials*).
* Basic understanding of **JSON parameters** in n8n.
* An existing workflow that calls this one using **Execute Workflow**.

---

## Customizing This Workflow

You can adapt this workflow to your specific needs by:

* **Filtering by member range:** Add logic to exclude subreddits outside `min_members` or `max_members`.
* **Expanding extracted fields:** Include additional subreddit properties such as `created_utc`, `lang`, or `active_user_count`.
* **Changing authentication:** Switch to different Reddit OAuth2 credentials if managing multiple Reddit accounts.
* **Integrating downstream apps:** Send the processed subreddit list to Google Sheets, Airtable, or a database for storage.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
