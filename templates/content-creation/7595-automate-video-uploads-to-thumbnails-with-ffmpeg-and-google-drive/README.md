# 🎬 Automate video uploads to thumbnails with FFmpeg and Google Drive

> ⚡ **1,476 views** · 🎬 [Content Creation & Video](../)

## Description

# Automate Video Upload → Auto-Thumbnail → Google Drive

This workflow accepts a video via HTTP upload, verifies it’s a valid video, extracts a thumbnail frame at the **5-second** mark using **FFmpeg** (auto-installs a static build if missing), uploads the image to a specified **Google Drive** folder and returns a structured JSON response containing the new file’s details.

## Who’s it for

* **Marketing / Social teams** who need ready-to-publish thumbnails from raw uploads.
* **Developers** who want an API-first thumbnail microservice without standing up extra infrastructure.
* **Agencies / Creators** standardizing assets in a shared Drive.

## How it works

1. **Accept Video Upload (Webhook)**
   Receives `multipart/form-data` with file in field `media` at `/mediaUpload`. Response is deferred until the final node.
2. **Validate Upload is Video (IF)**
   Checks `{{$binary.media.mimeType}}` contains `video/`. Non-video payloads can be rejected with HTTP 400.
3. **Persist Upload to /tmp (Write Binary File)**
   Writes the uploaded file to `/tmp/&lt;originalFilename or input.mp4&gt;` for stable processing.
4. **Extract Thumbnail with FFmpeg (Execute Command)**
   * Uses system `ffmpeg` if available; otherwise downloads a static binary to `/tmp/ffmpeg`.
   * Runs: `ffmpeg -y -ss 5 -i <video> -frames:v 1 -q:v 2 /tmp/thumbnail.jpg`
5. **Load Thumbnail from Disk (Read Binary File)**
   Reads `/tmp/thumbnail.jpg` into the item’s binary as `thumbnail`.
6. **Upload Thumbnail to Drive (Google Drive)**
   Uploads to your target folder. File name is `&lt;original&gt;-thumb.jpg`.
7. **Return API Response (Respond to Webhook)**
   Sends JSON to the client including Drive file `id`, `name`, links, size, and checksums (if available).

## How to set up

1. **Import the workflow JSON** into n8n.
2. **Google Drive**
   * Create (or choose) a destination folder; copy its **Folder ID**.
   * Add **Google Drive OAuth2** credentials in n8n and select them in the Drive node.
   * Set the folder in the Drive “Upload” node.
3. **Webhook**
   * The endpoint is `POST /webhook/mediaUpload`.
   * Test:
     ```bash
     curl -X POST https://YOUR-N8N-URL/webhook/mediaUpload \
       -F "media=@/path/to/video.mp4"
     ```
4. **FFmpeg**
   * Nothing to install manually: the Execute Command node auto-installs a static `ffmpeg` if it’s not present.
   * (Optional) If running n8n in Docker and you want permanence, use an image that includes `ffmpeg`.
5. **Response body**
   * The Respond node returns JSON with file metadata. You can customize the fields as needed.
6. **(Optional) Non-video branch**
   * On the IF node’s **false** output, add a Respond node with HTTP **400** and a helpful message.

## Requirements
* n8n instance with **Execute Command** node enabled (self-hosted/container/VM).
* **Outbound network** access (to fetch static FFmpeg if not installed).
* **Google Drive OAuth2** credential with permission to the destination folder.
* Adequate temp space in `/tmp` for the uploaded video and generated thumbnail.

## How to customize

* **Timestamp**: change `-ss 5` to another second, or parameterize it via query/body (e.g., `timestamp=15`).
* **Multiple thumbnails**: duplicate the FFmpeg + Read steps with `-ss 5`, `-ss 15`, `-ss 30`, suffix names `-thumb-5.jpg`, etc.
* **File naming**: include the upload time or Drive file ID: `{{ base + '-' + $now + '-thumb.jpg' }}`.
* **Public sharing**: add a **Drive → Permission: Create** node (Role: `reader`, Type: `anyone`) and return `webViewLink`.
* **Output target**: replace the Drive node with **S3 Upload** or **Zoho WorkDrive (HTTP Request)** if needed.
* **Validation**: enforce max file size/MIME whitelist in a small Function node before writing to disk.
* **Logging**: append a row to Google Sheets/Notion with `sourceFile`, `thumbId`, `size`, `duration`, `status`.

## Add-ons

* **Slack / Teams notification** with the uploaded thumbnail link.
* **Image optimization** (e.g., convert to WebP or resize variants).
* **Retry & alerts** via error trigger workflow.
* **Audit log** to a database (e.g., Postgres) for observability.

## Use Case Examples

* **CMS ingestion**: Editors upload videos; workflow returns a thumbnail URL to store alongside the article.
* **Social scheduling**: Upload longform to generate a quick hero image for a post.
* **Client portals**: Clients drop raw footage; you keep thumbnails uniform in one Drive folder.

## Common troubleshooting

| Issue                                                 | Possible Cause                                         | Solution                                                                                                         |
| ----------------------------------------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| `ffmpeg: not found`                                   | System lacks ffmpeg and static build couldn’t download | Ensure outbound HTTPS allowed; keep the auto-installer lines intact; or use a Docker image that includes ffmpeg. |
| Webhook returns 400 “not a video”                     | Wrong field name or non-video MIME                     | Send file in `media` field; ensure it’s `video/*`.                                                               |
| Drive upload fails (`403` / insufficient permissions) | OAuth scope or account lacks folder access             | Reconnect Drive credential; verify the destination **Folder ID** and sharing/ownership.                          |
| Response missing `webViewLink` / `webContentLink`     | Drive node not returning link fields                   | Enable link fields in the Drive node or build URLs using the returned `id`.                                      |
| `413 Payload Too Large` at reverse proxy              | Proxy limits on upload size                            | Increase body size limits in your proxy (e.g., Nginx `client_max_body_size`).                                    |
| Disk full / ENOSPC                                    | Large uploads filling `/tmp`                           | Increase temp storage; keep **Cleanup** step; consider size caps and early rejection.                            |
| Corrupt thumbnail or black frame                      | Timestamp lands on a black frame                       | Change `-ss` or use `-ss` *before* `-i` vs. after; try different seconds (e.g., 1–3s).                           |
| Slow extraction                                       | Large or remote files; cold FFmpeg download            | Warm the container; host near upload source; keep static ffmpeg cached in image.                                 |
| Duplicate outputs                                     | Repeat requests with same video/name                   | Add a de-dup check (query Drive for existing `&lt;base&gt;-thumb.jpg` before upload).                                  |

## Need Help?

Want this wired to **S3 or Zoho WorkDrive** or to generate **multiple timestamps** and **public links** out of the box? We're happy to help.

## 🔗 Nodes Used

Read Binary File, Write Binary File, Webhook, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
