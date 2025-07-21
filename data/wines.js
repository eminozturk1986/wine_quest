// Wine Quest - Comprehensive Wine Database
// Educational wine recognition data with accurate color profiles

const WINES = {
    // RED WINES - Light to Dark Spectrum
    pinot_noir: {
        name: "Pinot Noir",
        type: "red",
        young: {
            color: {
                main: "#C55A5A",
                rim: "#E6B8B8",
                opacity: 0.70,
                gradient: ["#A73B3B", "#C55A5A", "#E6B8B8"]
            },
            description: "Translucent ruby red with light intensity",
            characteristics: ["Light-bodied", "Low tannins", "Cherry", "Raspberry", "Floral", "Silky"],
            age: "1-3 years",
            educationalTip: "Pinot Noir's thin skins produce the lightest color intensity among red wines."
        },
        aged: {
            color: {
                main: "#D2B48C",
                rim: "#F5DEB3",
                opacity: 0.60,
                gradient: ["#CD853F", "#D2B48C", "#F5DEB3"]
            },
            description: "Pale brick with pronounced orange rim, very translucent",
            characteristics: ["Silky texture", "Mushroom", "Forest floor", "Dried cherry", "Truffle"],
            age: "8+ years",
            educationalTip: "Aged Pinot Noir becomes very pale, showing orange-brown tones."
        }
    },

    sangiovese: {
        name: "Sangiovese",
        type: "red",
        young: {
            color: {
                main: "#B22222",
                rim: "#CD5C5C",
                opacity: 0.80,
                gradient: ["#8B0000", "#B22222", "#CD5C5C"]
            },
            description: "Medium ruby with cherry-red hues",
            characteristics: ["Medium-bodied", "High acidity", "Sour cherry", "Herbs", "Leather"],
            age: "2-4 years",
            educationalTip: "Sangiovese shows characteristic cherry-red color with bright acidity."
        },
        aged: {
            color: {
                main: "#A0522D",
                rim: "#DEB887",
                opacity: 0.75,
                gradient: ["#8B4513", "#A0522D", "#DEB887"]
            },
            description: "Brick red with orange highlights",
            characteristics: ["Earthy", "Dried herbs", "Leather", "Tobacco"],
            age: "6+ years",
            educationalTip: "Aged Sangiovese develops orange brick tones while maintaining acidity."
        }
    },

    merlot: {
        name: "Merlot",
        type: "red",
        young: {
            color: {
                main: "#722F37",
                rim: "#8B4513",
                opacity: 0.88,
                gradient: ["#5D1A1D", "#722F37", "#8B4513"]
            },
            description: "Deep ruby red with purple undertones",
            characteristics: ["Medium to full-bodied", "Smooth tannins", "Plum", "Black cherry", "Chocolate"],
            age: "2-5 years",
            educationalTip: "Merlot shows deeper color than Pinot Noir with softer, rounder tannins."
        },
        aged: {
            color: {
                main: "#A0522D",
                rim: "#D2B48C",
                opacity: 0.80,
                gradient: ["#8B4513", "#A0522D", "#D2B48C"]
            },
            description: "Brick red with amber rim",
            characteristics: ["Velvety texture", "Dried fruit", "Tobacco", "Leather", "Mocha"],
            age: "10+ years",
            educationalTip: "Aged Merlot develops beautiful brick-red color with amber highlights."
        }
    },

    cabernet_sauvignon: {
        name: "Cabernet Sauvignon",
        type: "red",
        young: {
            color: {
                main: "#4A0E0E",
                rim: "#722F37",
                opacity: 0.95,
                gradient: ["#2F0A0A", "#4A0E0E", "#722F37"]
            },
            description: "Deep purple-black with inky center",
            characteristics: ["Full-bodied", "High tannins", "Blackcurrant", "Oak", "Cedar", "Mint"],
            age: "2-4 years",
            educationalTip: "Young Cabernet Sauvignon shows intense purple-black color from thick grape skins."
        },
        aged: {
            color: {
                main: "#8B4513",
                rim: "#DEB887",
                opacity: 0.75,
                gradient: ["#722F37", "#8B4513", "#DEB887"]
            },
            description: "Brick red with orange rim and garnet core",
            characteristics: ["Softened tannins", "Leather", "Tobacco", "Cedar", "Earth", "Pencil lead"],
            age: "10+ years",
            educationalTip: "Aged Cabernet develops brick-red hues as anthocyanins bind with tannins."
        }
    },

    syrah: {
        name: "Syrah/Shiraz",
        type: "red",
        young: {
            color: {
                main: "#1A0A0A",
                rim: "#4A0E0E",
                opacity: 0.98,
                gradient: ["#0D0404", "#1A0A0A", "#4A0E0E"]
            },
            description: "Almost opaque black-purple with violet rim",
            characteristics: ["Full-bodied", "High tannins", "Blackberry", "Black pepper", "Smoke", "Bacon"],
            age: "1-4 years",
            educationalTip: "Young Syrah is the darkest red wine, often appearing almost black."
        },
        aged: {
            color: {
                main: "#722F37",
                rim: "#CD853F",
                opacity: 0.85,
                gradient: ["#5D1A1D", "#722F37", "#CD853F"]
            },
            description: "Deep garnet with orange rim",
            characteristics: ["Gamey", "Leather", "Dried herbs", "Smoked meat", "Olive"],
            age: "8+ years",
            educationalTip: "Aged Syrah maintains depth while developing complex orange rim coloration."
        }
    },

    nebbiolo: {
        name: "Nebbiolo",
        type: "red",
        young: {
            color: {
                main: "#8B0000",
                rim: "#CD5C5C",
                opacity: 0.85,
                gradient: ["#660000", "#8B0000", "#CD5C5C"]
            },
            description: "Deep garnet with orange hints even when young",
            characteristics: ["Full-bodied", "High tannins", "High acidity", "Rose", "Tar", "Truffle"],
            age: "3-5 years",
            educationalTip: "Nebbiolo shows orange hints even when young due to its unique anthocyanin profile."
        },
        aged: {
            color: {
                main: "#CD853F",
                rim: "#F5DEB3",
                opacity: 0.70,
                gradient: ["#A0522D", "#CD853F", "#F5DEB3"]
            },
            description: "Orange-brick with pale rim, highly translucent",
            characteristics: ["Complex", "Leather", "Dried roses", "Tar", "White truffle"],
            age: "10+ years",
            educationalTip: "Aged Nebbiolo becomes very pale with distinctive orange-brick color."
        }
    },

    // WHITE WINES - Pale to Golden Spectrum
    sauvignon_blanc: {
        name: "Sauvignon Blanc",
        type: "white",
        young: {
            color: {
                main: "#F8FFF8",
                rim: "#F0FFF0",
                opacity: 0.85,
                gradient: ["#E6FFE6", "#F8FFF8", "#F0FFF0"]
            },
            description: "Almost colorless with distinct green tints",
            characteristics: ["Light-bodied", "High acidity", "Gooseberry", "Cut grass", "Grapefruit", "Passion fruit"],
            age: "Current vintage",
            educationalTip: "Sauvignon Blanc is among the palest wines with distinctive green tints from early harvest."
        },
        aged: {
            color: {
                main: "#FFFACD",
                rim: "#FFEFD5",
                opacity: 0.80,
                gradient: ["#F0E68C", "#FFFACD", "#FFEFD5"]
            },
            description: "Light straw with subtle golden hints",
            characteristics: ["More complex", "Honey", "Lanolin", "Developed tropical fruit"],
            age: "2+ years",
            educationalTip: "Aged Sauvignon Blanc loses green tints and develops golden hues."
        }
    },

    pinot_grigio: {
        name: "Pinot Grigio/Pinot Gris",
        type: "white",
        young: {
            color: {
                main: "#FFF8DC",
                rim: "#FFFEF7",
                opacity: 0.90,
                gradient: ["#F5F5DC", "#FFF8DC", "#FFFEF7"]
            },
            description: "Pale straw with copper hints",
            characteristics: ["Light-bodied", "Crisp acidity", "Pear", "Apple", "Citrus", "Mineral"],
            age: "1-2 years",
            educationalTip: "Pinot Grigio shows subtle copper tints from the pinkish grape skins."
        },
        aged: {
            color: {
                main: "#F5DEB3",
                rim: "#FFF8DC",
                opacity: 0.85,
                gradient: ["#DEB887", "#F5DEB3", "#FFF8DC"]
            },
            description: "Light gold with copper undertones",
            characteristics: ["Fuller texture", "Honey", "Spice", "Ripe pear"],
            age: "3+ years",
            educationalTip: "Aged Pinot Grigio develops golden tones while maintaining its copper hints."
        }
    },

    chardonnay: {
        name: "Chardonnay",
        type: "white",
        young: {
            color: {
                main: "#FFFACD",
                rim: "#FFFFF0",
                opacity: 0.92,
                gradient: ["#F0E68C", "#FFFACD", "#FFFFF0"]
            },
            description: "Pale to medium yellow with green reflections",
            characteristics: ["Medium-bodied", "Moderate acidity", "Green apple", "Citrus", "Mineral", "Steel"],
            age: "1-2 years",
            educationalTip: "Unoaked Chardonnay shows pale yellow with green hints indicating cool climate."
        },
        aged: {
            color: {
                main: "#DAA520",
                rim: "#F5DEB3",
                opacity: 0.88,
                gradient: ["#B8860B", "#DAA520", "#F5DEB3"]
            },
            description: "Rich golden yellow with amber reflections",
            characteristics: ["Full-bodied", "Rich texture", "Butter", "Vanilla", "Toasted oak", "Honey"],
            age: "3+ years",
            educationalTip: "Aged, oaked Chardonnay develops rich golden color from oak aging and oxidation."
        }
    },

    riesling: {
        name: "Riesling",
        type: "white",
        young: {
            color: {
                main: "#F0FFF0",
                rim: "#F5FFFA",
                opacity: 0.88,
                gradient: ["#E0FFE0", "#F0FFF0", "#F5FFFA"]
            },
            description: "Very pale green-yellow with brilliant clarity",
            characteristics: ["Light to medium-bodied", "High acidity", "Lime", "Green apple", "Petrol", "Slate"],
            age: "1-3 years",
            educationalTip: "Young Riesling shows pale green-yellow color with exceptional clarity."
        },
        aged: {
            color: {
                main: "#FFD700",
                rim: "#FFFACD",
                opacity: 0.85,
                gradient: ["#DAA520", "#FFD700", "#FFFACD"]
            },
            description: "Deep golden with amber hints",
            characteristics: ["Complex", "Honey", "Petrol", "Dried fruits", "Spice"],
            age: "5+ years",
            educationalTip: "Aged Riesling develops deep golden color while maintaining vibrant acidity."
        }
    },

    gewurztraminer: {
        name: "Gewürztraminer",
        type: "white",
        young: {
            color: {
                main: "#FFEBCD",
                rim: "#FFF8DC",
                opacity: 0.90,
                gradient: ["#DEB887", "#FFEBCD", "#FFF8DC"]
            },
            description: "Golden yellow with pink-copper tints",
            characteristics: ["Medium-bodied", "Low acidity", "Lychee", "Rose", "Spice", "Ginger"],
            age: "1-2 years",
            educationalTip: "Gewürztraminer shows distinctive pink-copper color from aromatic compounds."
        },
        aged: {
            color: {
                main: "#DEB887",
                rim: "#F5DEB3",
                opacity: 0.85,
                gradient: ["#CD853F", "#DEB887", "#F5DEB3"]
            },
            description: "Deep golden with bronze highlights",
            characteristics: ["Rich", "Honey", "Dried fruits", "Exotic spices"],
            age: "3+ years",
            educationalTip: "Aged Gewürztraminer develops deep golden-bronze color while maintaining aromatic intensity."
        }
    },

    // ROSÉ WINES - Pale to Deep Pink Spectrum
    provence_rose: {
        name: "Provence Rosé",
        type: "rose",
        young: {
            color: {
                main: "#FFF0F5",
                rim: "#FFE4E1",
                opacity: 0.60,
                gradient: ["#FFDAB9", "#FFF0F5", "#FFE4E1"]
            },
            description: "Very pale pink with onion skin color",
            characteristics: ["Light-bodied", "Bone dry", "Subtle berry", "Herbs", "Mineral", "Citrus zest"],
            age: "Current vintage",
            educationalTip: "Provence rosé gets its extremely pale color from minimal skin contact, often called 'onion skin'."
        }
    },

    pinot_noir_rose: {
        name: "Pinot Noir Rosé",
        type: "rose",
        young: {
            color: {
                main: "#FFB6C1",
                rim: "#FFCCCB",
                opacity: 0.75,
                gradient: ["#FF91A4", "#FFB6C1", "#FFCCCB"]
            },
            description: "Light salmon pink with coral hints",
            characteristics: ["Light-bodied", "Crisp acidity", "Strawberry", "Raspberry", "Floral"],
            age: "Current vintage",
            educationalTip: "Pinot Noir rosé shows more color intensity than Provence style due to grape variety."
        }
    },

    sangiovese_rose: {
        name: "Sangiovese Rosé",
        type: "rose",
        young: {
            color: {
                main: "#FF69B4",
                rim: "#FFB6C1",
                opacity: 0.80,
                gradient: ["#FF1493", "#FF69B4", "#FFB6C1"]
            },
            description: "Medium pink with cherry-red hints",
            characteristics: ["Medium-bodied", "Higher acidity", "Cherry", "Herbs", "Spice"],
            age: "Current vintage",
            educationalTip: "Sangiovese rosé shows deeper color due to the grape's natural pigmentation."
        }
    },

    // SPARKLING WINES
    champagne: {
        name: "Champagne",
        type: "sparkling",
        young: {
            color: {
                main: "#FFFACD",
                rim: "#FFFFF0",
                opacity: 0.90,
                gradient: ["#F0E68C", "#FFFACD", "#FFFFF0"]
            },
            description: "Pale golden with fine, persistent bubbles",
            characteristics: ["Light-bodied", "High acidity", "Citrus", "Brioche", "Yeast", "Apple"],
            age: "3+ years",
            educationalTip: "Champagne's golden color comes from extended lees aging and blending techniques."
        }
    },

    prosecco: {
        name: "Prosecco",
        type: "sparkling",
        young: {
            color: {
                main: "#F5FFFA",
                rim: "#F0FFF0",
                opacity: 0.85,
                gradient: ["#E0FFE0", "#F5FFFA", "#F0FFF0"]
            },
            description: "Very pale with green tints and lively bubbles",
            characteristics: ["Light-bodied", "Fresh acidity", "Green apple", "Pear", "White flowers"],
            age: "1-2 years",
            educationalTip: "Prosecco's pale color reflects its tank method production and fresh, fruity character."
        }
    }
};

