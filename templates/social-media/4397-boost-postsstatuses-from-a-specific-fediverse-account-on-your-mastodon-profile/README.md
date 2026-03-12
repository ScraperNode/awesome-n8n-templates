# 📱 Boost posts/statuses from a specific FediVerse account on your Mastodon profile

> ⚡ **214 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Template Overview

This template is designed for individuals and businesses who want to maintain a consistent presence on the Fediverse while also posting on Threads or managing multiple Fediverse profiles. By automating the process of resharing statuses or posts, this workflow saves time and ensures regular engagement across accounts.

---

## Use Case

The template addresses the challenge of managing activity across Fediverse accounts by automatically boosting or resharing posts from a specific account to your own. It is especially helpful for users who want to consolidate engagement without manually reposting content across multiple platforms or profiles.

---

## How It Works

The workflow runs on a scheduled trigger and retrieves recent posts from a specified Fediverse account, such as your Threads.net account. It uses a JavaScript filter to identify posts from the current day and then automatically boosts or reshares them to your selected Mastodon profile.

---

## Preconditions

1. You need a Mastodon account with developer access.
2. Identify a Threads.net or other Fediverse account which you want to boost.
3. Basic familiarity with APIs and setting up credentials in n8n.

---

## Setup Steps

### Step 1: Create a Developer Application on Mastodon

1. Log in to your Mastodon account and navigate to **Preferences &gt; Development &gt; New Application**.
2. Fill out the required information and create your application.
3. Set **Scopes** to atleast `read, profile, write:statuses`.
4. Click Submit.
5. Note down the access token generated for this application.

### Step 2: Get the Account ID

1. Use the following command to retrieve the account ID for the profile you want to boost:

   ```bash
   curl -s "https://mastodon.social/api/v1/accounts/lookup?acct=&lt;ACCOUNTNAME&gt;"
   ```

   Alternatively, paste the URL into a GET node on n8n.
2. From the returned JSON, copy the `"id"` field value (e.g., `{"id":"110564198672505618", ...}`).

### Step 3: Update the "Get Statuses" Node

1. Replace `&lt;ACCOUNTID&gt;` in the URL field with the ID you retrieved in Step 2:

   ```
   https://mastodon.social/api/v1/accounts/&lt;ACCOUNTID&gt;/statuses
   ```

### Step 4: Configure the "Boost Statuses" Node

Authentication type will already be set to **Header Auth**.

1. Grab the access token from Step 1.
2. In the **Credential for Header Auth** field, create a new credential.
3. Click the pencil icon in the top-left corner to name your credential.
4. In the `Name` field, enter `Authorization`.
5. In the `Value` field, enter `Bearer &lt;YOUR_MASTODON_ACCESS_TOKEN&gt;`. (Note: there is a space after "Bearer.")
6. Save the credential, and it should automatically be selected as your Header Auth.

### Step 5: Test the Workflow

1. Run the workflow to ensure everything is set up correctly.
2. Adjust filters or parameters as needed for your specific use case.

---

## Customization Guidance

* Replace `mastodon.social` with your own Mastodon domain if you're using a self-hosted instance.
* Adjust the JavaScript filter logic to meet your specific needs (e.g., filtering by hashtags or keywords).
* For enhanced security, store the access token as an n8n credential. Embedding it directly in the URL is ++not recommended++.

---

### Notes

* This workflow is designed to work with any Mastodon domain.
* Ensure your Mastodon account has appropriate permissions for boosting posts.

By following these steps, you can automate your Fediverse engagement and focus on creating meaningful content while the workflow handles the rest!

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
