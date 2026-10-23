# ⚒️ Discuss GitHub issues with council-style AI reviewers and optional BVC

> ⚡ **0 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Get a proposed fix for a GitHub issue from four independent AI reviewer roles. Choose your model provider during setup. Optional BVC decides whether another discussion round is worthwhile within a fixed call limit. A person reviews the resulting plan and audit.

## How it works
1. A form receives the GitHub repository, issue number, source revision and one to six explicitly selected files. Use a full commit SHA for reproducible input.
2. The workflow reads the issue and selected files through the GitHub API. All file reads use one fixed commit SHA; repository content is treated as untrusted evidence.
3. Four roles of the chosen model review the same evidence: architect, developer, reviewer and tester. They cannot see each other's initial answers.
4. With Use BVC checked, the original Xynapse planning algorithm decides whether disagreement justifies one extra critique round. Unchecked, it uses the SDK's fixed baseline when the budget permits.
5. The configured limit is five or nine counted model attempts, including failed calls. One slot is reserved for synthesis. The workflow has no automatic provider retries.
6. Synthesis produces a proposed bug-fix plan. Refused, truncated, malformed or unconfirmed final responses produce a failure report instead of a ready plan.
7. The form displays the result and technical audit, including attempts, disagreements and stop reasons. The workflow never edits GitHub, creates pull requests or comments, or verifies a patch.

## Setup
1. Import workflow.json into n8n 2.37.10 with JavaScript Code nodes enabled. Download the README, source and tests from the linked GitHub release for detailed setup instructions.
2. Create a GitHub Header Auth credential using Authorization: Bearer YOUR_GITHUB_TOKEN. Grant only read access to contents, issues and metadata for the selected repositories, and bind it to all eight GitHub HTTP nodes.
3. Choose the provider, exact API model ID and five- or nine-call limit in Configure approved input. Create the matching model Header Auth credential and bind it to all nine Model HTTP nodes. Your provider account pays for API calls.
4. Supported API adapters include OpenAI, Claude, Gemini, DeepSeek, Yandex and trusted OpenAI-compatible endpoints. Yandex is optional and requires its Cloud folder ID. Provider and budget settings are controlled by the workflow owner, not by form input.
5. Test the Discuss a GitHub issue form, then publish the workflow for its reusable form URL. Users need an authorized n8n login. Alternatively select Start manually and read Final report in execution output.

## Requirements
- An n8n installation with standard Code, HTTP Request and Form nodes; a GitHub read-only token; and your own supported model-provider API account. No Xynapse IDE or separate service is required.

## Customization
- Choose the provider and model during setup, set maxCalls to 5 or 9, and toggle Use BVC. The four reviewer roles use one selected model. Changing providers also requires rebinding the model credential.

## Additional info
Skipping critique can avoid four calls; token savings, lower cost and better plans are not guaranteed. Local self-hosted n8n tests and live Yandex runs are documented; n8n Cloud and live calls to other providers remain unverified. verification = not_run. Source, README, tests and audit evidence: https://github.com/jabrailkhalil/xynapse/releases/tag/n8n-bvc-v0.1.0

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
