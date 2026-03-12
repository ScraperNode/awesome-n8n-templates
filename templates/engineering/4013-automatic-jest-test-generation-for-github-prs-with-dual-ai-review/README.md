# ⚒️ Automatic jest test generation for GitHub PRs with dual AI review

> ⚡ **612 views** · ⚒️ [Engineering](../)

## Description

# Workflow: Automatic Unit Test Creator from GitHub

## 🏗️ Architecture Overview
This workflow listens for GitHub pull-request events, analyzes changed React/TypeScript files, auto-generates Jest tests via AI, has them reviewed by a second AI pass, and posts suggestions back as PR comments:

1. GitHub Webhook → PR opened or updated
2. Fetch & Diff → Retrieve raw diff of changed files
3. Filter & Split → Isolate .tsx files & their diffs
4. Fetch File Contents → Provide full context for tests
5. Test Maker Agent → Generate Jest tests for diff hunks
6. Code Reviewer Agent → Refine tests for style & edge-cases
7. Post PR Comment → Sends suggested tests back to GitHub

## 📦 Node-by-Node Breakdown

```mermaid
flowchart LR
  A[Webhook: /github/pr-events] --&gt; B[GitHub: Get PR]
  B --&gt; C[Function: Parse diff_url + owner/repo]
  C --&gt; D[HTTP Request: GET diff_url]
  D --&gt; E[Function: Split on "diff --git"]
  E --&gt; F[Filter: /\.tsx$/]
  F --&gt; G[GitHub: Get File Contents]
  G --&gt; H[Test Maker Agent]
  H --&gt; I[Code Reviewer Agent]
  I --&gt; J[Function: Build Comment Payload]
  J --&gt; K[HTTP Request: POST to PR Comments]
```

### Webhook: GitHub PR Events
- Type: HTTP Webhook (`/webhook/github/pr-events`)
- Subscribed Events: `pull_request.opened`, `pull_request.synchronize`

### GitHub: Get PR
- Node: GitHub
- Action: "Get Pull Request"
- Inputs: owner, repo, pull_number

### Function: Parse diff_url + owner/repo
- Extracts:
  - diff_url (e.g. …/pulls/123.diff)
  - owner, repo, merge_commit_sha

### HTTP Request: GET diff_url
- Fetches unified-diff text for the PR.

### Function: Split on "diff --git"
- Splits the diff into file-specific segments.

### Filter: /.tsx$/
- Keeps only segments where the file path ends with .tsx.

### GitHub: Get File Contents
- For each .tsx file, fetches the latest blob via GitHub API.

### Test Maker Agent
- Prompt:
  - "Generate Jest unit tests covering only the behaviors changed in these diff hunks."
- Output: Raw Jest test code.

### Code Reviewer Agent
- Reads file + generated tests
- Prompt:
  - "Review and improve these tests for readability, edge-cases, and naming conventions."
- Output: Polished test suite.

### Function: Build Comment Payload
- Wraps tests in TypeScript fences:
```ts
// generated tests…
```
- Constructs JSON:
```json
{ "body": "&lt;tests&gt;" }
```

### HTTP Request: POST to PR Comments
- URL: `https://api.github.com/repos/{owner}/{repo}/issues/{pull_number}/comments`
- Body: Contains the suggested tests.

## 🔍 Design Rationale & Best Practices

### Focused Diff Analysis
- Targets only .tsx files to cover UI logic.

### Two-Stage AI
- Separate "generate" + "review" steps mimic TDD + code review.

### Stateless Functions
- Pure JS for parsing & transformation, easy to test.

### Non-Blocking PR Comments
- Asynchronous suggestions—developers aren't blocked.

### Scoped Permissions
- GitHub token limited to reading PRs & posting comments.

## 🔗 Nodes Used

GitHub, HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
