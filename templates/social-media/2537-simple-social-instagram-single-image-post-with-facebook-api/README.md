# 📱 Simple social: Instagram single image post with Facebook API

> ⚡ **29,045 views** · 📱 [Social Media & Email Marketing](../)

## Description

# Simple Social: Instagram Single Image Post with Facebook API

## Who is this workflow for?
This workflow is designed for businesses, social media managers, content creators, and developers who need to automate the process of posting single images to Instagram using the Facebook API. It is ideal for anyone looking to streamline their social media posting process, saving time and ensuring consistent content delivery.

## Use Case / Problem Solved
Manually posting images and captions on Instagram can be time-consuming, especially for businesses and content creators managing multiple accounts. This workflow automates the process from image preparation to publishing, reducing manual effort and increasing efficiency.

## What this workflow does
1. **Trigger Initialization**: The workflow starts with a manual trigger that can be adapted to other triggers (e.g., HTTP webhook or schedule).
2. **Set Parameters**: The workflow includes a node that sets essential parameters, such as the image URL, Instagram business account ID, and caption.
3. **Prepare Instagram Media**: A node prepares the media for upload using the Facebook API, sending the image and caption for pre-publication processing.
4. **Check Media Upload Status**: The workflow verifies if the media preparation is complete.
5. **Conditional Check**: If the media preparation is successful, the workflow proceeds to publish; otherwise, it triggers an error-handling path.
6. **Publish Media**: The media is published on Instagram if the conditions are met.
7. **Post-Publish Check**: The workflow checks the status after publication.
8. **Conditional Check for Publication**: If the publication status is "PUBLISHED," it triggers a success path; otherwise, it triggers a failure handling.
9. **Email Notifications**: The workflow sends email notifications to indicate successful or unsuccessful outcomes.

## Setup 

Here is a quick video in italian language with sub eng(https://youtu.be/obWJFJvg_6g)

1. **Add API Credentials**: Ensure that valid Facebook API credentials are added and configured for use.
2. **Permissions Required**: Ensure your app has the necessary permissions (`ads_management`, `business_management`, `instagram_basic`, `instagram_content_publish`, `pages_read_engagement`). App review may be required for external user access.
3. **Node Configuration**: Customize the `Set Instagram Parameters` node to specify the image URL, caption, and Instagram business account ID.
4. **Trigger Adaptation**: Adapt the initial trigger if needed to fit your workflow's requirements (e.g., schedule, webhook).

## How to customize this workflow
- **Change the Image URL and Caption**: Modify the `Set Instagram Parameters` node to change the image and caption.
- **Trigger Customization**: Replace the manual trigger with other triggers like a webhook to automate posting based on external events.
- **Notifications**: Adjust the email nodes to send customized messages or trigger other workflows based on the outcome.

## Limitations
- **Image Format**: Only JPEG images are supported. Extended JPEG formats such as MPO and JPS are not compatible.
- **Unsupported Tags**: Shopping tags, branded content tags, and filters are not supported.
- **Instagram TV**: Publishing to Instagram TV is not supported.
- **Rate Limit**: Instagram accounts are limited to 50 API-published posts within a rolling 24-hour period. Carousels count as a single post. Check usage with `GET /{ig-user-id}/content_publishing_limit`.

### Example Usage
Imagine managing a business account that needs consistent posts. You can schedule this workflow or trigger it manually to automatically post images with captions at the right time, ensuring that your audience stays engaged without manual posting efforts.

## 🔗 Nodes Used

Send Email, Facebook Graph API

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