// Game Levels Configuration - Mixed Red/White Questions
const LEVELS = {
    1: {
        name: "Wine Variety Recognition - Beginner",
        description: "Identify common wine varieties by their visual characteristics",
        questions: [
            {
                wine: "pinot_noir",
                age: "young",
                question: "Based on the wine analysis above, which grape variety is this?",
                answers: ["Pinot Noir", "Merlot", "Chardonnay", "Sauvignon Blanc"],
                correct: 0,
                explanation: "The translucent ruby color with light intensity is characteristic of Pinot Noir's thin skins."
            },
            {
                wine: "sauvignon_blanc",
                age: "young",
                question: "Based on the wine analysis above, which grape variety is this?",
                answers: ["Chardonnay", "Sauvignon Blanc", "Pinot Noir", "Riesling"],
                correct: 1,
                explanation: "The almost colorless appearance with green tints and gooseberry/grass notes are classic Sauvignon Blanc."
            },
            {
                wine: "merlot",
                age: "young", 
                question: "Based on the wine analysis above, which grape variety is this?",
                answers: ["Cabernet Sauvignon", "Merlot", "Chardonnay", "Pinot Grigio"],
                correct: 1,
                explanation: "The deep ruby color with smooth tannins and plum/chocolate notes are typical of Merlot."
            },
            {
                wine: "chardonnay",
                age: "young",
                question: "Based on the wine analysis above, which grape variety is this?",
                answers: ["Sauvignon Blanc", "Chardonnay", "Pinot Noir", "Gewürztraminer"],
                correct: 1,
                explanation: "The pale to medium yellow with green reflections indicates unoaked Chardonnay."
            },
            {
                wine: "cabernet_sauvignon",
                age: "young",
                question: "Based on the wine analysis above, which grape variety is this?",
                answers: ["Merlot", "Syrah", "Cabernet Sauvignon", "Riesling"],
                correct: 2,
                explanation: "The deep purple-black color with high tannins and blackcurrant notes are classic Cabernet Sauvignon."
            },
            {
                wine: "riesling",
                age: "young",
                question: "Based on the wine analysis above, which grape variety is this?",
                answers: ["Chardonnay", "Sauvignon Blanc", "Riesling", "Pinot Noir"],
                correct: 2,
                explanation: "The very pale green-yellow with brilliant clarity and high acidity are classic Riesling traits."
            }
        ]
    },
    
    2: {
        name: "Wine Variety Recognition - Intermediate", 
        description: "More challenging variety identification with mixed types",
        questions: [
            {
                wine: "sangiovese",
                age: "young",
                question: "Based on the wine analysis above, which grape variety is this?",
                answers: ["Pinot Noir", "Sangiovese", "Pinot Grigio", "Gewürztraminer"],
                correct: 1,
                explanation: "The medium ruby color with cherry-red hues and high acidity are classic Sangiovese traits."
            },
            {
                wine: "pinot_grigio",
                age: "young",
                question: "Based on the wine analysis above, which grape variety is this?",
                answers: ["Sauvignon Blanc", "Pinot Grigio", "Merlot", "Syrah"],
                correct: 1,
                explanation: "The pale straw color with copper hints comes from Pinot Grigio's pinkish grape skins."
            },
            {
                wine: "syrah",
                age: "young",
                question: "Based on the wine analysis above, which grape variety is this?",
                answers: ["Cabernet Sauvignon", "Nebbiolo", "Syrah", "Chardonnay"],
                correct: 2,
                explanation: "The almost opaque black-purple color and pepper/smoke characteristics are distinctive of Syrah."
            },
            {
                wine: "gewurztraminer",
                age: "young",
                question: "Based on the wine analysis above, which grape variety is this?",
                answers: ["Chardonnay", "Riesling", "Gewürztraminer", "Merlot"],
                correct: 2,
                explanation: "The golden yellow with pink-copper tints and exotic spice characteristics identify Gewürztraminer."
            },
            {
                wine: "nebbiolo",
                age: "young",
                question: "Based on the wine analysis above, which grape variety is this?",
                answers: ["Sangiovese", "Nebbiolo", "Sauvignon Blanc", "Pinot Grigio"],
                correct: 1,
                explanation: "The deep garnet color with orange hints even when young is unique to Nebbiolo."
            },
            {
                wine: "chardonnay",
                age: "aged",
                question: "Based on the wine analysis above, which grape variety is this?",
                answers: ["Aged Riesling", "Aged Chardonnay", "Young Gewürztraminer", "Aged Pinot Noir"],
                correct: 1,
                explanation: "The rich golden color with butter/vanilla/oak characteristics indicate aged, oaked Chardonnay."
            }
        ]
    },

    3: {
        name: "Advanced Wine Recognition",
        description: "Rosé, sparkling, and challenging varieties",
        questions: [
            {
                wine: "provence_rose",
                age: "young",
                question: "Based on the wine analysis above, which wine style is this?",
                answers: ["Provence Rosé", "Sauvignon Blanc", "Pinot Noir", "Champagne"],
                correct: 0,
                explanation: "The extremely pale 'onion skin' color with mineral characteristics are typical of Provence rosé."
            },
            {
                wine: "champagne",
                age: "young",
                question: "Based on the wine analysis above, which wine is this?",
                answers: ["Chardonnay", "Champagne", "Riesling", "Gewürztraminer"],
                correct: 1,
                explanation: "The pale golden color with fine bubbles and brioche/yeast notes indicate Champagne."
            },
            {
                wine: "sangiovese_rose",
                age: "young",
                question: "Based on the wine analysis above, which wine style is this?",
                answers: ["Pinot Noir", "Provence Rosé", "Sangiovese Rosé", "Sauvignon Blanc"],
                correct: 2,
                explanation: "The medium pink with cherry-red hints and higher acidity indicate Sangiovese rosé."
            },
            {
                wine: "prosecco",
                age: "young",
                question: "Based on the wine analysis above, which sparkling wine is this?",
                answers: ["Champagne", "Prosecco", "Sauvignon Blanc", "Riesling"],
                correct: 1,
                explanation: "The very pale color with green tints and fresh, fruity character indicate Prosecco."
            },
            {
                wine: "pinot_noir_rose",
                age: "young",
                question: "Based on the wine analysis above, which wine style is this?",
                answers: ["Provence Rosé", "Pinot Noir Rosé", "Chardonnay", "Sangiovese"],
                correct: 1,
                explanation: "The light salmon pink color with strawberry/raspberry notes indicate Pinot Noir rosé."
            }
        ]
    },

    4: {
        name: "Master Level Challenge",
        description: "Expert-level recognition of aged wines and complex varieties", 
        questions: [
            {
                wine: "cabernet_sauvignon",
                age: "aged",
                question: "Based on the wine analysis above, which aged variety is this?",
                answers: ["Aged Cabernet Sauvignon", "Aged Chardonnay", "Aged Syrah", "Aged Riesling"],
                correct: 0,
                explanation: "The brick-red color with leather/tobacco notes indicates aged Cabernet Sauvignon."
            },
            {
                wine: "riesling",
                age: "aged",
                question: "Based on the wine analysis above, which aged variety is this?",
                answers: ["Aged Chardonnay", "Aged Riesling", "Aged Pinot Noir", "Gewürztraminer"],
                correct: 1,
                explanation: "The deep golden color with petrol/honey notes and maintained acidity indicate aged Riesling."
            },
            {
                wine: "pinot_noir",
                age: "aged",
                question: "Based on the wine analysis above, which aged variety is this?",
                answers: ["Aged Sangiovese", "Aged Pinot Noir", "Provence Rosé", "Aged Chardonnay"],
                correct: 1,
                explanation: "The very pale brick with orange rim and forest floor notes indicate aged Pinot Noir."
            },
            {
                wine: "nebbiolo",
                age: "aged",
                question: "Based on the wine analysis above, which aged variety is this?",
                answers: ["Aged Pinot Noir", "Aged Sangiovese", "Aged Nebbiolo", "Aged Chardonnay"],
                correct: 2,
                explanation: "The orange-brick color with white truffle and tar notes are classic aged Nebbiolo."
            },
            {
                wine: "syrah",
                age: "aged",
                question: "Based on the wine analysis above, which aged variety is this?",
                answers: ["Aged Cabernet Sauvignon", "Aged Syrah", "Aged Riesling", "Aged Chardonnay"],
                correct: 1,
                explanation: "The deep garnet color with gamey, leather notes indicate aged Syrah/Shiraz."
            }
        ]
    }
};

// Educational content for each level
const EDUCATIONAL_CONTENT = {
    wine_colors: "Wine color comes from grape skins. Red wines get their color from prolonged contact with red grape skins, while white wines have minimal skin contact.",
    grape_varieties: "Each grape variety has distinct color characteristics due to differences in skin thickness, anthocyanin content, and typical winemaking practices.",
    aging_effects: "As wine ages, red wines lose their purple hues and develop brick-red colors, while white wines gain golden tones through oxidation.",
    regional_styles: "Climate, soil, and winemaking traditions in different regions create distinctive color profiles even from the same grape variety."
};