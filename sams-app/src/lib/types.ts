export type AgentStatus = "running" | "unhealthy" | "stopped" | "not_deployed" | "not_configured";

export interface AgentSummary {
  id: string;
  name: string;
  title: string;
  level: "Executive" | "Engineering" | "Intelligence" | "Execution" | "Parallel Swarm";
  status: AgentStatus;
  container?: string;
  uptimeSeconds?: number;
  cpuPercent?: number;
  memMB?: number;
  source: "docker" | "static";
  /** How this agent is actually backed (container, CLI, OpenRouter model). */
  backing?: string;
  /** Why the agent is in this state -- set from a real probe, never invented. */
  reason?: string;
}

export interface SystemStatus {
  host: {
    cpuPercent: number;
    memUsedMB: number;
    memTotalMB: number;
    uptimeSeconds: number;
  };
  containers: {
    name: string;
    status: AgentStatus;
    cpuPercent: number;
    memMB: number;
    memLimitMB: number;
  }[];
  costMeter: {
    wired: boolean;
    note: string;
    valid?: boolean;
    usageUsd?: number | null;
    label?: string | null;
  };
  generatedAt: string;
}

export interface MemoryNode {
  id: string;
  label: string;
  group: "identity" | "journal" | "skill" | "failure" | "project";
  path: string;
  sizeBytes: number;
  modifiedAt: string;
}

export interface MemoryEdge {
  source: string;
  target: string;
}

export interface ApprovalCard {
  id: string;
  title: string;
  requestingAgent: string;
  risk: "low" | "medium" | "high" | "critical";
  impactSummary: string;
  humanExplanation: string;
  technicalDetail: string;
  createdAt: string;
  status: "pending" | "approved" | "rejected" | "changes_requested";
}
