export interface ParsedCommand {
  command: string;
  args: string[];
}

export function parseCommand(input: string): ParsedCommand {
  const parts = input.trim().split(/\s+/);

  const command = parts[0]?.toLowerCase() ?? "";
  const args = parts.slice(1);

  return {
    command,
    args,
  };
}