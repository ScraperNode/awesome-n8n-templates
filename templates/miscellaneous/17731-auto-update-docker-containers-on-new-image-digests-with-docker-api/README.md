# 🔧 Auto-update Docker containers on new image digests with Docker API

> ⚡ **2 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow runs hourly to check a Docker registry for updated image digests, and if a new image is available it pulls it, recreates a Docker container with the configured port mapping, and waits for the container health check to pass.

## How it works
1. Runs every hour on a schedule.
2. Loads the target container name, image reference, and host/container ports from a central configuration step.
3. Uses the Docker Registry API to inspect the image manifest and read the currently published digest, then inspects the same image locally.
4. Compares the published digest to the local image digest to decide whether an update is needed.
5. If an update is needed, pulls the latest image, removes the existing container, and creates a new container with a health check and restart policy.
6. Waits up to 120 seconds for the new container to reach the healthy state and routes to either a success placeholder or an unhealthy-alert placeholder.
7. If no update is needed, ends without making changes.

## Setup
1. Configure Docker API credentials/connection details so n8n can inspect images and manage containers on your Docker host.
2. Update the image reference (for example, `repo/name:tag`), container name, and port mapping values in the Settings step.
3. Ensure the container image supports the configured health check command (default uses `wget` against `http://localhost:<containerPort>/`) and adjust it to match your service.
4. Replace the success and unhealthy placeholders with your notification target (for example, Slack, email, or Discord) if you want alerts.

## 🔗 Nodes Used

Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
