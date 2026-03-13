# ⚙️ CI artifact completeness gate (Git push, Sentry artifact verification, commit)

> ⚡ **31 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

# CI Artifact Completeness Gate (GitHub Push → Sentry Release Files → Artifact Validation → GitHub Commit Status Update)

This workflow acts as a CI/CD *quality gate* for mobile app crash-symbolication artifacts.
Whenever a new commit is pushed to GitHub, the workflow automatically checks the corresponding Sentry release and confirms whether required build artifacts (dSYM or ProGuard + mapping.txt) exist. If artifacts are complete, it updates the GitHub commit status to **success**, allowing the PR to be merged. If incomplete, the workflow fails silently (no commit status update), effectively blocking merges.

### ⚡ Quick Implementation Steps

1.  Configure **GitHub Trigger** for your repo.
2.  Add **Sentry API credentials**.
3.  Add **GitHub API credentials**.
4.  Update Sentry project URLs with your **org_slug** and **proj_slug**.
5.  Ensure your build pipeline uploads artifacts to Sentry **before** the workflow runs.
6.  Activate workflow.


## What It Does

This workflow ensures your mobile crash-symbolication artifacts are fully present in Sentry for every release.

When a new GitHub push occurs, the workflow:

1.  Reads the commit SHA and repo info from the GitHub Push event.
2.  Fetches the list of all releases from Sentry.
3.  Locates the correct release and fetches its uploaded artifact files.
4.  Runs custom validation logic:
    -   **Success if:**
        -   a `*.dSYM` file exists **OR**\
        -   both `proguard.txt` AND `mapping.txt` are present\
    -   **Failure if:**
        -   neither dSYM nor both mapping artifacts exist.
5.  If validated successfully, the commit receives a **success** status on GitHub → PR can be merged.

This provides a strong CI gate ensuring symbolication completeness and preventing un-debuggable releases.


## Who's It For

-   Mobile development teams using Sentry for crash reporting.
-   Engineering teams enforcing strict release-quality gates.
-   DevOps teams wanting automated artifact validation.
-   CI/CD pipeline engineers integrating Sentry symbolication checks.
-   Teams who frequently upload dSYM or ProGuard mapping files.


## Requirements to Use This Workflow

-   n8n instance (cloud or self-hosted)
-   GitHub repository access (API credentials)
-   Sentry project with:
    -   org_slug
    -   project_slug
    -   Auth Token with release access
-   Build process that uploads artifacts to Sentry releases
-   The release version must match the format expected by the workflow


## How It Works & How To Set Up

### Step 1: GitHub Push Trigger

The **GithubPushTrigger** node listens for push events and extracts:

-   Commit SHA
-   Repository full name
-   Branch
-   Metadata

No configuration required except selecting your GitHub credentials.


### Step 2: Configure Sentry Release Fetching

Open **Check Sentry Artifacts Releases** and update:
    https://sentry.io/api/0/projects/&lt;org_slug&gt;/&lt;proj_slug&gt;/releases/

Make sure the Sentry credential is correctly selected.


### Step 3: Fetch Files for the Specific Release

The next HTTP Request (**Check Sentry Artifacts Files**) uses a dynamic
URL:
    https://sentry.io/api/0/projects/&lt;org_slug&gt;/&lt;proj_slug&gt;/releases/{{ $json.version }}/files/

Ensure your build pipeline sets `version` consistently with what Sentry receives.


### Step 4: Artifact Validation Logic

The **Verify Artifacts** node runs JS logic to check:

#### ✔ Condition 1 --- Valid dSYM
Any file ending with `.dSYM`

#### ✔ Condition 2 --- Valid Android Mapping
-   `proguard.txt`\
-   `mapping.txt`

#### ✖ Failure --- If neither set exists

The Code node returns:

``` json
{ "status": "failure", "description": "Missing artifacts..." }
```

This stops the workflow and prevents GitHub commit-status update.


### Step 5: Extract Commit Info & Prepare Update

The **Artifacts Validation and Get Repository Data** node compiles:

-   repo full name
-   commit SHA
-   validation status

If validation failed → workflow ends here.


### Step 6: Update GitHub Commit Status

The **Update Status** node hits:

    POST https://api.github.com/repos/&lt;repoFullName&gt;/statuses/&lt;commitSHA&gt;

And sends:

``` json
{
  "state": "success",
  "description": "Artifacts successfully verified."
}
```

This appears as a green check on your commit/PR.


### Step 7: Activate the Workflow

Turn on the workflow to start enforcing symbolication completeness for all releases.


## How To Customize Nodes

### Change Sentry Project

Edit URLs in both Sentry HTTP Request nodes:

-   `org_slug`
-   `proj_slug`

### Add Additional Artifact Rules

Modify JS inside **Verify Artifacts**, e.g., require:

-   native symbols
-   extra asset files
-   other platform artifacts

### Customize Commit Status Message

Edit the request body in **Update Status**.

### Support Multiple Platforms / Multiple Releases

Branch logic in:

-   Code nodes
-   Conditional checks


## Add-Ons (Optional Enhancements)

-   Add Slack/Teams notifications when artifacts are missing.
-   Auto-retry release checks after build completes.
-   Merge-blocking PR checks for GitHub.
-   Multi-platform artifact validation (iOS + Android + Unity).
-   Upload artifacts directly from n8n.
-   Store validation logs in Airtable or Google Sheets.
-   Add GitHub Checks API rich reporting.


## Use Case Examples

1.  Block merges until symbolication artifacts are uploaded.
2.  Enforce strict Sentry release completeness for every build.
3.  Ensure Android mapping files always match the correct release version.
4.  Automatically verify multiple release types (debug, staging, production).
5.  Improve crash debugging by preventing un-symbolicated builds from shipping.


## Troubleshooting Guide

| Issue                       | Possible Cause                                 | Solution                                                                 |
|----------------------------|-----------------------------------------------|--------------------------------------------------------------------------|
| Commit status never updates| Validation failed silently                     | Check logs from **Verify Artifacts**                                      |
| "version undefined" in URL | Sentry release list not matched                | Ensure your build uploads a valid `version`                               |
| 401 from Sentry API        | Invalid/broken Sentry token                    | Regenerate token and update credentials                                   |
| Always failing validation  | Artifact names differ (e.g., `.dsym.zip`)      | Update RegEx patterns in Code node                                         |
| GitHub status API returns 404 | Missing repo permissions                   | Update GitHub credentials (repo status scope)                              |
| Files array empty          | Build system not uploading artifacts           | Verify build → Sentry upload step                                          |

## Need Help?

If you need help customizing the artifact rules, integrating multiple platforms or automating Sentry/GitHub workflows, reach out to our [n8n automation developers](https://www.weblineindia.com/hire-n8n-developers/) at WeblineIndia. We can assist with:

-   Mobile CI/CD pipelines
-   Sentry automation
-   Multi-artifact validation
-   GitHub PR quality-gates
-   Advanced Code-node scripting
-   And so much more.

Happy automating! 🚀

## 🔗 Nodes Used

Github Trigger, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
