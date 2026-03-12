# 🔧 Batch Delete Posts and Featured Images in WordPress

> ⚡ **220 views** · 🔧 [Miscellaneous](../)

## Description

### Why use this
You need to delete (many) posts on a WordPress website and also delete the featured image associated with each post.

Hours of rote work cut into a fraction with this automation.

### How it works
- set your wordpress URL in the manual trigger node
- set your WP post search parameters
- (WP API returns 10 posts by default; you could also set up pagination for scaling this automation beyond 10 posts per execution)
- decide (and build) your filter/approval process

### What you can expect
- this automation is set up to run the 10 oldest `pending` posts, with oldest first
- if you remove the 'Filter' node from the workflow, after each run, another 10 posts will be returned from WP

### Notes on Filter/Approval
This is arbitrary and depends on your own use case. Maybe you have an editor who needs to approve the post deletion. You might want to get approval by email, slack msg or ticketing system.

Or maybe you just want to monitor the process  and spare specific posts from deletion.

I used the Filter node to only grab the first `item` (`itemIndex &lt; 1`) which in this case was the oldest `pending` post.

This could also be **expanded** to two separate workflows:
- One triggered when a `pending` post is created that sends an approval request
- A second triggered by the approval/rejection that either publishes or deletes the post, depending on the approval result

This would require another HTTP request, similar to the DELETE post request, that instead publishes the post.

## 🔗 Nodes Used

HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
