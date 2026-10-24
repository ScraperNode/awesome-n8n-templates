# ⚙️ Generate and deploy nginx configs with SSH, web forms and Cloudflare

> ⚡ **0 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow serves a protected web form that collects domain and route settings, generates an nginx server configuration, optionally creates a Cloudflare DNS A record, and then connects over SSH to install prerequisites, deploy the config, and optionally enable HTTPS with Certbot.

## How it works
1. This workflow provides a browser-based form where users can define domains, reverse proxy routes, static file locations, and optional advanced Nginx directives.
2. The workflow validates the submitted configuration, generates the required Nginx server block, optionally creates a Cloudflare DNS record, prepares the target server, and deploys the configuration through SSH.
3. If Cloudflare is enabled, calls the Cloudflare API to look up the zone ID and create an A record pointing the domain to the provided server address.
4. It can also install required packages, configure static file permissions, validate the Nginx configuration, reload the service, and optionally enable HTTPS certificates using Certbot.

## Setup
1. Create an SSH private key credential that can sudo on the target server and select it in the SSH steps.
2. Create an HTTP Basic Auth credential and assign it to the webhook so the configuration form is access-controlled.
3. (Optional) Add a Cloudflare API token credential with DNS edit permissions for the target zone and enable the “Use Cloudflare for DNS” option only when it is configured.
4. Ensure the serverAddress you enter in the form is reachable from the internet and points to the server where nginx is deployed.
5. If you enable SSL, provide a valid certificate notification email and make sure ports 80 and 443 are accessible for Certbot validation.
6. Activate the workflow and open the configuration form and submit your Nginx deployment settings.

## Requirements
- A Linux server with SSH access
- Supported operating systems:
  - Ubuntu (recommended)
  - Fedora
  - Red Hat Enterprise Linux 8+
  - openSUSE
- root permissions on the server
- n8n instance with webhook support
- Optional Cloudflare API token for DNS automation
- > Ubuntu is recommended for the best compatibility and easiest setup experience.

## Customization
- You can extend this template by adding additional Nginx directives, custom deployment steps, or new route types based on your infrastructure needs.

## Additional info
## Who’s it for
This template is designed for developers, self-hosters, and DevOps engineers who need a simple way to create and deploy Nginx configurations on remote Linux servers.

## 🔗 Nodes Used

HTTP Request, Webhook, SSH

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
