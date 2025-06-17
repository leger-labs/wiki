<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# how would i run or integrate openwebui with pocketflow agents

To integrate Open WebUI with PocketFlow agents, you can leverage Open WebUI's Pipelines framework which allows for custom integrations and functionality extensions. Here's how to set it up:

## Installation Options

First, you need to install Open WebUI. You have several options:

### Docker Installation (Recommended)

```bash
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

For GPU support, use:

```bash
docker run -d -p 3000:8080 --gpus all --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:cuda
```


### Manual Installation

You can also install using Python package managers:

With `uv` (recommended):

```bash
DATA_DIR=~/.open-webui uvx --python 3.11 open-webui@latest serve
```

With `pip`:

```bash
pip install open-webui
open-webui serve
```


## Integration with PocketFlow Agents

To integrate PocketFlow agents with Open WebUI:

1. **Create a PocketFlow Agent**: Develop your agent using PocketFlow's framework (100-line LLM framework)[^1_3].
2. **Use Open WebUI's Pipelines Framework**: Open WebUI's modular plugin framework allows for custom integrations[^1_4].
3. **Upload Your Pipeline**:
    - Go to Admin Panel > Settings > Pipelines
    - Upload your custom pipeline that connects to your PocketFlow agent[^1_4]
4. **Configure API Connection**:
    - If your PocketFlow agent exposes an OpenAI-compatible API, add it as a connection in Open WebUI
    - Under Admin Panel > Settings > Connections, add a new connection with the appropriate URL and credentials[^1_6]

## N8N Integration Example

You can follow the approach demonstrated in the PocketFlow video tutorial:

1. Set up the Local AI Stack with Open WebUI
2. Create RAG AI Agent N8N workflows
3. Integrate Open WebUI with N8N
4. Chat with your N8N agent directly in Open WebUI
5. Utilize voice chat functionality to interact with your agents[^1_1]

## Function Calling

Open WebUI supports native Python function calling, which you can use to connect to your PocketFlow agents:

1. Use the built-in code editor in the Tools and Functions workspace
2. Implement custom code that interfaces with your PocketFlow agents
3. Leverage the Python code execution capabilities to run your agent logic[^1_4]

This integration allows you to create a seamless experience where you can interact with your PocketFlow agents through Open WebUI's user-friendly interface, including voice chat capabilities.

<div style="text-align: center">⁂</div>

[^1_1]: https://www.youtube.com/watch?v=E2GIZrsDvuM

[^1_2]: https://docs.openwebui.com

[^1_3]: https://github.com/The-Pocket/PocketFlow

[^1_4]: https://docs.openwebui.com/features/

[^1_5]: https://aitesterkit.netlify.app/docs/learning-resources/open-source-llms/open-webui/

[^1_6]: https://docs.openwebui.com/tutorials/integrations/amazon-bedrock/

[^1_7]: https://docs.openwebui.com/getting-started/quick-start/

[^1_8]: https://docs.openwebui.com/getting-started/

[^1_9]: https://github.com/open-webui/open-webui/issues/2537

[^1_10]: https://www.reddit.com/r/selfhosted/comments/1jbk06h/the_complete_guide_to_building_your_free_local_ai/

[^1_11]: https://github.com/open-webui/open-webui/discussions/5033

[^1_12]: https://github.com/open-webui/open-webui

[^1_13]: https://github.com/open-webui/open-webui/discussions/2546

[^1_14]: https://docs.openwebui.com/category/-integrations/

[^1_15]: https://ytscribe.com/v/E2GIZrsDvuM

[^1_16]: https://www.youtube.com/watch?v=w8os5IqnmcE

[^1_17]: https://www.youtube.com/watch?v=q0F4fTUh1-s

