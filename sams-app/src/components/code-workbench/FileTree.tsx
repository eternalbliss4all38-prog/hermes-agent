"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { ChevronRight, File, Folder } from "lucide-react";
import type { TreeNode } from "@/lib/workbench";

function DirNode({ node, onSelect, selected }: { node: TreeNode; onSelect: (path: string) => void; selected: string | null }) {
  const [open, setOpen] = useState(false);
  const [children, setChildren] = useState<TreeNode[] | null>(null);

  const toggle = async () => {
    if (!open && children === null) {
      const res = await fetch(`/api/workbench/tree?dir=${encodeURIComponent(node.path)}`);
      setChildren(res.ok ? await res.json() : []);
    }
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={toggle} className="flex w-full items-center gap-1 rounded px-1 py-0.5 text-left text-xs text-muted hover:text-foreground">
        <ChevronRight size={12} className={clsx("transition-transform", open && "rotate-90")} />
        <Folder size={12} />
        <span className="truncate">{node.name}</span>
      </button>
      {open && children && (
        <div className="ml-3 border-l border-panel-border pl-1.5">
          {children.map((c) =>
            c.type === "dir" ? (
              <DirNode key={c.path} node={c} onSelect={onSelect} selected={selected} />
            ) : (
              <button
                key={c.path}
                onClick={() => onSelect(c.path)}
                className={clsx(
                  "flex w-full items-center gap-1 rounded px-1 py-0.5 text-left text-xs",
                  selected === c.path ? "bg-panel-hover text-foreground" : "text-muted hover:text-foreground",
                )}
              >
                <File size={12} className="ml-3.5 shrink-0" />
                <span className="truncate">{c.name}</span>
              </button>
            ),
          )}
        </div>
      )}
    </div>
  );
}

export function FileTree({ onSelect, selected }: { onSelect: (path: string) => void; selected: string | null }) {
  const [roots, setRoots] = useState<TreeNode[]>([]);

  useEffect(() => {
    fetch("/api/workbench/tree").then((r) => r.json()).then(setRoots);
  }, []);

  return (
    <div className="overflow-y-auto p-2 text-xs">
      {roots.map((n) =>
        n.type === "dir" ? (
          <DirNode key={n.path} node={n} onSelect={onSelect} selected={selected} />
        ) : (
          <button
            key={n.path}
            onClick={() => onSelect(n.path)}
            className={clsx(
              "flex w-full items-center gap-1 rounded px-1 py-0.5 text-left",
              selected === n.path ? "bg-panel-hover text-foreground" : "text-muted hover:text-foreground",
            )}
          >
            <File size={12} />
            <span className="truncate">{n.name}</span>
          </button>
        ),
      )}
    </div>
  );
}
