# 🔬 Proofread markdown blog posts with Gemini, Groq fallback and GitHub auto-commit

> ⚡ **63 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Your personal editor that finds tone, grammar, and clarity issues in markdown, then fixes them and commits back to GitHub automatically.

Stop manually proofreading markdown files. This workflow uses two AI agents to review your blog posts, generate precise line-by-line fixes, and commit the edits back to GitHub automatically. You write, it checks.
 
This is not another "generate a blog post with AI" template. It does the opposite. You write the content, and the workflow checks it for you. Your writing style stays the same because the Editor Agent can only replace, insert, or delete specific lines. No full rewrites.
 
### How the workflow works
 
The workflow runs in five stages:
 
1. **Fetch and prepare:** The workflow pulls your markdown file from GitHub using the API. A code node decodes the base64 response and adds line numbers to every line. This gives the AI agents a coordinate system so they can point to exact locations instead of saying "somewhere in the introduction."
2. **QA review:** The QA Agent reads the numbered content and looks for issues with tone, clarity, grammar, and structure. It returns a JSON array where each item has the line number, what is wrong, how severe it is, and a suggested fix.
3. **Severity filter:** A filter node checks the results. Only high and medium severity issues move forward. Low severity issues show up in the report but do not trigger any edits.
4. **Edit generation:** The Editor Agent takes the filtered issues and converts them into edit operations. Each operation is one of three types: replace, insert_after, or delete. A code node then sorts all operations from bottom to top. This is important because if you delete line 5, every line after it shifts up by one. Sorting from the bottom prevents that problem.
5. **Commit and report:** If more than half the edits succeed, the workflow commits the updated file to GitHub. It also saves a QA report in a reports folder. If edits fail, the commit is skipped and a failure report is saved instead with next steps.
 
### Benefits
 
• **Finds real issues, not nitpicks:** The severity filter means your file only gets changed when something actually matters.
• **Keeps your writing style:** Three allowed operations. Replace, insert, delete. That is it. No creative rewrites.
• **Line numbers solve the guessing problem:** I added this after noticing the AI kept misidentifying where problems were in longer posts.
• **Edits do not break each other:** The bottom-to-top sorting was the trick that took me a while to figure out. Without it, line numbers shift after every edit and the rest of the operations point to the wrong lines.
• **Fallback model included:** If Gemini is down or rate-limited, the workflow falls back to Groq automatically. Both agent nodes also retry up to 3 times with a 5-second interval.
• **Reports for every run:** Three report types committed to your repo: fixes applied, no issues found, or edits failed.
 
### Target Audience
 
• Technical writers who keep documentation in GitHub
• Content managers reviewing blog posts before publication
• SEO specialists checking content quality across multiple markdown files
• Dev teams that want automated content review similar to a PR review
• Freelancers and bloggers who do not have an editor to proofread their work
 
### Required APIs
 
• **Google Gemini API** for the AI analysis (primary model)
• **Groq API** as a fallback model if Gemini is unavailable (optional but recommended)
• **GitHub OAuth2** with repo scope so the workflow can read files and commit changes
 
### Easy Customization
 
• **Swap the AI model:** Replace the chat model sub-node with OpenAI, Anthropic, or any provider that handles JSON output. The prompts are model-agnostic.
• **Change the severity filter:** Open the filter node and include low severity if you want more aggressive editing.
• **Point it at any file:** The Config node at the start has your repo owner, repo name, and file path. Change those three values and it works on any markdown file in any repository.
• **Make it automatic:** Replace the Manual Trigger with a GitHub Trigger node listening for push or pull_request events. Now it runs every time someone updates content.
• **Add notifications:** Drop a Slack, Teams, or email node after the report step to get notified when the workflow finishes a review.

## 🔗 Nodes Used

GitHub, AI Agent, Google Gemini Chat Model, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
