import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Our delicious meal plans are designed by registered dietitians and food
        experts to help you lose weight, eat more fiber, go vegan and more.
      </p>
      <p>Browse dozens of meal plans to find one that's right for you.</p>
    </section>
  );
};

export default MealsSummary;
