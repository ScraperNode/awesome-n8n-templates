# 📱 Bulk publish Pinterest Pins from Google Sheets with PinBridge

> ⚡ **540 views** · 📱 [Social Media & Email Marketing](../)

## Description

This workflow lets you publish Pinterest Pins in bulk from a Google Sheet using PinBridge as the publishing layer.

It is designed for builders who want a practical, repeatable workflow instead of manually creating Pins one by one. The flow reads rows from Google Sheets, skips rows that are already complete, validates the required fields, downloads each image, uploads that image through PinBridge, submits the Pinterest publish job, and writes the result back into the same sheet.

The goal is not just to publish. The goal is to publish in a way that is operationally clean, easy to review, and safe to run repeatedly.

---

## What problem this workflow solves

A lot of Pinterest automation starts simple and then becomes messy very quickly:

- content lives in a spreadsheet
- images live in public URLs
- someone has to manually copy title, description, destination URL, and image
- nobody knows which rows were already sent
- retries become dangerous because duplicate publishing becomes easy
- batch operations become hard to track

This workflow solves that by turning Google Sheets into a lightweight publishing queue.

You prepare rows in a sheet, run the workflow, and the workflow does the following:

1. Reads rows from the `Pins` sheet
2. Ignores rows that are already marked as published
3. Verifies that the required values exist
4. Downloads the image from the row
5. Uploads the image to PinBridge
6. Submits the Pin publish job through PinBridge
7. Writes the result back to the sheet

That gives you a simple but effective operational loop.

---

## Why PinBridge is used here

This workflow is intentionally built around PinBridge rather than direct Pinterest API glue.

PinBridge is the publishing layer in the middle. In this workflow, PinBridge is responsible for the Pinterest-facing publish operation while n8n remains the orchestration layer.

That separation is useful because it keeps the workflow focused on:

- reading inputs
- validating data
- sending publish jobs
- tracking results

instead of forcing the workflow to also become a Pinterest delivery engine.

In other words:

- **Google Sheets** is your input queue
- **n8n** is your orchestration engine
- **PinBridge** is your Pinterest publishing layer

That is the architecture this template is meant to demonstrate.

---

## What you need before you begin

You need four things before importing and running this workflow:

1. An **n8n instance**
2. A **Google account** with access to Google Sheets
3. A **PinBridge account**
4. A **Pinterest account and board IDs** already connected or available through your PinBridge setup

You also need a Google Sheet that matches the expected format described below.

---

## Step 1: Create your PinBridge account

Create your PinBridge account first.

