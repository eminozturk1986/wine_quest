// Wine Quest - Comprehensive Wine Database
// Educational wine recognition data with accurate color profiles

const WINES = {
    // RED WINES
    cabernet_sauvignon: {
        name: "Cabernet Sauvignon",
        type: "red",
        young: {
            color: {
                main: "#722F37",
                rim: "#8B4513", 
                opacity: 0.95,
                gradient: ["#5D1A1D", "#722F37", "#8B4513"]
            },
            description: "Deep purple with inky center and violet edges",
            characteristics: ["Full-bodied", "High tannins", "Blackcurrant", "Oak", "Cedar"],
            age: "2-4 years",
            educationalTip: "Young Cabernet Sauvignon shows intense purple color due to high anthocyanin levels from thick grape skins."
        },
        aged: {
            color: {
                main: "#A0522D",
                rim: "#DEB887",
                opacity: 0.75,
                gradient: ["#8B4513", "#A0522D", "#DEB887"]
            },
            description: "Brick red with orange rim and garnet core",
            characteristics: ["Softened tannins", "Leather", "Tobacco", "Cedar", "Earth"],
            age: "10+ years",
            educationalTip: "Aged Cabernet develops brick-red hues as anthocyanins bind with tannins over time."
        }
    },

    pinot_noir: {
        name: "Pinot Noir",
        type: "red",
        young: {
            color: {
                main: "#8B3A3A",
                rim: "#CD853F",
                opacity: 0.75,
                gradient: ["#722F37", "#8B3A3A", "#CD853F"]
            },
            description: "Light ruby red with translucent appearance",
            characteristics: ["Light-bodied", "Low tannins", "Cherry", "Raspberry", "Floral"],
            age: "1-3 years",
            educationalTip: "Pinot Noir's thin skins produce lighter color intensity compared to Cabernet Sauvignon."
        },
        aged: {
            color: {
                main: "#CD853F",
                rim: "#DEB887",
                opacity: 0.65,
                gradient: ["#A0522D", "#CD853F", "#DEB887"]
            },
            description: "Pale brick red with orange rim, very translucent",
            characteristics: ["Silky texture", "Mushroom", "Forest floor", "Dried cherry"],
            age: "8+ years",
            educationalTip: "Aged Pinot Noir becomes very pale, almost orange, while maintaining its elegant character."
        }
    },

    merlot: {
        name: "Merlot",
        type: "red",
        young: {
            color: {
                main: "#800020",
                rim: "#A0522D",
                opacity: 0.90,
                gradient: ["#5D1A1D", "#800020", "#A0522D"]
            },
            description: "Deep ruby red with purple hints",
            characteristics: ["Medium-bodied", "Smooth tannins", "Plum", "Black cherry", "Chocolate"],
            age: "2-5 years",
            educationalTip: "Merlot shows deeper color than Pinot Noir but less intensity than Cabernet Sauvignon."
        },
        aged: {
            color: {
                main: "#A0522D",
                rim: "#D2B48C",
                opacity: 0.80,
                gradient: ["#8B4513", "#A0522D", "#D2B48C"]
            },
            description: "Brick red with amber rim",
            characteristics: ["Velvety texture", "Dried fruit", "Tobacco", "Leather"],
            age: "10+ years",
            educationalTip: "Aged Merlot develops beautiful brick-red color with amber highlights."
        }
    },

    syrah: {
        name: "Syrah/Shiraz",
        type: "red",
        young: {
            color: {
                main: "#4A0E0E",
                rim: "#722F37",
                opacity: 0.98,
                gradient: ["#2F0A0A", "#4A0E0E", "#722F37"]
            },
            description: "Almost black with deep purple core",
            characteristics: ["Full-bodied", "High tannins", "Blackberry", "Pepper", "Smoke"],
            age: "1-4 years",
            educationalTip: "Young Syrah is among the darkest red wines, often appearing almost black in the glass."
        },
        aged: {
            color: {
                main: "#8B4513",
                rim: "#DEB887",
                opacity: 0.85,
                gradient: ["#722F37", "#8B4513", "#DEB887"]
            },
            description: "Deep brick red with orange rim",
            characteristics: ["Gamey", "Leather", "Dried herbs", "Smoked meat"],
            age: "8+ years",
            educationalTip: "Aged Syrah maintains depth while developing complex orange rim coloration."
        }
    },

    // WHITE WINES
    chardonnay: {
        name: "Chardonnay",
        type: "white",
        young: {
            color: {
                main: "#F5F5DC",
                rim: "#FFFACD",
                opacity: 0.95,
                gradient: ["#F0E68C", "#F5F5DC", "#FFFACD"]
            },
            description: "Pale yellow with green hints",
            characteristics: ["Medium-bodied", "Crisp acidity", "Green apple", "Citrus", "Mineral"],
            age: "1-2 years",
            educationalTip: "Unoaked Chardonnay shows pale, almost colorless appearance with green tints."
        },
        aged: {
            color: {
                main: "#FFD700",
                rim: "#FFF8DC",
                opacity: 0.90,
                gradient: ["#DAA520", "#FFD700", "#FFF8DC"]
            },
            description: "Golden yellow with amber hints",
            characteristics: ["Rich texture", "Butter", "Vanilla", "Toasted oak", "Honey"],
            age: "3+ years",
            educationalTip: "Aged, oaked Chardonnay develops golden color from oak aging and oxidation."
        }
    },

    sauvignon_blanc: {
        name: "Sauvignon Blanc",
        type: "white",
        young: {
            color: {
                main: "#F5FFFA",
                rim: "#F0FFF0",
                opacity: 0.90,
                gradient: ["#E0FFE0", "#F5FFFA", "#F0FFF0"]
            },
            description: "Very pale with green tints",
            characteristics: ["Light-bodied", "High acidity", "Gooseberry", "Grass", "Grapefruit"],
            age: "1 year",
            educationalTip: "Sauvignon Blanc is among the palest wines, often with distinctive green tints."
        },
        aged: {
            color: {
                main: "#FFFACD",
                rim: "#FFEFD5",
                opacity: 0.85,
                gradient: ["#F0E68C", "#FFFACD", "#FFEFD5"]
            },
            description: "Light gold with straw color",
            characteristics: ["More complex", "Honey", "Lanolin", "Developed fruit"],
            age: "2+ years",
            educationalTip: "Aged Sauvignon Blanc loses its green tints and develops golden hues."
        }
    },

    // ROSÉ WINES
    provence_rose: {
        name: "Provence Rosé",
        type: "rose",
        young: {
            color: {
                main: "#FFB6C1",
                rim: "#FFC0CB",
                opacity: 0.70,
                gradient: ["#FF91A4", "#FFB6C1", "#FFC0CB"]
            },
            description: "Pale pink with salmon hints",
            characteristics: ["Light-bodied", "Crisp", "Strawberry", "Watermelon", "Herbs"],
            age: "Current vintage",
            educationalTip: "Provence rosé gets its pale color from brief skin contact with red grapes."
        }
    }
};

