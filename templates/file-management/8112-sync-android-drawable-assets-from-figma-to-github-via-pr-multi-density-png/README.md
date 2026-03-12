# 📁 Sync Android drawable assets from Figma to GitHub via PR (multi-density PNG)

> ⚡ **157 views** · 📁 [File Management](../)

## Description

# Sync Android drawable assets from Figma to GitHub via PR (multi‑density PNG)

This n8n workflow automatically fetches design assets (icons, buttons) from Figma, exports them into Android drawable folder formats based on resolution (e.g., `mdpi`, `hdpi`, etc.) and commits them to a GitHub branch, creating a Pull Request with all updates.

## Who’s it for

- **Android / Flutter developers** managing multiple screen densities.
- **Design + Dev teams** wanting to automate asset delivery from Figma to codebase.
- **Mobile teams** tired of manually exporting assets, resizing, organizing and uploading to GitHub.

## How it works

1. **Execute Flow** manually or via trigger.
2. Fetches all export URLs from a Figma file.
3. Filters out only relevant components (`Icon`, `Button`).
4. Prepares Android drawable folders for each density.
5. Merges components with folder mapping.
6. Calls Figma export API to get image URLs.
7. Filters out empty/invalid URLs.
8. Downloads all images as binary.
9. Merges images with metadata.
10. Renames and adjusts file names if needed.
11. Prevents duplicate PRs using conditional checks.
12. Commits files and opens a GitHub Pull Request.

## How to set up

1. **Set up your Figma token** (with file access)
2. **Get Figma File Key** and desired parent node ID
3. Connect your **GitHub account** in n8n
4. Prepare a **GitHub branch** for uploading assets
5. Add your **drawable folders config**
6. Adjust file naming logic as per your code style
7. Run the workflow

## Requirements

| Tool             | Purpose                                  |
|------------------|-------------------------------------------|
| Figma API Token  | To fetch assets and export URLs          |
| GitHub Token     | To commit files and open PR              |
| n8n    | Workflow automation engine                |
| Figma File Key   | Target design file                       |
| Node Names       | Named like `Icon`, `Button`              |

## How to customize

- **Add more component types** to extract (e.g., `Avatar`, `Chip`)
- **Change drawable folder structure** for other platforms (iOS, Web)
- **Add image optimization** before commit
- **Switch from branch PR to direct commit** if preferred
- **Add CI triggers** (e.g., Slack notifications or Jenkins trigger post-PR)

## Add‑ons

- Slack Notification Node
- Commit summary to `CHANGELOG.md`
- Image format conversion (e.g., SVG → PNG, PNG → WebP)
- Auto-tag new versions based on new asset count


## Use Case Examples

-  Auto-export design changes as Android-ready assets
-  Designers upload icons in Figma → Devs get PR with ready assets
-  Maintain pixel-perfect assets per density without manual effort
-  Integrate this into weekly design-dev sync workflows



## Common Troubleshooting

| **Issue**                          | **Possible Cause**                                | **Solution**                                                                 |
|-----------------------------------|---------------------------------------------------|------------------------------------------------------------------------------|
| Export URL is `null`              | Figma node has no export settings                 | Add export settings in Figma for all components                             |
| Images not appearing in PR        | Merge or file name logic is incorrect             | Recheck merge nodes, ensure file names include extensions                   |
| Duplicate PR created              | Condition node not properly checking branch       | Update condition to check existing PR or use unique branch name             |
| Figma API returns 403/401         | Invalid or expired Figma token                    | Regenerate token and update n8n credentials                                 |
| GitHub file upload fails          | Wrong path or binary input mismatch               | Ensure correct folder structure (`drawable-mdpi`, etc.) and valid binary    |
| Assets missing certain resolutions| Not all resolutions exported in Figma             | Export all densities in Figma, or fallback to default                       |

---

## Need Help?

If you’d like help setting up, customizing or expanding this flow, feel free to reach out to our [n8n automation team](https://www.weblineindia.com/hire-n8n-developers/) at WeblineIndia!

We can help you:
-  Fine-tune Figma queries
-  Improve file renaming rules
-  Integrate Slack / CI pipelines
-  Add support for other platforms (iOS/Web)

Happy automating!

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
