export interface Tool {
  id: string;
  name: string;
  category: string;
  type: 'tool' | 'app';
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  website?: string;
  favorite: boolean;
  tags: string[];
}

export const tools: Tool[] = [
  // Development Tools
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'Editor',
    type: 'tool',
    description: 'My primary code editor with countless extensions',
    icon: 'ri:code-s-slash-line',
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/20',
    borderColor: 'border-blue-400/30',
    website: 'https://code.visualstudio.com',
    favorite: true,
    tags: ['development', 'editor', 'microsoft']
  },
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'Editor',
    type: 'tool',
    description: 'AI-powered code editor for the future',
    icon: 'ri:cursor-line',
    color: 'text-green-400',
    bgColor: 'bg-green-400/20',
    borderColor: 'border-green-400/30',
    website: 'https://cursor.sh',
    favorite: true,
    tags: ['development', 'ai', 'editor']
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'Version Control',
    type: 'tool',
    description: 'Essential for version control and collaboration',
    icon: 'ri:github-line',
    color: 'text-gray-300',
    bgColor: 'bg-gray-300/20',
    borderColor: 'border-gray-300/30',
    website: 'https://github.com',
    favorite: true,
    tags: ['development', 'git', 'collaboration']
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'API Testing',
    type: 'tool',
    description: 'API development and testing platform',
    icon: 'ri:send-plane-line',
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/20',
    borderColor: 'border-orange-400/30',
    website: 'https://postman.com',
    favorite: false,
    tags: ['development', 'api', 'testing']
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'DevOps',
    type: 'tool',
    description: 'Containerization platform for consistent environments',
    icon: 'ri:ship-line',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/20',
    borderColor: 'border-blue-500/30',
    website: 'https://docker.com',
    favorite: false,
    tags: ['development', 'devops', 'containers']
  },

  // Design Tools
  {
    id: 'figma',
    name: 'Figma',
    category: 'Design',
    type: 'tool',
    description: 'Collaborative design and prototyping platform',
    icon: 'ri:pencil-ruler-2-line',
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/20',
    borderColor: 'border-purple-400/30',
    website: 'https://figma.com',
    favorite: true,
    tags: ['design', 'ui', 'collaboration']
  },
  {
    id: 'sketch',
    name: 'Sketch',
    category: 'Design',
    type: 'tool',
    description: 'Vector graphics editor for UI design',
    icon: 'ri:palette-line',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/20',
    borderColor: 'border-yellow-500/30',
    website: 'https://sketch.com',
    favorite: false,
    tags: ['design', 'ui', 'vector']
  },

  // Productivity Apps
  {
    id: 'linear',
    name: 'Linear',
    category: 'Project Management',
    type: 'app',
    description: 'Beautiful and fast issue tracking for software teams',
    icon: 'ri:task-line',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-400/20',
    borderColor: 'border-indigo-400/30',
    website: 'https://linear.app',
    favorite: true,
    tags: ['productivity', 'project-management', 'team']
  },
  {
    id: 'notion',
    name: 'Notion',
    category: 'Note Taking',
    type: 'app',
    description: 'All-in-one workspace for notes, docs, and databases',
    icon: 'ri:sticky-note-line',
    color: 'text-gray-400',
    bgColor: 'bg-gray-400/20',
    borderColor: 'border-gray-400/30',
    website: 'https://notion.so',
    favorite: false,
    tags: ['productivity', 'notes', 'organization']
  },
  {
    id: 'raycast',
    name: 'Raycast',
    category: 'Launcher',
    type: 'app',
    description: 'Blazingly fast, totally extendable launcher',
    icon: 'ri:flashlight-line',
    color: 'text-green-400',
    bgColor: 'bg-green-400/20',
    borderColor: 'border-green-400/30',
    website: 'https://raycast.com',
    favorite: true,
    tags: ['productivity', 'launcher', 'mac']
  },
  {
    id: 'alfred',
    name: 'Alfred',
    category: 'Launcher',
    type: 'app',
    description: 'Productivity app for macOS with powerful workflows',
    icon: 'ri:search-line',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/20',
    borderColor: 'border-purple-500/30',
    website: 'https://alfredapp.com',
    favorite: false,
    tags: ['productivity', 'launcher', 'mac', 'automation']
  },

  // Browsers & Communication
  {
    id: 'arc',
    name: 'Arc Browser',
    category: 'Browser',
    type: 'app',
    description: 'The browser company reimagining how we browse',
    icon: 'ri:global-line',
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/20',
    borderColor: 'border-orange-400/30',
    website: 'https://arc.net',
    favorite: true,
    tags: ['browser', 'productivity', 'innovation']
  },
  {
    id: 'discord',
    name: 'Discord',
    category: 'Communication',
    type: 'app',
    description: 'Voice, video and text communication for communities',
    icon: 'ri:discord-line',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/20',
    borderColor: 'border-indigo-500/30',
    website: 'https://discord.com',
    favorite: false,
    tags: ['communication', 'community', 'gaming']
  },
  {
    id: 'telegram',
    name: 'Telegram',
    category: 'Communication',
    type: 'app',
    description: 'Fast, secure, and synced messaging app',
    icon: 'ri:telegram-line',
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/20',
    borderColor: 'border-blue-400/30',
    website: 'https://telegram.org',
    favorite: true,
    tags: ['communication', 'messaging', 'security']
  },

  // Utilities
  {
    id: 'cleanmymac',
    name: 'CleanMyMac X',
    category: 'System Utility',
    type: 'app',
    description: 'Mac cleanup and optimization tool',
    icon: 'ri:delete-bin-line',
    color: 'text-green-500',
    bgColor: 'bg-green-500/20',
    borderColor: 'border-green-500/30',
    website: 'https://macpaw.com/cleanmymac',
    favorite: false,
    tags: ['utility', 'mac', 'cleanup', 'optimization']
  },
  {
    id: 'bartender',
    name: 'Bartender 4',
    category: 'System Utility',
    type: 'app',
    description: 'Organize and hide menu bar items on macOS',
    icon: 'ri:menu-line',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/20',
    borderColor: 'border-yellow-400/30',
    website: 'https://www.macbartender.com',
    favorite: false,
    tags: ['utility', 'mac', 'menu-bar', 'organization']
  }
];

export const categories = [...new Set(tools.map(tool => tool.category))];
export const types = ['all', 'tool', 'app'] as const;
export const allTags = [...new Set(tools.flatMap(tool => tool.tags))];

export const getFavoriteTools = () => tools.filter(tool => tool.favorite);
export const getToolsByType = (type: 'tool' | 'app' | 'all') => 
  type === 'all' ? tools : tools.filter(tool => tool.type === type);
export const getToolsByCategory = (category: string) => 
  tools.filter(tool => tool.category === category);
export const getToolsByTag = (tag: string) => 
  tools.filter(tool => tool.tags.includes(tag));