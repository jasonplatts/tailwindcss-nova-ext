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

currentColorPrefix = 'slate-'

const SLATE = [
  {
    name:  currentColorPrefix + '50',
    hex:   'f8fafc'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'f1f5f9'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'e2e8f0'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   'cbd5e1'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   '94a3b8'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   '64748b'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   '475569'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   '334155'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '1e293b'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '0f172a'
  },
  {
    name:  currentColorPrefix + '950',
    hex:   '020617'
  }
]

currentColorPrefix = 'gray-'

const GRAY = [
  {
    name:  currentColorPrefix + '50',
    hex:   'f9fafb'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'f3f4f6'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'e5e7eb'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   'd1d5db'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   '9ca3af'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   '6b7280'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   '4b5563'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   '374151'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '1f2937'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '111827'
  },
  {
    name:  currentColorPrefix + '950',
    hex:   '030712'
  }
]

currentColorPrefix = 'zinc-'

const ZINC = [
  {
    name:  currentColorPrefix + '50',
    hex:   'fafafa'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'f4f4f5'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'e4e4e7'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   'd4d4d8'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   'a1a1aa'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   '71717a'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   '52525b'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   '3f3f46'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '27272a'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '18181b'
  },
  {
    name:  currentColorPrefix + '950',
    hex:   '09090b'
  }
]

currentColorPrefix = 'neutral-'

const NEUTRAL = [
  {
    name:  currentColorPrefix + '50',
    hex:   'fafafa'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'f5f5f5'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'e5e5e5'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   'd4d4d4'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   'a3a3a3'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   '737373'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   '525252'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   '404040'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '262626'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '171717'
  },
  {
    name:  currentColorPrefix + '950',
    hex:   '0a0a0a'
  }
]

currentColorPrefix = 'stone-'

const STONE = [
  {
    name:  currentColorPrefix + '50',
    hex:   'fafaf9'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'f5f5f4'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'e7e5e4'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   'd6d3d1'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   'a8a29e'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   '78716c'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   '57534e'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   '44403c'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '292524'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '1c1917'
  },
  {
    name:  currentColorPrefix + '950',
    hex:   '0c0a09'
  }
]

currentColorPrefix = 'red-'

const RED = [
  {
    name:  currentColorPrefix + '50',
    hex:   'fef2f2'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'fee2e2'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'fecaca'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   'fca5a5'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   'f87171'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   'ef4444'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   'dc2626'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   'b91c1c'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '991b1b'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '7f1d1d'
  },
  {
    name:  currentColorPrefix + '950',
    hex:   '450a0a'
  }
]

currentColorPrefix = 'orange-'

const ORANGE = [
  {
    name:  currentColorPrefix + '50',
    hex:   'fff7ed'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'ffedd5'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'fed7aa'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   'fdba74'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   'fb923c'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   'f97316'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   'ea580c'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   'c2410c'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '9a3412'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '7c2d12'
  },
  {
    name:  currentColorPrefix + '950',
    hex:   '431407'
  }
]

currentColorPrefix = 'amber-'

const AMBER = [
  {
    name:  currentColorPrefix + '50',
    hex:   'fffbeb'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'fef3c7'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'fde68a'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   'fcd34d'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   'fbbf24'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   'f59e0b'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   'd97706'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   'b45309'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '92400e'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '78350f'
  },
  {
    name:  currentColorPrefix + '950',
    hex:   '451a03'
  }
]

currentColorPrefix = 'yellow-'

const YELLOW = [
  {
    name:  currentColorPrefix + '50',
    hex:   'fefce8'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'fef9c3'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'fef08a'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   'fde047'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   'facc15'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   'eab308'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   'ca8a04'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   'a16207'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '854d0e'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '713f12'
  },
  {
    name:  currentColorPrefix + '950',
    hex:   '422006'
  }
]

currentColorPrefix = 'lime-'

const LIME = [
  {
    name:  currentColorPrefix + '50',
    hex:   'f7fee7'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'ecfccb'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'd9f99d'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   'bef264'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   'a3e635'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   '84cc16'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   '65a30d'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   '4d7c0f'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '3f6212'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '365314'
  },
  {
    name:  currentColorPrefix + '950',
    hex:   '1a2e05'
  }
]

currentColorPrefix = 'green-'

const GREEN = [
  {
    name:  currentColorPrefix + '50',
    hex:   'f0fdf4'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'dcfce7'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'bbf7d0'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   '86efac'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   '4ade80'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   '22c55e'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   '16a34a'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   '15803d'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '166534'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '14532d'
  },
  {
    name:  currentColorPrefix + '950',
    hex:   '052e16'
  }
]

currentColorPrefix = 'emerald-'

const EMERALD = [
  {
    name:  currentColorPrefix + '50',
    hex:   'ecfdf5'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'd1fae5'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'a7f3d0'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   '6ee7b7'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   '34d399'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   '10b981'
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
    hex:   '065f46'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '064e3b'
  },
  {
    name:  currentColorPrefix + '950',
    hex:   '022c22'
  }
]

currentColorPrefix = 'teal-'

const TEAL = [
  {
    name:  currentColorPrefix + '50',
    hex:   'f0fdfa'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'ccfbf1'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   '99f6e4'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   '5eead4'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   '2dd4bf'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   '14b8a6'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   '0d9488'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   '0f766e'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '115e59'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '134e4a'
  },
  {
    name:  currentColorPrefix + '950',
    hex:   '042f2e'
  }
]

