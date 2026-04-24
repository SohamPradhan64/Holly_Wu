import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  hero: {
    minHeight: "40vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "140px 8vw 60px",
    background: "linear-gradient(135deg, rgba(18,14,12,1) 0%, rgba(40,25,18,1) 50%, rgba(18,14,12,1) 100%)",
    borderBottom: "1px solid rgba(216,180,127,0.2)",
  },
  heroContent: {
    maxWidth: "600px",
  },
  eyebrow: {
    fontSize: "13px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#d8b47f",
    marginBottom: "16px",
  },
  heroTitle: {
    fontSize: "48px",
    lineHeight: 1.1,
    margin: "0 0 16px",
    color: "#f6ead0",
  },
  heroSub: {
    fontSize: "17px",
    color: "rgba(246,234,208,0.6)",
    lineHeight: 1.7,
  },
  section: {
    padding: "60px 8vw 80px",
  },
  categoryTitle: {
    fontSize: "24px",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#d8b47f",
    marginBottom: "8px",
    paddingBottom: "12px",
    borderBottom: "1px solid rgba(216,180,127,0.3)",
  },
  categoryDesc: {
    color: "rgba(246,234,208,0.5)",
    fontSize: "14px",
    marginBottom: "28px",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    padding: "14px 0",
    borderBottom: "1px solid rgba(216,180,127,0.1)",
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: "17px",
    color: "#f6ead0",
    fontWeight: 500,
  },
  itemDesc: {
    fontSize: "14px",
    color: "#c9b190",
    marginTop: "4px",
    lineHeight: 1.5,
  },
  itemPrice: {
    fontSize: "16px",
    color: "#d8b47f",
    marginLeft: "24px",
    whiteSpace: "nowrap",
  },
  categoryBlock: {
    marginBottom: "60px",
  },
  note: {
    textAlign: "center",
    padding: "40px 8vw",
    color: "#c9b190",
    fontSize: "14px",
    borderTop: "1px solid rgba(216,180,127,0.2)",
    letterSpacing: "0.05em",
  },
});

const menuData = [
  {
    category: "Dim Sum Classics",
    description: "Steamed, fried, and folded by hand daily.",
    items: [
      { name: "Dragon Soup Dumplings", desc: "Silky wrappers filled with rich broth, black vinegar, and ginger.", price: "$14" },
      { name: "Har Gow", desc: "Crystal shrimp dumplings with bamboo shoots.", price: "$12" },
      { name: "Siu Mai", desc: "Pork and shrimp open-top dumplings with tobiko.", price: "$11" },
      { name: "Char Siu Bao", desc: "Fluffy steamed buns with honey-glazed barbecue pork.", price: "$10" },
      { name: "Crisp Tofu Lanterns", desc: "Hand-cut tofu with five-spice salt and fermented chili sauce.", price: "$9" },
    ],
  },
  {
    category: "Wok & Fire",
    description: "High-heat, bold flavors from our wok stations.",
    items: [
      { name: "Lotus Blossom Prawns", desc: "Wok-fried prawns with sweet chili glaze, toasted sesame, and herbs.", price: "$22" },
      { name: "Golden Tea-Smoked Duck", desc: "Slow-smoked with jasmine tea, served with scallion pancakes.", price: "$28" },
      { name: "Black Pepper Beef", desc: "Tenderloin tossed with charred peppers and oyster sauce.", price: "$24" },
      { name: "Mapo Tofu", desc: "Silken tofu in a fiery Sichuan peppercorn sauce.", price: "$16" },
    ],
  },
  {
    category: "Noodles & Rice",
    description: "Comfort bowls and wok-tossed favorites.",
    items: [
      { name: "Dan Dan Noodles", desc: "Hand-pulled noodles with chili oil, pork, and crushed peanuts.", price: "$15" },
      { name: "Yang Chow Fried Rice", desc: "Egg, shrimp, char siu, and scallion.", price: "$14" },
      { name: "Shanghai Chow Mein", desc: "Crispy noodles with mixed vegetables and soy glaze.", price: "$13" },
    ],
  },
  {
    category: "Tea & Dessert",
    description: "Traditional pairings to close the evening.",
    items: [
      { name: "Jasmine Pearl Tea", desc: "Hand-rolled green tea with floral notes.", price: "$6" },
      { name: "Aged Pu-erh", desc: "Rich, earthy, and smooth. Brewed tableside.", price: "$8" },
      { name: "Mango Pomelo Sago", desc: "Chilled coconut cream with fresh mango and tapioca.", price: "$10" },
      { name: "Egg Custard Tarts", desc: "Flaky pastry with silky, lightly caramelized custard.", price: "$8" },
    ],
  },
];

export default function Menu() {
  const classes = useStyles();
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.heroContent}>
          <div className={classes.eyebrow}>Our Menu</div>
          <h1 className={classes.heroTitle}>Old-world plates and modern craft.</h1>
          <p className={classes.heroSub}>
            From bamboo steamers to wok-fired specialties, every dish is made with care and served with warmth.
          </p>
        </div>
      </section>

      <section className={classes.section}>
        {menuData.map((cat) => (
          <div className={classes.categoryBlock} key={cat.category}>
            <h2 className={classes.categoryTitle}>{cat.category}</h2>
            <p className={classes.categoryDesc}>{cat.description}</p>
            {cat.items.map((item) => (
              <div className={classes.item} key={item.name}>
                <div className={classes.itemInfo}>
                  <div className={classes.itemName}>{item.name}</div>
                  <div className={classes.itemDesc}>{item.desc}</div>
                </div>
                <div className={classes.itemPrice}>{item.price}</div>
              </div>
            ))}
          </div>
        ))}
      </section>

      <div className={classes.note}>
        Prices and availability subject to change. Please inform your server of any dietary restrictions or allergies.
      </div>
    </>
  );
}
