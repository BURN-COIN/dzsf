export interface TokenomicData {
  name: string;
  value: number;
  color: string;
  description: string;
}

export interface ContractItem {
  label: string;
  address: string;
  icon?: 'copy' | 'burn' | 'wallet';
}

export interface MeetingInfo {
  title: string;
  id: string;
}
