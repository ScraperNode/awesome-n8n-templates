# 🎬 Generate text images from the Free DummyJSON API using the HTTP request node

> ⚡ **4,846 views** · 🎬 [Content Creation & Video](../)

## Description

## Who is this for?

This workflow template is ideal for marketers, designers, content creators, and developers who need to generate custom text-based images dynamically. Whether you want to create social media graphics, placeholder images, or text-based LinkedIn carousels, this workflow provides a simple, no-code solution using an API that requires no authentication.

## What problem does this workflow solve?

Creating text-based images often requires design software or complex integrations with graphic tools. This workflow eliminates that hassle by allowing users to generate images with custom text, font styles, colors, and background colors using a simple HTTP request. It’s perfect for automating image generation without relying on external tools or manual effort.

## What this workflow does

This workflow leverages an HTTP request to a free API that generates text-based images dynamically. Here's what it enables you to do:

- Define custom image text
- Set image dimensions (width x height)
- Choose a background color and text color using hex codes
- Select a font family and font size
- Specify the image format (PNG, JPG, or WebP)

The generated image can be used immediately, making it ideal for automating content creation workflows.

### Setup

1. Open the workflow in n8n.
2. Modify the Set node to define your preferred image properties:
```
- text: The message displayed on the image.
- size: Image dimensions (e.g., 500x300 pixels).
- backgroundColor: Hex color code for the background.
- textColor: Hex color code for the text.
- fontFamily: Select from available font options (e.g., Pacifico, Ubuntu).
- fontSize: Define the text size.
- type: Choose the image format (PNG, JPG, or WebP).
```

3. Execute the workflow to generate an image.
4. The HTTP request returns the generated image, ready for use.

## How to customize this workflow

- 1.     Adjust the Set node values to match your desired design.
- 2.     Use dynamic data for text, allowing personalized images based on user input.
- 3.     Automate image delivery by adding email or social media posting nodes.
- 4.     Integrate this workflow into larger automation sequences, such as content marketing pipelines.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
