# 📱 Auto-publish new WordPress posts to Pinterest with PinBridge

> ⚡ **214 views** · 📱 [Social Media & Email Marketing](../)

## Description

This workflow automatically turns WordPress posts into Pinterest publish jobs using PinBridge as the publishing layer.

It is designed for bloggers, publishers, affiliate sites, and content teams that already publish to WordPress and want a repeatable way to distribute that content to Pinterest without manually copying titles, descriptions, links, and images every time a post goes live.

The workflow starts by querying PinBridge for existing Pins, aggregates their titles, then fetches published WordPress posts from the WordPress REST API. From there, it filters out posts that do not have featured media and skips posts whose titles already exist in PinBridge, which gives the workflow a simple duplicate-protection layer. For posts that pass that filter, the workflow builds a publish-ready payload, validates the required fields, downloads the featured image, uploads that image through PinBridge, submits the Pinterest publish job, and returns a structured success or invalid result.

The goal is not just to publish. The goal is to publish in a way that is operationally clean, easy to review, and safer to run repeatedly.

---

## What problem this workflow solves

A common WordPress-to-Pinterest workflow usually looks like this:

- a post is published in WordPress
- the title already exists
- the link already exists
- the featured image already exists
- but Pinterest publishing still happens manually

That manual step creates several problems:

- publishing is inconsistent
- some posts are missed completely
- metadata gets copied differently every time
- duplicate publishing becomes easy when you rerun the process
- scaling beyond a handful of posts becomes annoying

This workflow solves that by turning WordPress into the content source and PinBridge into the publishing layer, with n8n sitting in the middle as the orchestrator.

When you run the workflow, it does the following:

1. Lists existing Pins from PinBridge
2. Aggregates their titles into a reference list
3. Fetches published posts from WordPress
4. Skips posts that do not have featured media
5. Skips posts whose titles already exist in PinBridge
6. Builds a Pinterest-ready payload from the post
7. Validates that the required fields are present
8. Downloads the featured image
9. Uploads the image to PinBridge
10. Submits the Pin publish job through PinBridge
11. Returns a success or invalid result

That gives you a practical operational loop with a built-in first layer of duplicate protection.

---

## Why PinBridge is used here

This workflow is intentionally built around PinBridge instead of direct Pinterest API plumbing.

PinBridge is the publishing layer in the middle. In this workflow:

- **WordPress** is the content source
- **n8n** is the orchestration layer
- **PinBridge** is the publishing layer that receives the image asset and submits the Pinterest publish job

That separation keeps the workflow focused on the things n8n should be doing:

- reading content from the CMS
- filtering and validating data
- checking whether a post appears to have already been published
- downloading media
- passing a clean payload into the publishing layer
- handling the returned job submission result

instead of forcing the workflow to become a full Pinterest delivery implementation.

---

## What this workflow does differently from the simpler version

This updated version adds an important protection step before WordPress posts are processed:

### Existing Pin title check

The workflow starts with the **List pins** node, which loads existing Pins from PinBridge.

Then the **Published Titles** aggregate node collects those titles into a single list.

Later, inside **Skip Posts Without Featured Media**, the workflow checks two things at once:

- the WordPress post has featured media
- the cleaned WordPress post title is **not** already present in the aggregated PinBridge title list

That means this workflow is no longer just “publish latest posts.” It is now closer to:

**publish posts that have images and do not already appear to be published to Pinterest**

This is still lightweight duplicate protection, not a perfect deduplication system, but it is a meaningful improvement for a community template.

---

## What you need before you begin

You need five things before importing and running this workflow:

1. An **n8n instance**
2. A **WordPress site** with REST API access
3. A **WordPress credential** in n8n
4. A **PinBridge account**
5. A connected **Pinterest account** and the target **board ID** you want to publish to

---

## Step 1: Create your PinBridge account

Create your PinBridge account first.