// Game Levels Configuration
const LEVELS = {
    1: {
        name: "Wine Colors",
        description: "Learn basic wine color identification",
        questions: [
            {
                wine: "cabernet_sauvignon",
                age: "young",
                question: "What type of wine is this?",
                answers: ["Red Wine", "White Wine", "Rosé Wine", "Sparkling Wine"],
                correct: 0,
                explanation: "The deep purple color is characteristic of red wines, particularly young Cabernet Sauvignon."
            },
            {
                wine: "chardonnay",
                age: "young",
                question: "What type of wine is this?",
                answers: ["Red Wine", "White Wine", "Rosé Wine", "Fortified Wine"],
                correct: 1,
                explanation: "The pale yellow color with green hints is typical of white wines like Chardonnay."
            },
            {
                wine: "provence_rose",
                age: "young", 
                question: "What type of wine is this?",
                answers: ["Light Red", "White Wine", "Rosé Wine", "Champagne"],
                correct: 2,
                explanation: "The pale pink color is characteristic of rosé wines, made with brief red grape skin contact."
            }
        ]
    },
    
    2: {
        name: "Grape Varieties", 
        description: "Distinguish between different grape varieties",
        questions: [
            {
                wine: "pinot_noir",
                age: "young",
                question: "Which red grape variety is this?",
                answers: ["Cabernet Sauvignon", "Pinot Noir", "Merlot", "Syrah"],
                correct: 1,
                explanation: "The lighter, translucent ruby color is characteristic of Pinot Noir's thin skins."
            },
            {
                wine: "syrah",
                age: "young",
                question: "Which grape variety shows this intense dark color?",
                answers: ["Pinot Noir", "Merlot", "Syrah", "Sangiovese"],
                correct: 2,
                explanation: "Syrah/Shiraz produces some of the darkest red wines, often appearing almost black."
            }
        ]
    },

    3: {
        name: "Wine Aging",
        description: "Understand how aging affects wine color",
        questions: [
            {
                wine: "cabernet_sauvignon",
                age: "aged",
                question: "How old is this Cabernet Sauvignon approximately?",
                answers: ["1-3 years", "4-6 years", "7-10 years", "10+ years"],
                correct: 3,
                explanation: "The brick-red color with orange rim indicates significant aging, typically 10+ years."
            },
            {
                wine: "chardonnay",
                age: "aged", 
                question: "What does this golden color indicate?",
                answers: ["Young wine", "Oaked and aged", "Faulty wine", "Sweet wine"],
                correct: 1,
                explanation: "Golden color in Chardonnay indicates oak aging and bottle maturation."
            }
        ]
    },

    4: {
        name: "Regional Styles",
        description: "Identify terroir effects on wine appearance", 
        questions: [
            {
                wine: "pinot_noir",
                age: "young",
                question: "This pale red color suggests which wine region style?",
                answers: ["Bordeaux", "Burgundy", "Barossa Valley", "Napa Valley"],
                correct: 1,
                explanation: "The elegant, pale ruby color is characteristic of Burgundy Pinot Noir style."
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