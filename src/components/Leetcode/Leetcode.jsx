import { defaults } from "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";
import styles from "./Leetcode.module.css";
import leetcodeData from "../../data/leetcode.json";
import leetcodeSubmissionCalendarData from "../../data/leetcodeSubmissionCalendar.json";
import { useEffect, useState } from "react";
import { URL_PROBLEM_SOLVED, URL_SUBMISSION_CALENDAR } from "../../links/links";
import { motion } from "framer-motion";
import { fadeIn } from "../../framer_variants/variants";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.color = "#efefef";
defaults.plugins.legend.position = "bottom";

defaults.plugins.title.display = true;
defaults.plugins.title.align = "center";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "White";

const covertTimeStampToDate = (dataArray) => {
  const formattedData = dataArray.map(({ timestamp, counts }) => {
    const date = new Date(timestamp * 1000);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is zero-based
    const year = date.getFullYear();
    const formattedDate = `${day < 10 ? "0" : ""}${day}/${
      month < 10 ? "0" : ""
    }${month}/${year}`;
    return { date: formattedDate, counts };
  });
  return formattedData;
};

const options = {
  plugins: {
    title: {
      display: true,
      text: "Problems Solved",
      font: {
        size: 20,
      },
    },
  },
};

const processCalendarData = (submissionCalendar) => {
  const cal1 = submissionCalendar;
  const cal = JSON.parse(cal1);

  const newData = [];
  Object.entries(cal).forEach(([timestamp, clicks]) => {
    newData.push({ timestamp, counts: clicks });
  });
  const cData = covertTimeStampToDate(newData);

  newData.sort((a, b) => a.timestamp - b.timestamp);

  const afterData = cData.filter((data) => data.counts > 0);

  return afterData;
};

const Leetcode = () => {
  const [apiSubmissionCalendarData, setApiSubmissionCalendarData] = useState(
    []
  );
  const [problemSolvedData, setProblemSolvedData] = useState([0]);

   useEffect(() => {
    // populateDefaultLeetcodeSubmissionData();
    // populateDefaultProblemSolvedLeetcodeData();

    populateLeetcodeApiData();
   }, []);

  // //Populate Default LEETCODE Data
  // // const populateDefaultLeetcodeSubmissionData = () => {
  // //   const defaultData = processCalendarData(
  // //     leetcodeSubmissionCalendarData.submissionCalendar
  // //   );
  // //   setApiSubmissionCalendarData(defaultData);
  // // };
  // const populateDefaultProblemSolvedLeetcodeData = () => {
  //   const defaultData = processDifficultyData(leetcodeData);
  //   setProblemSolvedData(defaultData);
  // };
  //Populate Leetcode API data
  const populateLeetcodeApiData = () => {
    fetchSubmissionCalenderData();
    fetchProblemSolvedData();
  };

  const fetchSubmissionCalenderData = async () => {
    try {
      const url = URL_SUBMISSION_CALENDAR;

      const res = await fetch(url);
      const resData = await res.json();
      const processedData = processCalendarData(resData.submissionCalendar);
      setApiSubmissionCalendarData(processedData);
    } catch (error) {
      console.log(
        "Failed while fetching the leetcode calendar data!!",
        error.message
      );
    }
  };

  const fetchProblemSolvedData = async () => {
    try {
      const url = URL_PROBLEM_SOLVED;

      const res = await fetch(url);
      const resData = await res.json();
      const processedData = processDifficultyData(resData);
      setProblemSolvedData(processedData);
    } catch (error) {
      console.log(
        "Failed while fetching the leetcode problem Solved data!!",
        error.message
      );
    }
  };

  const processDifficultyData = (data) => {
    const processedData = data.matchedUser.submitStats.acSubmissionNum
      .filter((data) => data.difficulty !== "All")
      .map((data) => data.count);
    return processedData;
  };

  const data = {
    labels: leetcodeData.matchedUser.submitStats.acSubmissionNum
      .filter((data) => data.difficulty !== "All")
      .map((data) => data.difficulty),
    datasets: [
      {
        label: "Count",
        data: problemSolvedData,
        backgroundColor: [
          "rgba(3, 75, 18, 0.8)",
          "rgba(250, 192, 19, 0.8)",
          "rgba(95, 4, 19, 0.8)",
        ],
        borderColor: [
          "rgba(3, 75, 18, 0.8)",
          "rgba(250, 192, 19, 0.8)",
          "rgba(95, 4, 19, 0.8)",
        ],
      },
    ],
  };

  const donughtLabel = {
    id: "doughnutLabel",
    afterDatasetsDraw(chart) {
      const { ctx, data } = chart;
      const centerX = chart.getDatasetMeta(0).data[0].x;
      const centerY = chart.getDatasetMeta(0).data[0].y;

      ctx.save();
      ctx.font = "bold 20px 'roboto'";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      // ctx.fillText(`${leetcodeData.matchedUser.submitStats.acSubmissionNum[0].count}`, centerX, centerY);
      // console.log("legend Item", chart.legend.legendItems);
      // console.log("dataSet", data.datasets[0].data);
      let counter = 0;
      const labelArr = chart.legend.legendItems;
      const totalCount = data.datasets[0].data.reduce((sum, count) => {
        if (
          labelArr &&
          labelArr[counter] &&
          labelArr[counter].hidden === false
        ) {
          sum = sum + count;
        }
        counter++;
        return sum;
      }, 0);
      ctx.fillText(totalCount, centerX, centerY);
    },
  };

  return (
    <motion.section
      className={styles.container}
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}>
      <h2 className={styles.title}>Leetcode</h2>
      <div className={styles.content}>
        <div className={`${styles.dataCard} ${styles.doughnutCard}`}>
          <Doughnut data={data} options={options} plugins={[donughtLabel]} />
        </div>
        <div className={`${styles.dataCard} ${styles.statsCard}`}>
          <Line
            data={{
              labels: apiSubmissionCalendarData.map((data) => data.date),
              datasets: [
                {
                  label: "Submission Counts",
                  data: apiSubmissionCalendarData.map((data) => data.counts),
                  backgroundColor: "#06fdd0",
                  borderColor: "#01fad0",
                  tension: 0.1,
                  fill: false,
                  // clip: {left: -5, top: false, right: -2, bottom: 0},
                  spanGaps: true,
                },
              ],
            }}
            options={{
              elements: {
                line: {
                  tension: 0.5,
                },
              },
              plugins: {
                title: {
                  text: "Problem Submissions",
                },
              },
            }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Leetcode;
