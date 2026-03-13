# 📱 Automate social media content distribution with Google Sheets & Slack

> ⚡ **324 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Okay, here are the "How It Works" and "Setup Steps" for your "Automated Social Media Content Distribution System," presented clearly in Markdown.

---

### How It Works (Workflow Stages) ⚙️

This system transforms manual, repetitive tasks into a smooth, automated content distribution pipeline:

1.  **Content Submission & Trigger:**
    * You add a new row to your designated Google Sheet with all the content details (Title, URL, Short_Description, Image_URL, Hashtags, and boolean flags for which platforms to post to).
    * The **Google Sheets Trigger** node immediately detects this new entry, initiating the workflow.

2.  **Content Preparation:**
    * The **Set** node takes the raw data from your Google Sheet and formats it into a cohesive text string (`social_media_text_core`) that is suitable for posting across different social media platforms.

3.  **Conditional Social Media Posting:**
    * A series of **If** nodes (`Check Facebook Post`, `Check Twitter Post`, `Check LinkedIn Post`) sequentially check your preferences (based on the `Post_to_Facebook`, `Post_to_Twitter`, `Post_to_LinkedIn` columns in your sheet).
    * If a platform is marked `TRUE`, the corresponding social media node (`Facebook`, `Twitter`, `LinkedIn`) is activated to publish your content. If `FALSE`, that platform is skipped, and the workflow moves to the next check.

4.  **Status Update & Notification:**
    * After attempting to post to all selected platforms, the **Google Sheets (Update)** node updates the `Publication_Status` column of your original row to "Published." This prevents re-posting and provides a clear record.
    * Finally, the **Slack (Notification)** node sends an alert to your chosen Slack channel, confirming that the content has been successfully distributed.

### Setup Steps 🛠️ (Build It Yourself!)

Follow these detailed steps to build and implement this workflow in your n8n instance:

1.  **Prepare Your Google Sheet:**
    * Create a new Google Sheet (e.g., named "Social Media Posts").
    * Set up the following **exact** column headers in the first row:
        `Title`, `URL`, `Short_Description`, `Image_URL`, `Hashtags`, `Post_to_Facebook`, `Post_to_Twitter`, `Post_to_LinkedIn`, `Publication_Status`
    * Fill in a test row with some sample data, ensuring `TRUE`/`FALSE` values for the posting flags.

2.  **Gather Your API Keys & Credentials:**
    * **Google Sheets Credential**: You'll need an OAuth2 credential for Google Sheets in n8n to allow read/write access to your sheet.
    * **Facebook Credential**: An OAuth2 credential for Facebook with permissions to post to your selected Page.
    * **Twitter Credential**: A Twitter API credential (API Key, API Secret, Access Token, Access Token Secret) from your Twitter Developer App.
    * **LinkedIn Credential**: An OAuth2 credential for LinkedIn with permissions to share updates to your profile or organization page.
    * **Slack Credential**: A Slack API token (Bot User OAuth Token) for sending messages to your channel.