currentColorPrefix = 'cyan-'

const CYAN = [
  {
    name:  currentColorPrefix + '50',
    hex:   'ecfeff'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'cffafe'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'a5f3fc'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   '67e8f9'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   '22d3ee'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   '06b6d4'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   '0891b2'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   '0e7490'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '155e75'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '164e63'
  },
  {
    name:  currentColorPrefix + '950',
    hex:   '083344'
  }
]

currentColorPrefix = 'sky-'

const SKY = [
  {
    name:  currentColorPrefix + '50',
    hex:   'f0f9ff'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'e0f2fe'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'bae6fd'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   '7dd3fc'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   '38bdf8'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   '0ea5e9'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   '0284c7'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   '0369a1'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '075985'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '0c4a6e'
  },
  {
    name:  currentColorPrefix + '950',
    hex:   '082f49'
  }
]

currentColorPrefix = 'blue-'

const BLUE = [
  {
    name:  currentColorPrefix + '50',
    hex:   'eff6ff'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'dbeafe'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'bfdbfe'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   '93c5fd'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   '60a5fa'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   '3b82f6'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   '2563eb'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   '1d4ed8'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '1e40af'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '1e3a8a'
  },
  {
    name:  currentColorPrefix + '950',
    hex:   '172554'
  }
]

currentColorPrefix = 'indigo-'

const INDIGO = [
  {
    name:  currentColorPrefix + '50',
    hex:   'eef2ff'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'e0e7ff'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'c7d2fe'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   'a5b4fc'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   '818cf8'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   '6366f1'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   '4f46e5'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   '4338ca'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '3730a3'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '312e81'
  },
  {
    name:  currentColorPrefix + '950',
    hex:   '1e1b4b'
  }
]

currentColorPrefix = 'violet-'

const VIOLET = [
  {
    name:  currentColorPrefix + '50',
    hex:   'f5f3ff'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'ede9fe'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'ddd6fe'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   'c4b5fd'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   'a78bfa'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   '8b5cf6'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   '7c3aed'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   '6d28d9'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '5b21b6'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '4c1d95'
  },
  {
    name:  currentColorPrefix + '950',
    hex:   '2e1065'
  }
]

currentColorPrefix = 'purple-'

const PURPLE = [
  {
    name:  currentColorPrefix + '50',
    hex:   'faf5ff'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'f3e8ff'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'e9d5ff'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   'd8b4fe'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   'c084fc'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   'a855f7'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   '9333ea'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   '7e22ce'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '6b21a8'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '581c87'
  },
  {
    name:  currentColorPrefix + '950',
    hex:   '3b0764'
  }
]

currentColorPrefix = 'fuchsia-'

const FUCHSIA = [
  {
    name:  currentColorPrefix + '50',
    hex:   'fdf4ff'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'fae8ff'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'f5d0fe'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   'f0abfc'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   'e879f9'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   'd946ef'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   'c026d3'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   'a21caf'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '86198f'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '701a75'
  },
  {
    name:  currentColorPrefix + '950',
    hex:   '4a044e'
  }
]

currentColorPrefix = 'pink-'

const PINK = [
  {
    name:  currentColorPrefix + '50',
    hex:   'fdf2f8'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'fce7f3'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'fbcfe8'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   'f9a8d4'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   'f472b6'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   'ec4899'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   'db2777'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   'be185d'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '9d174d'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '831843'
  },
  {
    name:  currentColorPrefix + '950',
    hex:   '500724'
  }
]

currentColorPrefix = 'rose-'

const ROSE = [
  {
    name:  currentColorPrefix + '50',
    hex:   'fff1f2'
  },
  {
    name:  currentColorPrefix + '100',
    hex:   'ffe4e6'
  },
  {
    name:  currentColorPrefix + '200',
    hex:   'fecdd3'
  },
  {
    name:  currentColorPrefix + '300',
    hex:   'fda4af'
  },
  {
    name:  currentColorPrefix + '400',
    hex:   'fb7185'
  },
  {
    name:  currentColorPrefix + '500',
    hex:   'f43f5e'
  },
  {
    name:  currentColorPrefix + '600',
    hex:   'e11d48'
  },
  {
    name:  currentColorPrefix + '700',
    hex:   'be123c'
  },
  {
    name:  currentColorPrefix + '800',
    hex:   '9f1239'
  },
  {
    name:  currentColorPrefix + '900',
    hex:   '881337'
  },
  {
    name:  currentColorPrefix + '950',
    hex:   '4c0519'
  }
]

let colors = [
  ...BLACK,
  ...WHITE,
  ...SLATE,
  ...GRAY,
  ...ZINC,
  ...NEUTRAL,
  ...STONE,
  ...RED,
  ...ORANGE,
  ...AMBER,
  ...YELLOW,
  ...LIME,
  ...GREEN,
  ...EMERALD,
  ...TEAL,
  ...CYAN,
  ...SKY,
  ...BLUE,
  ...INDIGO,
  ...VIOLET,
  ...PURPLE,
  ...FUCHSIA,
  ...PINK,
  ...ROSE
]

colors.forEach(color => {
  color.rgb = FUNCTIONS.convertHexToRgbArray(color.hex).join(', ')
})

exports.COLORS = colors
