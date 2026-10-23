# 🔧 Block inaccessible merge requests with GitLab commit statuses

> ⚡ **5 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow triggers on GitLab merge request updates, scans changed markup files for basic WCAG 2.1 accessibility issues aligned with EU Accessibility Act requirements, then sets a commit status and maintains a single merge request comment with findings and fixes.

## How it works
1. Triggers when a GitLab merge request is opened, reopened, or updated while it is in the opened state.
2. Calls the GitLab REST API to list merge request diffs, then keeps only markup-related files and calculates which line numbers were added by the merge request.
3. Fetches the full content of each changed markup file from GitLab at the merge request’s last commit SHA.
4. Analyzes the markup to flag issues such as missing image alt text, missing form labels, missing page language, empty links/buttons, missing iframe titles, low inline color contrast, positive tabindex, and autoplay media, and marks whether each issue is in added lines.
5. Decides pass or fail based on problems introduced by the merge request (or unreadable files), with an optional waiver via a configured GitLab label.
6. Posts the result as a GitLab commit status and creates or updates a single merge request comment containing the detailed findings and suggested fixes.

## Setup
1. Add a GitLab OAuth2 credential with API access and select it in the GitLab Trigger and all GitLab HTTP Request/GitLab nodes.
2. In the GitLab Trigger, set the target group/owner and repository/project so GitLab can register the merge request webhook.
3. Activate the workflow once so the GitLab Trigger registers its webhook, then ensure merge requests are configured to require successful pipelines/status checks (for example, enable “Pipelines must succeed”) if you want failures to block merging.
4. Optionally adjust the rules in the workflow (file extensions to scan, minimum contrast ratio, whether warnings block, the waiver label name, and the commit status name) to match your project standards.

## 🔗 Nodes Used

HTTP Request, GitLab, GitLab Trigger, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
