import { tierFeatures } from './carousel';

const tiers: tierFeatures[] = [
    {
      title: "Parthean Pro",
      price_monthly: 9.99,
      price_yearly_month: 5.83,
      price_yearly: 69.99,
      perks: [
        {
            name: "Unlimited Accounts",
            description: "Connect all of your accounts (limit on free tier is 3)",
            photo_src: require("../../tier_icons/money.png")
        },
        {
            name: "Proactive tips",
            description: "Get proactive financial insights from Parthean AI",
            photo_src: require("../../tier_icons/bulb.png")
        },
        {
            name: "New AI Tools",
            description: "You'll get early access to our most powerful AI tools",
            photo_src: require("../../tier_icons/shuttle.png")
        },
      ]
    },
    {
        title: "Parthean Pro + Coaching",
        price_monthly: 79.99,
        price_yearly_month: 66.67,
        price_yearly: 879.99,
        perks: [
          {
              name: "Human Coaching",
              description: "Unlimited calls and chats with your very personal finance coach",
              photo_src: require("../../tier_icons/user.png")
          },
          {
              name: "All Pro Features",
              description: "Unlimited accounts, proactive financial tips from Parthean AI, and our new, most powerful AI tools",
              photo_src: require("../../tier_icons/shuttle.png")
          },
        ]
      },
];

export default tiers