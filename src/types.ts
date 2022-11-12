export interface PartProps {
  tint?: string;
  mid?: string;
  shade?: string;
  female?: boolean;
  height?: string;
  width?: string;
  rand?: number;
  accent?: string;
  metadata?: Metadata;
}

export interface Metadata {
  hair: {
    style: number;
    color: number;
  };
  eyes: boolean;
  blood: number;
  body: number;
  background: {
    color: number;
    style: number;
  };
  hat: { style: number; color: number };
  gore: number;
  outfit: { style: number; color: number };
  accessory: number;
  skulls: number;
}
