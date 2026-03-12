# 📱 Upload videos to Facebook Pages and Groups with Facebook Graph API

> ⚡ **118 views** · 📱 [Social Media & Email Marketing](../)

## Description

Purpose:
Uploads videos to Facebook Pages or Groups automatically, either via a Form Trigger or triggered by another workflow.

Features:
- Accepts video file, message, target_id (Page/Group ID), and access_token.
- Prepares metadata and handles chunked uploads for large videos.
- Initiates, transfers, and completes upload using Facebook Graph API.
- Modular and reusable for integration into larger automation pipelines.

Who it’s for:
Content creators, social media managers, agencies, or SaaS builders wanting automated Facebook video posting.

Setup:
1. Import workflow into n8n (cloud or self-hosted).
2. Activate workflow.
3. Fill in target_id and Page Access Token in the form or pass via sub-workflow.
4. Upload video and message.
5. Video is posted automatically.

Requirements:
- n8n instance (cloud or self-hosted)
- Facebook Page/Group Access Token with `publish_video` permission
- Video file to upload

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
