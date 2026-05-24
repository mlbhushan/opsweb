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
            padding: "6px 12px",
            fontSize: 12,
            fontWeight: 600,
            fontFamily: "'Inter', sans-serif",
            color: disabled ? "#a8aeb6" : "#032044",
            background: disabled ? "#f0f1f3" : "#fff",
            border: `1px solid ${disabled ? "#e2e5e9" : "rgba(8,65,130,0.15)"}`,
            borderRadius: 6,
            cursor: disabled ? "not-allowed" : "pointer",
            transition: "all 150ms ease",
            whiteSpace: "nowrap",
            boxShadow: "0 1px 2px rgba(0,0,0,0.02)"
          }}
          onMouseEnter={(e) => {
            if (!disabled) {
              (e.target as HTMLButtonElement).style.background = "#fafafa";
              (e.target as HTMLButtonElement).style.borderColor = "#032044";
            }
          }}
          onMouseLeave={(e) => {
            if (!disabled) {
              (e.target as HTMLButtonElement).style.background = "#fff";
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
