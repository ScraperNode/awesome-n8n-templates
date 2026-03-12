# ⚙️ Automated repository migration from GitLab groups to Gitea organizations

> ⚡ **139 views** · ⚙️ [DevOps & CI/CD](../)

## Description

**This flow migrates all repositories of a Gitlab group to a Gitea organization by triggering Gitea's integrated migration tool.**

Set up steps:
1. Copy this workflow
2. Create an empty Gitea-organization you want to migrate to. (The flow will skip all projects which have the same name of possibly already existing repos in the target Gitea organization.)
3. Create an access token in your Gitea (https://gitea.example.com/user/settings/applications), set it up as a Header Auth with it's name being "Authorization" and value being "token [your-gitea-token]" and select it for the "Gitea:"-named nodes.
4. Create a Personal access token in Gitlab (https://gitlab.com/-/user_settings/personal_access_tokens), create a Header Auth with name "PRIVATE-TOKEN" and value "[your-gitlab-token]" and select it for the "Gitlab:"-named node. Also keep the value of your Gitlab-token available for step 5.
5. Edit the Set node right after the trigger node and set paste your personal access token in there as well as the names of the Gitlab source group and the Gitea target organization. Use the url-friendly version of their names by simply copy&pasting them from their URLs.
6. Run the flow and enjoy the show :)

## 🔗 Nodes Used

HTTP Request, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
