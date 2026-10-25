# ⚡ Create Yandex Calendar events via CalDAV

> ⚡ [Personal Productivity](../)

## Description

Receives a POST request with an event (title, start, end, all-day flag, optional description) and creates or updates it in Yandex Calendar over CalDAV.

1. `Event Request` receives the event payload.
2. `Set Calendar Options` keeps the CalDAV base URL, the target calendar path and the event UID in one place.
3. `Build iCal Event` converts the payload into an `.ics` file.
4. `Upload to Yandex Calendar` writes the file with an authenticated HTTP PUT request.
5. `Format Result` answers with a compact JSON summary: HTTP status, a readable note and whether the event was created or updated.

Sending the same `uid` again updates the existing event instead of creating a duplicate. Replacing the base URL in `Set Calendar Options` makes the same workflow work with any other CalDAV server (Nextcloud, iCloud, Fastmail).

## 🔗 Nodes Used

Webhook, Set, Convert to File, HTTP Request, Code

## 🔑 Credentials

- **HTTP Basic Auth** - your Yandex login and a CalDAV app password created in Yandex ID under *Security → App passwords*.
- **Header Auth** - a header named `x-webhook-token` with a secret value of your own, checked by the webhook.

No credentials or tokens are stored inside the workflow JSON.

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

Template maintained in the [Bowhard n8n templates](https://github.com/VavilkinAlex/n8n-bowhard-templates) repository.
