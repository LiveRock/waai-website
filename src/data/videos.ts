export interface Video {
  /** YouTube video ID (the part after youtu.be/ or watch?v=) */
  id: string;
  /** Title shown beneath the video card — editable for marketing */
  title: string;
}

/**
 * Featured YouTube videos shown in the homepage carousel.
 * Titles are editable here for marketing control. The video ID is the
 * source of truth for which clip plays.
 */
export const videos: Video[] = [
  { id: 'FYWVnfP-EEo', title: 'Extra Pair of Hands' },
  { id: 'PWM3RanP8rQ', title: 'Peace of Mind' },
  { id: '--8IlCVWsNI', title: 'Lost Opportunities' },
  { id: '14lt0wRuMw4', title: 'Language Conundrum?' },
];
