# 📊 AI-Powered NPM Package Intelligence Agent

> ⚡ **288 views** · 📊 [Market Research & Insights](../)

## Description

Before adding a new npm package as a dependency, you should know if it's actively maintained, widely used, and safe to build on. This workflow does that analysis automatically.

Enter any package name, and the agent uses Firecrawl to find the right npm and GitHub pages, pulls live stats from the GitHub and npm APIs, then runs an AI analysis to generate a risk score and a clear recommendation: **Use**, **Consider**, or **Avoid**.

---

## What problem is it solving?

Adding an unmaintained or poorly-supported npm package can create long-term technical debt such as security vulnerabilities, broken updates, or abandoned dependencies, that are hard to replace later. But manually checking npm downloads, GitHub stars, open issues, last commit date, and license type across multiple pages takes time and is easy to skip.

This workflow makes due diligence effortless. In seconds, you get a structured report with all the signals that matter, plus an AI-generated recommendation you can act on immediately.

---

## What this workflow does

1. **Triggers** via a simple form — enter any npm package name
2. **Normalises** the input for consistent processing
3. **Uses Firecrawl** to dynamically discover the correct npm page and GitHub repository URL (avoiding hardcoded assumptions)
4. **Cleans and validates** the discovered URLs — filters out noise, adds fallbacks if npm page isn't found
5. **Fetches real-time data** via APIs:
   - GitHub API: stars, open issues, license, last commit date
   - npm API: weekly download count
6. **Computes health metrics**: issue-to-star ratio, activity status (active vs stale), package validity
7. **Handles errors gracefully** — returns a safe default and explanation if the package isn't found or APIs fail
8. **Runs an AI Analysis Engine** with a structured output parser to generate:
   - Risk score: Low / Medium / High
   - Adoption and health insights
   - Final recommendation: Use / Consider / Avoid
9. **Sends a Slack report** with the full analysis

---

## Setup

1. **Connect Firecrawl credentials** — used to discover npm and GitHub URLs
2. **Connect OpenAI credentials** (or OpenRouter — both are wired in) — used for AI analysis and structured output
3. **Connect GitHub credentials** — used for the GitHub API node to fetch repo stats
4. **Connect Slack credentials** — set the channel where reports should be posted in the Slack nodes
5. **Run** — open the form trigger URL, enter a package name, and the report will appear in Slack within seconds

---

## How to customize this workflow to your needs

- **Change the output channel** — swap the Slack nodes for email, a Notion database entry, or a webhook to your internal tooling
- **Switch AI providers** — the workflow includes both OpenAI and OpenRouter nodes; use whichever you have access to and disable the other
- **Adjust the risk scoring logic** — modify the `Compute Health Metrics` node to change what thresholds define Low / Medium / High risk
- **Add more data sources** — extend the data collection phase with additional APIs (e.g. Snyk for security advisories, Bundlephobia for bundle size)
- **Batch mode** — wrap the form trigger in a schedule and feed it a list of packages from a spreadsheet to audit your entire dependency list at once
- **Embed in CI** — trigger the workflow via webhook from your CI pipeline to automatically flag risky new dependencies before they're merged

## 🔗 Nodes Used

GitHub, HTTP Request, Slack, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