3.  **Build the n8n Workflow Manually (10 Nodes):**
    * Start a new workflow in n8n.
    * Drag and drop each of the following nodes onto the canvas and connect them as described below:

    1.  **Google Sheets Trigger**
        * **Name:** `Google Sheets Trigger`
        * **Parameters:**
            * **Authentication:** Select your Google Sheets credential.
            * **Spreadsheet ID:** `[Copy the ID from your Google Sheet's URL]`
            * **Sheet Name:** `[Your Sheet Name, e.g., 'Sheet1' or 'Content']`
            * **Watch For:** `Rows`
            * **Events:** `Added`
        * **Connections:** Output to `Set Content Parameters`.

    2.  **Set**
        * **Name:** `Set Content Parameters`
        * **Parameters:**
            * **Values to Set:** Add a new value:
                * **Type:** `String`
                * **Name:** `social_media_text_core`
                * **Value:** `={{ $json.Title }} - {{ $json.Short_Description }}\nRead more: {{ $json.URL }}\n{{ $json.Hashtags }}`
        * **Connections:** Output to `Check Facebook Post`.

    3.  **If**
        * **Name:** `Check Facebook Post`
        * **Parameters:**
            * **Value 1:** `={{ $json.Post_to_Facebook }}`
            * **Operation:** `is true`
        * **Connections:** `True` output to `Post Facebook Message`. `False` output to `Check Twitter Post`.

    4.  **Facebook**
        * **Name:** `Post Facebook Message`
        * **Parameters:**
            * **Authentication:** Select your Facebook credential.
            * **Page ID:** `[YOUR_FACEBOOK_PAGE_ID]`
            * **Message:** `={{ $json.social_media_text_core }}`
            * **Link:** `={{ $json.URL }}`
            * **Picture:** `={{ $json.Image_URL }}`
            * **Options:** `Published` (checked)
        * **Connections:** Output to `Check Twitter Post`.

    5.  **If**
        * **Name:** `Check Twitter Post`
        * **Parameters:**
            * **Value 1:** `={{ $json.Post_to_Twitter }}`
            * **Operation:** `is true`
        * **Connections:** `True` output to `Create Tweet`. `False` output to `Check LinkedIn Post`.

    6.  **Twitter**
        * **Name:** `Create Tweet`
        * **Parameters:**
            * **Authentication:** Select your Twitter credential.
            * **Tweet:** `={{ $json.social_media_text_core }}`
            * **Image URL:** `={{ $json.Image_URL }}`
        * **Connections:** Output to `Check LinkedIn Post`.

    7.  **If**
        * **Name:** `Check LinkedIn Post`
        * **Parameters:**
            * **Value 1:** `={{ $json.Post_to_LinkedIn }}`
            * **Operation:** `is true`
        * **Connections:** `True` output to `Share LinkedIn Update`. `False` output to `Update Publication Status`.

    8.  **LinkedIn**
        * **Name:** `Share LinkedIn Update`
        * **Parameters:**
            * **Authentication:** Select your LinkedIn credential.
            * **Resource:** `Share Update`
            * **Type:** `Organization` or `Personal` (Choose as appropriate)
            * **Organization ID:** `[YOUR_LINKEDIN_ORG_ID]` (If `Organization` type selected)
            * **Content:** `={{ $json.social_media_text_core }}`
            * **Content URL:** `={{ $json.URL }}`
            * **Image URL:** `={{ $json.Image_URL }}`
        * **Connections:** Output to `Update Publication Status`.

    9.  **Google Sheets**
        * **Name:** `Update Publication Status`
        * **Parameters:**
            * **Authentication:** Select your Google Sheets credential.
            * **Spreadsheet ID:** `[YOUR_GOOGLE_SHEET_CONTENT_ID]`
            * **Sheet Name:** `[Your Sheet Name, e.g., 'Sheet1' or 'Content']`
            * **Operation:** `Update Row`
            * **Key Column:** `URL`
            * **Key Value:** `={{ $json.URL }}`
            * **Values:** Add a new value:
                * **Column:** `Publication_Status`
                * **Value:** `Published`
        * **Connections:** Receives connections from both `Share LinkedIn Update` and the `False` branch of `Check LinkedIn Post`.

    10. **Slack**
        * **Name:** `Send Slack Notification`
        * **Parameters:**
            * **Authentication:** Select your Slack credential.
            * **Chat ID:** `[YOUR_SLACK_CHANNEL_ID]`
            * **Text:** `New content "{{ $json.Title }}" successfully published to social media! 🎉 Check: {{ $json.URL }}`
        * **Connections:** Output to `Update Publication Status`.

4.  **Final Steps & Activation:**
    * **Test the Workflow:** Before activating, manually add a new row to your Google Sheet or use n8n's "Execute Workflow" button (if available for triggers). Observe the flow through each node to ensure it behaves as expected and posts to your social media accounts.
    * **Activate Workflow:** Once you are confident it's working correctly, turn the workflow "Active" in the top right corner of your n8n canvas.

## 🔗 Nodes Used

Google Sheets, Slack, Facebook Graph API, X (Formerly Twitter), LinkedIn, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
