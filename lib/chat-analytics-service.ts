// Chat Analytics Service
// This service handles storing and retrieving chat analytics data
// In a real implementation, this would connect to a database like Supabase

export interface ChatMessage {
  id: string
  type: 'user' | 'ai'
  content: string
  timestamp: Date
  topic?: string
  confidence?: number
  location?: string
  userId?: string
}

export interface TopicAnalytics {
  topic: string
  count: number
  trend: string
  confidence: number
  urgency: 'low' | 'medium' | 'high'
  lastUpdated: Date
}

export interface UrgentAlert {
  topic: string
  count: number
  timeframe: string
  urgency: 'low' | 'medium' | 'high' | 'critical'
  firstSeen: Date
  lastSeen: Date
}

export interface GeographicData {
  area: string
  questions: number
  topTopic: string
  lastUpdated: Date
}

export interface ChatAnalytics {
  totalQuestions: number
  avgConfidence: number
  topTopics: TopicAnalytics[]
  urgentAlerts: UrgentAlert[]
  trendingQuestions: string[]
  geographicData: GeographicData[]
  lastUpdated: Date
}

// In-memory storage for demo purposes
// In production, this would be replaced with database calls
let chatMessages: ChatMessage[] = []
let analytics: ChatAnalytics = {
  totalQuestions: 0,
  avgConfidence: 0,
  topTopics: [],
  urgentAlerts: [],
  trendingQuestions: [],
  geographicData: [],
  lastUpdated: new Date()
}

// Initialize with some demo data
const initializeDemoData = () => {
  const demoMessages: ChatMessage[] = [
    {
      id: '1',
      type: 'user',
      content: 'Is Heinz ketchup bottle recyclable?',
      timestamp: new Date(Date.now() - 86400000), // 1 day ago
      location: 'Beeston',
      userId: 'user1'
    },
    {
      id: '2',
      type: 'ai',
      content: 'Heinz ketchup bottles are recyclable! They\'re made of PET plastic (type 1). Rinse them thoroughly, remove the cap (recycle separately), and put in your blue bin.',
      timestamp: new Date(Date.now() - 86400000),
      topic: 'Plastic Bottles',
      confidence: 0.82
    },
    {
      id: '3',
      type: 'user',
      content: 'Can I recycle pizza boxes with grease?',
      timestamp: new Date(Date.now() - 172800000), // 2 days ago
      location: 'West Bridgford',
      userId: 'user2'
    },
    {
      id: '4',
      type: 'ai',
      content: 'Pizza boxes with grease stains should go in general waste, not recycling. The grease contaminates the paper recycling process.',
      timestamp: new Date(Date.now() - 172800000),
      topic: 'Food Packaging',
      confidence: 0.75
    },
    {
      id: '5',
      type: 'user',
      content: 'Where do coffee cup lids go?',
      timestamp: new Date(Date.now() - 259200000), // 3 days ago
      location: 'Sherwood',
      userId: 'user3'
    },
    {
      id: '6',
      type: 'ai',
      content: 'Coffee cup lids are usually made of plastic and can be recycled separately. Check for the recycling symbol and put them in your blue bin.',
      timestamp: new Date(Date.now() - 259200000),
      topic: 'Coffee Cups',
      confidence: 0.68
    }
  ]

  chatMessages = demoMessages
  updateAnalytics()
}

