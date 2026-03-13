# 🎬 Automate 3D body model generation from images using SAM-3D & Google Sheets

> ⚡ **3,686 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

This workflow automates the process of **generating 3D human body models** (in `.glb` format) from **single image** using  SAM-3D model. It operates by connecting a Google Sheet as a data source with the external AI processing API. 

| Start | Result|
|--------|---------|
| ![image](https://n3wstorage.b-cdn.net/n3witalia/golf-swing.jpg) | ![image](https://n3wstorage.b-cdn.net/n3witalia/golf-swing-result.png) |



---

### **Use Cases**

#### **1. ✅ Sports Analysis & Motion Optimization**

3D models allow precise analysis of posture, angles, and technique.
Possible applications:

* **Golf swing analysis**
  Identify stance, rotation, shoulder/hip alignment, and follow-through.
* **Tennis serve biomechanics**
  Optimize shoulder rotation, racket angle, leg push-off.
* **Running gait analysis**
  Evaluate stride symmetry, foot strike, and body tilt.
* **Cycling posture optimization**
  Reduce drag by analyzing torso angle and hand position.
* **Swimming technique evaluations**
  Compare ideal vs. actual joint angles.

#### **2. ✅ Fitness, Health & Physiotherapy**

3D models can visually highlight imbalances or incorrect positions.

* **Posture correction assessments**
  Identify spinal misalignment or uneven weight distribution.
* **Physical therapy progress tracking**
  Compare poses over time to assess recovery.
* **Ergonomics and workplace safety**
  Evaluate whether a worker’s posture is safe during lifting or repetitive tasks.
* **Home fitness coaching**
  Automated feedback for yoga, pilates, stretching exercises.

#### **3. ✅ Fashion, Apparel & Virtual Try-On**

Photorealistic body reconstruction helps generate tailored outfits or evaluate fit.

* **Virtual try-on for clothing brands**
  Produce accurate 3D avatars to test garments digitally.
* **Custom-made fashion**
  Use 3D measurements for bespoke tailoring patterns.
* **Model pose simulation**
  Test clothing fit in dynamic or unusual positions (e.g., dance, athletic poses).

#### **4. ✅ Gaming, Animation & Digital Content Creation**

Quick 3D reconstruction reduces production time for digital humans.

* **Character rigging from real people**
  Generate 3D avatars ready for animation.
* **Motion capture alternatives**
  Recreate specific poses without expensive mocap systems.
* **VR/AR content creation**
  Deploy 3D characters into immersive environments.
* **Comics, illustration, and concept art**
  Use 3D poses as reference models to speed up drawing.

#### **5. ✅ Medical, Research & Educational Applications**

Human-body 3D models provide insights in scientific or practical contexts.

* **Anthropometric measurements**
  Estimate height, limb length, body proportions from images.
* **Posture and musculoskeletal studies**
  Analyze joint angle distribution in different poses.
* **Rehabilitation robotics or exoskeleton design**
  Fit devices to a patient’s real body shape.
* **Training materials for anatomy or movement science**
  Generate accurate pose examples for students.

#### **6.✅  Security, Forensics & Reconstruction**

When allowed ethically and legally, 3D models can support investigations.

* **Reconstruction of accident scenes**
  Understand how a person fell, collided, or moved.
* **Analysis of body posture in video frames**
  Useful for determining gesture patterns or mobility constraints.

#### **7. ✅ Art, Photography & Creative Industries**

Artists often need unusual or complex human poses.

* **Pose reference creation**
  For painting, 3D sculpting, illustration, or storyboarding.
* **Recreating dynamic action scenes**
  Parkour, martial arts, ballet, expressive dance.
* **Virtual studio lighting tests**
  Apply simulated lighting to a 3D model before shooting.

---

### **How It Works**

This workflow automates the process of generating 3D human body models (in `.glb` format) from single images using the FAL.AI SAM-3D service. It operates by connecting a Google Sheet as a data source with the external AI processing API. Here is the operational flow:

1.  **Trigger & Data Fetch:** The workflow begins either manually (via "Test workflow") or on a schedule. It queries a designated Google Sheet to find rows where the "3D RESULT" column is empty, indicating a new image needs processing.
2.  **API Request & Queuing:** For each new image, it sends the image URL to the FAL.AI SAM-3D API endpoint (`/fal-ai/sam-3/3d-body`), which queues the job and returns a unique `request_id`.
3.  **Status Polling & Waiting:** The workflow enters a polling loop. It waits 60 seconds, then checks the job's status using the `request_id`. If the status is not "COMPLETED", it waits another 60 seconds and checks again.
4.  **Result Retrieval & Storage:** Once the status is "COMPLETED", the workflow fetches the final result, which contains the URL of the generated 3D model file (`.glb`). This file is then downloaded via an HTTP request.
5.  **Sheet Update:** Finally, the workflow updates the original Google Sheet row. It writes the URL of the generated 3D model into the "IMAGE RESULT" column for the corresponding `row_number`, thus marking the task as complete.


---

### **Set Up Steps**

To configure this workflow in your n8n environment, follow these steps:

1.  **Prepare the Google Sheet:**
    *   Clone the provided Google Sheet template.
    *   Insert the URLs of the model images you want to convert into the "IMAGE MODEL" column.
    *   Leave the "IMAGE RESULT" column empty; it will be populated automatically.
    *   In n8n, set up a "Google Sheets OAuth2 API" credential and connect it to the **Get new image** and **Update result** nodes. Ensure the `documentId` points to your cloned sheet.

2.  **Configure the FAL.AI API Connection:**
    *   Create an account at [fal.ai](https://fal.ai/) and obtain your API key.
    *   In n8n, create an "HTTP Header Auth" credential. Set the **Header Name** to `Authorization` and the **Header Value** to `Key YOUR_API_KEY_HERE` (replace with your actual key).
    *   Apply this credential to the following nodes: **Create 3D Image**, **Get status**, and **Get Url 3D image**.

3.  **Verify Workflow Logic (Key Nodes):**
    *   **Get new image:** Confirm the `filtersUI` is set to look for empty rows in the correct column (e.g., "3D RESULT" or "IMAGE RESULT").
    *   **Create 3D Image:** Verify the JSON body correctly references the image URL from the previous node (`{{ $json.image }}`).
    *   **Completed? (If node):** Ensure the condition checks for the string `COMPLETED` from `{{ $json.status }}`.
    *   **Update result:** Double-check that the column mapping correctly uses `row_number` to match the row and updates the "IMAGE RESULT" column with the GLB URL 
4.  **Activate & Test:**
    *   Save the workflow.
    *   Use the **When clicking ‘Test workflow’** node for an initial manual test with one image URL in your sheet.
    *   Once confirmed working, you can enable the **Schedule Trigger** node for automatic, periodic execution.

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
