# ⚒️ Syncing iOS localization gaps with Google Sheets and GitHub PR placeholders

> ⚡ **219 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Fill iOS localization gaps from `.strings` → Google Sheets and PR with placeholders (GitHub)

This n8n workflow automatically identifies missing translations in `.strings` files across iOS localizations (e.g., `Base.lproj` vs `fr.lproj`) and generates a report in Google Sheets. Optionally, it creates a GitHub PR to insert placeholder strings (`"__TODO_TRANSLATE__"`) so builds don't fail. Supports DRY\_RUN mode.

## Who’s it for

* iOS teams who want **fast feedback** on missing translations.
* Localization managers who want a **shared sheet** to assign work to translators.

## How it works

1. A GitHub Webhook triggers on push or pull request.
2. The iOS repo is scanned for `.strings` files under `Base.lproj` or `en.lproj` and their target-language counterparts.
3. It compares keys and identifies what’s missing.
4. A new or existing Google Sheet tab (e.g., `fr`) is updated with missing entries.
5. If enabled, it creates a GitHub PR with placeholder keys (e.g., `"__TODO_TRANSLATE__"`).

## How to set up
1. **Import the Workflow JSON** into your n8n instance.
2. **Set Config Node values** like:

```json
{
"GITHUB_OWNER": "your-github-user-name",
"GITHUB_REPO": "your-iOS-repo-name",
"BASE_BRANCH": "develop",
"SHEET_ID": "&lt;YOUR_GOOGLE_SHEET_ID&gt;",
"ENABLE_PR": "true",
"IOS_SOURCE_GLOB": "**/Base.lproj/*.strings,**/en.lproj/*.strings",
"IOS_TARGET_GLOB": "**/*.lproj/*.strings",
"PLACEHOLDER_VALUE": "__TODO_TRANSLATE__",
"BRANCH_TEMPLATE": "chore/l10n-gap-{{YYYYMMDD}}",
}
```

3. **Create GitHub Webhook**
	* URL: `https://your-n8n-instance/webhook/l10n-gap-ios`
	* Content-Type: `application/json`
	* Trigger on: `Push`, `Pull Request`

4. **Connect credentials**
	* GitHub token with repo scope
	* Google Sheets API
	* (Optional) Slack OAuth + SMTP

## Requirements

| Tool | Needed For | Notes |
| ---------------- | -------------------- | ---------------------------------------- |
| GitHub Repo | Webhook, API for PRs | `repo` token or App |
| Google Sheets | Sheet output | Needs valid `SHEET_ID` or create-per-run |
| Slack (optional) | Notifications | `chat:write` scope |
| SMTP (optional) | Email fallback | Standard SMTP creds |

## How to customize

* **Multiple Locales**: Add comma-separated values to `TARGET_LANGS_CSV` (e.g., `fr,de,es`).
* **Globs**: Adjust `IOS_SOURCE_GLOB` and `IOS_TARGET_GLOB` to scan only certain modules or file patterns.
* **Ignore Rules**: Add `IGNORE_KEY_PREFIXES_CSV` to skip certain internal/debug strings.
* **Placeholder Value**: Change `PLACEHOLDER_VALUE` to something meaningful like `"@@@"`.
* **Slack/Email**: Set `SLACK_CHANNEL` and `EMAIL_FALLBACK_TO_CSV` appropriately.
* **DRY\_RUN**: Set to true to skip GitHub PR creation but still update the sheet.

## Add‑ons

- **Android support:** Add a second path for `strings.xml` (`values` → `values-&lt;lang&gt;`), same diff → Sheets → placeholder PR.
- **Multiple languages at once:** Expand `TARGET_LANGS_CSV` and loop tabs + placeholder commits per locale.
- **`.stringsdict` handling:** Validate plural/format entries and open a precise PR.
- **Translator DMs:** Provide a `LANG → Slack handle/email` map to DM translators with their specific file/key counts.
- **GitLab/Bitbucket variants:** Replace GitHub API calls with GitLab/Bitbucket equivalents to open Merge Requests.

## Use Case Examples

- Before a test build, ensure `fr` has **all keys** present—placeholders keep the app compiling.
- Weekly run creates a **single sheet** for translators and a PR with placeholders, avoiding last‑minute breakages.
- A new screen adds 12 strings; the bot flags and pre‑fills them across locales.

## Common troubleshooting

| Issue | Possible Cause | Solution |
| ------------------------ | --------------------------------------------- | ------------------------------------------------------ |
| No source files found | Glob doesn't match `Base.lproj` or `en.lproj` | Adjust `IOS_SOURCE_GLOB` |
| Target file missing | `fr.lproj` doesn’t exist yet | Will be created in placeholder PR |
| Parsing skips entries | Non-standard string format in file | Ensure proper `.strings` format `"key" = "value";` |
| Sheet not updating | `SHEET_ID` missing or insufficient permission | Add valid ID or allow write access |
| PR not created | `ENABLE_PR=false` or no missing keys | Enable PR and ensure at least one key is missing |
| Slack/Email not received | Missing credentials or config | Configure Slack/SMTP properly and set recipient fields |

## Need Help?

Want to expand this for Android? Loop through 5+ locales at once? Or replace GitHub with GitLab?
**Contact our n8n Team at WeblineIndia with your repo & locale setup** and we’ll help tailor it to your translation workflow!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
