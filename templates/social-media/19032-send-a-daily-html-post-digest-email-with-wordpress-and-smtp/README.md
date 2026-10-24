# 📱 Send a daily HTML post digest email with WordPress and SMTP

> ⚡ **0 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick Overview
This workflow runs daily at 8:00 AM, pulls recent posts from a WordPress site via the WordPress REST API, builds a mobile-friendly HTML digest with a plain-text fallback, and sends it as an email using SMTP.

## How it works
1. Runs every day at 8:00 AM on a schedule.
2. Loads configuration values such as the WordPress site URL, look-back window, post limit, and recipient email address.
3. Requests the most recent WordPress posts published after the look-back timestamp from `/wp-json/wp/v2/posts`, including embedded featured media.
4. Builds an HTML email digest (plus a plain-text version) containing each post’s title, date, excerpt, featured image, and link.
5. Checks whether any posts were returned and exits without sending an email when there are no new posts.
6. Sends the digest email via SMTP with a subject line that includes the site URL and the number of posts.

## Setup
1. Set the `siteUrl`, `daysBack`, `postLimit`, and recipient `toEmail` values in the configuration step.
2. Configure SMTP/email sending credentials and set the `fromEmail` address in the email step.
3. Ensure your WordPress site’s REST API is reachable (and adjust the schedule time if 8:00 AM is not desired).

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
