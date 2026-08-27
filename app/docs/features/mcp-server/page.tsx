import type { Metadata } from "next";
import DocsLayout from "@/components/docs/DocsLayout";
import DocsContent from "@/components/docs/DocsContent";
import DocsImageBox from "@/components/docs/DocsImageBox";

export const metadata: Metadata = {
  title: "MCP Server | Connetra Documentation",
  description: "Connetra documentation for MCP Server.",
};

export default function MCPServerPage() {
  return (
    <DocsLayout>
      <DocsContent
        title="MCP Server"
        breadcrumbs={[
          { label: "Documentation", href: "/docs/intro" },
          { label: "Features" },
          { label: "MCP Server" }
        ]}
        prevPage={{ title: "Integrations", href: "/docs/integration-options" }}
        nextPage={{ title: "Billing Policy", href: "/docs/plans-Billing/billing-policy" }}
      >
<p className="docs-lead-paragraph">
          The Connetra MCP Server enables AI assistants to securely connect to your Connetra workspace using the Model Context Protocol (MCP). Once connected, supported AI clients can access your organization&apos;s metadata, data catalog, lineage, glossary, and other business context directly from Connetra.
        </p>

        <h2 id="what-is-mcp" className="docs-article-h2">
          What is MCP?
        </h2>
        <p className="docs-article-p">
          The Model Context Protocol (MCP) is an open standard that enables AI applications to communicate with external tools and services. Instead of relying solely on the information available in a conversation, MCP allows AI assistants to securely retrieve live information from connected systems.
        </p>
        <p className="docs-article-p">
          By connecting Connetra through MCP, your AI assistant can understand your organization&apos;s data landscape and answer questions using your Connetra workspace.
        </p>

        <h2 id="why-use-connetra-mcp" className="docs-article-h2">
          Why Use Connetra MCP?
        </h2>
        <p className="docs-article-p">With Connetra MCP connected, you can:</p>
        <ul className="docs-list">
          <li>Search datasets and tables</li>
          <li>Discover business glossary terms</li>
          <li>Explore metadata and documentation</li>
          <li>View data lineage</li>
          <li>Find dashboards and related assets</li>
          <li>Search schemas and columns</li>
          <li>Understand data relationships</li>
          <li>Ask natural language questions about your data catalog</li>
        </ul>

        <h2 id="prerequisites" className="docs-article-h2">
          Prerequisites
        </h2>
        <ul className="docs-list">
          <li>A Connetra account with access to at least one workspace</li>
          <li>A Connetra Personal Access Token (or API key)</li>
          <li>Node.js (version 18 or higher) with npx available</li>
          <li>A supported AI assistant client (Claude Desktop, Cursor, VS Code with Cline or Roo Code)</li>
        </ul>

        <h2 id="claude-desktop-configuration" className="docs-article-h2">
          Claude Desktop Configuration
        </h2>
        <p className="docs-article-p">
          Add the following configuration block to your Claude Desktop config file (<code className="docs-inline-code">claude_desktop_config.json</code>):
        </p>
        <pre className="docs-code-block"><code>{`{
  "mcpServers": {
    "connetra": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://mcp.connetra.com/mcp",
        "--header",
        "Authorization: Bearer <YOUR_ACCESS_TOKEN>",
        "--allow-http"
      ],
      "env": {
        "MCP_TIMEOUT": "120000"
      }
    }
  }
}`}</code></pre>

        <h2 id="cursor-configuration" className="docs-article-h2">
          Cursor Configuration
        </h2>
        <p className="docs-article-p">
          In Cursor, go to <strong>Settings -&gt; Features -&gt; MCP Servers -&gt; Add New MCP Server</strong>:
        </p>
        <pre className="docs-code-block"><code>{`"connetra": {
  "command": "npx",
  "args": [
    "mcp-remote",
    "https://mcp.connetra.com/mcp",
    "--header",
    "Authorization: Bearer <YOUR_ACCESS_TOKEN>",
    "--allow-http"
  ],
  "env": {
    "MCP_TIMEOUT": "120000"
  }
}`}</code></pre>
      </DocsContent>
    </DocsLayout>
  );
}