Head to [pinbridge.io](https://www.pinbridge.io/get-started/?utm_source=n8n&utm_medium=workflow_template&utm_campaign=n8n_templates&utm_id=bulk-publish-pinterest-pins-from-google-sheets-with-pinbridge&utm_source_platform=n8n) and click register at the top right corner. You can start with just a free account and upgrade later if you need more volume.

You will need two things from PinBridge for this workflow:

- a **PinBridge API key**
- the connected **Pinterest account** you want to publish to. Head to App &gt; Accounts &gt; Connect &gt; Give Access.

---

## Step 2: Create a PinBridge API key

Inside PinBridge, create an API key that will be used by the n8n workflow.

To create a new key, go to **App &gt; API Keys &gt; Create**. Make sure that you:

- give it a clear name such as `n8n-bulk-publish`
- store it somewhere secure
- do not hardcode it into random HTTP nodes
- use the PinBridge n8n credential field so it stays reusable and secure

After the key is created, go into n8n and create the **PinBridge credential** used by the PinBridge nodes in this workflow.

---

## Step 2.5: Install the PinBridge n8n community node

Before this workflow can run, your n8n instance must have the PinBridge community node installed.

This workflow uses the following PinBridge nodes:

- **Upload Image to PinBridge**
- **Publish to Pinterest**

If the PinBridge node is not installed, these nodes will either be missing or show as unknown after import.

### Install from the n8n UI

If your n8n instance allows community nodes:

1. Open **Settings**
2. Go to **Community Nodes**
3. Click **Install**
4. Enter the PinBridge package name:
   `n8n-nodes-pinbridge`
5. Confirm the installation
6. Restart n8n if your environment requires it

After installation, re-open the workflow and confirm that the PinBridge nodes load correctly.

#### Important note
Some hosted or restricted n8n environments do not allow custom community nodes. If that applies to your environment, you will need either:
- an n8n setup that supports community nodes
- or a self-hosted n8n instance where you can install n8n-nodes-pinbridge
---

## Step 3: Prepare your Google Sheet

Create a Google Sheet with a tab named:

`Pins`

The workflow expects one row per Pin.

Use this exact header structure:

| row_id | title | description | link_url | image_url | board_id | alt_text | dominant_color | status | job_id | published_at | error_message |
|---|---|---|---|---|---|---|---|---|---|---|---|

### Column meanings

#### `row_id`
A unique identifier for the row.

Use something stable and simple, for example:

- `pin-001`
- `spring-cake-01`
- `2026-03-15-001`

This value is important because the workflow uses it to update the correct row later.

#### `title`
The Pinterest Pin title.

#### `description`
The Pinterest Pin description.

#### `link_url`
The destination URL users should visit when they click the Pin.

This should be a full public URL such as:

`https://example.com/post-name`

#### `image_url`
A public image URL that n8n can download.

This must point directly to a reachable image file. If the image URL requires login, expires quickly, or redirects badly, the workflow may fail.

#### `board_id`
The Pinterest board ID to publish to.

This must be the board ID expected by PinBridge, not just a board name.

#### `alt_text`
Optional, but recommended.

This should describe the image in plain language for accessibility.

#### `dominant_color`
Optional.

If empty, the workflow falls back to `#ffffff`.

If you provide a value, use a hex color such as:

- `#ffffff`
- `#f4d03f`
- `#d35400`

#### `status`
Used by the workflow to track state.

Leave it empty before first run.

The workflow writes values such as:

- `submitted`
- `invalid`

You may later extend the system to include:

- `published`
- `failed`

#### `job_id`
Filled by the workflow after a successful PinBridge job submission.

Leave it empty initially.

#### `published_at`
Filled by the workflow when the publish job is submitted.

Leave it empty initially.

#### `error_message`
Filled by the workflow when validation fails or when you later add failure branches.

Leave it empty initially.

---

## Example Google Sheet rows

Here is a safe example layout:

| row_id | title | description | link_url | image_url | board_id | alt_text | dominant_color | status | job_id | published_at | error_message |
|---|---|---|---|---|---|---|---|---|---|---|---|
| pin-001 | Easy Lemon Pasta Dinner | Bright lemon pasta with garlic and parmesan. Click through for the full recipe. | https://example.com/lemon-pasta | https://example.com/images/lemon-pasta.jpg | 1234567890 | Bowl of lemon pasta with parmesan and herbs | #f7dc6f |  |  |  |  |
| pin-002 | Small Kitchen Pantry Shelves | Space-saving pantry shelf ideas for small kitchens. | https://example.com/pantry-shelves | https://example.com/images/pantry-shelves.jpg | 1234567890 | Organized pantry shelves in a small kitchen | #d5dbdb |  |  |  |  |

---

## Step 4: Import the workflow into n8n

Import the workflow JSON into your n8n instance.

After import, open the workflow and go through each credentialed node.

You will need to connect:

- the Google Sheets credential
- the PinBridge credential

Do not assume imported placeholder IDs will work. They will not.

---

## Step 5: Configure the Google Sheets node

Open the **Read Sheet Rows** node and configure:

- the Google Sheets credential
- the target spreadsheet ID
- the sheet name: `Pins`

Make sure the Google account connected to n8n has permission to read and update that sheet.

Then open the two update nodes:

- **Update Sheet Success**
- **Update Sheet Invalid Row**

Point them to the same spreadsheet and the same `Pins` tab.

These update nodes are designed to write values back into the same row using `row_id` as the matching key.

That means your `row_id` values must be unique.

If you duplicate `row_id` values, updates become unreliable.

---

## Step 6: Configure the PinBridge nodes

There are two PinBridge nodes in this workflow:

1. **Upload Image to PinBridge**
2. **Publish to Pinterest**

### Upload Image to PinBridge
This node uploads the binary image that was downloaded from the `image_url` column.

No extra row mapping is needed here beyond having a valid downloaded image.

### Publish to Pinterest
This node submits the Pin publish job.

You must configure:

- the PinBridge credential
- the correct `accountId`

The following fields are taken from the sheet row:

- `boardId`
- `title`
- `description`
- `linkUrl`
- `altText`
- `dominantColor`

Before running the workflow, replace the placeholder account ID with your real PinBridge Pinterest account ID.

---

## How to find the correct board ID

The workflow expects a real board ID, not a board name.

There are several ways to get it depending on how you operate PinBridge:

- from a PinBridge board listing flow
- from your app or dashboard if it exposes board IDs
- from a separate helper workflow that lists boards for your connected Pinterest account

Do not type human board names into the `board_id` column unless your system explicitly uses board names as IDs, which is usually not the case.

A wrong board ID will cause the publish step to fail.

---

## Workflow logic, node by node

This section explains exactly why the workflow is built the way it is.

### 1. Manual Trigger
This keeps the first version simple.

You decide when to run the batch. That is useful during setup, testing, and controlled publishing.

This can later be replaced with:
- schedule trigger
- webhook trigger
- form trigger

But manual trigger is the right default for a community template.

### 2. Read Sheet Rows
This reads all rows from the `Pins` tab.

The sheet acts as the batch source.

### 3. Skip Published Rows
This prevents rows already marked as `published` from being processed again.

Even if your first version only writes `submitted`, this node is still useful because it gives you a clear place to define re-run behavior later.

This is one of the most important operational protections in the workflow.

### 4. Validate Required Fields
This checks that the row has the minimum required information before any external work is done.

The required fields are:

- `title`
- `description`
- `link_url`
- `image_url`
- `board_id`

This matters because you do not want to waste requests on rows that are obviously incomplete.

### 5. Download Image
This downloads the image from `image_url`.

The workflow assumes this URL is directly reachable from the n8n runtime.

If the image cannot be fetched, the flow will stop at this step unless you add explicit failure handling.

### 6. Upload Image to PinBridge
This sends the binary image into PinBridge.

This step matters because the Pinterest publish job should reference a clean asset path handled by the PinBridge side of the system.

### 7. Publish to Pinterest
This submits the publish job using PinBridge.

At this point the workflow is not pretending the job is fully completed end-to-end on Pinterest. It is recording that the publish job was successfully submitted.

That distinction matters.

A clean job submission and a final publish confirmation are not the same thing.

This template intentionally focuses on submission.

### 8. Build Success Result
If the PinBridge publish request succeeds, the workflow creates a result object with:

- `status = submitted`
- `job_id`
- `published_at`
- `error_message = ''`

This object is then written back to the sheet.

### 9. Update Sheet Success
This writes the successful submission result back to the original row.

That gives you traceability immediately.

### 10. Build Invalid Result
If required fields are missing, this branch marks the row as invalid and explains why.

That makes the sheet self-correcting: you can scan invalid rows and fix them directly.

### 11. Update Sheet Invalid Row
This writes the invalid result back into the sheet.

That closes the loop for bad inputs instead of silently dropping them.

---

## Why the workflow stops at job submission

This is deliberate.

A lot of people try to put the entire world into one n8n template:
- submit publish
- wait for final outcome
- verify callbacks
- alert on failures
- retry jobs
- write analytics
- update multiple systems

That makes the template harder to understand and harder to run successfully the first time.

This workflow is intentionally scoped to:

- read rows
- validate inputs
- submit PinBridge publish jobs
- record the submission result

That makes it easier to import, understand, and run.

A separate workflow should handle:
- webhook verification
- final delivery confirmation
- failure notifications
- retry strategy

That separation is cleaner and easier to operate.

---

## Expected first-run behavior

When you run the workflow for the first time:

- rows with missing required fields should be marked `invalid`
- valid rows should get:
  - `status = submitted`
  - a `job_id`
  - a timestamp in `published_at`

If a row was already manually marked `published`, it should be skipped.

---

## How to test safely

Do not start with 100 rows.

Start with 2 or 3 rows only:

- one valid row
- one invalid row
- one extra valid row if needed

That lets you confirm all branches work as expected.

A good first test looks like this:

- row 1: complete and valid
- row 2: missing `board_id`
- row 3: complete and valid

Then run the workflow manually and inspect the sheet afterwards.

You should see:

- row 2 marked invalid
- row 1 and row 3 marked submitted with job IDs

---

## Common setup mistakes

### The image URL is not public
If the image requires cookies, auth, a signed session, or expired CDN tokens, the download node will fail.

Use stable public URLs.

### The board ID is wrong
A human-readable board name is not enough. Use the real board ID.

### The Google Sheet update cannot find the row
This usually means:
- `row_id` is missing
- `row_id` is duplicated
- update node matching columns are not configured correctly

### The wrong PinBridge account ID is used
If the account ID does not match the expected Pinterest account context, the publish node can fail even if everything else looks correct.

### The sheet name is not `Pins`
If you rename the tab, update all Google Sheets nodes accordingly.

---

## Recommended operational rules

To keep this workflow reliable, follow these rules:

### Use one unique `row_id` per row
Never reuse IDs.

### Keep `status` workflow-owned
Let the workflow write status values. Do not overload the field with random notes.

### Keep rows immutable after submission
Once a row is submitted, do not casually change title, description, or image in place. Create a new row if the Pin is materially different.

### Validate image URLs before batch runs
Especially if your image links come from a CMS or CDN.

### Run small batches first
Do not treat the first live run like a stress test.

---

## Suggested extensions after initial success

Once this base workflow is working, the best next extensions are:

### Add a webhook completion workflow
Use a separate workflow to:
- receive PinBridge webhook callbacks
- verify signatures
- update `status` from `submitted` to `published` or `failed`
- write final Pinterest IDs
- send Slack or Telegram alerts if needed

### Add failure handling
Wrap the download, upload, and publish nodes with explicit failure branches so bad rows are marked `failed` instead of stopping the run.

### Add board lookup helper flow
Create a small helper workflow that lists available boards and writes them to a reference sheet.

### Add scheduling
Replace manual trigger with a cron or scheduled trigger once the flow is stable.

### Add pre-validation for URL format
You can validate that:
- `link_url` starts with `http`
- `image_url` starts with `http`
- `dominant_color` looks like a hex code

---

## Minimum data contract for successful runs

A row is publishable only if all of the following are true:

- `row_id` exists
- `title` exists
- `description` exists
- `link_url` exists
- `image_url` exists
- `board_id` exists
- the image URL can be downloaded
- the PinBridge credential is valid
- the PinBridge account ID is correct

If any of those are false, the row should not be considered publish-ready.

---

## Summary

This workflow is a practical bulk-publishing starter template.

It uses:

- **Google Sheets** as the publish queue
- **n8n** as the orchestration layer
- **PinBridge** as the Pinterest publishing layer

That makes it useful as both a real operational workflow and a clear demonstration of where PinBridge fits inside an automation stack.

If you configure the Google Sheet correctly, connect your Google Sheets and PinBridge credentials, set the right Pinterest account ID, and provide valid public image URLs and board IDs, you should be able to run this workflow from start to finish successfully with no additional context.

---

## Quick setup checklist

Before running the workflow, confirm all of the following:

- PinBridge account created
- PinBridge API key created
- PinBridge credential added in n8n
- correct Pinterest account ID entered in the publish node
- Google Sheets credential added in n8n
- Google Sheet exists
- tab name is `Pins`
- required columns are present
- every row has a unique `row_id`
- valid rows contain:
  - `title`
  - `description`
  - `link_url`
  - `image_url`
  - `board_id`
- image URLs are publicly accessible

If all of that is true, the workflow is ready to run.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
