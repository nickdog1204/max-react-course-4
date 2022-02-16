import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>美味的食物，即刻外送給您</h2>
            <p>馬上從我們豐富的菜單中選擇您想吃的，直接在家中享用美味午/晚餐</p>
            <p>我們餐點都是資深主廚使用高品質食材/原料當場現點現做的</p>
        </section>
    )

}

export default MealsSummary;