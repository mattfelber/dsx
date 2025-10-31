export interface DecisionNode {
  id: string;
  question: string;
  options: DecisionOption[];
  type?: 'start' | 'step' | 'action' | 'end';
}

export interface DecisionOption {
  text: string;
  nextNodeId: string | null;
  icon?: string;
  actionTaken?: string;
}

export interface TroubleshootingStep {
  nodeId: string;
  question: string;
  selectedOption: string;
  actionTaken?: string;
}
