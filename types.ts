export type Party = string;

export const PredefinedParties = [
  'Progressive Alliance',
  'National Conservatives',
  'Green Earth Party',
  'Liberty Front',
  'Independent'
];

export interface Candidate {
  id: string;
  name: string;
  party: string;
  symbol: string; // Emoji or image URL placeholder
  color: string;
}

export interface Vote {
  id: string;
  // candidateId removed to ensure individual votes cannot be inspected by admin
  encryptedPayload: string; // The actual secure vote
  timestamp: number;
  voteHash: string; // Simulates encrypted vote
  boothId: string; // Track origin booth, but not the voter
}

export interface VoterSettings {
  highContrast: boolean;
  largeText: boolean;
  audioGuide: boolean;
  language: 'en' | 'hi';
}

export interface ElectionState {
  isActive: boolean;
  totalVotes: number;
  candidates: Candidate[];
}

export type ViewMode = 'SPLASH' | 'ADMIN' | 'BOOTH';

export interface AdminUser {
  username: string;
  role: 'admin';
}

// --- WebSocket Protocol Types ---

export type ConnectionStatus = 'CONNECTING' | 'AUTHENTICATING' | 'ONLINE' | 'LOCKED' | 'OFFLINE' | 'RECONNECTING';

export type SocketMessageType = 
  | 'AUTH' 
  | 'AUTH_SUCCESS' 
  | 'AUTH_FAILED'
  | 'HEARTBEAT' 
  | 'HEARTBEAT_ACK'
  | 'ELECTION_STARTED' 
  | 'ELECTION_STOPPED' 
  | 'LOCK_BOOTH'
  | 'VOTE' 
  | 'VOTE_ACK' 
  | 'VOTE_ERROR';

export interface SocketMessage {
  type: SocketMessageType;
  payload?: any;
}

export interface ConnectedBooth {
  id: string;
  status: 'ONLINE' | 'OFFLINE';
  lastHeartbeat: number;
}