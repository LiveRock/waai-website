// Vendored from robot-heads v0.3.0 — MIT © Fayaz Ahmed
// https://github.com/fayazara/robot-heads (vendored from main; core has no runtime deps)
// Trimmed for this site: RobotHeadProps (React-typed) removed — only the
// shape/state types the drawing core imports are kept.

/** What the robot is doing: each state has its own face on the screen, its own motion and its own antenna light. */
export type RobotHeadState =
  | 'idle'
  | 'thinking'
  | 'searching'
  | 'listening'
  | 'speaking'
  | 'working'
  | 'happy'
  | 'error'
  | 'sleeping';

/** The head's build. Only the TV head so far. */
export type RobotHeadModel = 'tv';

/** The outline of the head, seen from the front. Every shape carries the same screen, ears and antenna. */
export type RobotHeadShape = 'rectangle' | 'square' | 'circle' | 'hexagon';
