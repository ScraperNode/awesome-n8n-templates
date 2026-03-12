# 📊 Search Skool community posts with Claude and Google Docs analysis

> ⚡ **34 views** · 📊 [Market Research & Insights](../)

## Description

## How it works

1. **Form Trigger** accepts a question and optional settings (folder ID, search depth)
2. **Cookie Validation** checks if Skool session is still active
3. **BuildId Extraction** dynamically extracts Skool's build ID from homepage
4. **Keyword Extraction** uses Claude Haiku to extract 1-2 search keywords
5. **Multi-Page Search** fetches 1-10 pages of Skool search results
6. **Post Aggregation** collects all posts with content and comments
7. **AI Analysis** uses Claude Sonnet to analyze posts and answer your question
8. **Google Doc Report** creates a detailed research document in your Drive
9. **HTML Response** returns a beautiful summary page

## Key Features

- Auto BuildId Detection - No manual updates when Skool changes
- Cookie Expiration Handling - Clear error messages when session expires
- Configurable Search Depth - Search 1-10 pages (default: 5)
- Token Protection - Limits content to control API costs
- Dual AI Models - Haiku for keywords (cheap), Sonnet for analysis (powerful)

## Set up steps

**Time required:** 10-15 minutes

1. Get your Skool session cookie from browser DevTools
2. Get an Anthropic API key from console.anthropic.com
3. Set up Google Docs OAuth2 credential in n8n
4. Create a Google Drive folder for research docs
5. Update the Config node with your values:
   - `COOKIE` - Your Skool session cookie
   - `ANTHROPIC_API_KEY` - Your Claude API key
   - `DEFAULT_FOLDER_ID` - Your Google Drive folder ID
   - `COMMUNITY` - Your Skool community slug

## Who is this for?

- Members of Skool communities searching past discussions
- Community managers researching common questions
- Anyone building knowledge bases from Skool content

## Estimated costs

- **Per search:** $0.02-0.10 (Claude Haiku + Sonnet)
- Skool cookies expire every 7-14 days (requires refresh)
```

---

## 🏷️ Suggested Tags
```
skool, community, search, ai, claude, anthropic, google-docs, research, knowledge-base, form

## 🔗 Nodes Used

HTTP Request, Google Docs, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
