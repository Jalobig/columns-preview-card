import React from "react";
import classes from "./Card.module.scss";
import Preview from "../Preview/Preview";
import IconLuxury from "../../images/icon-luxury.svg";
import IconSedans from "../../images/icon-sedans.svg";
import IconSuvs from "../../images/icon-suvs.svg";

const DUMMY_PREVIEWS = [
  {
    icon: IconSedans,
    alt: "Icon of a Sedans",
    title: "Sedans",
    color: "hsl(31, 77%, 52%)",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    url: "#",
  },
  {
    icon: IconSuvs,
    alt: "Icon of a SUVs",
    title: "Suvs",
    color: "hsl(184, 100%, 22%)",
    description:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    url: "#",
  },
  {
    icon: IconLuxury,
    alt: "Icon of a Luxury",
    title: "Luxury",
    color: "hsl(179, 100%, 13%)",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    url: "#",
  },
];

const Card = () => {
  return (
    <div className={classes.card}>
      {DUMMY_PREVIEWS.map((preview) => {
        return <Preview
          icon={preview.icon}
          alt={preview.alt}
          title={preview.title}
          color={preview.color}
          description={preview.description}
          url={preview.url}
        />;
      })}
    </div>
  );
};

export default Card;
