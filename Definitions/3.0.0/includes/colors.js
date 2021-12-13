'use strict'

const FUNCTIONS = require('../../../Scripts/functions.js')

let currentColorPrefix

currentColorPrefix = 'black'

const BLACK = [
  {
    name:  currentColorPrefix,
    hex:   '000'
  }
]

currentColorPrefix = 'white'

const WHITE = [
  {
    name:  currentColorPrefix,
    hex:   'fff'
  }
]

currentColorPrefix = 'gray-'

const GRAY = [
  {
    name:  currentColorPrefix + '50',
    hex:   'F9FAFB'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'F3F4F6'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'E5E7EB'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   'D1D5DB'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   '9CA3AF'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   '6B7280'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   '4B5563'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   '374151'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '1F2937'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '111827'
  }
]

currentColorPrefix = 'red-'

const RED = [
  {
    name:  currentColorPrefix + '50',
    hex:   'FEF2F2'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'FEE2E2'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'FECACA'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   'FCA5A5'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   'F87171'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   'EF4444'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   'DC2626'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   'B91C1C'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '991B1B'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '7F1D1D'
  }
]

currentColorPrefix = 'yellow-'

const YELLOW = [
  {
    name:  currentColorPrefix + '50',
    hex:   'FFFBEB'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'FEF3C7'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'FDE68A'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   'FCD34D'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   'FBBF24'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   'F59E0B'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   'D97706'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   'B45309'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '92400E'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '78350F'
  }
]

currentColorPrefix = 'green-'

const GREEN = [
  {
    name:  currentColorPrefix + '50',
    hex:   'ECFDF5'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'D1FAE5'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'A7F3D0'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   '6EE7B7'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   '34D399'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   '10B981'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   '059669'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   '047857'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '065F46'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '064E3B'
  }
]

currentColorPrefix = 'blue-'

const BLUE = [
  {
    name:  currentColorPrefix + '50',
    hex:   'EFF6FF'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'DBEAFE'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'BFDBFE'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   '93C5FD'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   '60A5FA'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   '3B82F6'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   '2563EB'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   '1D4ED8'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '1E40AF'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '1E3A8A'
  }
]

currentColorPrefix = 'indigo-'

const INDIGO = [
  {
    name:  currentColorPrefix + '50',
    hex:   'EEF2FF'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'E0E7FF'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'C7D2FE'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   'A5B4FC'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   '818CF8'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   '6366F1'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   '4F46E5'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   '4338CA'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '3730A3'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '312E81'
  }
]

currentColorPrefix = 'purple-'

const PURPLE = [
  {
    name:  currentColorPrefix + '50',
    hex:   'F5F3FF'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'EDE9FE'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'DDD6FE'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   'C4B5FD'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   'A78BFA'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   '8B5CF6'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   '7C3AED'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   '6D28D9'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '5B21B6'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '4C1D95'
  }
]

currentColorPrefix = 'pink-'

const PINK = [
  {
    name:  currentColorPrefix + '50',
    hex:   'FDF2F8'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'FCE7F3'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'FBCFE8'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   'F9A8D4'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   'F472B6'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   'EC4899'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   'DB2777'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   'BE185D'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '9D174D'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '831843'
  }
]

let colors = [
  ...BLACK,
  ...WHITE,
  ...GRAY,
  ...RED,
  ...YELLOW,
  ...GREEN,
  ...BLUE,
  ...INDIGO,
  ...PURPLE,
  ...PINK
]

colors.forEach(color => {
  color.rgb = FUNCTIONS.convertHexToRgbArray(color.hex).join(', ')
})

exports.COLORS = colors
