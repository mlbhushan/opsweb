"use client";

type Props = {
  suggestions: string[];
  onSelect: (text: string) => void;
  disabled?: boolean;
};

export function ChatSuggestions({ suggestions, onSelect, disabled }: Props) {
  if (suggestions.length === 0) return null;

  return (
    <div
      style={{
        padding: "8px 14px 4px",
        display: "flex",
        flexWrap: "wrap",
        gap: 6,
      }}
    >
      {suggestions.map((s) => (
        <button
          key={s}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(s)}
          style={{
            padding: "5px 12px",
            fontSize: 12,
            fontWeight: 600,
            fontFamily: "'Cabinet Grotesk', var(--font-heading), sans-serif",
            color: disabled ? "#a8aeb6" : "#084182",
            background: disabled ? "#f0f1f3" : "#f0f7fd",
            border: `1.5px solid ${disabled ? "#e2e5e9" : "rgba(8,65,130,0.15)"}`,
            borderRadius: 9999,
            cursor: disabled ? "not-allowed" : "pointer",
            transition: "all 150ms ease",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            if (!disabled) {
              (e.target as HTMLButtonElement).style.background = "#e0f0fb";
              (e.target as HTMLButtonElement).style.borderColor = "#084182";
            }
          }}
          onMouseLeave={(e) => {
            if (!disabled) {
              (e.target as HTMLButtonElement).style.background = "#f0f7fd";
              (e.target as HTMLButtonElement).style.borderColor = "rgba(8,65,130,0.15)";
            }
          }}
        >
          {s}
        </button>
      ))}
    </div>
  );
}
