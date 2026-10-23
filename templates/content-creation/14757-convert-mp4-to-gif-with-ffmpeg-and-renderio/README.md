# 🎬 Convert MP4 to GIF with FFmpeg and RenderIO

> ⚡ **40 views** · 🎬 [Content Creation & Video](../)

## Description

## Who is this for

Anyone who needs to automate video-to-GIF conversion without installing FFmpeg locally. Ideal for content creators, social media managers, and developers building media pipelines. Works on both **n8n Cloud** and **self-hosted** instances.

## What it does

FFmpeg is a powerful tool for media processing. While it can perform virtually any kind of operation (applying filters, cropping, merging), this workflow demonstrates format conversion: video to GIF.

You submit a video URL through a form, the RenderIO node sends it to the cloud for FFmpeg processing, and the workflow polls until the converted GIF is ready for download.

## How it works

1. Submit a video URL through the form (or click "Execute workflow" to use the default test URL).
2. The **RenderIO** node sends the URL and FFmpeg command to the cloud for processing.
3. After **10 seconds**, the workflow polls the command status.
4. If not yet complete, it retries every **30 seconds** until the status is `SUCCESS`.
5. The GIF download URL is shown on the completion page.

## Requirements

- A free account and API key from [RenderIO](https://renderio.dev)
- The `n8n-nodes-renderio` community node installed in your instance

## How to set up

1. Sign up at [renderio.dev](https://renderio.dev) and create an API key from the dashboard.
2. In n8n, go to **Settings &gt; Community Nodes** and install `n8n-nodes-renderio`.
3. Add a new **RenderIO API** credential with your API key.
4. Open the workflow and execute it.

## How to customize

- **Different input formats**: The workflow accepts any video format FFmpeg supports (MP4, AVI, MOV, WebM, etc.). Just provide the URL.
- **GIF quality**: Add FFmpeg flags to control frame rate, resolution, or palette generation for higher-quality GIFs (e.g., `-vf "fps=10,scale=320:-1"`).
- **Advanced processing**: The FFmpeg command supports any valid flags for filters, trimming, cropping, and more. Consult the [RenderIO docs](https://renderio.dev/docs) for examples.
- **File uploads**: Swap the URL text input for a file upload and use the RenderIO **File &gt; Upload** operation to upload binary data before running the command.

## 🔗 Nodes Used

n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
