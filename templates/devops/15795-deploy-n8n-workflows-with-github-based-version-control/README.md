# ⚙️ Deploy n8n workflows with GitHub-based version control

> ⚡ **173 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**Say goodbye to messy JSON exports. Treat your n8n automations like real software with a built-in CI/CD pipeline.**

Manually moving workflows between testing and production is a recipe for versioning nightmares, overwritten data, and broken webhooks. This workflow acts as a centralized DevOps Control Center, allowing you to back up, version-control, and deploy your automations directly from a custom n8n form. It doesn't just push code; it validates changes, prevents duplicate commits, routes to the correct environment, and orchestrates production deployments automatically.

### How it works
The workflow operates in four synchronized stages:

1.  **Form-Driven Trigger & Sanitization:** Initiates via a custom n8n form requesting the local Workflow ID, the target environment (Sandbox or Production), and a Git commit message. It fetches the local workflow and intelligently scrubs instance-specific metadata while preserving nodes, connections, and core settings.
2.  **Smart GitHub Versioning:** Queries the GitHub API to fetch the existing file SHA and compares the raw content. If the workflow hasn't changed since the last deployment, it safely skips the commit to prevent cluttering your Git history.
3.  **Environment Routing:** Data fans out based on the chosen path:
    *   **Sandbox:** Pushes the sanitized JSON to a `/sandbox/` repository folder and safely terminates, acting as a clean, versioned backup.
    *   **Production:** Pushes to the `/production/` repository folder, connects to the target Prod n8n instance via API, checks if the workflow already exists, and seamlessly creates or updates it.
4.  **Auto-Activation & Error Catching:** Automatically toggles the newly deployed workflow to "Active" on the production server. A global **Error Trigger** stands guard in the background to catch any API failures, formatting a clean, actionable error response with the execution ID and failed node name.

### Key Benefits
*   **Zero-Friction Deployments:** Replaces manual file downloads and UI importing with a simple 1-click CI/CD form.
*   **Clean Git History:** Built-in hashing and comparison logic ensures you only commit actual structural or code changes, avoiding empty commits.
*   **Multi-Environment Support:** Safely separates work-in-progress (Sandbox) from live, revenue-generating automations (Production).
*   **Safe & Monitored:** The workflow scrubs harmful static data before pushing, and the global error catcher ensures broken deployments are flagged immediately.

### Setup
1.  **Credentials:** Add your GitHub OAuth2 (or Personal Access Token) and your n8n API credentials. You will need one n8n credential for local read access, and one for your target Production server.
2.  **Repository Config:** Open the `Repo Config` node and replace the placeholder text with your specific `repoOwner`, `repoName`, and target `branch` (e.g., `main`).
3.  **Production Mapping:** Ensure the `Find Workflow on Prod`, `Create on Prod Server`, and `Update on Prod Server` nodes are explicitly configured to use your Production n8n API credential.
4.  **Activate:** Turn the workflow on, open the Form Trigger URL, and start deploying!

### Who this is for
*   **Automation Agencies & MSPs** managing complex multi-tenant or multi-server client environments.
*   **Enterprise IT Teams** requiring strict version control, code backups, and compliance for their automations.
*   **Power Users** running a segmented n8n architecture (Dev/Staging/Prod) who want to stop manually migrating workflows.

### Required APIs & Credentials
*   **Microsoft GitHub:** OAuth2 API or Personal Access Token (Requires `repo` contents Read/Write permissions).
*   **n8n API:** Local instance (Read) and Production instance (Read/Write/Activate).

### How to customise it
*   **Add Staging Environments:** Easily expand the Environment mapping code to include a 'Staging' or 'UAT' deployment branch.
*   **Custom Notifications:** Attach a Slack or Microsoft Teams node at the end of the `Build Success Response` to notify your DevOps channel whenever a new version goes live.

## 🔗 Nodes Used

GitHub, HTTP Request, n8n, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
