import pool from "../index.js";

async function populateProfileTable(dataArr) {
  for (let i = 0; i < dataArr.length; i++) {
    const res = await pool.query(
      `INSERT INTO profile (userID, email, slackUsername) VALUES ($1, $2, $3) RETURNING *;`,
      [dataArr[i].userID, dataArr[i].email, dataArr[i].slackUsername]
    );
    console.log(res.rows[0].email);
  }
}

async function populateNotesTable(dataArr) {
  for (let i = 0; i < dataArr.length; i++) {
    const res = await pool.query(
      `INSERT INTO notes (notesID, userID, week, day, tags, note) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
      [
        dataArr[i].notesID,
        dataArr[i].userID,
        dataArr[i].week,
        dataArr[i].day,
        dataArr[i].tags,
        dataArr.note,
      ]
    );
    console.log(res.rows[0].note);
  }
}

async function populateHelpTable(dataArr) {
  for (let i = 0; i < dataArr.length; i++) {
    const res = await pool.query(
      `INSERT INTO help (helpID, userID, topicID) VALUES ($1, $2, $3) RETURNING *;`,
      [dataArr[i].helpID, dataArr[i].userID, dataArr[i].topicID]
    );
    console.log(res.rows[0].helpID);
  }
}

async function populateResourceTable(dataArr) {
  for (let i = 0; i < dataArr.length; i++) {
    const res = await pool.query(
      `INSERT INTO resource (resourceID, userID, topicID, tags, link, rating) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
      [
        dataArr[i].resourceID,
        dataArr[i].userID,
        dataArr[i].topicID,
        dataArr[i].tags,
        dataArr[i].link,
        dataArr[i].rating,
      ]
    );
    console.log(res.rows[0].link);
  }
}

async function populateTopicTable(dataArr) {
  for (let i = 0; i < dataArr.length; i++) {
    const res = await pool.query(
      `INSERT INTO topic (topicID, week, day, topic, tags) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
      [
        dataArr[i].topicID,
        dataArr[i].week,
        dataArr[i].day,
        dataArr[i].topic,
        dataArr[i].tags,
      ]
    );
    console.log(res.rows[0].link);
  }
}
