import React from "react";
import style from "./CarbsProtLip.module.css";
function CarbsProtLip() {
  return (
    <section className={style.wrapper}>
      <h1 className={style.header}>I - Carbohydrates</h1>
      <div className={style.lists}>
        <div className={style.list}>
          <h2 className={style.subHeader}>
            1 - Fruit Group :{" "}
            <span className={style.grey}>
              {"("}3 to 4 per day{")"}
            </span>
          </h2>
          <ul className={style.itemList}>
            <li className={style.item}>Banana</li>
            <li className={style.item}>Berries</li>
            <li className={style.item}>Mango</li>
            <li className={style.item}>Orange</li>
            <li className={style.item}>Apple</li>
          </ul>
        </div>
        <div className={style.list}>
          <h2 className={style.subHeader}>
            2 - Legume Group :{" "}
            <span className={style.grey}>
              {"("}4 to 5 per day{")"}
            </span>
          </h2>
          <ul className={style.itemList}>
            <li className={style.item}>Onion 8.8g carbs/100g</li>
            <li className={style.item}>Beet 8g carbs/100g</li>
            <li className={style.item}>Artichoke 6.3g carbs/100g</li>
            <li className={style.item}>Eggplant 6.2g carbs/100g</li>
            <li className={style.item}>Bell pepper 5.5g carbs/100g</li>
            <li className={style.item}>Carrot 5.2g carbs/100g</li>
            <li className={style.item}>Broccoli 3.9g carbs/100g</li>
            <li className={style.item}>Cucumber 3.1g carbs/100g</li>
          </ul>
        </div>
        <div className={style.list}>
          <h2 className={style.subHeader}>
            3 - Grains Group :{" "}
          </h2>
          <ul className={style.itemList}>
            <li className={style.item}>Bread</li>
            <li className={style.item}>Pasta</li>
            <li className={style.item}>Noodles</li>
            <li className={style.item}>Cereals</li>
            <li className={style.item}>Rice</li>
          </ul>
        </div>
        <div className={style.list}>
          <h2 className={style.subHeader}>
            4 - Diary Milk :{" "}
            <span className={style.grey}>
              {"("}1 - 2 cups / day{")"}
            </span>
          </h2>
          <ul className={style.itemList}>
            <li className={style.item}>Skimmed milk is preferrable</li>
            <li className={style.item}>1 cup of milk = <br/>1 cup of yogurt = <br/>3 tableSpoons powdered milk = <br/>3/4 cup of yogurt with fruits</li>
          </ul>
        </div>
      </div>
      <h1 className={style.header}>II - Proteins</h1>
      <div className={style.lists}>
        <div className={style.list}>
          <h2 className={style.subHeader}>
            1 - Meat Group :
          </h2>
          <ul className={style.itemList}>
            <li className={style.item}>Chicken <span className={style.grey}> 32g</span></li>
            <li className={style.item}>Tuna <span className={style.grey}> 22g</span></li>
            <li className={style.item}>Egg <span className={style.grey}> 6g</span></li>
              <li className={style.item}>Mozarella <span className={style.grey}> 22g</span></li>
              <li className={style.item}>Cheddar <span className={style.grey}> 24g</span></li>
              <li className={style.item}>Halloumi <span className={style.grey}> 21g</span></li>
              <li className={style.item}>Feta <span className={style.grey}> 14g</span></li>
              <li className={style.item}>Kashkaval <span className={style.grey}> 25g</span></li>
          </ul>
        </div>
        <div className={style.list}>
        <h2 className={style.subHeader}>
           2 - Diary Product
          </h2>
          <ul className={style.itemList}>
            <li className={style.item}>Milk Powder <span className={style.grey}> 24g</span></li>
            <li className={style.item}>Yogurt <span className={style.grey}> 3.5g</span></li>
            <li className={style.item}>Greek Yogurt <span className={style.grey}> 10g</span></li>
            <li className={style.item}>Milk <span className={style.grey}> 3.1g</span></li>
          </ul>
          </div>
          <div className={style.list}>
        <h2 className={style.subHeader}>
           3 - Grains
          </h2>
          <ul className={style.itemList}>
            <li className={style.item}>Oat <span className={style.grey}> 13g</span></li>
            <li className={style.item}>Hummus <span className={style.grey}> 7g</span></li>
            <li className={style.item}>Cereals <span className={style.grey}> 4.7g</span></li>
          </ul>
          </div>
      </div>
      <h1 className={style.header}>III - Lipids</h1>
        <div className={style.lists}>
          <div className={style.list}>
          <h2 className={style.subHeader}>
            1 - By 100g :
          </h2>
              <ul className={style.itemList}>
                <li className={style.item}>Coconut <span className={style.grey}>33g/100g</span></li>
                <li className={style.item}>Nuts <span className={style.grey}>54g/100g</span></li>
                <li className={style.item}>Butter <span className={style.grey}>81g/100g</span></li>
                <li className={style.item}>Salmon <span className={style.grey}>13g/100g</span></li>
                <li className={style.item}>Fish <span className={style.grey}>12g/100g</span></li>
                <li className={style.item}>French Fries <span className={style.grey}>15g/100g</span></li>
                <li className={style.item}>Dark Chocolate <span className={style.grey}>43g/100g</span></li>
              </ul>
          </div>
          <div className={style.list}>
            <h2 className={style.subHeader}>
             2 - By Table Spoon :
            </h2>
          <ul className={style.itemList}>
              <li className={style.item}>Corn Oil <span className={style.grey}>13.5g/TableSpoon</span></li>
                <li className={style.item}>Soya Oil <span className={style.grey}>14g/TableSpoon</span></li>
                <li className={style.item}>Mayonaise <span className={style.grey}>10g/TableSpoon</span></li>
                <li className={style.item}>Sesame <span className={style.grey}>4.5g/TableSpoon</span></li>
                <li className={style.item}>Cacao <span className={style.grey}>0.7g/TableSpoon</span></li>
              </ul>
          </div>
        </div>
    </section>
  );
}

export default CarbsProtLip;
