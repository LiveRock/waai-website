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
  { id: 'dBVjaErhWaY', title: 'Extra Pair of Hands' },
  { id: '5KMPyUHWv5Q', title: 'Peace of Mind' },
  { id: 'zE9qm2tiUdA', title: 'Language Conundrum?' },
  { id: 'NtqHXkjI_uk', title: 'Lost Opportunities' },
];
