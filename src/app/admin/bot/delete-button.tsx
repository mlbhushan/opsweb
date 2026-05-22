"use client";

import { useTransition } from "react";
import { deleteKnowledgeDoc } from "./actions";

export function DeleteButton({ id }: { id: string }) {
  const [pending, startTransition] = useTransition();

  function handleClick() {
    if (!confirm("Delete this document? This cannot be undone.")) return;
    const fd = new FormData();
    fd.set("_id", id);
    startTransition(() => {
      deleteKnowledgeDoc(fd);
    });
  }

  return (
    <button
      onClick={handleClick}
      disabled={pending}
      style={{
        padding: "5px 12px",
        fontSize: 12,
        fontWeight: 600,
        fontFamily: "'Cabinet Grotesk', sans-serif",
        background: "transparent",
        color: pending ? "#a8aeb6" : "#ef4444",
        border: `1.5px solid ${pending ? "#e2e5e9" : "#fca5a5"}`,
        borderRadius: 6,
        cursor: pending ? "not-allowed" : "pointer",
      }}
    >
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
}
