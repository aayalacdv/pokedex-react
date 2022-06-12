
export const mapTypeToColor = (type: string) => {
    switch (type) {
      case ("fire"):
        return ['rgb(253 186 116)', 'rgb(251 146 60)']
      case ("water"):
        return ['rgb(147 197 253)', 'rgb(96 165 250)']
      case ("grass"):
        return ['rgb(134 239 172)', 'rgb(74 222 128)']
      case ("electric"):
        return ['rgb(253 224 71', 'rgb(250 204 21)']
      case ("fighting"):
        return ['rgb(252 165 165)', 'rgb(248 113 113)']
      case ("poison"):
        return ['rgb(216 180 254)', 'rgb(192 132 252)']
      case ("normal"):
        return ['rgb(253 186 116)', 'rgb(251 146 60)']
      case ("ice"):
        return ['rgb(103 232 249)', 'rgb(34 211 238)']
      case 'ground':
        return ['rgb(234 179 8)', 'rgb(202 138 4)']
      case 'flying':
        return ['rgb(233 213 255)', 'rgb(216 180 254)']
      case 'psychic':
        return ['rgb(249 168 212)', 'rgb(244 114 182)']
      case 'bug':
        return ['rgb(190 242 100)', 'rgb(163 230 53)']
      case 'rock':
        return ['rgb(202 138 4)', 'rgb(161 98 7)']
      case 'ghost':
        return ['rgb(124 58 237)', 'rgb(109 40 217)']
      case 'dark':
        return ['rgb(120 113 108)', 'rgb(87 83 78)']
      case 'dragon':
        return ['rgb(126 34 206)', 'rgb(107 33 168)']
      case 'steel':
        return ['rgb(212 212 216', 'rgb(161 161 170)']
      case 'fairy':
        return ['rgb(249 168 212)', 'rgb(244 114 182)']
  
      default:
        return ['rgb(0 0 0)', 'rgb(0 0 0)']
    }
  }