# 🎬 Transform your selfies into 3D figurines with Nano Banana AI

> ⚡ **770 views** · 🎬 [Content Creation & Video](../)

## Description

# Transform Your Selfies into 3D Figurines with Nano Banana AI

## Overview
This workflow utilizes the Defapi API with Google's **Nano Banana AI** model to transform your selfies into stunning **3D figurines**, **action figures**, and collectible merchandise designs. Simply upload a selfie photo, provide a creative prompt describing your desired **3D figurine** or **action figure** design, and watch as AI generates professional-quality product visualizations.

**Input:** Your selfie photo + creative prompt + API key  
**Output:** AI-generated **3D figurine** and **action figure** designs perfect for collectibles, merchandise, and product visualization

Users can interact through a simple form, providing a text prompt describing the desired creative scene, a product image URL, and their API key. The system automatically submits the request to the Defapi API, monitors the generation status in real time, and retrieves the final creative image output. This solution is ideal for marketers, product designers, e-commerce businesses, and content creators who want to quickly generate compelling product advertisements and creative visuals with minimal setup. Perfect for creating **3D figurines** and collectible merchandise designs.


## Prerequisites
- A Defapi account and API key: Sign up at [Defapi.org](https://defapi.org/model/google/nano-banana) to obtain your API key.
- An active n8n instance (cloud or self-hosted) with HTTP Request and form submission capabilities.
- Basic knowledge of AI prompts for product creative generation to achieve optimal results, especially for **3D figurines** and collectible designs.
  - Example prompt: Create a 1/7 scale commercialized **3D figurine** of the characters in the picture, in a realistic style, in a real environment. The **figurine** is placed on a computer desk. The **figurine** has a round transparent acrylic base, with no text on the base. The content on the computer screen is the Zbrush modeling process of this **figurine**. Next to the computer screen is a packaging box with rounded corner design and a transparent front window, the figure inside is clearly visible.

- A product image for creative generation.
- **Important Note**: Avoid using dark photos as input, as the generated **3D figurine** will also appear dark.

## Setup Instructions
1.  **Obtain API Key**: Register at Defapi.org and generate your API key. Store it securely—do not share it publicly.
2.  **Configure the Form**: In the "Upload Image" form trigger node, ensure the following fields are set up: Image (file upload), API Key (text field), and Prompt (text field).
3.  **Test the Workflow**:
    - Click "Execute Workflow" in n8n.
    - Access the generated form URL, upload your product image, enter your prompt, and provide your API key.
    - The workflow will process the image through the "Convert to JSON" node, then send the request to the Defapi API.
    - The system will wait 10 seconds and then poll the API status until the image generation is complete.
4.  **Handle Outputs**: The final "Format and Display Image Results" node formats and displays the generated creative image URL for download or embedding.

## Workflow Structure
The workflow consists of the following nodes:
1. **Upload Image** (Form Trigger) - Collects user input: image file, API key, and prompt
2. **Convert to JSON** (Code Node) - Converts uploaded image to base64 and formats data
3. **Send Image Generation Request to Defapi.org API** (HTTP Request) - Submits generation request
4. **Wait for Image Processing Completion** (Wait Node) - Waits 10 seconds before checking status
5. **Obtain the generated status** (HTTP Request) - Polls API for completion status
6. **Check if Image Generation is Complete** (IF Node) - Checks if status equals 'success'
7. **Format and Display Image Results** (Set Node) - Formats final image URL output

## Technical Details
- **API Endpoint**: `https://api.defapi.org/api/image/gen` (POST request)
- **Model Used**: `google/nano-banana` (**Nano Banana AI**)
- **Status Check Endpoint**: `https://api.defapi.org/api/task/query` (GET request)
- **Wait Time**: 10 seconds between status checks
- **Image Processing**: Uploaded images are converted to base64 format for API submission
- **Authentication**: Bearer token authentication using the provided API key
- **Specialized For**: **3D figurines**, collectible merchandise, and product visualization

## Customization Tips
- **Enhance Prompts**: Include specifics like scene setting, lighting, style (e.g., realistic, artistic, cinematic), product placement, and visual elements to improve AI creative image quality. For **3D figurines**, specify scale, materials, and display context.
- **Form Fields**: The form accepts image files (image/*), API key (text), and prompt (text) as required fields.
- **Error Handling**: The workflow includes conditional logic to check for successful completion before displaying results.
- **Best Practices for **Nano Banana AI****: Use detailed descriptions for **figurine** designs, specify lighting conditions, and include environmental context for realistic **3D figurine** generation.
- **Photo Quality Tips**: Use well-lit photos for best results. Avoid dark images as they will make the generated **3D figurine** appear dark too.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
