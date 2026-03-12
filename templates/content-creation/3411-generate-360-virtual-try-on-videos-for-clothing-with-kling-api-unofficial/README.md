# 🎬 Generate 360° virtual try-on videos for clothing with Kling API (unofficial)

> ⚡ **3,283 views** · 🎬 [Content Creation & Video](../)

## Description

### What's the workflow used for？
Leverage this Kling API (unofficial) provided by [**PiAPI**](https://piapi.ai) workflow to streamline virtual try-on video creation. This tool is designed for **e-commerce platforms**, **fashion brands**, **content creators** and **content influencers**. By uploading model and clothing images and linking PiAPI account, users can swiftly generate a realistic video of the model sporting the outfit with a 360° turn, offering an immersive viewing experience. 

### Step-by-step Instruction
For basic settings of virtual try-on, check [API doc](https://piapi.ai/docs/kling-api/virtual-try-on-api) to get best practice. 
1. Fill in your X-API-Key of your PiAPI account in Preset Parameters node.![image](https://i.ibb.co/1JQq9dR4/We-Chate21a52e115807ada2ac43778300fb940.jpg)
2. Upload the model photo and provide target clothing image urls.
2. Click **Test Workflow** to generate virtual try-on image.
3. Get the video output in the final node.

### Param Settings
1. If you want to change into a dress, input the `model_input` URL and the `dress_input` URL in the parameters.
2. If you want to change into separates, input `model_input` URL, `upper_input` URL and `lower_input` URL in **Preset Parameters**.
![example](https://i.ibb.co/tP3WKCpT/Frame-3431.png)

### Use Case
Input images：
![model](https://i.ibb.co/gL5ZrjYH/model.jpg)
![dress](https://i.ibb.co/qL7RsS86/dress.jpg)


**Output Video**
 <video src="https://static.piapi.ai/n8n-instruction/virtual-try-on/example1.mp4" controls />
The output demonstrates that the model is wearing the clothing from the specified image and showcases a rotating runway-style view.

This workflow enables you to efficiently test garment-on-model presentation effects while reducing business model validation costs to a certain extent.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