// Update analytics based on current messages
const updateAnalytics = () => {
  const userMessages = chatMessages.filter(m => m.type === 'user')
  const aiMessages = chatMessages.filter(m => m.type === 'ai')

  // Calculate total questions and average confidence
  const totalQuestions = userMessages.length
  const avgConfidence = aiMessages.length > 0 
    ? aiMessages.reduce((sum, m) => sum + (m.confidence || 0), 0) / aiMessages.length
    : 0

  // Calculate top topics
  const topicCounts: { [key: string]: number } = {}
  const topicConfidences: { [key: string]: number[] } = {}
  
  aiMessages.forEach(msg => {
    if (msg.topic) {
      topicCounts[msg.topic] = (topicCounts[msg.topic] || 0) + 1
      if (!topicConfidences[msg.topic]) {
        topicConfidences[msg.topic] = []
      }
      topicConfidences[msg.topic].push(msg.confidence || 0)
    }
  })

  const topTopics: TopicAnalytics[] = Object.entries(topicCounts)
    .map(([topic, count]) => {
      const avgConfidence = topicConfidences[topic] 
        ? topicConfidences[topic].reduce((sum, conf) => sum + conf, 0) / topicConfidences[topic].length
        : 0.5
      const urgency: 'low' | 'medium' | 'high' = avgConfidence < 0.6 ? 'high' : avgConfidence < 0.8 ? 'medium' : 'low'
      
      return {
        topic,
        count,
        trend: '+15%', // Mock trend
        confidence: avgConfidence,
        urgency,
        lastUpdated: new Date()
      }
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, 5)

  // Calculate urgent alerts (topics with low confidence and high frequency)
  const urgentAlerts: UrgentAlert[] = topTopics
    .filter(topic => topic.confidence < 0.7 && topic.count >= 2)
    .map(topic => ({
      topic: topic.topic,
      count: topic.count,
      timeframe: '24h',
      urgency: topic.confidence < 0.5 ? 'critical' : topic.confidence < 0.6 ? 'high' : 'medium',
      firstSeen: new Date(Date.now() - 86400000),
      lastSeen: new Date()
    }))

  // Get trending questions (most recent user messages)
  const trendingQuestions = userMessages
    .slice(-5)
    .map(msg => msg.content)
    .reverse()

  // Calculate geographic data
  const areaCounts: { [key: string]: { count: number, topics: string[] } } = {}
  userMessages.forEach(msg => {
    const area = msg.location || 'Unknown'
    if (!areaCounts[area]) {
      areaCounts[area] = { count: 0, topics: [] }
    }
    areaCounts[area].count++
    
    // Find corresponding AI message to get topic
    const aiMsg = aiMessages.find(ai => ai.id === (parseInt(msg.id) + 1).toString())
    if (aiMsg?.topic && !areaCounts[area].topics.includes(aiMsg.topic)) {
      areaCounts[area].topics.push(aiMsg.topic)
    }
  })

  const geographicData: GeographicData[] = Object.entries(areaCounts)
    .map(([area, data]) => ({
      area,
      questions: data.count,
      topTopic: data.topics[0] || 'General',
      lastUpdated: new Date()
    }))
    .sort((a, b) => b.questions - a.questions)

  analytics = {
    totalQuestions,
    avgConfidence,
    topTopics,
    urgentAlerts,
    trendingQuestions,
    geographicData,
    lastUpdated: new Date()
  }
}

// Service functions
export const ChatAnalyticsService = {
  // Initialize the service
  initialize: () => {
    initializeDemoData()
  },

  // Add a new chat message
  addMessage: (message: ChatMessage) => {
    chatMessages.push(message)
    updateAnalytics()
  },

  // Get all chat messages
  getMessages: (): ChatMessage[] => {
    return [...chatMessages].sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
  },

  // Get analytics data
  getAnalytics: (): ChatAnalytics => {
    return { ...analytics }
  },

  // Get messages by topic
  getMessagesByTopic: (topic: string): ChatMessage[] => {
    return chatMessages.filter(msg => msg.topic === topic)
  },

  // Get messages by location
  getMessagesByLocation: (location: string): ChatMessage[] => {
    return chatMessages.filter(msg => msg.location === location)
  },

  // Get messages from time range
  getMessagesFromRange: (startDate: Date, endDate: Date): ChatMessage[] => {
    return chatMessages.filter(msg => 
      msg.timestamp >= startDate && msg.timestamp <= endDate
    )
  },

  // Get urgent alerts
  getUrgentAlerts: (): UrgentAlert[] => {
    return analytics.urgentAlerts
  },

  // Get trending questions
  getTrendingQuestions: (): string[] => {
    return analytics.trendingQuestions
  },

  // Get geographic data
  getGeographicData: (): GeographicData[] => {
    return analytics.geographicData
  },

  // Clear all data (for testing)
  clearData: () => {
    chatMessages = []
    updateAnalytics()
  },

  // Export data for backup
  exportData: () => {
    return {
      messages: chatMessages,
      analytics: analytics
    }
  },

  // Import data from backup
  importData: (data: { messages: ChatMessage[], analytics: ChatAnalytics }) => {
    chatMessages = data.messages
    analytics = data.analytics
  }
}

// Initialize the service when the module is loaded
ChatAnalyticsService.initialize() 