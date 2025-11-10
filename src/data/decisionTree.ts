import { DecisionNode } from '../types';

export const decisionTree: Record<string, DecisionNode> = {
  'start': {
    id: 'start',
    question: '🔌 DSXi Docking Station – Troubleshooting START:',
    type: 'start',
    options: [
      {
        text: 'There is a checkmark next to "iNet" on the dock display',
        nextNodeId: 'working',
        icon: 'check',
        actionTaken: 'Confirmed network is working with checkmark next to iNet'
      },
      {
        text: 'Shows an X',
        nextNodeId: 'ethernet-check',
        icon: 'x',
        actionTaken: 'Identified dock showing X (not connected to network)'
      },
      {
        text: 'Shows an arrow up (The dock is trying to upload)',
        nextNodeId: 'arrow-up-wait',
        icon: 'arrow-up',
        actionTaken: 'Identified dock showing arrow up (attempting to upload)'
      }
    ]
  },
  'arrow-up-wait': {
    id: 'arrow-up-wait',
    question: 'The arrow up symbol (⬆️) indicates the dock is attempting to upload to iNet.\n\nPlease check the following:\n\n→ Look at the "last upload time" in iNet for this dock\n   • If the upload time is very recent (within last few minutes), the connection is working\n   • The dock may still show the arrow while completing its upload cycle\n\n→ Wait up to 10 minutes to see if the status changes to a checkmark',
    type: 'step',
    options: [
      {
        text: 'Recent upload time in iNet or status changed to checkmark (✓)',
        nextNodeId: 'working',
        icon: 'check',
        actionTaken: 'Confirmed connection is working based on upload time or status change'
      },
      {
        text: 'No recent upload time and status shows X or arrow up after waiting',
        nextNodeId: 'ethernet-check',
        actionTaken: 'Connection attempt failed or timed out after waiting'
      }
    ]
  },
  'working': {
    id: 'working',
    question: 'The network is working — no further action needed.',
    type: 'end',
    options: [
      {
        text: 'END: Troubleshooting complete',
        nextNodeId: null,
        actionTaken: 'Confirmed network connection is working correctly'
      }
    ]
  },
  'ethernet-check': {
    id: 'ethernet-check',
    question: 'Is the Ethernet cable plugged in with the LED on the port lit up?',
    type: 'step',
    options: [
      {
        text: 'The Ethernet cable is plugged in and the LED is lit',
        nextNodeId: 'step1',
        icon: 'check',
        actionTaken: 'Confirmed Ethernet cable is connected with LED lit'
      },
      {
        text: 'The Ethernet cable is not plugged in or LED is not lit',
        nextNodeId: 'reconnect-ethernet',
        icon: 'x',
        actionTaken: 'Identified Ethernet cable issue (not connected or LED not lit)'
      }
    ]
  },
  'reconnect-ethernet': {
    id: 'reconnect-ethernet',
    question: 'Reseat the cable securely. → Replace with a known-good Ethernet cable (cable could be faulty). → Connect to a known-working Ethernet port. → Reboot the dock.',
    type: 'action',
    options: [
      {
        text: 'Ethernet cable connected and LED is now lit',
        nextNodeId: 'step1',
        icon: 'check',
        actionTaken: 'Connected Ethernet cable properly and verified LED is lit'
      },
      {
        text: 'LED still not lit after reconnecting cable',
        nextNodeId: 'try-different-cable-first',
        icon: 'x',
        actionTaken: 'LED still not lit after reconnecting Ethernet cable'
      }
    ]
  },
  'try-different-cable-first': {
    id: 'try-different-cable-first',
    question: 'Try using a different Ethernet cable that is known to work. Also try connecting to a different network port if available.',
    type: 'action',
    options: [
      {
        text: 'LED is now lit with new cable/port',
        nextNodeId: 'step1',
        icon: 'check',
        actionTaken: 'Replaced cable/changed port and LED is now lit'
      },
      {
        text: 'LED still not lit after trying different cable/port',
        nextNodeId: 'hardware-failure',
        icon: 'x',
        actionTaken: 'LED remains unlit after trying different cable and port'
      }
    ]
  },
  'step1': {
    id: 'step1',
    question: 'Step 1 – Preparation:\n',
    type: 'step',
    options: [
      {
        text: 'Undock the gas monitor and note what IP address appears on the dock display.',
        nextNodeId: 'step2',
        actionTaken: 'Undocked gas monitor and asked for IP address shown on display'
      }
    ]
  },
  'step2': {
    id: 'step2',
    question: 'Step 2 – Evaluate the IP Address:\n',
    type: 'step',
    options: [
      {
        text: 'The IP address is NOT valid — shows as 0.0.0.0 or 169.254.x.x',
        nextNodeId: 'step3',
        actionTaken: 'Identified invalid IP address (0.0.0.0 or 169.254.x.x)'
      },
      {
        text: 'The IP address appears valid — meaning it\'s not 0.0.0.0 or 169.254.x.x (for example: 192.168.x.x, 10.x.x.x, etc.)',
        nextNodeId: 'step5',
        actionTaken: 'Identified valid IP address'
      }
    ]
  },
  'step3': {
    id: 'step3',
    question: 'Step 3 – Physical Connection Check:\n\nIs the Ethernet cable LED on the dock\'s port blinking?',
    type: 'step',
    options: [
      {
        text: 'No (LED off) / cable loose or potentially bad',
        nextNodeId: 'reconnect',
        actionTaken: 'Identified physical connection issue (LED off, loose or bad cable)'
      },
      {
        text: 'Yes, LED is blinking',
        nextNodeId: 'step4',
        actionTaken: 'Confirmed LED is blinking on Ethernet port'
      }
    ]
  },
  'reconnect': {
    id: 'reconnect',
    question: '→ Reseat the cable securely.\n→ Replace with a known-good Ethernet cable (cable could be faulty).\n→ Connect to a known-working Ethernet port.\n→ Reboot the dock.',
    type: 'action',
    options: [
      {
        text: 'Check IP again after replacing cable and rebooting',
        nextNodeId: 'step2',
        actionTaken: 'Replaced with known-good cable, connected to working port, and rebooted dock'
      }
    ]
  },
  'step4': {
    id: 'step4',
    question: 'Step 4 – Verify Router or Switch Connection:\n\nIs the dock connected to a router or network switch?',
    type: 'step',
    options: [
      {
        text: 'No',
        nextNodeId: 'connect-router',
        actionTaken: 'Identified dock not connected to router/switch'
      },
      {
        text: 'Yes',
        nextNodeId: 'reboot-check',
        actionTaken: 'Confirmed dock is connected to router/switch'
      }
    ]
  },
  'connect-router': {
    id: 'connect-router',
    question: '→ Use a known good Ethernet cable.\n→ Plug the cable into a known working router or switch port.\n→ Reboot the dock.\n→ Check IP again.',
    type: 'action',
    options: [
      {
        text: 'Check IP after connecting to router/switch and rebooting',
        nextNodeId: 'check-ip-again',
        actionTaken: 'Used known good Ethernet cable and connected dock to working router/switch port, then rebooted'
      }
    ]
  },
  'reboot-check': {
    id: 'reboot-check',
    question: '→ Reboot the dock anyway.\n→ After reboot, check the IP again.',
    type: 'action',
    options: [
      {
        text: 'Check IP after rebooting',
        nextNodeId: 'check-ip-again',
        actionTaken: 'Rebooted dock to refresh IP address'
      }
    ]
  },
  'check-ip-again': {
    id: 'check-ip-again',
    question: 'Now check the new IP address:',
    type: 'step',
    options: [
      {
        text: '0.0.0.0',
        nextNodeId: 'try-different-cable',
        actionTaken: 'IP address still showing 0.0.0.0 after reboot'
      },
      {
        text: '169.254.x.x',
        nextNodeId: 'escalate-dhcp',
        actionTaken: 'IP address showing 169.254.x.x (DHCP not assigning IP)'
      },
      {
        text: 'Still 0.0.0.0 after all tests',
        nextNodeId: 'hardware-failure',
        actionTaken: 'IP address persistently showing 0.0.0.0 after all tests'
      },
      {
        text: 'Valid IP',
        nextNodeId: 'step5',
        actionTaken: 'Valid IP address obtained after reboot'
      }
    ]
  },
  'try-different-cable': {
    id: 'try-different-cable',
    question: 'Try a different Ethernet cable and port known to work, then reboot again.',
    type: 'action',
    options: [
      {
        text: 'Check IP after changing cable/port and rebooting',
        nextNodeId: 'check-ip-again',
        actionTaken: 'Replaced Ethernet cable and changed port, then rebooted'
      }
    ]
  },
  'escalate-dhcp': {
    id: 'escalate-dhcp',
    question: 'DHCP not assigning IP → Escalate to SE team.',
    type: 'end',
    options: [
      {
        text: 'END: Escalate to SE team',
        nextNodeId: null,
        actionTaken: 'Escalated DHCP issue to SE team'
      }
    ]
  },
  'hardware-failure': {
    id: 'hardware-failure',
    question: 'Likely hardware/network interface failure → Send for repair or replacement.',
    type: 'end',
    options: [
      {
        text: 'END: Send for repair or replacement',
        nextNodeId: null,
        actionTaken: 'Recommended sending dock for repair or replacement due to likely hardware failure'
      }
    ]
  },
  'step5': {
    id: 'step5',
    question: 'Step 5 – Valid IP but No iNet Connection:\n\nThe dock has a valid IP address but still shows ❌ next to iNet. This means the network connection is working, but the dock cannot communicate with the iNet server.',
    type: 'step',
    options: [
      {
        text: '→ First, ensure no monitors are docked\n→ Then reboot the docking station to attempt reconnection',
        nextNodeId: 'check-after-reboot',
        actionTaken: 'Removed docked monitors and rebooted docking station'
      }
    ]
  },
  'check-after-reboot': {
    id: 'check-after-reboot',
    question: 'After rebooting:\n\n1. You should see an arrow up (⬆️) while the dock is attempting to upload data\n2. If successful, this will change to a checkmark (✓) once fully uploaded\n3. Watch for approximately 5-10 minutes to see if the upload completes',
    type: 'step',
    options: [
      {
        text: 'A checkmark (✓) appears — connection established',
        nextNodeId: 'working',
        icon: 'check',
        actionTaken: 'Upload completed successfully, checkmark appeared'
      },
      {
        text: 'Still shows X or arrow up after waiting — not connecting despite valid IP',
        nextNodeId: 'escalate',
        actionTaken: 'Connection failed after reboot despite valid IP'
      }
    ]
  },
  'escalate': {
    id: 'escalate',
    question: 'Escalate to SE team.',
    type: 'end',
    options: [
      {
        text: 'END: Escalate to SE team',
        nextNodeId: null,
        actionTaken: 'Escalated issue to SE team'
      }
    ]
  },
  'summary': {
    id: 'summary',
    question: 'Summary Table\n\nDock IP Address | Meaning | Action (Undock monitor first)\n0.0.0.0 | No connection / bad cable / bad port / hardware fault | Check cable + port, reboot → Replace/repair if persists.\n169.254.x.x | Link detected but no DHCP | Verify router/switch, reboot → Escalate if persists.\nValid IP (e.g. 192.168.x.x) | Network OK but no server connection | Undock & Reboot. If the issue persists, escalate to SE.',
    type: 'end',
    options: [
      {
        text: 'END: Review summary',
        nextNodeId: null,
        actionTaken: 'Reviewed troubleshooting summary table'
      }
    ]
  }
};
