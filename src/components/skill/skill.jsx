import styles from "./skill.module.scss";

import Card from "./card";

export default function Skill() {
  return (
    <div className={styles.skill} id="skill">
      <div className={styles.container}>
        <Card
          icon={"/skill/finance-plan.png"}
          header={"Strategic Financial Planning"}
          text={
            "Expertise in developing tailored financial strategies for business growth and wealth optimization."
          }
        />
        <Card
          icon={"/skill/asset-manage.png"}
          header={"Wealth & Asset Management"}
          text={
            "Extensive experience in managing high-net-worth portfolios with a focus on sustainable investment growth."
          }
        />
        <Card
          icon={"/skill/risk-manage.png"}
          header={"Risk Management & Compliance"}
          text={
            "Proven ability to navigate financial regulations, ensure compliance, and mitigate risks."
          }
        />
        <Card
          icon={"/skill/insurance-advisory.png"}
          header={"Insurance Advisory"}
          text={
            "Licensed insurance broker with expertise in customized insurance solutions for asset protection and financial security."
          }
        />
        <Card
          icon={"/skill/finance-edu.png"}
          header={"Finance Education & Mentorship"}
          text={
            "Dedicated to educating finance professionals through specialized courses and workshops."
          }
        />
      </div>
    </div>
  );
}
