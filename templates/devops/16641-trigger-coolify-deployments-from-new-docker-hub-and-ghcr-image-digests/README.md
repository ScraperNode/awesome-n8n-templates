# ⚙️ Trigger Coolify deployments from new Docker Hub and GHCR image digests

> ⚡ **47 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
🔄 Monitor Container Images from Docker Hub or GHCR.

This workflow checks Docker Hub or GitHub Container Registry (GHCR) image tags for new digests. When an update is detected, it calls your Coolify API to restart the mapped service so the latest image is deployed.

## How it works
1. Runs on a schedule to check for new image versions automatically.
2. Loads configured Docker Hub image tags and their matching Coolify service UUIDs, then checks Docker Hub for each tag’s current digest.
3. Skips Docker Hub digests already seen in previous workflow executions and prepares standardized metadata for any new digests.
4. Loads configured GHCR image tags and their matching Coolify service UUIDs, fetches a GHCR auth token, and then retrieves each tag’s current OCI digest from the response headers.
5. Skips GHCR digests already seen in previous workflow executions and prepares standardized metadata for any new digests.
6. Combines new updates from both registries and calls the Coolify “restart service” endpoint for each matching service UUID (with latest image enabled).

## Setup
1. Add an HTTP Bearer Auth credential for your Coolify API token and replace `https://your-coolify-instance.com` and the endpoint path if your Coolify setup differs.
2. Edit the Docker Hub and GHCR repository tag arrays and provide the corresponding Coolify service UUID arrays, keeping the order aligned so each image maps to the correct service.
3. Set the schedule interval to control how often the workflow checks for new digests.

## Requirements
- Coolify Instance: An active Coolify self-hosted instance with API access enabled. (optional if you only want to send notifications)
- Service UUIDs: The unique identifiers for the services you want to auto-deploy. (optional if you only want to send notifications)
- Public/Private Repositories: Image references on Docker Hub or GitHub Container Registry (GHCR).

## Customization
- Scale Up: Add more images simply by extending the repository lists in the configuration arrays.
- Swap Platforms: Replace the final Coolify HTTP node with webhooks for Portainer, Docker Swarm, or Webhooks.
- Add Notifications: Append a Discord, Slack, or Telegram node at the end to get notified whenever a service successfully redeploys.

## Additional info
### Need help?
If you're facing any issues using this workflow, [join the community discussion on the n8n forum](https://community.n8n.io/t/monitor-container-images-from-docker-hub-and-ghcr-to-trigger-coolify-deployments/301474).

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