Go to [pinbridge.io](https://www.pinbridge.io/get-started/?utm_source=n8n&utm_medium=workflow_template&utm_campaign=n8n_templates&utm_id=Auto_publish_new_wordPress_posts_to_pinterest_with_pinBridge&utm_source_platform=n8n) and register. A free account is enough to start testing the workflow.

You will need:

- a **PinBridge API key**
- the connected **Pinterest account** you want to publish to

To connect the Pinterest account inside PinBridge, go to:

**App &gt; Accounts &gt; Connect &gt; Give Access**

Make sure the correct Pinterest account is connected before you continue.

---

## Step 2: Create a PinBridge API key

Inside PinBridge, create an API key that will be used by the n8n workflow.

To create a new key, go to:

**App &gt; API Keys &gt; Create**

When creating the key:

- give it a clear name such as `n8n-wordpress-publish`
- store it securely
- do not hardcode it into random HTTP nodes
- use the PinBridge n8n credential field instead

After the key is created, go into n8n and create the **PinBridge credential** used by the PinBridge nodes in this workflow.

---

## Step 2.5: Install the PinBridge n8n community node

Before this workflow can run, your n8n instance must have the PinBridge community node installed.

This workflow uses the following PinBridge nodes:

- **List pins**
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

### Install in self-hosted n8n from the command line

If you manage your own n8n instance, install the package in your n8n environment:

```bash
npm install n8n-nodes-pinbridge
```

Then restart your n8n instance.

If you are running n8n in Docker, the exact installation method depends on how your container is built. In that case, add the package to your custom image or persistent community-node setup, then restart the container.

### Verify the installation

After the node is installed, search for `PinBridge` when adding a new node in n8n.

You should see the PinBridge node available. If you do not, the installation is not complete yet, or your n8n instance has not been restarted properly.

---

## Step 3: Prepare your WordPress site

This workflow reads posts from the standard WordPress REST API using this pattern:

`/wp-json/wp/v2/posts?status=publish&_embed=wp:featuredmedia`

That means your WordPress site must allow your n8n credential to read:

- published posts
- embedded featured media

At minimum, the workflow needs access to:

- post title
- rendered excerpt
- permalink
- featured image information

If your WordPress site blocks REST API access, uses a custom security layer, or has media access restrictions, make sure your n8n credential can successfully read posts before continuing.

---

## Step 4: Import the workflow into n8n

Import the workflow JSON into your n8n instance.

After import, open the workflow and go through the credentialed nodes.

You will need to connect:

- the **WordPress credential**
- the **PinBridge credential**

Do not assume imported placeholder credential IDs will work automatically. They will not.

---

## Step 5: Configure the WordPress source URL

Open the **Get Latest WordPress Posts** node and update the URL if needed.

The current workflow uses a direct HTTP request to:

`https://www.nomadmouse.com/wp-json/wp/v2/posts?status=publish&_embed=wp:featuredmedia`

If you are using your own site, replace that domain with your own WordPress domain.

This node is currently set up to fetch all published posts with embedded featured media data.

---

## Step 6: Configure the target Pinterest account and board

Open the **Publish to Pinterest** node.

You must configure:

- the correct `accountId`
- the correct `boardId`

This workflow publishes to a **single fixed board**.

That means every qualifying WordPress post will be submitted to the same Pinterest board unless you later add routing logic.

The publish node also appends UTM parameters to the post link automatically:

`?utm_source=pinterest&utm_medium=social`

That is useful if you want cleaner attribution in your analytics.

---

## Workflow logic, node by node

This section explains exactly how the current workflow behaves.

### 1. Manual Trigger
The workflow starts manually.

This is the right choice for a community template because it makes first-run testing easier and keeps the setup predictable.

You can later replace it with:

- a schedule trigger
- a webhook trigger
- a cron-based polling flow

### 2. List pins
This PinBridge node loads the existing Pins that are already known to PinBridge.

This is the first important difference from the earlier version of the template.

The workflow now begins by checking what has already been published.

### 3. Published Titles
This aggregate node collects the titles returned by **List pins** into a single list.

That list is later used to decide whether a WordPress post should be skipped.

### 4. Get Latest WordPress Posts
This node fetches published WordPress posts from the WordPress REST API with embedded featured media.

This is the source of content for the rest of the workflow.

### 5. Skip Posts Without Featured Media
Despite the name, this node now does two checks:

- it verifies that the WordPress post has featured media with a usable source URL
- it verifies that the cleaned WordPress post title is **not already present** in the PinBridge title list

If either of those checks fails, the post is not processed further.

This means the workflow now skips:

- posts without featured images
- posts that appear to already be published based on title matching

### 6. Build Pin Payload from Post
This node maps WordPress fields into a Pinterest-ready payload.

It builds:

- `post_id`
- `title`
- `description`
- `link_url`
- `image_url`
- `alt_text`

A practical note: the actual image used for download later comes from the embedded media path in the **Download Featured Image** node, not from the `image_url` field created here. In this workflow, `image_url` mainly exists to support validation and payload completeness.

### 7. Validate Required Fields
This node verifies that the workflow has the minimum data needed to continue.

The required fields are:

- `title`
- `description`
- `link_url`
- `image_url`

If any are missing, the workflow goes to the invalid branch instead of attempting the publish process.

### 8. Download Featured Image
This node downloads the full-size WordPress featured image as a file.

That file is what gets sent into PinBridge as the asset upload input.

### 9. Upload Image to PinBridge
This sends the downloaded featured image into PinBridge.

This is the handoff point between WordPress media and the Pinterest publishing layer.

### 10. Publish to Pinterest
This submits the Pin publish job using PinBridge.

The node uses:

- the fixed `accountId`
- the fixed `boardId`
- the post title
- the excerpt-based description
- the canonical link with appended UTM parameters
- the alt text
- the dominant color field if present

At this stage, the workflow is recording successful job submission, not final downstream delivery confirmation.

That distinction matters.

### 11. Build Success Result
If the publish request succeeds, the workflow builds a clean result object containing:

- `post_id`
- `title`
- `link_url`
- `job_id`
- `status = submitted`
- `submitted_at`
- `error_message = ''`

This gives you a structured output you can later log, store, or notify from.

### 12. Build Invalid Result
If required fields are missing, the workflow creates an invalid result object instead of attempting submission.

That protects the publishing path from clearly incomplete content.

---

## Why this workflow still stops at job submission

This is deliberate.

This template is focused on the WordPress-to-PinBridge submission phase, not the full async lifecycle.

That keeps the first version understandable and easy to run.

A separate workflow should handle:

- webhook verification
- final publish confirmation
- publish failure notifications
- retries
- post-submission auditing

That separation is cleaner and more realistic operationally.

---

## Expected first-run behavior

When you run the workflow for the first time:

- existing PinBridge titles are loaded first
- WordPress posts with no featured image are skipped
- WordPress posts whose titles already exist in PinBridge are skipped
- valid new posts are converted into publish jobs
- successful submissions return a PinBridge `job_id`
- invalid posts return an invalid result object

This means not every WordPress post fetched from the API will go through the publish path.

That is intentional.

---

## How to test safely

Do not start by pointing this at a very large live content set and assuming the filter is perfect.

Start with a small controlled test:

- one post with a featured image and a new title
- one post with no featured image
- one post whose title already matches an existing Pin title

Then run the workflow manually.

A good outcome looks like this:

- the no-image post is skipped
- the already-published-title post is skipped
- the new post is submitted successfully and returns a `job_id`

That proves the key branches are working.

---

## Common setup mistakes

### The WordPress domain was not replaced
If you import this template and leave the original WordPress URL in place, you will be reading the wrong site.

### The post title match logic is too strict or too loose
This workflow uses title matching as a duplicate-protection shortcut.

That is useful, but not perfect.

If two unrelated posts share the same title, the newer one may be skipped.
If the title changes slightly, the workflow may treat it as new.

This is acceptable for a starter template, but you should know the limitation.

### The board ID is wrong
A board name is not enough. Use the real board ID expected by PinBridge.

### The wrong PinBridge account ID is used
If the account context is wrong, the publish node may fail even though the rest of the workflow looks fine.

### The post excerpt is empty
This workflow builds the description from the rendered WordPress excerpt. If your site does not use excerpts consistently, you may want to add a fallback from post content later.

### The featured image path in the payload differs from the actual download source
The `Build Pin Payload from Post` node currently stores `image_url` from `_links`, while the actual download node uses `_embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url`.

That works in the current flow because the download node uses the embedded media URL directly, but it is something you should be aware of if you refactor later.

---

## Recommended extensions after initial success

Once the base workflow is working, the best next extensions are:

### Add schedule-based polling
Run the workflow every 15 minutes, every hour, or on your editorial cadence.

### Add stronger duplicate protection
Instead of title matching only, track:

- WordPress post ID
- canonical URL
- stored publish state in Google Sheets, Airtable, or a database

### Add board routing
Map WordPress categories or tags to different Pinterest boards.

### Add final status handling
Use a separate workflow to receive PinBridge webhook callbacks, verify signatures, and record the final publish state.

### Add notifications
Send a Slack or Telegram message after each successful submission or failure.

### Add excerpt fallback logic
If a post has no excerpt, derive a safe short description from the rendered content.

---

## Minimum data contract for successful runs

A post is publishable only if all of the following are true:

- the post exists
- the post has a title
- the post has a usable excerpt-based description
- the post has a permalink
- the post has featured media
- the featured image can be downloaded
- the post title does not already appear in the existing PinBridge title list
- the PinBridge credential is valid
- the PinBridge account ID is correct
- the target board ID is correct

If any of those are false, the post should not be treated as publish-ready.

---

## Summary

This workflow is a practical WordPress-to-Pinterest starter template with a built-in lightweight duplicate check.

It uses:

- **WordPress** as the content source
- **n8n** as the orchestration layer
- **PinBridge** as the Pinterest publishing layer

Compared to the earlier version, this one adds an important operational improvement: it checks existing PinBridge titles before attempting to publish new WordPress posts.

That makes it more useful as a real starter workflow, not just a happy-path demo.

If your WordPress site is reachable, your posts have featured images and excerpts, your PinBridge credential is configured, and your Pinterest account and board are correct, you should be able to run this workflow successfully from start to finish.

---

## Quick setup checklist

Before running the workflow, confirm all of the following:

- PinBridge account created
- PinBridge API key created
- PinBridge credential added in n8n
- PinBridge community node installed
- WordPress credential added in n8n
- the WordPress domain in the HTTP request node is correct
- correct Pinterest account ID entered in the publish node
- correct target board ID entered in the publish node
- WordPress REST API is reachable
- the test post has:
  - title
  - permalink
  - featured image
  - usable excerpt
- existing PinBridge titles can be listed successfully

If all of that is true, the workflow is ready to run.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
