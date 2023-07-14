db.createUser({
    user: 'root',
    pwd: 'test',
    roles: [
        {
            role: 'readWrite',
            db: 'test',
        },
    ],
});

db = new Mongo().getDB("test");

db.createCollection('users', { capped: false });
db.createCollection('creditCards', { capped: false });

db.creditCards.insert([
    {
        "full_name": "capital one venture x",
        "short_name": "venture x",
        "provider": "capital one",
        "line": "venture",
        "level": "x",
        "fee": 395,
        "benefits": [
            {
                "name": "Global Entry or TSA PreCheck® Credit",
                "description": "Receive up to a $100 credit for Global Entry or TSA PreCheck"
            },
            {
                "name": "Annual Travel Credit",
                "description": "Receive up to $300 back as statement credits for bookings through capital one Travel, where you’ll get our best prices on thousands of options"
            },
            {
                "name": "Anniversary Bonus",
                "description": "Get 10,000 bonus miles (equal to $100 towards travel) every year, starting on your first anniversary"
            }
        ]
    },
    {
        "full_name": "chase sapphire reserve",
        "short_name": "sapphire reserve",
        "provider": "chase",
        "line": "sapphire",
        "level": "reserve",
        "fee": 550,
        "benefits": [
            {
                "name": "Complimentary Airport Lounge Access",
                "description": "Rest and revive before your flight at one of the 1,300+ VIP lounges in over 500 cities worldwide after an easy, one-time enrollment in Priority Pass"                
            },
            {
                "name": "Global Entry or TSA PreCheck® or NEXUS Fee Credit",
                "description": "Receive one statement credit of up to $100 every four years as reimbursement for the application fee charged to your card"
            },
            {
                "name": "$300 Annual Travel Credit",
                "description": "Take advantage of the most flexible travel credit availableOpens overlay. by receiving up to $300 in statement credit reimbursements each anniversary year for more of your travel purchases than any other card"
            }
        ]
    }
]    
);